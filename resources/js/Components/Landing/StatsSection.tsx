import { STATS_ITEMS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

export default function StatsSection() {
    return (
        <section className="bg-kipan-navy text-white py-14 lg:py-20 border-b border-blue-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-bold text-kipan-yellow uppercase tracking-widest block mb-2">
                            Data &amp; Capaian Organisasi
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            KIPAN Dalam Angka
                        </h2>
                        <p className="text-xs sm:text-sm text-blue-100/80 mt-2">
                            Jangkauan pembinaan, kaderisasi, dan edukasi pemuda anti narkotika di seluruh Indonesia.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Stats Grid with Staggered Scroll Reveal */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {STATS_ITEMS.map((stat, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={0.1 + idx * 0.08}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col justify-between hover:bg-white/12 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 h-full group">
                                <div>
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300">
                                        {stat.value}
                                        <span className="text-kipan-yellow ml-0.5">.</span>
                                    </div>
                                    <div className="text-sm font-bold text-kipan-yellow uppercase tracking-wider mb-2">
                                        {stat.label}
                                    </div>
                                </div>
                                <p className="text-[11px] text-blue-100/70 leading-relaxed">
                                    {stat.sublabel}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Attribution note */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div className="mt-10 text-center text-[11px] text-blue-200/60 max-w-xl mx-auto">
                        Catatan: Data dihimpun dari laporan rekapitulasi pelaksanaan program pembinaan pemuda Kemenpora RI bersama jajaran BNN RI dan sekretariat daerah.
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
