import { useState, useRef, useEffect } from 'react';
import {
    CalendarIcon,
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import ScrollReveal from './ScrollReveal';

interface NewsEventCard {
    id: string;
    type: 'BERITA' | 'ACARA';
    badgeColor: string;
    category: string;
    title: string;
    date: string;
    href: string;
    posterTheme: string;
    posterHighlight: string;
    posterSubtitle: string;
}

const NEWS_EVENT_ITEMS: NewsEventCard[] = [
    {
        id: 'ne-1',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Wirausaha Pemuda',
        title: 'PENGUMUMAN 100 PESERTA TERPILIH PROGRAM PELATIHAN WIRAUSAHA PEMUDA KIPAN 2026',
        date: '14 November 2026',
        href: '/berita',
        posterTheme: 'from-[#0D3F70] via-[#0E5B99] to-blue-900',
        posterHighlight: '100 PESERTA TERPILIH',
        posterSubtitle: 'Pelatihan Wirausaha Pemuda Mandiri',
    },
    {
        id: 'ne-2',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Sertifikasi Kompetensi',
        title: 'PENGUMUMAN PESERTA FASE 2 SERTIFIKASI ADVOKASI P4GN & DETEKSI DINI PEMUDA',
        date: '13 November 2026',
        href: '/berita',
        posterTheme: 'from-[#061C33] via-[#0D3F70] to-[#0E6CAC]',
        posterHighlight: 'PESERTA FASE 2',
        posterSubtitle: 'Sertifikasi Advokasi Pemuda Resmi',
    },
    {
        id: 'ne-3',
        type: 'ACARA',
        badgeColor: 'bg-amber-500 text-white font-bold',
        category: 'Pertukaran Pemuda',
        title: 'SELEKSI CALON PESERTA PERTUKARAN PEMUDA BERSINAR TINGKAT NASIONAL 2026',
        date: '26 September 2026',
        href: '/program',
        posterTheme: 'from-blue-950 via-slate-900 to-[#0D3F70]',
        posterHighlight: 'PERTUKARAN PEMUDA',
        posterSubtitle: 'Pendaftaran Delegasi 38 Provinsi',
    },
    {
        id: 'ne-4',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Kaderisasi Nasional',
        title: 'PENGUKUHAN KADER INTI PEMUDA ANTI NARKOBA NASIONAL DI JAKARTA PUSAT',
        date: '24 September 2026',
        href: '/berita',
        posterTheme: 'from-[#0D3F70] to-[#082847]',
        posterHighlight: 'PENGUKUHAN KADER',
        posterSubtitle: 'Mandat Penggerak Pemuda se-Nusantara',
    },
    {
        id: 'ne-5',
        type: 'ACARA',
        badgeColor: 'bg-amber-500 text-white font-bold',
        category: 'Deklarasi Akbar',
        title: 'APEL HARI SUMPAH PEMUDA & DEKLARASI PEMUDA BERSINAR SE-INDONESIA 2026',
        date: '28 Oktober 2026',
        href: '/program',
        posterTheme: 'from-[#0A335C] via-blue-900 to-indigo-950',
        posterHighlight: 'HARI SUMPAH PEMUDA',
        posterSubtitle: 'Deklarasi Pemuda Bersih Narkoba',
    },
    {
        id: 'ne-6',
        type: 'BERITA',
        badgeColor: 'bg-kipan-blue text-white',
        category: 'Edukasi Sekolah',
        title: 'KIPAN GOES TO SCHOOL: SOSIALISASI P4GN MASIF DI 50 SEKOLAH MENENGAH',
        date: '21 September 2026',
        href: '/berita',
        posterTheme: 'from-blue-900 to-slate-900',
        posterHighlight: 'GOES TO SCHOOL',
        posterSubtitle: 'Penyuluhan 8.000+ Pelajar Remaja',
    },
    {
        id: 'ne-7',
        type: 'ACARA',
        badgeColor: 'bg-amber-500 text-white font-bold',
        category: 'Jambore Relawan',
        title: 'JAMBORE RELAWAN PEMUDA BERSINAR SE-INDONESIA 2026 DI BANDUNG JAWA BARAT',
        date: '10 - 12 November 2026',
        href: '/program',
        posterTheme: 'from-[#0D3F70] via-blue-950 to-slate-900',
        posterHighlight: 'JAMBORE RELAWAN',
        posterSubtitle: 'Konsolidasi 1.500 Kader Pemuda',
    },
];

export default function NewsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

            // Compute approx active card
            const cardWidth = 380;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(NEWS_EVENT_ITEMS.length - 1, Math.max(0, index)));
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            updateScrollButtons();
            container.addEventListener('scroll', updateScrollButtons, { passive: true });
            return () => container.removeEventListener('scroll', updateScrollButtons);
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
        <section id="berita-acara" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Header with Horizontal Accent Lines (Youth Innovation Style) */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
                        <div className="h-px bg-slate-200 flex-1 hidden sm:block" />
                        <div className="text-center px-4">
                            <span className="text-xs font-bold text-kipan-blue uppercase tracking-widest block mb-1">
                                Informasi &amp; Agenda
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                                Berita dan Acara Terkini
                            </h2>
                        </div>
                        <div className="h-px bg-slate-200 flex-1 hidden sm:block" />
                    </div>
                </ScrollReveal>

                {/* Navigation Bar: Arrow Buttons & View All Link */}
                <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 px-1">
                    <div className="text-xs font-semibold text-slate-500">
                        Geser untuk melihat publikasi &amp; jadwal kegiatan:
                    </div>

                    {/* Scroll Control Arrows */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            aria-label="Geser ke kiri"
                            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                                canScrollLeft
                                    ? 'bg-white border-slate-300 text-kipan-navy hover:bg-kipan-navy hover:text-white shadow-xs'
                                    : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                            }`}
                        >
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>

                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            aria-label="Geser ke kanan"
                            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                                canScrollRight
                                    ? 'bg-white border-slate-300 text-kipan-navy hover:bg-kipan-navy hover:text-white shadow-xs'
                                    : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                            }`}
                        >
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrollable Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1 no-scrollbar max-w-6xl mx-auto"
                >
                    {NEWS_EVENT_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="w-[290px] sm:w-[340px] lg:w-[365px] shrink-0 snap-start bg-white border border-slate-200/90 rounded-[22px] overflow-hidden flex flex-col justify-between shadow-xs hover:border-kipan-blue hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            {/* Card Poster Header (Like Youth Innovation Card Poster) */}
                            <div
                                className={`h-[200px] sm:h-[220px] w-full relative overflow-hidden bg-gradient-to-br ${item.posterTheme} p-5 flex flex-col justify-between text-white`}
                            >
                                {/* Subtle Grid Graphic Overlay */}
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                                {/* Top Row: Pill Badge ("BERITA" or "ACARA") + Logo */}
                                <div className="relative z-10 flex items-center justify-between">
                                    <span
                                        className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${item.badgeColor}`}
                                    >
                                        {item.type}
                                    </span>

                                    <div className="w-7 h-7 rounded-full bg-white p-0.5 shrink-0 shadow-sm">
                                        <img
                                            src="/logo-kipan.jpg"
                                            alt="KIPAN"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* Poster Main Text / Visual Highlight */}
                                <div className="relative z-10 my-auto text-center py-2">
                                    <div className="text-xs font-bold text-blue-200 tracking-wider uppercase mb-1">
                                        {item.category}
                                    </div>
                                    <div className="text-lg sm:text-xl font-black text-kipan-yellow tracking-tight leading-snug drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                                        {item.posterHighlight}
                                    </div>
                                    <div className="text-[11px] text-white/90 mt-1">
                                        {item.posterSubtitle}
                                    </div>
                                </div>

                                {/* Poster Footer Accent */}
                                <div className="relative z-10 flex items-center justify-between text-[10px] text-blue-200/80 pt-2 border-t border-white/10">
                                    <span>KIPAN RI</span>
                                    <span>P4GN Pemuda</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    {/* Date */}
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-2.5">
                                        <CalendarIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                        <span>{item.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm sm:text-base font-bold text-kipan-navy group-hover:text-kipan-blue transition-colors leading-snug line-clamp-2 uppercase tracking-tight mb-4">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Action Link */}
                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <a
                                        href={item.href}
                                        className="text-xs font-bold text-kipan-blue group-hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                                    >
                                        <span>Baca Selengkapnya</span>
                                        <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                                    </a>

                                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Pagination Dots & View All Button */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto px-1">
                    {/* Indicators */}
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

                    {/* View All Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="/berita"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-kipan-navy hover:text-white text-xs font-bold text-slate-700 transition-colors shadow-2xs"
                        >
                            <span>Semua Berita</span>
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                        </a>

                        <a
                            href="/program"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-50 hover:bg-kipan-blue hover:text-white text-xs font-bold text-kipan-blue transition-colors shadow-2xs"
                        >
                            <span>Semua Acara</span>
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
