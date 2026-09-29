import {
    ArrowRightIcon,
    CheckCircledIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { PILLARS } from '../../constants/aboutPillars';
import AboutPillarCard from './AboutPillarCard';
import AboutPosterCard from './AboutPosterCard';

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const activePillar = PILLARS[activeIndex];
    const touchStartX = useRef<number | null>(null);

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev < PILLARS.length - 1 ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : PILLARS.length - 1));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 45) {
            handleNext();
        } else if (diff < -45) {
            handlePrev();
        }
        touchStartX.current = null;
    };

    return (
        <section
            id="mengenal-kipan"
            className="overflow-hidden border-b border-slate-200 bg-white py-12 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* ============================================================== */}
                {/* 1. MOBILE & TABLET LAYOUT (< lg): Matches User's Reference    */}
                {/* ============================================================== */}
                <div className="block lg:hidden">
                    {/* Top: Dynamic Heading & Subtitle */}
                    <div className="mb-6 min-h-[90px] text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25 }}
                            >
                                <h2 className="text-2xl font-black leading-tight tracking-tight text-kipan-navy sm:text-3xl">
                                    {activePillar.headline}
                                </h2>
                                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                                    {activePillar.subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Middle: Option Card Slider (Positioned Outside Card) */}
                    <div className="relative w-full">
                        <div
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            className="relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={activePillar.id}
                                    custom={direction}
                                    initial={{
                                        opacity: 0,
                                        x: direction > 0 ? 30 : -30,
                                    }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{
                                        opacity: 0,
                                        x: direction > 0 ? -30 : 30,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: 'easeOut',
                                    }}
                                    className="flex items-center justify-between rounded-2xl border border-blue-400/25 bg-[#0D3F70] p-4 text-white shadow-md transition-shadow"
                                >
                                    {/* Left: Icon Box + AKSES + Title */}
                                    <div className="flex items-center gap-3.5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-kipan-yellow shadow-inner">
                                            <activePillar.icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                                                {activePillar.accessTag}
                                            </span>
                                            <span className="text-base font-bold text-white">
                                                {activePillar.cardTitle}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Next & Prev Arrows */}
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={handlePrev}
                                            aria-label="Opsi sebelumnya"
                                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-90"
                                        >
                                            <ChevronLeftIcon className="h-4 w-4" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            aria-label="Opsi berikutnya"
                                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-90"
                                        >
                                            <ChevronRightIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slidebar Dots Indicator */}
                        <div className="mt-3 flex items-center justify-center gap-1.5">
                            {PILLARS.map((p, idx) => (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => {
                                        setDirection(
                                            idx > activeIndex ? 1 : -1
                                        );
                                        setActiveIndex(idx);
                                    }}
                                    aria-label={`Pilih ${p.cardTitle}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        activeIndex === idx
                                            ? 'w-6 bg-kipan-navy'
                                            : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom: Signature Graphic Poster Card */}
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        className="my-6 flex w-full justify-center"
                    >
                        <AboutPosterCard
                            pillar={activePillar}
                            index={activeIndex}
                        />
                    </div>

                    {/* Action Button for Active Pillar */}
                    <div className="flex w-full flex-col items-stretch gap-3">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={activePillar.actionHref}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-kipan-blue px-6 py-3.5 text-center text-xs font-bold text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                        >
                            <span>{activePillar.actionLabel}</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </motion.a>

                        <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500">
                            <CheckCircledIcon className="h-4 w-4 shrink-0 text-kipan-blue" />
                            <span>Binaan Kemenpora &amp; BNN RI</span>
                        </div>
                    </div>
                </div>

                {/* ============================================================== */}
                {/* 2. DESKTOP LAYOUT (>= lg): Original 2-Column Showcase */}
                {/* ============================================================== */}
                <div className="hidden items-center gap-10 lg:grid lg:grid-cols-12 lg:gap-12">
                    {/* Left Column: Dynamic Title, Subtitle, 2-Col Cards, CTA */}
                    <div className="flex flex-col items-start lg:col-span-7">
                        {/* Dynamic Headline */}
                        <div className="mb-4 flex min-h-[85px] items-center">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activePillar.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: 'easeOut',
                                    }}
                                    className="text-4xl font-black leading-[1.15] tracking-tight text-kipan-navy lg:text-[42px]"
                                >
                                    {activePillar.headline}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        {/* Dynamic Subtitle */}
                        <div className="mb-8 min-h-[75px]">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activePillar.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: 'easeOut',
                                        delay: 0.05,
                                    }}
                                    className="max-w-2xl text-base leading-relaxed text-slate-600"
                                >
                                    {activePillar.subtitle}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Desktop 2-Column Grid */}
                        <div className="mb-8 grid w-full grid-cols-2 gap-3.5">
                            {PILLARS.map((pillar, idx) => (
                                <AboutPillarCard
                                    key={pillar.id}
                                    pillar={pillar}
                                    isActive={activeIndex === idx}
                                    onClick={() => setActiveIndex(idx)}
                                />
                            ))}
                        </div>

                        {/* Desktop Bottom CTA */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                href={activePillar.actionHref}
                                className="inline-flex items-center gap-2 rounded-full bg-kipan-blue px-6 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                            >
                                <span>{activePillar.actionLabel}</span>
                                <ArrowRightIcon className="h-4 w-4" />
                            </motion.a>

                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                <CheckCircledIcon className="h-4 w-4 shrink-0 text-kipan-blue" />
                                <span>Binaan Kemenpora &amp; BNN RI</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Signature Asymmetrically Curved Visual Poster */}
                    <div className="flex justify-center lg:col-span-5">
                        <AboutPosterCard
                            pillar={activePillar}
                            index={activeIndex}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
