import { ArrowRightIcon } from '@radix-ui/react-icons';
import { PROGRAM_ITEMS } from '@/data/landing-content';

export default function ProgramSection() {
    return (
        <section id="program" className="py-16 lg:py-24 bg-white border-b border-kipan-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                            Inisiatif Berkelanjutan
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Program &amp; Aksi KIPAN
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
                            Rangkaian program prioritas pencegahan, pembinaan kader, dan perlindungan pemuda yang berjalan sepanjang tahun.
                        </p>
                    </div>

                    <a
                        href="#agenda"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-kipan-blue hover:text-blue-800 transition-colors shrink-0"
                    >
                        <span>Lihat Kalender Agenda</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </a>
                </div>

                {/* Programs Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROGRAM_ITEMS.map((prog) => (
                        <div
                            key={prog.id}
                            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-kipan-blue hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-5 bg-kipan-soft-blue border-b border-blue-100 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-kipan-navy uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-blue-200 shadow-2xs">
                                        {prog.category}
                                    </span>
                                    <span className="text-[11px] font-semibold text-kipan-blue">
                                        {prog.target}
                                    </span>
                                </div>

                                <div className="p-5 sm:p-6">
                                    <h3 className="text-base font-bold text-kipan-navy leading-snug mb-2.5">
                                        {prog.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {prog.description}
                                    </p>
                                </div>
                            </div>

                            <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100">
                                <a
                                    href="#kontak"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-kipan-blue hover:text-blue-800 transition-colors"
                                >
                                    <span>Konsultasi &amp; Kemitraan</span>
                                    <ArrowRightIcon className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
