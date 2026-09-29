import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { ReloadIcon } from '@radix-ui/react-icons';
import { ISLAND_GROUPS } from '../../constants/mapPoints';
import { useLeafletMap } from '../../hooks/useLeafletMap';
import MapStatsCard from './MapStatsCard';

export default function MapDataSection() {
    const {
        mapContainerRef,
        isMapLoaded,
        selectedPoint,
        selectedIsland,
        handleSelectIsland,
        handleResetMap,
    } = useLeafletMap();

    return (
        <section
            id="sebaran-kipan"
            className="overflow-hidden border-b border-kipan-border bg-slate-50 py-12 lg:py-16"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-8 max-w-3xl text-center">
                        <div className="mb-2 flex items-center justify-center gap-3">
                            <span className="h-0.5 w-8 rounded-full bg-kipan-blue" />
                            <span className="text-xs font-bold uppercase tracking-widest text-kipan-blue">
                                Jangkauan &amp; Sebaran Nasional
                            </span>
                            <span className="h-0.5 w-8 rounded-full bg-kipan-blue" />
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-kipan-navy sm:text-3xl">
                            Peta Sebaran Kader KIPAN RI
                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Integrasi data capaian kaderisasi dan jaringan
                            koordinasi gerakan pemuda anti narkoba di 38
                            provinsi dari Sabang sampai Merauke.
                        </p>

                        {/* Interactive Island Tabs */}
                        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
                            {ISLAND_GROUPS.map((isl) => (
                                <button
                                    key={isl.label}
                                    onClick={() => handleSelectIsland(isl)}
                                    className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-bold transition-all duration-150 ${
                                        selectedIsland === isl.label
                                            ? 'scale-102 bg-kipan-navy text-white shadow-sm'
                                            : 'border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-blue'
                                    }`}
                                >
                                    {isl.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Compact Map Canvas with Floating Card */}
                <ScrollReveal direction="up" delay={0.12}>
                    <div className="relative mx-auto h-[440px] w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-lg sm:h-[480px] lg:h-[500px]">
                        {/* Leaflet OpenStreetMap Container */}
                        <div
                            ref={mapContainerRef}
                            className="absolute inset-0 z-0 h-full w-full"
                        />

                        {/* Loading placeholder if tiles loading */}
                        {!isMapLoaded && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                                <ReloadIcon className="mb-2 h-6 w-6 animate-spin text-kipan-blue" />
                                <span className="text-xs font-semibold">
                                    Memuat OpenStreetMap...
                                </span>
                            </div>
                        )}

                        {/* Floating Data & Stat Card */}
                        <MapStatsCard
                            selectedPoint={selectedPoint}
                            onReset={handleResetMap}
                        />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
