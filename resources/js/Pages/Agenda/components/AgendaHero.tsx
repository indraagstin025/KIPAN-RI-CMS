import { AGENDA_KEGIATAN } from '@/data/kipan-data';
import {
    ArrowRightIcon,
    CalendarIcon,
    SewingPinFilledIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

interface AgendaHeroProps {
    readonly category: string;
    readonly title: string;
    readonly subtitle: string;
}

function useCountdown(targetDate: string) {
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    const diff = Math.max(
        0,
        new Date(`${targetDate}T00:00:00`).getTime() - now,
    );

    return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor(diff / 3_600_000) % 24,
        minutes: Math.floor(diff / 60_000) % 60,
        seconds: Math.floor(diff / 1_000) % 60,
    };
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function AgendaHero({
    category,
    title,
    subtitle,
}: Readonly<AgendaHeroProps>) {
    // Agenda terdekat yang belum lewat
    const nearest = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const sorted = [...AGENDA_KEGIATAN].sort((a, b) =>
            a.date.localeCompare(b.date),
        );
        return (
            sorted.find((a) => new Date(`${a.date}T00:00:00`) >= today) ??
            sorted[0]
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
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
                    {/* Left Column: Title & Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col items-start"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100">
                            <span className="h-2 w-2 rounded-full bg-kipan-yellow" />
                            {category}
                        </div>

                        <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                        <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                        <div className="mb-8 border-l-4 border-kipan-yellow pl-4">
                            <p className="max-w-xl text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="/pendaftaran"
                                className="inline-flex items-center gap-2 rounded-full bg-kipan-yellow px-6 py-3 text-xs font-bold text-kipan-navy shadow-md transition-all hover:scale-105 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow active:scale-95"
                            >
                                <span>Daftar Ikut Kegiatan</span>
                                <ArrowRightIcon className="h-3.5 w-3.5" />
                            </a>

                            <a
                                href="#agenda-list"
                                className="backdrop-blur-xs shadow-xs inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-all hover:scale-105 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                            >
                                <span>Lihat Semua Jadwal</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Countdown Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-kipan-yellow">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kipan-yellow opacity-60" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-kipan-yellow" />
                                    </span>
                                    <span>Agenda Terdekat</span>
                                </span>
                                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-bold text-blue-100">
                                    {nearest.category}
                                </span>
                            </div>

                            <h2 className="mb-4 text-xl font-bold leading-snug text-white sm:text-2xl">
                                {nearest.title}
                            </h2>

                            <div className="mb-7 flex flex-wrap gap-2 text-xs">
                                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2.5 py-1.5 font-semibold text-blue-100">
                                    <CalendarIcon className="h-3.5 w-3.5 text-kipan-yellow" />
                                    {nearest.displayDate}
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2.5 py-1.5 font-medium text-blue-100">
                                    <SewingPinFilledIcon className="h-3.5 w-3.5 text-kipan-yellow" />
                                    <span className="line-clamp-1">
                                        {nearest.location}
                                    </span>
                                </span>
                            </div>

                            {/* Countdown boxes */}
                            <div className="grid grid-cols-4 gap-2 sm:gap-3">
                                {units.map((unit) => (
                                    <div
                                        key={unit.label}
                                        className="rounded-2xl bg-white px-2 py-3 text-center shadow-lg sm:py-4"
                                    >
                                        <div
                                            className="font-mono text-2xl font-black tabular-nums text-kipan-navy sm:text-4xl"
                                            aria-live="off"
                                        >
                                            {unit.value}
                                        </div>
                                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                                            {unit.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-5 text-center text-xs text-blue-200/70">
                                Menuju {nearest.displayDate} • {nearest.time}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
