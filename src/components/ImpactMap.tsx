// ImpactMap.tsx with region transitions, fade effect, and initial loading spinner

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { FeatureCollection, Polygon } from 'geojson';
import './ImpactMap.css';

const allProjects: FeatureCollection<Polygon> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Amazon Basin Reforestation',
        region: 'Amazon Basin',
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
    {
      type: 'Feature',
      properties: {
        name: 'Cambodia Solar Microgrids',
        region: 'Southeast Asia',
        type: 'Renewable Energy Project',
        description: 'Deploys solar microgrids in off-grid Cambodian villages.',
        impact: 'Est. 25,000 tons CO₂ avoided per year',
        status: 'Pending Certification',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [104, 11],
          [106, 11],
          [106, 13],
          [104, 13],
          [104, 11],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Iceland Carbon Injection Pilot',
        region: 'Europe',
        type: 'Carbon Capture Project',
        description: 'Injects captured CO₂ into basalt rock formations underground.',
        impact: 'Est. 10,000 tons CO₂ stored per year',
        status: 'Pilot Phase',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-21, 63],
          [-19, 63],
          [-19, 65],
          [-21, 65],
          [-21, 63],
        ]],
      },
    },
  ],
};

export default function ImpactMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [region, setRegion] = useState('All Regions');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [isSourceReady, setIsSourceReady] = useState(false);
  const initialLoad = useRef(true);

  const regionSettings: Record<string, { center: [number, number]; zoom: number }> = {
    'All Regions': { center: [0, 15], zoom: 1.2 },
    'Amazon Basin': { center: [-63.5, -3.5], zoom: 4 },
    'Southeast Asia': { center: [105, 13], zoom: 5 },
    'Europe': { center: [-20, 64], zoom: 4 },
  };

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: regionSettings['All Regions'].center,
      zoom: regionSettings['All Regions'].zoom,
      attributionControl: false,
    });

    mapRef.current = map;

    map.on('load', () => {
      map.addSource('projects', {
        type: 'geojson',
        data: filterFeatures(region),
      });

      map.addLayer({
        id: 'projects-fill',
        type: 'fill',
        source: 'projects',
        paint: {
          'fill-color': '#34D399',
          'fill-opacity': 0.5,
        },
      });

      map.addLayer({
        id: 'projects-outline',
        type: 'line',
        source: 'projects',
        paint: {
          'line-color': '#059669',
          'line-width': 2,
        },
      });

      setIsSourceReady(true);
      setTimeout(() => setIsMapReady(true), 300);

      map.addSource('projects', {
        type: 'geojson',
        data: filterFeatures(region),
      });

      map.addLayer({
        id: 'projects-fill',
        type: 'fill',
        source: 'projects',
        paint: {
          'fill-color': '#34D399',
          'fill-opacity': 0.5,
        },
      });

      map.addLayer({
        id: 'projects-outline',
        type: 'line',
        source: 'projects',
        paint: {
          'line-color': '#059669',
          'line-width': 2,
        },
      });

      map.on('click', 'projects-fill', (e) => {
        const props = e.features?.[0]?.properties;
        if (!props) return;

        new maplibregl.Popup({ closeOnClick: true, anchor: 'left', focusAfterOpen: false })
          .setLngLat(e.lngLat)
          .setHTML(`
            <div class="popup-container">
              <div class="popup-title">${props.name}</div>
              <div class="popup-type">${props.type}</div>
              <div class="popup-status">${props.status}</div>
              <div class="popup-description">${props.description}</div>
              <div class="popup-impact">${props.impact}</div>
            </div>
          `)
          .addTo(map);
      });

      map.getCanvas().style.cursor = 'pointer';
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded() || !isSourceReady) return;

    const source = map.getSource('projects') as maplibregl.GeoJSONSource;
    if (source) {
      source.setData(filterFeatures(region));
    }

    if (!initialLoad.current) {
      const { center, zoom } = regionSettings[region];
      setIsTransitioning(true);
      map.flyTo({ center, zoom, essential: true });
      map.once('moveend', () => {
        setTimeout(() => setIsTransitioning(false), 300);
      });
    } else {
      initialLoad.current = false;
    }
  }, [region, isSourceReady]);

  function filterFeatures(region: string): FeatureCollection<Polygon> {
    if (region === 'All Regions') return allProjects;
    return {
      ...allProjects,
      features: allProjects.features.filter((f) => f.properties?.region === region),
    };
  }

  return (
    <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
      {!isMapReady && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className={`w-full h-full transition-opacity duration-300 ${isTransitioning || !isMapReady ? 'opacity-60 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute top-4 right-4 z-10 bg-white shadow px-4 py-2 rounded-md text-sm border border-gray-200">
          <label className="mr-2 font-medium text-gray-700">Region:</label>
          <select
            className="text-sm text-gray-800"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            disabled={isTransitioning || !isMapReady}
          >
            <option>All Regions</option>
            <option>Amazon Basin</option>
            <option>Southeast Asia</option>
            <option>Europe</option>
          </select>
        </div>

        <div className="absolute bottom-4 left-4 z-10 bg-white shadow px-4 py-2 rounded text-xs text-gray-600">
          <div><span className="inline-block w-3 h-3 bg-green-400 mr-2 rounded-full"></span>Reforestation</div>
          <div><span className="inline-block w-3 h-3 bg-blue-400 mr-2 rounded-full"></span>Renewable Energy</div>
          <div><span className="inline-block w-3 h-3 bg-gray-400 mr-2 rounded-full"></span>Carbon Capture</div>
        </div>

        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </div>
  );
}
