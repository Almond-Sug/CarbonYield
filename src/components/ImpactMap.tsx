import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'no-token-needed-for-public-style'; // placeholder

export default function ImpactMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (!mapContainer.current) return; // ✅ prevent running if ref is null

  const map = new mapboxgl.Map({
    container: mapContainer.current, // now guaranteed to be non-null
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-60, -3],
    zoom: 3,
    attributionControl: false,
  });

    // Optional: Add fake geojson overlays for demo
    map.on('load', () => {
      map.addSource('forest', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [-65, -5],
                  [-62, -5],
                  [-62, -2],
                  [-65, -2],
                  [-65, -5],
                ]]
              }
            }
          ]
        }
      });

      map.addLayer({
        id: 'forest-fill',
        type: 'fill',
        source: 'forest',
        layout: {},
        paint: {
          'fill-color': '#34D399',
          'fill-opacity': 0.5
        }
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
