import { LEADERS_ITEMS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';
import { PersonIcon } from '@radix-ui/react-icons';

export default function PeopleSection() {
    return (
        <section id="pengurus" className="py-16 lg:py-24 bg-white border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="flex items-center justify-center gap-3 mb-2.5">
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                            <span className="text-xs font-bold text-kipan-blue uppercase tracking-widest">
                                Kepemimpinan &amp; Penggerak
                            </span>
                            <span className="h-0.5 w-8 bg-kipan-blue rounded-full"></span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Mereka yang Bergerak Bersama KIPAN
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
                            Sinergi pembinaan dari pemerintah pusat hingga dedikasi para koordinator pemuda di akar rumput.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Leaders Cards Grid - Clean Portrait Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {LEADERS_ITEMS.map((leader, idx) => (
                        <ScrollReveal key={leader.id} direction="up" delay={0.08 + idx * 0.07}>
                            <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-5 text-center shadow-xs hover:border-kipan-blue hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-full group">
                                <div className="w-full flex flex-col items-center">
                                    {/* Portrait Photo Container */}
                                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/60 p-2 border border-slate-200/80 shadow-2xs mb-4 group-hover:border-kipan-blue/60 transition-all duration-300 relative flex items-center justify-center">
                                        <img
                                            src={leader.photo}
                                            alt={leader.name}
                                            className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-kipan-navy text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs border border-slate-200/70 uppercase tracking-wider">
                                            {leader.tag}
                                        </div>
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="text-base font-bold text-kipan-navy leading-snug mb-1 group-hover:text-kipan-blue transition-colors">
                                        {leader.name}
                                    </h3>

                                    <div className="text-xs font-bold text-kipan-blue uppercase tracking-wide mb-1">
                                        {leader.role}
                                    </div>

                                    <div className="text-xs text-slate-500 font-medium line-clamp-1">
                                        {leader.institution}
                                    </div>
                                </div>

                                {/* Bottom Pill Status */}
                                <div className="w-full mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-kipan-blue transition-colors">
                                    <PersonIcon className="w-3.5 h-3.5" />
                                    <span>Penggerak KIPAN RI</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
