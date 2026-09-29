import ScrollReveal from '@/Components/Layout/ScrollReveal';
import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import { NEWS_EVENT_ITEMS } from '../../constants/newsEvents';
import NewsEventCard from './NewsEventCard';

export default function NewsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

            const cardWidth = 380;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(
                Math.min(NEWS_EVENT_ITEMS.length - 1, Math.max(0, index)),
            );
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            updateScrollButtons();
            container.addEventListener('scroll', updateScrollButtons, {
                passive: true,
            });
            return () =>
                container.removeEventListener('scroll', updateScrollButtons);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 390;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section
            id="berita-acara"
            className="overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Header with Horizontal Accent Lines */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-10 flex max-w-4xl items-center justify-center gap-4 sm:mb-12">
                        <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
                        <div className="px-4 text-center">
                            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-kipan-blue">
                                Informasi &amp; Agenda
                            </span>
                            <h2 className="text-2xl font-extrabold tracking-tight text-kipan-navy sm:text-3xl lg:text-4xl">
                                Berita dan Acara Terkini
                            </h2>
                        </div>
                        <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
                    </div>
                </ScrollReveal>

                {/* Navigation Bar: Arrow Buttons */}
                <div className="mx-auto mb-6 flex max-w-6xl items-center justify-between px-1">
                    <div className="text-xs font-semibold text-slate-500">
                        Geser untuk melihat publikasi &amp; jadwal kegiatan:
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            aria-label="Geser ke kiri"
                            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                                canScrollLeft
                                    ? 'shadow-xs border-slate-300 bg-white text-kipan-navy hover:bg-kipan-navy hover:text-white'
                                    : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300'
                            }`}
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            aria-label="Geser ke kanan"
                            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                                canScrollRight
                                    ? 'shadow-xs border-slate-300 bg-white text-kipan-navy hover:bg-kipan-navy hover:text-white'
                                    : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300'
                            }`}
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrollable Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="no-scrollbar mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-6 pt-2"
                >
                    {NEWS_EVENT_ITEMS.map((item) => (
                        <NewsEventCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Bottom Pagination Dots & View All Button */}
                <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 px-1 sm:flex-row">
                    <div className="flex items-center gap-1.5">
                        {NEWS_EVENT_ITEMS.slice(0, 5).map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                    if (scrollContainerRef.current) {
                                        scrollContainerRef.current.scrollTo({
                                            left: idx * 390,
                                            behavior: 'smooth',
                                        });
                                    }
                                }}
                                aria-label={`Ke kartu ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    activeIndex === idx
                                        ? 'w-6 bg-kipan-blue'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="/berita"
                            className="shadow-2xs inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-kipan-navy hover:text-white"
                        >
                            <span>Semua Berita</span>
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                        </a>

                        <a
                            href="/agenda"
                            className="shadow-2xs inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-5 py-2.5 text-xs font-bold text-kipan-blue transition-colors hover:bg-kipan-blue hover:text-white"
                        >
                            <span>Semua Acara</span>
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
