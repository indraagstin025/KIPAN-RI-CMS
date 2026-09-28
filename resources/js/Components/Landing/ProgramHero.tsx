import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Award, ClipboardCheck, GraduationCap, Megaphone, type LucideIcon } from 'lucide-react';

interface ProgramHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

interface JourneyStep {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const STEPS: JourneyStep[] = [
    {
        number: '01',
        title: 'Pendaftaran',
        description: 'Daftar online sebagai calon kader di wilayah domisilimu.',
        icon: ClipboardCheck,
    },
    {
        number: '02',
        title: 'Pelatihan',
        description: 'Ikuti pembekalan P4GN, kepemimpinan, dan deteksi dini.',
        icon: GraduationCap,
    },
    {
        number: '03',
        title: 'Aksi Lapangan',
        description: 'Turun langsung: penyuluhan, kampanye, dan pendampingan.',
        icon: Megaphone,
    },
    {
        number: '04',
        title: 'Dampak Nyata',
        description: 'Jadi pelopor pemuda Bersinar di daerahmu.',
        icon: Award,
    },
];

export default function ProgramHero({ category, title, subtitle }: ProgramHeroProps) {
    return (
        <section className="relative flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] text-white overflow-hidden">
            {/* Subtle Youth Network Graphic Grid Background */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle Diagonal Glow */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-kipan-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mb-12 lg:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-blue-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-kipan-yellow" />
                        {category}
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                        {title}
                    </h1>
                    <div className="h-1.5 w-24 bg-kipan-yellow rounded-full mt-4 mb-6" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
                            {subtitle}
                        </p>
                    </div>
                </motion.div>

                {/* Journey Steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div
                        aria-hidden
                        className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-kipan-yellow/70 to-transparent"
                    />

                    <div className="grid gap-10 md:gap-6 md:grid-cols-4">
                        {STEPS.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.15 + idx * 0.14,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
                                >
                                    {/* Icon circle */}
                                    <div className="relative shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/25 backdrop-blur-xs flex items-center justify-center shadow-lg">
                                            <Icon className="w-7 h-7 text-kipan-yellow" />
                                        </div>
                                        <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-kipan-yellow text-kipan-navy text-[11px] font-black flex items-center justify-center shadow">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Vertical connector (mobile) */}
                                    {idx < STEPS.length - 1 && (
                                        <div
                                            aria-hidden
                                            className="md:hidden absolute left-8 top-16 bottom-[-2.5rem] w-px bg-gradient-to-b from-kipan-yellow/70 to-transparent"
                                        />
                                    )}

                                    <div className="md:mt-5">
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-kipan-yellow mb-1">
                                            Langkah {step.number}
                                        </p>
                                        <h3 className="text-lg font-bold text-white mb-1.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-blue-100/75 leading-relaxed max-w-[240px]">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap items-center gap-3 mt-12 lg:mt-14"
                >
                    <a
                        href="/pendaftaran"
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                    >
                        <span>Mulai Langkah 01 — Daftar</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>

                    <a
                        href="#program-list"
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                    >
                        <span>Jelajahi Program</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
