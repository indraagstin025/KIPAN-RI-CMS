import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    ArrowUpRight,
    Phone,
    ArrowRight,
    ShieldCheck,
    MessageCircle,
    Bell,
    Calendar,
    Users,
    AlertCircle,
    MapPin,
} from 'lucide-react';
import { HERO, COMPANY, STATS } from '@/data/kipan-data';
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

function GlobeIcon({ className = 'w-4 h-4' }: { className?: string }) {
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
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        const target = document.getElementById('berita-terkini') || document.getElementById('informasi');
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

            {/* Left Vertical Social Bar (Jabarprov style) */}
            <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-30 flex-col gap-2.5">
                <a
                    href={COMPANY.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shadow-md"
                    aria-label="Instagram KIPAN"
                >
                    <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shadow-md"
                    aria-label="WhatsApp KIPAN"
                >
                    <MessageCircle className="w-4 h-4" />
                </a>
                <a
                    href={COMPANY.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shadow-md"
                    aria-label="Website Resmi KIPAN"
                >
                    <GlobeIcon className="w-4 h-4" />
                </a>
            </div>

            {/* Right Vertical Quick Dock (Jabarprov style - 30% Blue with 10% Accents) */}
            <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-30 flex-col gap-2.5">
                <a
                    href="#kontak"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative"
                    title="Konsultasi & Kontak"
                    aria-label="Konsultasi & Kontak"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Kontak &amp; Konsultasi
                    </span>
                </a>
                <a
                    href="tel:184"
                    className="w-11 h-11 rounded-xl bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative"
                    title="Call Center BNN 184 (Bebas Pulsa)"
                    aria-label="Call Center BNN 184"
                >
                    <AlertCircle className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Hotline BNN 184
                    </span>
                </a>
                <a
                    href="#informasi"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative"
                    title="Program Kerja &amp; Aksi P4GN"
                    aria-label="Program Kerja &amp; Aksi P4GN"
                >
                    <Calendar className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Program Kerja
                    </span>
                </a>
                <a
                    href="#pengurus"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group relative"
                    title="Direktori Pengurus"
                    aria-label="Direktori Pengurus"
                >
                    <Users className="w-5 h-5" />
                    <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
                        Direktori Pengurus
                    </span>
                </a>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 pt-24 sm:pt-32 pb-24 lg:pb-36">
                <div className="max-w-3xl">
                    {/* Badge with Warm Gold Accent from Logo (10% accent) */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/40 rounded-lg px-3.5 py-1.5 mb-5 shadow-xs"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-blue-100 text-xs sm:text-sm font-medium">
                            {HERO.badge}
                        </span>
                    </motion.div>

                    {/* Headline (Authoritative civic statement like Jabarprov) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.2] tracking-tight"
                    >
                        Kader Inti Pemuda Anti Narkoba:{' '}
                        <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                            Garda Terdepan Pemuda Bersinar
                        </span>
                    </motion.h1>

                    {/* Subheadline with Authentic Institutional Context */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl"
                    >
                        Portal resmi koordinasi, edukasi P4GN, dan aksi nyata pemuda binaan Kemenpora RI
                        bersama BNN RI di 38 provinsi dan 514 kabupaten/kota seluruh Indonesia.
                    </motion.p>

                    {/* Interactive Portal Search Bar (Jabarprov signature feature - 30% Blue CTA) */}
                    <motion.form
                        onSubmit={handleSearch}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mt-6 max-w-xl"
                    >
                        <div className="flex items-center bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl p-1.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30 transition-all shadow-lg">
                            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari program, modul edukasi P4GN, atau regulasi..."
                                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
                            >
                                Cari
                            </button>
                        </div>
                    </motion.form>

                    {/* Popular search pills (Jabarprov signature feature) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-4 flex flex-wrap items-center gap-2"
                    >
                        <span className="text-xs text-slate-400 font-medium mr-1">
                            Pencarian populer:
                        </span>
                        <a
                            href="#informasi"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-blue-600/30 border border-white/15 rounded-lg text-xs text-slate-200 hover:text-white transition-colors"
                        >
                            Program Aksi P4GN <ArrowUpRight className="w-3 h-3 text-sky-400" />
                        </a>
                        <a
                            href="#tentang"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-blue-600/30 border border-white/15 rounded-lg text-xs text-slate-200 hover:text-white transition-colors"
                        >
                            Dasar Hukum Inpres <ArrowUpRight className="w-3 h-3 text-sky-400" />
                        </a>
                        <a
                            href="#struktur"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-blue-600/30 border border-white/15 rounded-lg text-xs text-slate-200 hover:text-white transition-colors"
                        >
                            Hierarki Nasional <ArrowUpRight className="w-3 h-3 text-sky-400" />
                        </a>
                        <a
                            href="#berita-terkini"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-blue-600/30 border border-white/15 rounded-lg text-xs text-slate-200 hover:text-white transition-colors"
                        >
                            Warta Terkini <ArrowUpRight className="w-3 h-3 text-sky-400" />
                        </a>
                    </motion.div>

                    {/* Redesigned CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto"
                    >
                        <a
                            href="#kontak"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>Hubungi Sekretariat</span>
                        </a>
                        <a
                            href="#tentang"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <span>Profil Organisasi</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                    </motion.div>

                    {/* Mini Stats (Institutional reach) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg"
                    >
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-xl sm:text-2xl font-bold text-sky-400">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-400 mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
