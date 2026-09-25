import { useEffect, useRef, useState } from 'react';
import {
    SewingPinIcon,
    ReloadIcon,
    ArrowRightIcon,
    GlobeIcon,
} from '@radix-ui/react-icons';
import ScrollReveal from './ScrollReveal';

declare global {
    interface Window {
        L?: any;
    }
}

interface RegionPoint {
    id: string;
    name: string;
    island: string;
    coords: [number, number];
    cadres: string;
    satgas: string;
    status: string;
}

const REGION_POINTS: RegionPoint[] = [
    { id: 'aceh', name: 'Banda Aceh, Aceh', island: 'Sumatera', coords: [5.5483, 95.3238], cadres: '1.250 Kader', satgas: '23 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'medan', name: 'Medan, Sumatera Utara', island: 'Sumatera', coords: [3.5952, 98.6722], cadres: '3.400 Kader', satgas: '33 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'padang', name: 'Padang, Sumatera Barat', island: 'Sumatera', coords: [-0.9471, 100.4172], cadres: '1.800 Kader', satgas: '19 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'pekanbaru', name: 'Pekanbaru, Riau', island: 'Sumatera', coords: [0.5071, 101.4478], cadres: '1.600 Kader', satgas: '12 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'palembang', name: 'Palembang, Sumsel', island: 'Sumatera', coords: [-2.9761, 104.7754], cadres: '2.100 Kader', satgas: '17 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'lampung', name: 'Bandar Lampung, Lampung', island: 'Sumatera', coords: [-5.4297, 105.2625], cadres: '1.750 Kader', satgas: '15 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'jakarta', name: 'DKI Jakarta (Sekretariat Nasional)', island: 'Jawa & Bali', coords: [-6.2088, 106.8456], cadres: '4.800 Kader', satgas: '6 Wilayah', status: 'Pusat Komando' },
    { id: 'bandung', name: 'Bandung, Jawa Barat', island: 'Jawa & Bali', coords: [-6.9175, 107.6191], cadres: '6.200 Kader', satgas: '27 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'semarang', name: 'Semarang, Jawa Tengah', island: 'Jawa & Bali', coords: [-6.9667, 110.4167], cadres: '5.100 Kader', satgas: '35 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'jogja', name: 'DI Yogyakarta', island: 'Jawa & Bali', coords: [-7.7956, 110.3695], cadres: '2.200 Kader', satgas: '5 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'surabaya', name: 'Surabaya, Jawa Timur', island: 'Jawa & Bali', coords: [-7.2575, 112.7521], cadres: '5.900 Kader', satgas: '38 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'serang', name: 'Serang, Banten', island: 'Jawa & Bali', coords: [-6.1104, 106.164], cadres: '1.950 Kader', satgas: '8 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'denpasar', name: 'Denpasar, Bali', island: 'Jawa & Bali', coords: [-8.6705, 115.2126], cadres: '1.400 Kader', satgas: '9 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'mataram', name: 'Mataram, NTB', island: 'Nusa Tenggara', coords: [-8.5833, 116.1167], cadres: '1.150 Kader', satgas: '10 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'kupang', name: 'Kupang, NTT', island: 'Nusa Tenggara', coords: [-10.1772, 123.607], cadres: '1.300 Kader', satgas: '22 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'pontianak', name: 'Pontianak, Kalbar', island: 'Kalimantan', coords: [-0.0263, 109.3425], cadres: '1.500 Kader', satgas: '14 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'banjarmasin', name: 'Banjarmasin, Kalsel', island: 'Kalimantan', coords: [-3.3194, 114.5908], cadres: '1.650 Kader', satgas: '13 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'samarinda', name: 'Samarinda, Kaltim', island: 'Kalimantan', coords: [-0.5022, 117.1537], cadres: '1.850 Kader', satgas: '10 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'makassar', name: 'Makassar, Sulsel', island: 'Sulawesi', coords: [-5.1477, 119.4327], cadres: '2.800 Kader', satgas: '24 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'manado', name: 'Manado, Sulut', island: 'Sulawesi', coords: [1.4748, 124.8421], cadres: '1.450 Kader', satgas: '15 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'ambon', name: 'Ambon, Maluku', island: 'Maluku & Papua', coords: [-3.6554, 128.1906], cadres: '950 Kader', satgas: '11 Kab/Kota', status: 'Aktif Terkoordinasi' },
    { id: 'jayapura', name: 'Jayapura, Papua', island: 'Maluku & Papua', coords: [-2.5337, 140.7181], cadres: '1.350 Kader', satgas: '9 Kab/Kota', status: 'Aktif Terkoordinasi' },
];

const ISLAND_GROUPS = [
    { label: 'Semua', center: [-1.8, 118.5] as [number, number], zoom: 5 },
    { label: 'Sumatera', center: [-0.5, 102.0] as [number, number], zoom: 6 },
    { label: 'Jawa & Bali', center: [-7.2, 110.5] as [number, number], zoom: 7 },
    { label: 'Kalimantan', center: [-1.5, 114.5] as [number, number], zoom: 6 },
    { label: 'Sulawesi', center: [-2.5, 121.0] as [number, number], zoom: 6 },
    { label: 'Nusa Tenggara', center: [-8.8, 119.5] as [number, number], zoom: 7 },
    { label: 'Maluku & Papua', center: [-3.5, 135.0] as [number, number], zoom: 6 },
];

export default function MapDataSection() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const [selectedPoint, setSelectedPoint] = useState<RegionPoint | null>(null);
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
            if (!mapContainerRef.current || !window.L || mapInstanceRef.current) return;

            try {
                const map = window.L.map(mapContainerRef.current, {
                    center: [-1.8, 118.5],
                    zoom: 5,
                    minZoom: 4,
                    maxZoom: 12,
                    scrollWheelZoom: false,
                    zoomControl: false,
                    attributionControl: false,
                });

                // Zoom control top-left
                window.L.control.zoom({ position: 'topleft' }).addTo(map);

                // OpenStreetMap Tile Layer
                window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: '',
                }).addTo(map);

                // Add interactive pins across Indonesia
                REGION_POINTS.forEach((pt) => {
                    const icon = window.L.divIcon({
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

                    const marker = window.L.marker(pt.coords, { icon }).addTo(map);

                    marker.on('click', () => {
                        setSelectedPoint(pt);
                        map.flyTo(pt.coords, Math.max(map.getZoom(), 7), { duration: 1.2 });
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

    const handleSelectIsland = (island: (typeof ISLAND_GROUPS)[0]) => {
        setSelectedIsland(island.label);
        setSelectedPoint(null);
        if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo(island.center, island.zoom, { duration: 1.2 });
        }
    };

    return (
        <section id="sebaran-kipan" className="py-12 lg:py-16 bg-slate-50 border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                            <span className="text-xs font-bold text-kipan-blue uppercase tracking-widest">
                                Jangkauan &amp; Sebaran Nasional
                            </span>
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-kipan-navy tracking-tight">
                            Peta Sebaran Kader KIPAN RI
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
                            Integrasi data capaian kaderisasi dan jaringan koordinasi gerakan pemuda anti narkoba di 38 provinsi dari Sabang sampai Merauke.
                        </p>

                        {/* Interactive Island Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5">
                            {ISLAND_GROUPS.map((isl) => (
                                <button
                                    key={isl.label}
                                    onClick={() => handleSelectIsland(isl)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-150 cursor-pointer ${
                                        selectedIsland === isl.label
                                            ? 'bg-kipan-navy text-white shadow-sm scale-102'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-kipan-blue hover:text-kipan-blue'
                                    }`}
                                >
                                    {isl.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Compact Map Canvas with Floating Card (Proportionately Sized) */}
                <ScrollReveal direction="up" delay={0.12}>
                    <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-100 h-[440px] sm:h-[480px] lg:h-[500px]">
                        {/* Leaflet OpenStreetMap Container */}
                        <div
                            ref={mapContainerRef}
                            className="absolute inset-0 w-full h-full z-0"
                        />

                        {/* Loading placeholder if tiles loading */}
                        {!isMapLoaded && (
                            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center z-10 text-slate-400">
                                <ReloadIcon className="w-6 h-6 animate-spin text-kipan-blue mb-2" />
                                <span className="text-xs font-semibold">Memuat OpenStreetMap...</span>
                            </div>
                        )}

                        {/* Floating Data & Stat Card (Top Right / Compact Proportion) */}
                        <div className="relative lg:absolute lg:top-5 lg:right-5 z-10 m-3 sm:m-4 lg:m-0 max-w-full lg:max-w-sm w-full">
                            <div className="bg-gradient-to-br from-[#0D3F70]/95 via-[#0D3F70]/95 to-[#092B4F]/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white shadow-xl">
                                {/* Top Tag & Reset */}
                                <div className="flex items-center justify-between gap-2 mb-2.5">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold text-kipan-yellow uppercase tracking-wider">
                                        <GlobeIcon className="w-3 h-3" />
                                        <span>Data Nasional Terpadu</span>
                                    </div>
                                    <button
                                        onClick={() => handleSelectIsland(ISLAND_GROUPS[0])}
                                        title="Reset Tampilan Peta"
                                        className="text-white/70 hover:text-white p-1 hover:bg-white/10 rounded-md transition-colors"
                                    >
                                        <ReloadIcon className="w-3.5 h-3.5" />
                                    </button>
                                </div>

                                <h3 className="text-base sm:text-lg font-black text-white tracking-tight mb-0.5">
                                    {selectedPoint ? selectedPoint.name : 'KIPAN Dalam Angka'}
                                </h3>
                                <p className="text-[11px] text-blue-100/80 mb-3.5 leading-relaxed line-clamp-2">
                                    {selectedPoint
                                        ? `Koordinator Wilayah ${selectedPoint.island} • Status: ${selectedPoint.status}`
                                        : 'Rekapitulasi resmi capaian pembinaan kader dan satgas daerah di seluruh Indonesia.'}
                                </p>

                                {/* 4 Stat Panels (Compact 2x2 Grid) */}
                                <div className="grid grid-cols-2 gap-2 mb-3.5">
                                    <div className="bg-white/10 border border-white/15 rounded-xl p-2.5 hover:bg-white/15 transition-colors">
                                        <div className="text-lg sm:text-xl font-black text-white font-mono leading-none">
                                            {selectedPoint ? selectedPoint.cadres : '50.000+'}
                                        </div>
                                        <div className="text-[10px] font-bold text-kipan-yellow uppercase tracking-wider mt-1">
                                            Kader Terlatih
                                        </div>
                                    </div>

                                    <div className="bg-white/10 border border-white/15 rounded-xl p-2.5 hover:bg-white/15 transition-colors">
                                        <div className="text-lg sm:text-xl font-black text-white font-mono leading-none">
                                            {selectedPoint ? selectedPoint.satgas : '38'}
                                        </div>
                                        <div className="text-[10px] font-bold text-kipan-yellow uppercase tracking-wider mt-1">
                                            {selectedPoint ? 'Cakupan' : 'Provinsi'}
                                        </div>
                                    </div>

                                    <div className="bg-white/10 border border-white/15 rounded-xl p-2.5 hover:bg-white/15 transition-colors">
                                        <div className="text-lg sm:text-xl font-black text-white font-mono leading-none">
                                            514
                                        </div>
                                        <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mt-1">
                                            Kab. &amp; Kota
                                        </div>
                                    </div>

                                    <div className="bg-white/10 border border-white/15 rounded-xl p-2.5 hover:bg-white/15 transition-colors">
                                        <div className="text-lg sm:text-xl font-black text-white font-mono leading-none">
                                            100+
                                        </div>
                                        <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mt-1">
                                            Aksi Program
                                        </div>
                                    </div>
                                </div>

                                {/* Active point note or hint */}
                                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-1.5 text-blue-100/80 text-[10px]">
                                        <SewingPinIcon className="w-3 h-3 text-kipan-yellow" />
                                        <span>Klik pin untuk fokus daerah</span>
                                    </div>
                                    <a
                                        href="/tentang/jejaring"
                                        className="text-[11px] font-bold text-kipan-yellow hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        <span>Direktori</span>
                                        <ArrowRightIcon className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
