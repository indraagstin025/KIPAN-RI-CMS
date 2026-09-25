import { CalendarIcon, SewingPinIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import { NEWS_ITEMS } from '@/data/landing-content';

export default function NewsSection() {
    const featured = NEWS_ITEMS[0];
    const others = NEWS_ITEMS.slice(1, 4);

    return (
        <section id="berita" className="py-16 lg:py-24 bg-white border-b border-kipan-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                            Publikasi &amp; Informasi
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Warta Terkini KIPAN
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
                            Rilis resmi kegiatan kader, edukasi pencegahan narkoba, dan kabar kolaborasi pemuda se-Indonesia.
                        </p>
                    </div>

                    <a
                        href="#agenda"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-kipan-blue hover:text-blue-800 transition-colors shrink-0"
                    >
                        <span>Lihat Agenda Terdekat</span>
                        <ArrowTopRightIcon className="w-4 h-4" />
                    </a>
                </div>

                {/* News Grid: 1 Featured (Large) + 3 Supporting Cards */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Featured Article (7 cols) */}
                    {featured && (
                        <article className="lg:col-span-7 bg-kipan-soft-blue border border-blue-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-kipan-blue transition-all flex flex-col justify-between">
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="text-[11px] font-bold text-kipan-navy bg-kipan-yellow px-2.5 py-0.5 rounded shadow-2xs uppercase tracking-wider">
                                        Sorotan {featured.category}
                                    </span>
                                    <span className="text-slate-300">•</span>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <CalendarIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                        <span>{featured.date}</span>
                                    </div>
                                    <span className="text-slate-300">•</span>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <SewingPinIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                        <span>{featured.location}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-kipan-navy leading-snug mb-3">
                                    {featured.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {featured.excerpt}
                                </p>
                            </div>

                            <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs font-bold text-kipan-blue">
                                <span>Rilis Resmi Sekretariat Nasional</span>
                                <span className="hover:underline cursor-pointer">Baca Selengkapnya →</span>
                            </div>
                        </article>
                    )}

                    {/* Supporting 3 Cards (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {others.map((item) => (
                            <article
                                key={item.id}
                                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-kipan-blue hover:shadow-xs transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1.5">
                                        <span className="font-bold text-kipan-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                            {item.category}
                                        </span>
                                        <span>•</span>
                                        <span>{item.date}</span>
                                    </div>

                                    <h4 className="text-sm font-bold text-kipan-navy leading-snug line-clamp-2 mb-1.5">
                                        {item.title}
                                    </h4>

                                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </div>

                                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                                    <span>{item.location}</span>
                                    <span className="text-kipan-blue font-bold hover:underline cursor-pointer">
                                        Rincian Berita →
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
