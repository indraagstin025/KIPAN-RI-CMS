import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import { SewingPinFilledIcon } from '@radix-ui/react-icons';
import { AGENDA_KEGIATAN } from '@/data/kipan-data';

interface AgendaHeroProps {
    category: string;
    title: string;
    subtitle: string;
}

function useCountdown(targetDate: string) {
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    const diff = Math.max(0, new Date(`${targetDate}T00:00:00`).getTime() - now);

    return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor(diff / 3_600_000) % 24,
        minutes: Math.floor(diff / 60_000) % 60,
        seconds: Math.floor(diff / 1_000) % 60,
    };
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function AgendaHero({ category, title, subtitle }: AgendaHeroProps) {
    // Agenda terdekat yang belum lewat
    const nearest = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const sorted = [...AGENDA_KEGIATAN].sort((a, b) => a.date.localeCompare(b.date));
        return (
            sorted.find((a) => new Date(`${a.date}T00:00:00`) >= today) ?? sorted[0]
        );
    }, []);

    const { days, hours, minutes, seconds } = useCountdown(nearest.date);

    const units = [
        { value: pad(days), label: 'Hari' },
        { value: pad(hours), label: 'Jam' },
        { value: pad(minutes), label: 'Menit' },
        { value: pad(seconds), label: 'Detik' },
    ];

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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
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
                        <div className="h-1.5 w-24 bg-kipan-yellow rounded-full mt-4 mb-6" />

                        <div className="border-l-4 border-kipan-yellow pl-4 mb-8">
                            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-xl">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="/pendaftaran"
                                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                            >
                                <span>Daftar Ikut Kegiatan</span>
                                <ArrowRightIcon className="w-3.5 h-3.5" />
                            </a>

                            <a
                                href="#agenda-list"
                                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
                            >
                                <span>Lihat Semua Jadwal</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Countdown Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl">
                            <div className="flex items-center justify-between gap-3 mb-5">
                                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-kipan-yellow">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kipan-yellow opacity-60" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-kipan-yellow" />
                                    </span>
                                    Agenda Terdekat
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[11px] font-bold text-blue-100">
                                    {nearest.category}
                                </span>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
                                {nearest.title}
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-7 text-xs">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 border border-white/15 rounded-md text-blue-100 font-semibold">
                                    <CalendarIcon className="w-3.5 h-3.5 text-kipan-yellow" />
                                    {nearest.displayDate}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 border border-white/15 rounded-md text-blue-100 font-medium">
                                    <SewingPinFilledIcon className="w-3.5 h-3.5 text-kipan-yellow" />
                                    <span className="line-clamp-1">{nearest.location}</span>
                                </span>
                            </div>

                            {/* Countdown boxes */}
                            <div className="grid grid-cols-4 gap-2 sm:gap-3">
                                {units.map((unit) => (
                                    <div
                                        key={unit.label}
                                        className="bg-white rounded-2xl px-2 py-3 sm:py-4 text-center shadow-lg"
                                    >
                                        <div
                                            className="text-2xl sm:text-4xl font-black text-kipan-navy font-mono tabular-nums"
                                            aria-live="off"
                                        >
                                            {unit.value}
                                        </div>
                                        <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-1">
                                            {unit.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-xs text-blue-200/70 mt-5">
                                Menuju {nearest.displayDate} • {nearest.time}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
