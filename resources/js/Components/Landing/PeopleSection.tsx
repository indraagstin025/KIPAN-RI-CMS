import { LEADERS_ITEMS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

export default function PeopleSection() {
    return (
        <section id="pengurus" className="py-16 lg:py-24 bg-white border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                            Kepemimpinan &amp; Penggerak
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Mereka yang Bergerak Bersama KIPAN
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
                            Sinergi pembinaan dari pemerintah pusat hingga dedikasi para koordinator pemuda di akar rumput.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Leaders Cards Grid with Staggered Scroll Reveal */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {LEADERS_ITEMS.map((leader, idx) => (
                        <ScrollReveal key={leader.id} direction="up" delay={0.08 + idx * 0.07}>
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-xs hover:border-kipan-blue hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-full group">
                                <div className="w-full flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 p-1 border border-slate-200 shadow-2xs mb-4 group-hover:scale-105 group-hover:border-kipan-blue transition-all duration-300">
                                        <img
                                            src={leader.photo}
                                            alt={leader.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    <span className="text-[10px] font-bold text-kipan-blue uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mb-2">
                                        {leader.tag}
                                    </span>

                                    <h3 className="text-base font-bold text-kipan-navy leading-snug mb-1 group-hover:text-kipan-blue transition-colors">
                                        {leader.name}
                                    </h3>

                                    <div className="text-xs font-semibold text-kipan-blue mb-1">
                                        {leader.role}
                                    </div>

                                    <div className="text-[11px] text-slate-500">
                                        {leader.institution}
                                    </div>
                                </div>

                                <div className="w-full mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                                    KIPAN Indonesia
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
