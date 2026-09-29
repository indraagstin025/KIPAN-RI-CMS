import {
    ArrowRightIcon,
    GlobeIcon,
    ReloadIcon,
    SewingPinIcon,
} from '@radix-ui/react-icons';
import { RegionPoint } from '../../constants/mapPoints';

interface MapStatsCardProps {
    readonly selectedPoint: RegionPoint | null;
    readonly onReset: () => void;
}

export default function MapStatsCard({
    selectedPoint,
    onReset,
}: Readonly<MapStatsCardProps>) {
    return (
        <div className="relative z-10 m-3 w-full max-w-full sm:m-4 lg:absolute lg:right-5 lg:top-5 lg:m-0 lg:max-w-sm">
            <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-[#0D3F70]/95 via-[#0D3F70]/95 to-[#092B4F]/95 p-4 text-white shadow-xl backdrop-blur-md sm:p-5">
                {/* Top Tag & Reset */}
                <div className="mb-2.5 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-kipan-yellow">
                        <GlobeIcon className="h-3 w-3" />
                        <span>Data Nasional Terpadu</span>
                    </div>
                    <button
                        onClick={onReset}
                        title="Reset Tampilan Peta"
                        className="rounded-md p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <ReloadIcon className="h-3.5 w-3.5" />
                    </button>
                </div>

                <h3 className="mb-0.5 text-base font-black tracking-tight text-white sm:text-lg">
                    {selectedPoint ? selectedPoint.name : 'KIPAN Dalam Angka'}
                </h3>
                <p className="mb-3.5 line-clamp-2 text-[11px] leading-relaxed text-blue-100/80">
                    {selectedPoint
                        ? `Koordinator Wilayah ${selectedPoint.island} • Status: ${selectedPoint.status}`
                        : 'Rekapitulasi resmi capaian pembinaan kader dan satgas daerah di seluruh Indonesia.'}
                </p>

                {/* 4 Stat Panels (Compact 2x2 Grid) */}
                <div className="mb-3.5 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 transition-colors hover:bg-white/15">
                        <div className="font-mono text-lg font-black leading-none text-white sm:text-xl">
                            {selectedPoint ? selectedPoint.cadres : '50.000+'}
                        </div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-kipan-yellow">
                            Kader Terlatih
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 transition-colors hover:bg-white/15">
                        <div className="font-mono text-lg font-black leading-none text-white sm:text-xl">
                            {selectedPoint ? selectedPoint.satgas : '38'}
                        </div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-kipan-yellow">
                            {selectedPoint ? 'Cakupan' : 'Provinsi'}
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 transition-colors hover:bg-white/15">
                        <div className="font-mono text-lg font-black leading-none text-white sm:text-xl">
                            514
                        </div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            Kab. &amp; Kota
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 transition-colors hover:bg-white/15">
                        <div className="font-mono text-lg font-black leading-none text-white sm:text-xl">
                            100+
                        </div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            Aksi Program
                        </div>
                    </div>
                </div>

                {/* Active point note or hint */}
                <div className="flex items-center justify-between border-t border-white/15 pt-2.5 text-xs">
                    <div className="flex items-center gap-1.5 text-[10px] text-blue-100/80">
                        <SewingPinIcon className="h-3 w-3 text-kipan-yellow" />
                        <span>Klik pin untuk fokus daerah</span>
                    </div>
                    <a
                        href="/tentang#struktur"
                        className="flex items-center gap-1 text-[11px] font-bold text-kipan-yellow transition-colors hover:text-white"
                    >
                        <span>Struktur</span>
                        <ArrowRightIcon className="h-3 w-3" />
                    </a>
                </div>
            </div>
        </div>
    );
}
