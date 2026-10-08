import { HERO_CONTENT } from '@/data/landing-content';
import {
    ArrowRightIcon,
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FEATURED_EVENTS, FeaturedEvent } from '../../constants/featuredEvents';
import AnimatedCounter from './AnimatedCounter';

interface HeroEventCardProps {
    readonly activeEvent: FeaturedEvent;
    readonly currentSlide: number;
    readonly totalSlides: number;
    readonly onPrev: () => void;
    readonly onNext: () => void;
    readonly onSelectSlide: (index: number) => void;
}

function HeroEventCard({
    activeEvent,
    currentSlide,
    totalSlides,
    onPrev,
    onNext,
    onSelectSlide,
}: Readonly<HeroEventCardProps>) {
    const displayImage =
        activeEvent.images && activeEvent.images.length > 0
            ? activeEvent.images[0]
            : activeEvent.image;

    return (
        <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
            {/* Header Banner dengan Gambar Event & Gradient Overlay */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-900 sm:h-52">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeEvent.id}
                        src={displayImage}
                        alt={activeEvent.title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay Gradient agar teks dan badge tetap terbaca jelas */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-black/30" />

                {/* Overlay Konten Header */}
                <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between">
                        <span className="rounded-md bg-blue-900/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-200 backdrop-blur-md">
                            {activeEvent.category}
                        </span>
                        <span
                            className={`shadow-xs rounded-full px-3 py-1 text-[10px] font-bold tracking-wide backdrop-blur-md ${activeEvent.statusColor}`}
                        >
                            {activeEvent.status}
                        </span>
                    </div>

                    {/* Info Header */}
                    <div>
                        <div className="text-[11px] font-semibold text-blue-100 drop-shadow">
                            Agenda Unggulan Nasional
                        </div>
                        <div className="text-xs font-bold text-kipan-yellow drop-shadow">
                            KIPAN Republik Indonesia
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Body dengan Transisi Animasi Antar Event */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeEvent.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                    }}
                    className="p-5 sm:p-6"
                >
                    {/* Title */}
                    <h3 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-kipan-navy sm:text-lg">
                        {activeEvent.title}
                    </h3>

                    {/* Chips: Date & Location/Target */}
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                        <div className="inline-flex items-center gap-1.5 rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 font-semibold text-kipan-blue">
                            <CalendarIcon className="h-3.5 w-3.5" />
                            <span>{activeEvent.date}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700">
                            <PersonIcon className="h-3.5 w-3.5" />
                            <span>{activeEvent.participants}</span>
                        </div>
                    </div>

                    {/* Snippet */}
                    <p className="mb-6 line-clamp-3 text-xs leading-relaxed text-slate-600">
                        {activeEvent.snippet}
                    </p>

                    {/* Footer Controls: Arrows, Dots, and CTA */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                        {/* Slider Arrow Controls */}
                        <div className="flex items-center gap-1.5">
                            <button
                                type="button"
                                onClick={onPrev}
                                aria-label="Agenda sebelumnya"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:scale-105 hover:border-kipan-blue hover:text-kipan-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue active:scale-95"
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                aria-label="Agenda berikutnya"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:scale-105 hover:border-kipan-blue hover:text-kipan-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue active:scale-95"
                            >
                                <ChevronRightIcon className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex items-center gap-1.5">
                            {Array.from({ length: totalSlides }).map((_, idx) => (
                                <button
                                    key={`dot-${idx}`}
                                    type="button"
                                    onClick={() => onSelectSlide(idx)}
                                    aria-label={`Slide ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                                        ? 'w-6 bg-kipan-blue'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Card CTA Button */}
                        <a
                            href={activeEvent.href}
                            className="group inline-flex items-center gap-1 text-xs font-bold text-kipan-navy transition-colors hover:text-kipan-blue"
                        >
                            <span>Detail</span>
                            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) =>
            prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1,
        );
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) =>
            prev === FEATURED_EVENTS.length - 1 ? 0 : prev + 1,
        );
    }, []);

    // Autoplay: berpindah slide otomatis setiap 5 detik (pause saat kursor berada di atas card)
    useEffect(() => {
        if (isPaused || FEATURED_EVENTS.length <= 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const activeEvent = FEATURED_EVENTS[currentSlide];

    return (
        <section
            id="beranda"
            className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-10 pt-20 text-white sm:pb-14 sm:pt-24 lg:pt-28"
        >
            {/* Subtle Youth Network Graphic Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle Diagonal Glows */}
            <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: Official Positioning & Clear CTA */}
                    <div className="flex flex-col items-start lg:col-span-7">
                        {/* Impactful Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            PEMUDA BERGERAK,{' '}
                            <span className="relative inline-block text-kipan-yellow">
                                INDONESIA BERSINAR
                            </span>
                        </motion.h1>

                        {/* Yellow Underline Accent */}
                        <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                        {/* Clear, Trustworthy Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg"
                        >
                            {HERO_CONTENT.subheadline}
                        </motion.p>

                        {/* Primary & Secondary Call to Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mb-8 flex w-full flex-col items-stretch gap-3 sm:mb-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
                        >
                            <a
                                href={HERO_CONTENT.primaryCta.href}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-kipan-yellow px-6 py-3.5 text-center text-xs font-bold text-kipan-navy shadow-md transition-all hover:scale-[1.02] hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow active:scale-95 sm:w-auto sm:text-sm"
                            >
                                <span>{HERO_CONTENT.primaryCta.label}</span>
                                <ArrowRightIcon className="h-4 w-4" />
                            </a>

                            <a
                                href={HERO_CONTENT.secondaryCta.href}
                                className="backdrop-blur-xs shadow-xs inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-center text-xs font-semibold text-white transition-all hover:scale-[1.02] hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 sm:w-auto sm:text-sm"
                            >
                                <span>{HERO_CONTENT.secondaryCta.label}</span>
                            </a>
                        </motion.div>

                        {/* National Scale Metrics Unified Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="w-full max-w-2xl rounded-3xl border border-slate-100 bg-white px-3 py-5 shadow-xl sm:px-6 sm:py-6"
                        >
                            <div className="flex items-center justify-between">
                                {/* Stat 1 */}
                                <div className="flex-1 px-2 text-center">
                                    <div className="font-sans text-xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                        <AnimatedCounter
                                            target={50000}
                                            suffix="+"
                                        />
                                    </div>
                                    <div className="mt-1 text-xs font-normal text-slate-500 sm:text-sm">
                                        Kader Terlatih
                                    </div>
                                </div>

                                {/* Divider 1 */}
                                <div className="h-10 w-px shrink-0 bg-slate-200 sm:h-12" />

                                {/* Stat 2 */}
                                <div className="flex-1 px-2 text-center">
                                    <div className="font-sans text-xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                        <AnimatedCounter target={38} />
                                    </div>
                                    <div className="mt-1 text-xs font-normal text-slate-500 sm:text-sm">
                                        Provinsi
                                    </div>
                                </div>

                                {/* Divider 2 */}
                                <div className="h-10 w-px shrink-0 bg-slate-200 sm:h-12" />

                                {/* Stat 3 */}
                                <div className="flex-1 px-2 text-center">
                                    <div className="font-sans text-xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                        <AnimatedCounter target={514} />
                                    </div>
                                    <div className="mt-1 text-xs font-normal text-slate-500 sm:text-sm">
                                        Kab. &amp; Kota
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Carousel Slide Card with pause on hover */}
                    <div
                        className="flex justify-center lg:col-span-5"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <HeroEventCard
                            activeEvent={activeEvent}
                            currentSlide={currentSlide}
                            totalSlides={FEATURED_EVENTS.length}
                            onPrev={prevSlide}
                            onNext={nextSlide}
                            onSelectSlide={setCurrentSlide}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}