import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { FeatureCollection, Polygon } from 'geojson';
import './ImpactMap.css';

export default function ImpactMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [-63.5, -3.5],
      zoom: 4,
      attributionControl: false,
    });

    mapRef.current = map;

    const geojson: FeatureCollection<Polygon> = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'Amazon Basin Reforestation',
            type: 'Reforestation Project',
            description: 'Restores 15,000 acres of degraded rainforest using native species.',
            impact: 'Est. 120,000 tons CO₂ removed over 10 years',
            status: 'Verified by Gold Standard',
          },
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [-65, -5],
              [-62, -5],
              [-62, -2],
              [-65, -2],
              [-65, -5],
            ]],
          },
        },
      ],
    };

    map.on('load', () => {
      map.addSource('forest', {
        type: 'geojson',
        data: geojson,
      });

      map.addLayer({
        id: 'forest-fill',
        type: 'fill',
        source: 'forest',
        paint: {
          'fill-color': '#34D399',
          'fill-opacity': 0.5,
        },
      });

      map.addLayer({
        id: 'forest-outline',
        type: 'line',
        source: 'forest',
        paint: {
          'line-color': '#059669',
          'line-width': 2,
        },
      });

      const feature = geojson.features[0];
      const props = feature.properties!;
      const centerCoords: [number, number] = [-63.5, -3.5];

      // Automatically show popup on load (with delay to ensure tiles are visible)
      setTimeout(() => {
        new maplibregl.Popup({
          closeOnClick: true,
          anchor: 'left', // shows popup to the right
          focusAfterOpen: false,
        })
          .setLngLat(centerCoords)
          .setHTML(`
            <div style="
              background: white;
              padding: 16px;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              color: #111827;
              font-family: Inter, sans-serif;
              font-size: 13px;
              max-width: 260px;
            ">
              <div style="font-weight: 600; font-size: 15px; margin-bottom: 4px;">${props.name}</div>
              <div style="color: #059669; margin-bottom: 2px;">${props.type}</div>
              <div style="font-style: italic; font-size: 12px; color: #6b7280; margin-bottom: 8px;">${props.status}</div>
              <div style="margin-bottom: 8px;">${props.description}</div>
              <div style="font-weight: bold; color: #065f46;">${props.impact}</div>
            </div>
          `)
          .addTo(map);
      }, 300); // slight delay ensures rendering is complete

      // Allow re-showing the popup on click
      map.on('click', 'forest-fill', (e) => {
        new maplibregl.Popup({
          closeOnClick: true,
          anchor: 'left',
          focusAfterOpen: false,
        })
          .setLngLat(e.lngLat)
          .setHTML(`
            <div style="
              background: white;
              padding: 16px;
              border-radius: 12px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
              color: #111827;
              font-family: Inter, sans-serif;
              font-size: 13px;
              max-width: 260px;
              border: none;         /* 👈 removes border */
              outline: none;        /* 👈 removes focus outline */
              box-sizing: border-box;
            ">
              <div style="font-weight: 600; font-size: 15px; margin-bottom: 4px;">${props.name}</div>
              <div style="color: #059669; margin-bottom: 2px;">${props.type}</div>
              <div style="font-style: italic; font-size: 12px; color: #6b7280; margin-bottom: 8px;">${props.status}</div>
              <div style="margin-bottom: 8px;">${props.description}</div>
              <div style="font-weight: bold; color: #065f46;">${props.impact}</div>
            </div>
          `)
          .addTo(map);
      });

      map.getCanvas().style.cursor = 'pointer';
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
