import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IdCardIcon,
    FileTextIcon,
    GlobeIcon,
    HeartIcon,
    RocketIcon,
    ArrowRightIcon,
    CheckCircledIcon,
} from '@radix-ui/react-icons';
import ScrollReveal from './ScrollReveal';

interface AccessPillar {
    id: string;
    icon: typeof IdCardIcon;
    accessTag: string;
    cardTitle: string;
    headline: string;
    subtitle: string;
    actionLabel: string;
    actionHref: string;
    posterTag: string;
    posterTitleLine1: string;
    posterTitleLine2: string;
    posterSubtitle: string;
    badgeText: string;
}

const PILLARS: AccessPillar[] = [
    {
        id: 'kaderisasi',
        icon: IdCardIcon,
        accessTag: 'AKSES',
        cardTitle: 'Kaderisasi Inti',
        headline: 'Berdampak Nyata Menjadi Kader Pelopor',
        subtitle:
            'Ikuti pendidikan dan pelatihan intensif Kader Inti Pemuda Anti Narkoba (KIPAN) binaan Kemenpora & BNN RI untuk mencetak agen perubahan berintegritas dan bersertifikat resmi di daerahmu.',
        actionLabel: 'Daftar Pendidikan Kader',
        actionHref: '/kontak',
        posterTag: 'KADERISASI NASIONAL',
        posterTitleLine1: 'BERDAMPAK DENGAN',
        posterTitleLine2: 'BERKONTRIBUSI',
        posterSubtitle: 'Ambil peran aktif dan berikan kontribusi nyata untuk menciptakan lingkungan bersih narkoba.',
        badgeText: '50.000+ Kader Terlatih',
    },
    {
        id: 'edukasi',
        icon: FileTextIcon,
        accessTag: 'AKSES',
        cardTitle: 'Edukasi Sebaya',
        headline: 'Lindungi Generasi Sebaya dari Narkoba',
        subtitle:
            'Akses modul materi penyuluhan interaktif, workshop deteksi dini bahaya narkotika, serta pendampingan pembentukan Satuan Tugas (Satgas) Relawan Pelajar Bersinar di lingkungan SMA/SMK dan perguruan tinggi.',
        actionLabel: 'Pelajari Modul & Program Edukasi',
        actionHref: '/program',
        posterTag: 'EDUKASI & ADVOKASI',
        posterTitleLine1: 'TEMAN SEBAYA',
        posterTitleLine2: 'SALING MENJAGA',
        posterSubtitle: 'Pencegahan berbasis komunitas sebaya (peer-to-peer) yang dekat, relevan, dan terpercaya.',
        badgeText: 'Modul P4GN Resmi',
    },
    {
        id: 'jejaring',
        icon: GlobeIcon,
        accessTag: 'AKSES',
        cardTitle: 'Jejaring Daerah',
        headline: 'Terhubung dengan Jejaring 38 Provinsi',
        subtitle:
            'Jalin komunikasi, kolaborasi lintas wilayah, dan sinergi aksi nyata bersama dewan pengurus serta koordinator wilayah KIPAN yang tersebar aktif di 38 provinsi dan 514 kabupaten/kota se-Indonesia.',
        actionLabel: 'Lihat Direktori Koordinator Daerah',
        actionHref: '/tentang/jejaring',
        posterTag: 'JARINGAN NUSANTARA',
        posterTitleLine1: '38 PROVINSI',
        posterTitleLine2: 'SATU GERAKAN',
        posterSubtitle: 'Sinergi pengurus daerah dari Sabang sampai Merauke dalam komitmen Indonesia Bersinar.',
        badgeText: '514 Kab. & Kota',
    },
    {
        id: 'konseling',
        icon: HeartIcon,
        accessTag: 'AKSES',
        cardTitle: 'Konseling Sahabat',
        headline: 'Ruang Aman Konsultasi & Pendampingan',
        subtitle:
            'Layanan pendampingan sebaya (peer-support) yang aman, rahasia, dan tanpa stigma, terhubung langsung ke balai rehabilitasi resmi BNN RI bagi rekan pemuda yang memerlukan bantuan pemulihan.',
        actionLabel: 'Layanan Pendampingan Sahabat',
        actionHref: '/kontak',
        posterTag: 'RUANG AMAN RAHASIA',
        posterTitleLine1: 'PEDULI SEBAYA',
        posterTitleLine2: 'TANPA STIGMA',
        posterSubtitle: 'Dukungan pemulihan dan advokasi rujukan medis profesional bekerja sama dengan BNN RI.',
        badgeText: 'Layanan Rahasia',
    },
    {
        id: 'karya',
        icon: RocketIcon,
        accessTag: 'AKSES',
        cardTitle: 'Karya & Prestasi',
        headline: 'Salurkan Energi ke Prestasi & Wirausaha',
        subtitle:
            'Wadahi potensi kreatif anak muda melalui kompetisi olahraga sehat, festival seni budaya, pelatihan kewirausahaan mandiri, dan berbagai inisiatif sosial positif pemuda bebas narkoba.',
        actionLabel: 'Eksplorasi Program Karya Positif',
        actionHref: '/program',
        posterTag: 'POTENSI & PRESTASI',
        posterTitleLine1: 'BERKARYA HEBAT',
        posterTitleLine2: 'TANPA NARKOBA',
        posterSubtitle: 'Menyalurkan daya cipta, minat olahraga, dan wirausaha pemuda menuju Indonesia Emas 2045.',
        badgeText: 'Aksi Nyata Pemuda',
    },
];

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activePillar = PILLARS[activeIndex];

    return (
        <section id="mengenal-kipan" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: Category Badge, Dynamic Title, Description, Cards, and Action */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* Eyebrow Badge (Animated Reveal) */}
                        <ScrollReveal direction="up" delay={0.05}>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-kipan-navy uppercase tracking-wider mb-4">
                                <span className="w-2 h-2 rounded-full bg-kipan-blue" />
                                <span>Mengenal Lebih Dekat</span>
                            </div>
                        </ScrollReveal>

                        {/* Dynamic Headline (Animated with smooth crossfade) */}
                        <div className="min-h-[50px] sm:min-h-[85px] flex items-center mb-4">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activePillar.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="text-2xl sm:text-4xl lg:text-[42px] font-black text-kipan-navy leading-[1.15] tracking-tight"
                                >
                                    {activePillar.headline}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        {/* Dynamic Subtitle */}
                        <div className="min-h-[60px] sm:min-h-[75px] mb-8">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activePillar.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
                                    className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl"
                                >
                                    {activePillar.subtitle}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Interactive Access Cards Grid */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-8">
                            {PILLARS.map((pillar, idx) => {
                                const IconComp = pillar.icon;
                                const isActive = activeIndex === idx;

                                return (
                                    <motion.button
                                        key={pillar.id}
                                        whileHover={{ scale: 1.015 }}
                                        whileTap={{ scale: 0.985 }}
                                        type="button"
                                        onClick={() => setActiveIndex(idx)}
                                        aria-pressed={isActive}
                                        className={`p-3.5 sm:p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue ${
                                            isActive
                                                ? 'bg-kipan-navy text-white shadow-md border-2 border-kipan-blue'
                                                : 'bg-white text-slate-800 border border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 shadow-xs'
                                        }`}
                                    >
                                        {/* Icon Container */}
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                                isActive
                                                    ? 'bg-white/15 text-kipan-yellow'
                                                    : 'bg-blue-50 text-kipan-blue border border-blue-100'
                                            }`}
                                        >
                                            <IconComp className="w-5 h-5" />
                                        </div>

                                        {/* Card Text */}
                                        <div className="flex flex-col leading-tight">
                                            <span
                                                className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                                                    isActive ? 'text-blue-200' : 'text-slate-400'
                                                }`}
                                            >
                                                {pillar.accessTag}
                                            </span>
                                            <span
                                                className={`text-xs sm:text-sm font-bold truncate ${
                                                    isActive ? 'text-white' : 'text-slate-800'
                                                }`}
                                            >
                                                {pillar.cardTitle}
                                            </span>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Bottom CTA for Active Pillar */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                href={activePillar.actionHref}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kipan-blue hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                            >
                                <span>{activePillar.actionLabel}</span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </motion.a>

                            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <CheckCircledIcon className="w-4 h-4 text-kipan-blue shrink-0" />
                                <span>Binaan Kemenpora &amp; BNN RI</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Signature Asymmetrically Curved Visual Poster with AnimatePresence */}
                    <div className="lg:col-span-5 flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar.id}
                                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                                transition={{ duration: 0.38, ease: 'easeOut' }}
                                className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl bg-gradient-to-br from-[#0D3F70] via-[#0E5B99] to-[#0A335C] p-7 sm:p-9 text-white shadow-2xl overflow-hidden flex flex-col justify-between border-2 border-blue-400/20"
                            >
                                {/* Decorative Gold Swoop / Arch */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-kipan-yellow/25 to-transparent rounded-bl-full pointer-events-none" />
                                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

                                {/* Top Row: Category Tag & Badge */}
                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="inline-block text-[11px] font-bold text-kipan-yellow uppercase tracking-wider bg-black/25 backdrop-blur-xs px-3 py-1 rounded-full border border-kipan-yellow/30">
                                        {activePillar.posterTag}
                                    </span>

                                    <span className="text-[11px] font-semibold text-blue-100 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-xs">
                                        {activePillar.badgeText}
                                    </span>
                                </div>

                                {/* Middle Poster Typography */}
                                <div className="relative z-10 my-auto py-6">
                                    <div className="text-xl sm:text-2xl font-black text-kipan-yellow tracking-tight leading-none mb-1">
                                        {activePillar.posterTitleLine1}
                                    </div>
                                    <div className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-none mb-4 uppercase drop-shadow-md">
                                        {activePillar.posterTitleLine2}
                                    </div>
                                    <div className="border-l-2 border-kipan-yellow/80 pl-3">
                                        <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed font-normal">
                                            {activePillar.posterSubtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Row: Official Badges & Action Chip */}
                                <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white p-0.5 shrink-0 shadow-md">
                                            <img
                                                src="/logo-kipan.jpg"
                                                alt="KIPAN RI"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-xs font-bold text-white tracking-wide">
                                                KIPAN RI
                                            </span>
                                            <span className="text-[10px] text-blue-200">
                                                Inpres No. 2/2020
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-kipan-yellow hover:text-white transition-colors">
                                            <span>Pilar Aksi #{activeIndex + 1}</span>
                                            <ArrowRightIcon className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
