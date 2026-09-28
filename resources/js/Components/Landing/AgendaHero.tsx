import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRightIcon,
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';
import { AGENDA_KEGIATAN } from '@/data/kipan-data';

interface AgendaHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

export default function AgendaHero({ category, title, subtitle }: AgendaHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? AGENDA_KEGIATAN.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === AGENDA_KEGIATAN.length - 1 ? 0 : prev + 1));
    };

    const activeAgenda = AGENDA_KEGIATAN[currentSlide];
    const categoryCount = new Set(AGENDA_KEGIATAN.map((a) => a.category)).size;

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
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 flex flex-col items-start"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-kipan-yellow" />
                            {category}
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                            {title}
                        </h1>

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
                                        {String(AGENDA_KEGIATAN.length).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Agenda Terjadwal
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Siap diikuti kader
                                    </div>
                                </div>
                                <div className="border-l border-slate-200/80 pl-4">
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-blue tracking-tight font-mono">
                                        {String(categoryCount).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Kategori
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Nasional hingga lapangan
                                    </div>
                                </div>
                                <div className="border-l border-slate-200/80 pl-4">
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-navy tracking-tight font-mono">
                                        38
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Provinsi
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Jangkauan aksi nasional
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#agenda-list"
                                className="pt-3 flex items-center justify-between text-xs font-bold text-kipan-blue hover:text-blue-800 group"
                            >
                                <span>Lihat Jadwal Lengkap Kegiatan</span>
                                <span className="inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                                    Lihat Jadwal <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="#agenda-list"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                            >
                                <span>Lihat Jadwal</span>
                            </a>

                            <a
                                href="/program"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                            >
                                <span>Program &amp; Aksi</span>
                            </a>

                            <a
                                href="/pendaftaran"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                            >
                                <span>Daftar Ikut Kegiatan</span>
                                <ArrowRightIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Featured Agenda Card Slider */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden text-slate-800">
                            {/* Card Visual Header */}
                            <div className="relative h-36 bg-gradient-to-r from-blue-900 to-kipan-navy p-5 flex flex-col justify-between overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                                        {activeAgenda.category}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-xs bg-emerald-500 text-white">
                                        {activeAgenda.status}
                                    </span>
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[11px] font-semibold text-blue-100">
                                        Agenda Terdekat
                                    </div>
                                    <div className="text-xs font-bold text-kipan-yellow">
                                        KIPAN Republik Indonesia
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeAgenda.id}
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="p-5 sm:p-6"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-kipan-navy leading-snug mb-3 line-clamp-2">
                                        {activeAgenda.title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-kipan-blue font-semibold">
                                            <CalendarIcon className="w-3.5 h-3.5" />
                                            <span>{activeAgenda.displayDate}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium">
                                            <SewingPinFilledIcon className="w-3.5 h-3.5" />
                                            <span className="line-clamp-1">{activeAgenda.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {activeAgenda.description}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                type="button"
                                                onClick={prevSlide}
                                                aria-label="Agenda sebelumnya"
                                                className="w-8 h-8 rounded-full border border-slate-200 hover:border-kipan-blue hover:text-kipan-blue hover:scale-105 active:scale-95 flex items-center justify-center text-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                                            >
                                                <ChevronLeftIcon className="w-4 h-4" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextSlide}
                                                aria-label="Agenda berikutnya"
                                                className="w-8 h-8 rounded-full border border-slate-200 hover:border-kipan-blue hover:text-kipan-blue hover:scale-105 active:scale-95 flex items-center justify-center text-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                                            >
                                                <ChevronRightIcon className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            {AGENDA_KEGIATAN.map((agenda, idx) => (
                                                <button
                                                    key={agenda.id}
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
                                            href="#agenda-list"
                                            className="inline-flex items-center gap-1 text-xs font-bold text-kipan-navy hover:text-kipan-blue group transition-colors"
                                        >
                                            <span>Detail</span>
                                            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </a>
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
