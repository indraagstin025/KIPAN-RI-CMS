import {
    ArrowRightIcon,
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { FeaturedEvent } from '../../constants/featuredEvents';

interface HeroEventCardProps {
    readonly activeEvent: FeaturedEvent;
    readonly currentSlide: number;
    readonly totalSlides: number;
    readonly onPrev: () => void;
    readonly onNext: () => void;
    readonly onSelectSlide: (index: number) => void;
}

export default function HeroEventCard({
    activeEvent,
    currentSlide,
    totalSlides,
    onPrev,
    onNext,
    onSelectSlide,
}: Readonly<HeroEventCardProps>) {
    return (
        <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
            {/* Header Banner */}
            <div className="relative flex h-44 flex-col justify-between overflow-hidden bg-gradient-to-r from-blue-900 to-kipan-navy p-5">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-20 [background-size:16px_16px]" />

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                        {activeEvent.category}
                    </span>
                    <span
                        className={`shadow-xs rounded-full px-3 py-1 text-[10px] font-bold tracking-wide ${activeEvent.statusColor}`}
                    >
                        {activeEvent.status}
                    </span>
                </div>

                {/* Logo / Title in Header */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-white p-0.5 shadow-md">
                        <img
                            src={activeEvent.image}
                            alt={activeEvent.title}
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-[11px] font-semibold text-blue-100">
                            Agenda Unggulan Nasional
                        </div>
                        <div className="text-xs font-bold text-kipan-yellow">
                            KIPAN Republik Indonesia
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Body with Smooth Animated Transition */}
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
                            {Array.from({ length: totalSlides }).map(
                                (_, idx) => (
                                    <button
                                        key={`dot-${idx}`}
                                        type="button"
                                        onClick={() => onSelectSlide(idx)}
                                        aria-label={`Slide ${idx + 1}`}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            currentSlide === idx
                                                ? 'w-6 bg-kipan-blue'
                                                : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    />
                                ),
                            )}
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
