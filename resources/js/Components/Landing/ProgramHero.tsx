import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRightIcon,
    CheckCircledIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { AGENDA_KEGIATAN, PROGRAMS } from '@/data/kipan-data';

interface ProgramHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

export default function ProgramHero({ category, title, subtitle }: ProgramHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? PROGRAMS.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === PROGRAMS.length - 1 ? 0 : prev + 1));
    };

    const activeProgram = PROGRAMS[currentSlide];
    const upcomingCount = AGENDA_KEGIATAN.filter((a) => a.status !== 'Selesai').length;

    return (
        <section className="relative flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] text-white overflow-hidden">
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
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    {/* Left Column: Typography, Value Proposition, Stats Card, CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 flex flex-col items-start"
                    >
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-kipan-yellow" />
                            {category}
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                            {title}
                        </h1>

                        {/* Subheadline with Vertical Gold Accent Bar */}
                        <div className="border-l-4 border-kipan-yellow pl-4 mb-6">
                            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-xl">
                                {subtitle}
                            </p>
                        </div>

                        {/* Floating White Quick Stats Card */}
                        <div className="w-full max-w-xl bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20 text-slate-800 mb-6 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-300">
                            <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-navy tracking-tight font-mono">
                                        {String(PROGRAMS.length).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Program Unggulan
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Aksi nyata di lapangan
                                    </div>
                                </div>
                                <div className="border-l border-slate-200/80 pl-4">
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-blue tracking-tight font-mono">
                                        {upcomingCount}
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Agenda Mendatang
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Siap diikuti kader
                                    </div>
                                </div>
                                <div className="border-l border-slate-200/80 pl-4">
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-navy tracking-tight font-mono">
                                        50.000+
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Kader Terlatih
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Pelopor P4GN nasional
                                    </div>
                                </div>
                            </div>

                            {/* Card Action Link */}
                            <a
                                href="#program-list"
                                className="pt-3 flex items-center justify-between text-xs font-bold text-kipan-blue hover:text-blue-800 group"
                            >
                                <span>Jelajahi Detail Setiap Program</span>
                                <span className="inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                                    Lihat Program <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </a>
                        </div>

                        {/* Action Buttons Under Card */}
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="#agenda"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                            >
                                <span>Lihat Agenda</span>
                            </a>

                            <a
                                href="/tentang"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                            >
                                <span>Tentang Organisasi</span>
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

                    {/* Right Column: Featured Program Card Slider */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden text-slate-800">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProgram.id}
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    {/* Card Visual Header */}
                                    <div className="relative h-44 overflow-hidden">
                                        <img
                                            src={activeProgram.image}
                                            alt={activeProgram.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-kipan-navy/70 via-transparent to-transparent" />
                                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                            <span className="px-3 py-1 rounded-full bg-kipan-yellow text-kipan-navy text-[11px] font-black">
                                                Program {activeProgram.number}
                                            </span>
                                            <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                                                Unggulan
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-5 right-5">
                                            <div className="text-xs font-bold text-kipan-yellow">
                                                KIPAN Republik Indonesia
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 sm:p-6">
                                        <h3 className="text-base sm:text-lg font-bold text-kipan-navy leading-snug mb-1 line-clamp-2">
                                            {activeProgram.title}
                                        </h3>
                                        <p className="text-xs font-semibold text-slate-500 mb-3">
                                            {activeProgram.subtitle}
                                        </p>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                                            {activeProgram.description}
                                        </p>

                                        {/* Feature Chips */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {activeProgram.features.slice(0, 3).map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-kipan-blue text-[11px] font-semibold"
                                                >
                                                    <CheckCircledIcon className="w-3 h-3" />
                                                    <span className="line-clamp-1">{feature}</span>
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer Controls */}
                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <button
                                                    type="button"
                                                    onClick={prevSlide}
                                                    aria-label="Program sebelumnya"
                                                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-kipan-blue hover:text-kipan-blue hover:scale-105 active:scale-95 flex items-center justify-center text-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                                                >
                                                    <ChevronLeftIcon className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={nextSlide}
                                                    aria-label="Program berikutnya"
                                                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-kipan-blue hover:text-kipan-blue hover:scale-105 active:scale-95 flex items-center justify-center text-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                                                >
                                                    <ChevronRightIcon className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-1.5">
                                                {PROGRAMS.map((program, idx) => (
                                                    <button
                                                        key={program.id}
                                                        type="button"
                                                        onClick={() => setCurrentSlide(idx)}
                                                        aria-label={`Slide ${idx + 1}`}
                                                        className={`h-2 rounded-full transition-all duration-300 ${
                                                            currentSlide === idx
                                                                ? 'w-6 bg-kipan-blue'
                                                                : 'w-2 bg-slate-300 hover:bg-slate-400'
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            <a
                                                href="#program-list"
                                                className="inline-flex items-center gap-1 text-xs font-bold text-kipan-navy hover:text-kipan-blue group transition-colors"
                                            >
                                                <span>Detail</span>
                                                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
