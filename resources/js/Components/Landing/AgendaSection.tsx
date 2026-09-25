import { ClockIcon, SewingPinIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { AGENDA_ITEMS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

export default function AgendaSection() {
    return (
        <section id="agenda" className="py-16 lg:py-24 bg-kipan-soft-blue border-b border-kipan-border overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                            Jadwal &amp; Rencana Aksi
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                            Agenda Kegiatan KIPAN
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
                            Informasi jadwal seminar, pelatihan kader, sosialisasi akbar, dan peringatan hari besar kepemudaan yang akan datang.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Agenda List with Staggered Scroll Reveal */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {AGENDA_ITEMS.map((item, idx) => (
                        <ScrollReveal key={item.id} direction="up" delay={0.08 + idx * 0.08}>
                            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-kipan-blue hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-5 group">
                                {/* Distinct Date Badge */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-kipan-navy text-white flex flex-col items-center justify-center shrink-0 border border-blue-900 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-xl sm:text-2xl font-black leading-none text-kipan-yellow">
                                        {item.day}
                                    </span>
                                    <span className="text-[11px] font-bold tracking-widest text-blue-100 uppercase mt-1">
                                        {item.month}
                                    </span>
                                </div>

                                {/* Event Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                        <span className="text-[10px] font-bold text-kipan-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                            {item.status}
                                        </span>
                                    </div>

                                    <h3 className="text-base sm:text-lg font-bold text-kipan-navy leading-snug group-hover:text-kipan-blue transition-colors">
                                        {item.title}
                                    </h3>

                                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                                        <div className="flex items-center gap-1.5">
                                            <ClockIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                            <span>{item.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <SewingPinIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action button */}
                                <div className="shrink-0 pt-2 sm:pt-0">
                                    <a
                                        href="/agenda"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-kipan-navy hover:text-white bg-slate-100 hover:bg-kipan-blue rounded-lg transition-all shadow-2xs"
                                    >
                                        <span>Detail</span>
                                        <ArrowRightIcon className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Calendar CTA */}
                <ScrollReveal direction="up" delay={0.35}>
                    <div className="mt-12 text-center">
                        <a
                            href="/agenda"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-kipan-navy shadow-xs transition-colors hover:border-kipan-blue"
                        >
                            <span>Buka Kalender Agenda Lengkap 2026</span>
                            <ArrowRightIcon className="w-4 h-4 text-kipan-blue" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
