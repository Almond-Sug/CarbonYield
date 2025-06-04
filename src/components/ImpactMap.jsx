import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'no-token-needed-for-public-style'; // placeholder

export default function ImpactMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json', // Free public style
      center: [-60, -3], // Amazon region
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
