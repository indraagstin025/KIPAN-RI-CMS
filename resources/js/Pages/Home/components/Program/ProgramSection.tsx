import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ENHANCED_PROGRAMS } from '../../constants/enhancedPrograms';
import ProgramCard from './ProgramCard';

export default function ProgramSection() {
    return (
        <section
            id="program"
            className="overflow-hidden border-b border-kipan-border bg-white py-16 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <div className="mb-2.5 flex items-center justify-center gap-3">
                            <span className="h-0.5 w-8 rounded-full bg-kipan-blue" />
                            <span className="text-xs font-bold uppercase tracking-widest text-kipan-blue">
                                Program Unggulan &amp; Aksi Nyata
                            </span>
                            <span className="h-0.5 w-8 rounded-full bg-kipan-blue" />
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-kipan-navy sm:text-3xl lg:text-4xl">
                            Inisiatif Strategis Pemuda KIPAN RI
                        </h2>
                        <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Implementasi pilar gerakan pencegahan narkoba
                            melalui 4 program prioritas berkelanjutan yang
                            menyentuh pelajar, kader daerah, komunitas kreatif,
                            hingga pendampingan sebaya.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 4 Cards Responsive Grid */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {ENHANCED_PROGRAMS.map((prog, idx) => (
                        <ScrollReveal
                            key={prog.id}
                            direction="up"
                            delay={0.08 + idx * 0.06}
                        >
                            <ProgramCard program={prog} />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Link to Full Programs Page */}
                <ScrollReveal direction="up" delay={0.3}>
                    <div className="mt-12 text-center">
                        <a
                            href="/program"
                            className="shadow-2xs hover:shadow-xs inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-xs font-bold text-kipan-navy transition-all hover:border-kipan-blue hover:bg-white"
                        >
                            <span>
                                Eksplorasi Seluruh Inisiatif &amp; Panduan Aksi
                                KIPAN
                            </span>
                            <ArrowRightIcon className="h-4 w-4 text-kipan-blue" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
