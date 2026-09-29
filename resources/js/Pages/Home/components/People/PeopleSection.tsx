import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { LEADERS_ITEMS } from '@/data/landing-content';
import LeaderCard from './LeaderCard';

export default function PeopleSection() {
    const pembinaLeaders = LEADERS_ITEMS.slice(0, 2);
    const pelaksanaLeaders = LEADERS_ITEMS.slice(2, 4);

    return (
        <section
            id="pengurus"
            className="overflow-hidden border-b border-kipan-border bg-slate-50/70 py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header matching Youth Innovation */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-kipan-blue">
                            <span>Bagan Kepengurusan</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-kipan-navy sm:text-4xl">
                            Struktur Organisasi
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-kipan-blue" />
                        <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Sinergi pembinaan dari pemerintah pusat hingga
                            dedikasi para koordinator pemuda di akar rumput.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Level 1: Dewan Pembina & Pengarah */}
                <div className="mb-14">
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-lg font-bold text-kipan-navy sm:text-xl md:text-2xl">
                            Dewan Pembina &amp; Pengarah
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    <div className="group/spotlight flex flex-wrap items-start justify-center gap-6">
                        {pembinaLeaders.map((leader, idx) => (
                            <ScrollReveal
                                key={leader.id}
                                direction="up"
                                delay={0.08 + idx * 0.08}
                            >
                                <LeaderCard leader={leader} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Level 2: Pimpinan Pelaksana & Wilayah */}
                <div>
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px grow bg-slate-200" />
                        <h3 className="shrink-0 px-4 text-lg font-bold text-kipan-navy sm:text-xl md:text-2xl">
                            Pimpinan Pelaksana &amp; Wilayah
                        </h3>
                        <div className="h-px grow bg-slate-200" />
                    </div>

                    <div className="group/spotlight flex flex-wrap items-start justify-center gap-6">
                        {pelaksanaLeaders.map((leader, idx) => (
                            <ScrollReveal
                                key={leader.id}
                                direction="up"
                                delay={0.08 + idx * 0.08}
                            >
                                <LeaderCard leader={leader} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
