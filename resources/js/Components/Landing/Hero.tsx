import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    ArrowRightIcon,
    ChatBubbleIcon,
    CalendarIcon,
    PersonIcon,
    ExclamationTriangleIcon,
    GlobeIcon,
} from '@radix-ui/react-icons';
import { HERO, COMPANY } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        const target = document.getElementById('berita-terkini') || document.getElementById('agenda');
        target?.scrollIntoView({ behavior: 'smooth' });
    };

    const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        'Halo Sekretariat ' + COMPANY.name + ', saya ingin bertanya seputar kegiatan KIPAN.',
    )}`;

    return (
        <section
            id="beranda"
            className="relative min-h-[100dvh] flex items-center bg-slate-950 overflow-hidden pt-20 lg:pt-0"
        >
            {/* Background image with official civic blue tint (60% dark dominant) */}
            <div className="absolute inset-0">
                <SafeImage
                    src={HERO.backgroundImage}
                    alt="KIPAN Indonesia"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                {/* Vignette & gradient overlays inspired by Jabarprov */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
            </div>

            {/* Left Vertical Social Bar (Radix UI icons & absolute inside Hero) */}
            <div className="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-2.5">
                <a
                    href={COMPANY.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 shadow-md"
                    title="Instagram Resmi KIPAN"
                    aria-label="Instagram KIPAN"
                >
                    <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 shadow-md"
                    title="Konsultasi WhatsApp"
                    aria-label="WhatsApp KIPAN"
                >
                    <ChatBubbleIcon className="w-4 h-4" />
                </a>
                <a
                    href={COMPANY.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 shadow-md"
                    title="Website Resmi KIPAN"
                    aria-label="Website Resmi KIPAN"
                >
                    <GlobeIcon className="w-4 h-4" />
                </a>
            </div>

            {/* Right Vertical Quick Dock (Uniform Jabarprov style with Radix UI icons) */}
            <div className="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-2.5">
                <a
                    href="/kontak"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative border border-blue-400/20"
                    title="Konsultasi & Kontak"
                    aria-label="Konsultasi & Kontak"
                >
                    <ChatBubbleIcon className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Kontak &amp; Konsultasi
                    </span>
                </a>
                <a
                    href="tel:184"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative border border-blue-400/20"
                    title="Call Center BNN 184 (Bebas Pulsa)"
                    aria-label="Call Center BNN 184"
                >
                    <ExclamationTriangleIcon className="w-5 h-5 text-amber-300" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Hotline BNN 184
                    </span>
                </a>
                <a
                    href="/agenda"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative border border-blue-400/20"
                    title="Program Kerja &amp; Aksi P4GN"
                    aria-label="Program Kerja &amp; Aksi P4GN"
                >
                    <CalendarIcon className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Kalender Agenda
                    </span>
                </a>
                <a
                    href="/pengurus"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative border border-blue-400/20"
                    title="Direktori Pengurus"
                    aria-label="Direktori Pengurus"
                >
                    <PersonIcon className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Direktori Pengurus
                    </span>
                </a>
            </div>

            {/* Main Content Area: Zero overlap, no transparent badges */}
            <div className="relative z-10 w-full container mx-auto px-6 sm:px-12 md:pl-28 md:pr-24 lg:pl-32 lg:pr-28 pt-28 sm:pt-36 pb-24 lg:pb-36">
                <div className="max-w-3xl">
                    {/* Headline (Clear and authoritative without transparent badges) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.2] tracking-tight"
                    >
                        Kader Inti Pemuda Anti Narkoba:{' '}
                        <span className="text-sky-400">
                            Garda Terdepan Pemuda Bersinar
                        </span>
                    </motion.h1>

                    {/* Subheadline with Authentic Institutional Context */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl"
                    >
                        Portal resmi koordinasi, edukasi P4GN, dan aksi nyata pemuda binaan Kemenpora RI
                        bersama BNN RI di 38 provinsi dan 514 kabupaten/kota seluruh Indonesia.
                    </motion.p>

                    {/* Interactive Portal Search Bar (Radix UI MagnifyingGlassIcon) */}
                    <motion.form
                        onSubmit={handleSearch}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mt-6 sm:mt-8 max-w-xl"
                    >
                        <div className="flex items-center bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-1.5 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/30 transition-all shadow-xl">
                            <MagnifyingGlassIcon className="w-5 h-5 text-slate-300 ml-3.5 shrink-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari program, modul edukasi P4GN, atau regulasi..."
                                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-300 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
                            >
                                Cari
                            </button>
                        </div>
                    </motion.form>

                    {/* Redesigned CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                    >
                        <a
                            href="/kontak"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <ChatBubbleIcon className="w-4 h-4" />
                            <span>Hubungi Sekretariat</span>
                        </a>
                        <a
                            href="/tentang"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-medium px-5 py-2.5 sm:py-3 rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <span>Profil Organisasi</span>
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </motion.div>

                    {/* Clean Horizontal Reach Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10"
                    >
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                38 Provinsi
                            </div>
                            <div className="text-[11px] sm:text-xs text-sky-200 mt-0.5">
                                Jangkauan Nasional
                            </div>
                        </div>
                        <div className="w-px h-8 bg-white/15 hidden sm:block" />
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                514 Kab/Kota
                            </div>
                            <div className="text-[11px] sm:text-xs text-sky-200 mt-0.5">
                                Seluruh Wilayah
                            </div>
                        </div>
                        <div className="w-px h-8 bg-white/15 hidden sm:block" />
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                20.000+
                            </div>
                            <div className="text-[11px] sm:text-xs text-sky-200 mt-0.5">
                                Kader Inti Pemuda
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
