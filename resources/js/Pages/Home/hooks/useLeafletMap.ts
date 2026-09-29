import { useEffect, useRef, useState } from 'react';
import {
    ISLAND_GROUPS,
    IslandGroup,
    LeafletMap,
    REGION_POINTS,
    RegionPoint,
} from '../constants/mapPoints';

export function useLeafletMap() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<LeafletMap | null>(null);
    const [selectedPoint, setSelectedPoint] = useState<RegionPoint | null>(
        null,
    );
    const [selectedIsland, setSelectedIsland] = useState('Semua');
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        // 1. Ensure Leaflet CSS is loaded
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        // 2. Initialize map once Leaflet JS is available
        const initMap = () => {
            const leaflet = window.L;
            if (!mapContainerRef.current || !leaflet || mapInstanceRef.current)
                return;

            try {
                const map = leaflet.map(mapContainerRef.current, {
                    center: [-1.8, 118.5],
                    zoom: 5,
                    minZoom: 4,
                    maxZoom: 12,
                    scrollWheelZoom: false,
                    zoomControl: false,
                    attributionControl: false,
                });

                // Zoom control top-left
                leaflet.control.zoom({ position: 'topleft' }).addTo(map);

                // OpenStreetMap Tile Layer
                leaflet
                    .tileLayer(
                        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                        {
                            maxZoom: 18,
                            attribution: '',
                        },
                    )
                    .addTo(map);

                // Add interactive pins across Indonesia
                REGION_POINTS.forEach((pt) => {
                    const icon = leaflet.divIcon({
                        className: 'custom-kipan-marker',
                        html: `
                            <div class="relative group cursor-pointer">
                                <div class="w-5 h-5 rounded-full bg-[#0D3F70] border-2 border-white shadow-md flex items-center justify-center hover:scale-125 transition-transform duration-200">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#FACB04]"></span>
                                </div>
                            </div>
                        `,
                        iconSize: [20, 20],
                        iconAnchor: [10, 10],
                    });

                    const marker = leaflet
                        .marker(pt.coords as [number, number], { icon })
                        .addTo(map);

                    marker.on('click', () => {
                        setSelectedPoint(pt);
                        map.flyTo(
                            pt.coords as [number, number],
                            Math.max(map.getZoom(), 7),
                            {
                                duration: 1.2,
                            },
                        );
                    });
                });

                mapInstanceRef.current = map;
                setIsMapLoaded(true);

                // Invalidate size to ensure clean rendering
                setTimeout(() => {
                    map.invalidateSize();
                }, 300);
            } catch (err) {
                console.error('Error initializing Leaflet map:', err);
            }
        };

        if (!window.L) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.async = true;
            script.onload = () => {
                initMap();
            };
            document.body.appendChild(script);
        } else {
            initMap();
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    const handleSelectIsland = (island: IslandGroup) => {
        setSelectedIsland(island.label);
        setSelectedPoint(null);
        if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo(
                island.center as [number, number],
                island.zoom,
                {
                    duration: 1.2,
                },
            );
        }
    };

    const handleResetMap = () => {
        handleSelectIsland(ISLAND_GROUPS[0]);
    };

    return {
        mapContainerRef,
        isMapLoaded,
        selectedPoint,
        setSelectedPoint,
        selectedIsland,
        handleSelectIsland,
        handleResetMap,
    };
}
