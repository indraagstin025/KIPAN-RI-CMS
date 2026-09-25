import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRightIcon,
    CalendarIcon,
    PersonIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckCircledIcon,
} from '@radix-ui/react-icons';
import { HERO_CONTENT } from '@/data/landing-content';

interface FeaturedEvent {
    id: string;
    status: string;
    statusColor: string;
    category: string;
    title: string;
    date: string;
    participants: string;
    location: string;
    snippet: string;
    image: string;
    href: string;
}

const FEATURED_EVENTS: FeaturedEvent[] = [
    {
        id: 'event-1',
        status: 'Pendaftaran Dibuka',
        statusColor: 'bg-emerald-500 text-white',
        category: 'Kaderisasi Nasional',
        title: 'Pelatihan Nasional Kader Inti Pemuda Anti Narkoba 2026',
        date: '24 - 28 Oktober 2026',
        participants: '38 Delegasi Provinsi',
        location: 'Jakarta Pusat',
        snippet:
            'Pembekalan terpadu wawasan bahaya narkotika, advokasi regulasi P4GN, dan strategi aksi pencegahan terpadu di lingkungan sekolah dan kampus.',
        image: '/logo-kipan.jpg',
        href: '/agenda',
    },
    {
        id: 'event-2',
        status: 'Segera Hadir',
        statusColor: 'bg-kipan-blue text-white',
        category: 'Kolaborasi Nusantara',
        title: 'Jambore Relawan Pemuda Bersinar se-Indonesia',
        date: '10 - 12 November 2026',
        participants: '1.500 Kader Pemuda',
        location: 'Bandung, Jawa Barat',
        snippet:
            'Konsolidasi akbar kader pelopor P4GN, festival inovasi karya kreatif anak muda, olahraga sehat, dan deklarasi pemuda bersih narkoba.',
        image: '/logo-kipan.jpg',
        href: '/agenda',
    },
    {
        id: 'event-3',
        status: 'Program Berjalan',
        statusColor: 'bg-amber-500 text-white',
        category: 'Edukasi Sebaya',
        title: 'Roadshow Kampus & Sekolah Bersinar (Bersih Narkoba)',
        date: 'Setiap Bulan Berjalan',
        participants: 'Pelajar & Mahasiswa',
        location: '514 Kabupaten & Kota',
        snippet:
            'Aksi sosialisasi tatap muka peer-to-peer dan pembentukan gugus tugas relawan anti narkoba di lingkungan SMA/SMK dan perguruan tinggi.',
        image: '/logo-kipan.jpg',
        href: '/agenda',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === FEATURED_EVENTS.length - 1 ? 0 : prev + 1));
    };

    const activeEvent = FEATURED_EVENTS[currentSlide];

    return (
        <section
            id="beranda"
            className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] text-white overflow-hidden border-b border-blue-900/50"
        >
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
                    {/* Left Column: Typography, Value Proposition, Stats Card, CTAs (Animated Entrance) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 flex flex-col items-start"
                    >
                        {/* Eyebrow Pill */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-bold text-blue-100 tracking-wider mb-5 backdrop-blur-xs">
                            <span className="w-2 h-2 rounded-full bg-kipan-yellow animate-pulse" />
                            <span>{HERO_CONTENT.eyebrow}</span>
                        </div>

                        {/* Main Headline (Youth Innovation Scale) */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-2">
                            PEMUDA BERGERAK,
                        </h1>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-kipan-yellow leading-[1.1] tracking-tight mb-6">
                            INDONESIA BERSINAR
                        </h2>

                        {/* Subheadline with Vertical Gold Accent Bar */}
                        <div className="border-l-4 border-kipan-yellow pl-4 mb-6">
                            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-xl">
                                {HERO_CONTENT.subheadline}
                            </p>
                        </div>

                        {/* Floating White Quick Stats Card (Signature Youth Innovation Element with Hover Elevation) */}
                        <div className="w-full max-w-xl bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20 text-slate-800 mb-6 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-300">
                            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-navy tracking-tight">
                                        50.000+
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Kader Inti Terlatih
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Pelopor P4GN di Lingkungan Pemuda
                                    </div>
                                </div>
                                <div className="border-l border-slate-200/80 pl-4">
                                    <div className="text-2xl sm:text-3xl font-extrabold text-kipan-blue tracking-tight">
                                        38 Provinsi
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                                        Jejaring Nasional
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        514 Pengurus Kab. &amp; Kota
                                    </div>
                                </div>
                            </div>

                            {/* Card Action Link */}
                            <a
                                href="/tentang"
                                className="pt-3 flex items-center justify-between text-xs font-bold text-kipan-blue hover:text-blue-800 group"
                            >
                                <span>Jelajahi Profil Gerakan &amp; Legalitas KIPAN</span>
                                <span className="inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                                    Pelajari Selengkapnya <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </a>
                        </div>

                        {/* Action Buttons Under Card (Youth Innovation Outlined Pills) */}
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="/tentang"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <span>Tentang Organisasi</span>
                            </a>

                            <a
                                href="/agenda"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <span>Jadwal Agenda</span>
                            </a>

                            <a
                                href="/kontak"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                            >
                                <span>Daftar Jadi Kader</span>
                                <ArrowRightIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Featured Event & Agenda Card Slider (with Animated Slide Transitions) */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden text-slate-800">
                            {/* Card Visual Header with Badge */}
                            <div className="relative h-44 bg-gradient-to-r from-blue-900 to-kipan-navy p-5 flex flex-col justify-between overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                                {/* Top Badges */}
                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                                        {activeEvent.category}
                                    </span>
                                    <span
                                        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-xs ${activeEvent.statusColor}`}
                                    >
                                        {activeEvent.status}
                                    </span>
                                </div>

                                {/* Logo / Title in Header */}
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white p-0.5 shrink-0 shadow-md">
                                        <img
                                            src={activeEvent.image}
                                            alt={activeEvent.title}
                                            className="w-full h-full object-cover rounded-full"
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
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="p-5 sm:p-6"
                                >
                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-bold text-kipan-navy leading-snug mb-3 line-clamp-2">
                                        {activeEvent.title}
                                    </h3>

                                    {/* Chips: Date & Location/Target */}
                                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-kipan-blue font-semibold">
                                            <CalendarIcon className="w-3.5 h-3.5" />
                                            <span>{activeEvent.date}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium">
                                            <PersonIcon className="w-3.5 h-3.5" />
                                            <span>{activeEvent.participants}</span>
                                        </div>
                                    </div>

                                    {/* Snippet */}
                                    <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {activeEvent.snippet}
                                    </p>

                                    {/* Footer Controls: Arrows, Dots, and CTA */}
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        {/* Slider Arrow Controls */}
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

                                        {/* Pagination Dots */}
                                        <div className="flex items-center gap-1.5">
                                            {FEATURED_EVENTS.map((event, idx) => (
                                                <button
                                                    key={event.id}
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

                                        {/* Card CTA Button */}
                                        <a
                                            href={activeEvent.href}
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

                {/* Bottom Institutional Partner Ticker (Animated on Viewport Entrance) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-xs"
                >
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-white p-0.5 shrink-0 shadow-xs">
                                <img
                                    src="/logo-kipan.jpg"
                                    alt="KIPAN"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <span className="font-bold text-white tracking-wide">KIPAN RI</span>
                        </div>

                        <div className="hidden sm:block w-px h-5 bg-white/20" />

                        <div className="flex items-center gap-2 text-blue-100">
                            <CheckCircledIcon className="w-4 h-4 text-kipan-yellow shrink-0" />
                            <span>Binaan Resmi Kementerian Pemuda &amp; Olahraga RI (Kemenpora)</span>
                        </div>

                        <div className="hidden sm:block w-px h-5 bg-white/20" />

                        <div className="flex items-center gap-2 text-blue-100">
                            <CheckCircledIcon className="w-4 h-4 text-kipan-yellow shrink-0" />
                            <span>Mitra Pencegahan Badan Narkotika Nasional RI (BNN)</span>
                        </div>
                    </div>

                    <div className="text-[11px] font-medium text-blue-200/80">
                        Dasar Regulasi: <strong className="text-white">Inpres No. 2/2020 (P4GN)</strong>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
