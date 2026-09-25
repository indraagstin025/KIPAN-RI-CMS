import { PARTNERS_ITEMS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

export default function PartnersSection() {
    return (
        <section className="py-16 lg:py-20 bg-white border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                            Sinergi Lintas Sektor
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-kipan-navy tracking-tight">
                            Bersama, Bergerak untuk Indonesia Bersinar
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                            KIPAN berkolaborasi erat dengan kementerian, lembaga negara, pemerintah daerah, dan organisasi kepemudaan.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Partners List with Staggered Scroll Reveal */}
                <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                    {PARTNERS_ITEMS.map((partner, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.05}>
                            <div className="bg-kipan-soft-blue border border-blue-200/60 rounded-xl p-4 text-center flex flex-col justify-center items-center hover:border-kipan-blue hover:-translate-y-1 hover:shadow-sm transition-all duration-300 h-full group">
                                <div className="font-bold text-sm text-kipan-navy mb-1 group-hover:text-kipan-blue transition-colors">
                                    {partner.name}
                                </div>
                                <div className="text-[11px] text-slate-500 leading-tight">
                                    {partner.role}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
