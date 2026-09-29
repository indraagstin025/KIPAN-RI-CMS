import { HERO_CONTENT } from '@/data/landing-content';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FEATURED_EVENTS } from '../../constants/featuredEvents';
import AnimatedCounter from './AnimatedCounter';
import HeroEventCard from './HeroEventCard';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1,
        );
    };

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === FEATURED_EVENTS.length - 1 ? 0 : prev + 1,
        );
    };

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

                        {/* National Scale Metrics Unified Card (Reference Style) */}
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

                    {/* Right Column: Carousel Slide Card */}
                    <div className="flex justify-center lg:col-span-5">
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
