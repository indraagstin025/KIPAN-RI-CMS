import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowTopRightIcon,
    ReaderIcon,
    SewingPinIcon,
    ChevronRightIcon as SmallChevronRightIcon,
} from '@radix-ui/react-icons';
import { Link } from '@inertiajs/react';
import { BERITA, type Berita } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

export default function BeritaSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth * 0.75;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            setTimeout(checkScroll, 350);
        }
    };

    return (
        <section
            id="berita-terkini"
            className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header: Title + Slider Controls + Link to /berita */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-slate-200 shadow-xs mb-2.5">
                            <ReaderIcon className="w-3.5 h-3.5 text-blue-600" />
                            Slidebar Warta Terkini
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Kabar &amp; Liputan Gerakan Pemuda
                        </h2>
                        <p className="mt-1.5 text-slate-600 text-sm leading-relaxed max-w-xl">
                            Geser untuk menyimak rilis agenda dan liputan kegiatan kader KIPAN terbaru di seluruh pelosok negeri.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
                        {/* Slide Navigation Buttons */}
                        <div className="flex items-center gap-1.5">
                            <button
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                aria-label="Geser ke kiri"
                                className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-xs"
                            >
                                <ChevronLeftIcon className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                aria-label="Geser ke kanan"
                                className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-xs"
                            >
                                <ChevronRightIcon className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Link to Full News Page */}
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors"
                        >
                            <span>Lihat Semua Berita</span>
                            <ArrowTopRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Horizontal Scrollable Slidebar Carousel */}
                <div
                    ref={sliderRef}
                    onScroll={checkScroll}
                    className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {BERITA.map((item) => (
                        <div
                            key={item.id}
                            className="snap-start shrink-0 w-[290px] sm:w-[340px] lg:w-[380px] bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
                        >
                            <div>
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    <SafeImage
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-blue-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-slate-200/80 shadow-xs">
                                        {item.category}
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-slate-950/75 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                                        <SewingPinIcon className="w-3 h-3 text-sky-400" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-5">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                                        <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                <Link
                                    href="/berita"
                                    className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 transition-colors"
                                >
                                    <span>Baca Liputan</span>
                                    <SmallChevronRightIcon className="w-3.5 h-3.5" />
                                </Link>
                                <span className="text-[11px] text-slate-400 font-medium">
                                    Siaran Pers
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
