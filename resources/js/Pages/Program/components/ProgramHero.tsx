import { ArrowRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import {
    Award,
    ClipboardCheck,
    GraduationCap,
    Megaphone,
    type LucideIcon,
} from 'lucide-react';

interface ProgramHeroProps {
    readonly category: string;
    readonly title: string;
    readonly subtitle: string;
}

interface JourneyStep {
    readonly number: string;
    readonly title: string;
    readonly description: string;
    readonly icon: LucideIcon;
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

export default function ProgramHero({
    category,
    title,
    subtitle,
}: Readonly<ProgramHeroProps>) {
    return (
        <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-20 sm:pt-28 lg:pt-32">
            {/* Subtle Youth Network Graphic Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle Diagonal Glow */}
            <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 max-w-3xl lg:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100">
                        <span className="h-2 w-2 rounded-full bg-kipan-yellow" />
                        {category}
                    </div>

                    <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                            {subtitle}
                        </p>
                    </div>
                </motion.div>

                {/* Journey Steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div
                        aria-hidden
                        className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-kipan-yellow/70 to-transparent md:block"
                    />

                    <div className="grid gap-10 md:grid-cols-4 md:gap-6">
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
                                    className="relative flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
                                >
                                    {/* Icon circle */}
                                    <div className="relative shrink-0">
                                        <div className="backdrop-blur-xs flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg">
                                            <Icon className="h-7 w-7 text-kipan-yellow" />
                                        </div>
                                        <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-kipan-yellow text-[11px] font-black text-kipan-navy shadow">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Vertical connector (mobile) */}
                                    {idx < STEPS.length - 1 && (
                                        <div
                                            aria-hidden
                                            className="absolute bottom-[-2.5rem] left-8 top-16 w-px bg-gradient-to-b from-kipan-yellow/70 to-transparent md:hidden"
                                        />
                                    )}

                                    <div className="md:mt-5">
                                        <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-kipan-yellow">
                                            Langkah {step.number}
                                        </p>
                                        <h3 className="mb-1.5 text-lg font-bold text-white">
                                            {step.title}
                                        </h3>
                                        <p className="max-w-[240px] text-sm leading-relaxed text-blue-100/75">
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
                    transition={{
                        duration: 0.6,
                        delay: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-12 flex flex-wrap items-center gap-3 lg:mt-14"
                >
                    <a
                        href="/pendaftaran"
                        className="inline-flex items-center gap-2 rounded-full bg-kipan-yellow px-6 py-3 text-xs font-bold text-kipan-navy shadow-md transition-all hover:scale-105 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow active:scale-95"
                    >
                        <span>Mulai Langkah 01 — Daftar</span>
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>

                    <a
                        href="#program-list"
                        className="backdrop-blur-xs shadow-xs inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-all hover:scale-105 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                    >
                        <span>Jelajahi Program</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
