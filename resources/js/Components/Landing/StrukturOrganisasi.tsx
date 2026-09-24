import { Landmark, Map, Building2, ChevronDown, Network } from 'lucide-react';
import { STRUKTUR_LEVELS } from '@/data/kipan-data';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Landmark,
    Map,
    Building2,
};

export default function StrukturOrganisasi() {
    return (
        <section
            id="struktur"
            className="py-20 lg:py-28 bg-white border-b border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-18">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold tracking-wider uppercase rounded-md mb-4 border border-slate-200">
                        <Network className="w-3.5 h-3.5 text-blue-700" />
                        <span>Tata Kelola Lembaga</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        Struktur dan Hierarki Organisasi
                    </h2>
                    <p className="mt-4 text-slate-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                        Sistem komando dan koordinasi KIPAN berjenjang dari tingkat pusat hingga daerah dalam satu kesatuan gerakan nasional.
                    </p>
                </div>

                {/* Hierarchy Diagram */}
                <div className="max-w-3xl mx-auto">
                    {STRUKTUR_LEVELS.map((level, idx) => {
                        const Icon = ICON_MAP[level.icon] || Landmark;
                        const isLast = idx === STRUKTUR_LEVELS.length - 1;
                        return (
                            <div key={level.level} className="relative">
                                {/* Structural Card */}
                                <div
                                    className={`bg-white rounded-xl border p-5 sm:p-6 lg:p-7 shadow-sm transition-all hover:shadow-md ${
                                        idx === 0
                                            ? 'border-blue-600 ring-1 ring-blue-600/20'
                                            : 'border-slate-200 hover:border-slate-300'
                                    }`}
                                >
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                        {/* Icon */}
                                        <div
                                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0 ${
                                                idx === 0
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-slate-100 text-blue-700 border border-slate-200'
                                            }`}
                                        >
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                        </div>

                                        {/* Content info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                                                    Tingkat {level.level}
                                                </span>
                                                <span className="text-slate-300">•</span>
                                                <span className="text-xs text-slate-500 font-medium">
                                                    {level.count}
                                                </span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                                                {level.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                                                {level.desc}
                                            </p>
                                        </div>

                                        {/* Badge right */}
                                        <div className="self-end sm:self-center shrink-0">
                                            <span className="inline-flex items-center px-3 py-1 bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-md">
                                                {level.count}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hierarchy connector line */}
                                {!isLast && (
                                    <div className="flex justify-center py-2" aria-hidden="true">
                                        <div className="flex flex-col items-center">
                                            <div className="w-0.5 h-6 bg-slate-300" />
                                            <ChevronDown className="w-4 h-4 text-slate-400 -mt-1" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

