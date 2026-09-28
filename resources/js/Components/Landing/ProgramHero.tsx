import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircledIcon } from '@radix-ui/react-icons';
import { PROGRAMS } from '@/data/kipan-data';

interface ProgramHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

// Tiga foto program untuk kolase
const COLLAGE = [
    {
        src: PROGRAMS[0]?.image,
        alt: PROGRAMS[0]?.title ?? 'Program KIPAN',
        className:
            'absolute top-0 left-0 sm:left-4 w-52 sm:w-64 -rotate-6 rounded-2xl border-4 border-white/15 shadow-2xl z-10',
    },
    {
        src: PROGRAMS[2]?.image,
        alt: PROGRAMS[2]?.title ?? 'Program KIPAN',
        className:
            'absolute top-28 sm:top-32 right-0 sm:right-2 w-60 sm:w-72 rotate-3 rounded-2xl ring-4 ring-kipan-yellow/90 shadow-2xl z-20',
    },
    {
        src: PROGRAMS[4]?.image,
        alt: PROGRAMS[4]?.title ?? 'Program KIPAN',
        className:
            'absolute bottom-0 left-10 sm:left-20 w-48 sm:w-60 -rotate-3 rounded-2xl border-4 border-white/15 shadow-2xl z-10',
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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Title & Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-start"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-kipan-yellow" />
                            {category}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                            {title}
                        </h1>
                        {/* Yellow underline accent */}
                        <div className="h-1.5 w-24 bg-kipan-yellow rounded-full mt-4 mb-6" />

                        <div className="border-l-4 border-kipan-yellow pl-4 mb-8">
                            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-xl">
                                {subtitle}
                            </p>
                        </div>

                        {/* Inline stats (tanpa kartu putih) */}
                        <div className="flex items-center gap-6 mb-8 text-sm">
                            <div>
                                <span className="text-2xl font-black text-kipan-yellow font-mono">
                                    {String(PROGRAMS.length).padStart(2, '0')}
                                </span>
                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-blue-200/80 mt-1">
                                    Program Unggulan
                                </span>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div>
                                <span className="text-2xl font-black text-white font-mono">38</span>
                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-blue-200/80 mt-1">
                                    Provinsi Jangkauan
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="#program-list"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                            >
                                <span>Jelajahi Program</span>
                            </a>

                            <a
                                href="/pendaftaran"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                            >
                                <span>Daftar Jadi Kader</span>
                                <ArrowRightIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Photo Collage */}
                    <div className="relative h-[380px] sm:h-[440px] lg:h-[480px]">
                        {/* Yellow blob behind collage */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-kipan-yellow/15 rounded-full blur-3xl pointer-events-none" />

                        {COLLAGE.map((photo, idx) => (
                            <motion.img
                                key={photo.alt}
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                initial={{ opacity: 0, y: 32, rotate: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15 + idx * 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`${photo.className} aspect-[4/3] object-cover`}
                            />
                        ))}

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-6 right-2 sm:right-6 z-30"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                                className="flex items-center gap-3 bg-white rounded-2xl pl-3 pr-5 py-3 shadow-2xl"
                            >
                                <span className="w-10 h-10 rounded-xl bg-kipan-navy text-white flex items-center justify-center shrink-0">
                                    <CheckCircledIcon className="w-5 h-5" />
                                </span>
                                <span>
                                    <span className="block text-lg font-black text-kipan-navy leading-none font-mono">
                                        {String(PROGRAMS.length).padStart(2, '0')}
                                    </span>
                                    <span className="block text-[11px] font-bold text-slate-500 mt-0.5">
                                        Program Unggulan
                                    </span>
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
