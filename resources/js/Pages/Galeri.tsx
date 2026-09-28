import { useMemo, useState } from 'react';
import { Head } from '@inertiajs/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MapPin, Play } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function YoutubeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    );
}
import Footer from '@/Components/Landing/Footer';
import Navbar from '@/Components/Landing/Navbar';
import GaleriHero from '@/Components/Landing/GaleriHero';
import ScrollReveal from '@/Components/Landing/ScrollReveal';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data/kipan-data';

interface GaleriPageProps {
    title: string;
    subtitle: string;
    category: string;
}

const INSTAGRAM_URL = 'https://www.instagram.com/kipan.jabar/';
const INSTAGRAM_HANDLE = '@kipan.jabar';

const VIDEOS = [
    {
        id: 'mM_GoJ5Pi1I',
        title: 'Jambore KIPAN Jember 2025 — Bersih Tanpa Narkoba (Bersinar)',
        tag: 'Jambore Daerah',
    },
    {
        id: 'IHTqoALFIiE',
        title: '150 Pemuda Polman Dibekali Pelatihan Kader Anti Narkoba',
        tag: 'Pelatihan Kader',
    },
    {
        id: '5mPBIlzla-M',
        title: 'KIPAN Mamuju: Sosialisasi P4GN Kader Inti Pemuda Anti Narkoba',
        tag: 'Sosialisasi',
    },
];

const YOUTUBE_SEARCH_URL =
    'https://www.youtube.com/results?search_query=kipan+kader+inti+pemuda+anti+narkoba';

export default function Galeri({ title, subtitle, category }: GaleriPageProps) {
    const [activeCategory, setActiveCategory] = useState<string>('Semua');

    const filtered = useMemo(
        () =>
            activeCategory === 'Semua'
                ? GALLERY_ITEMS
                : GALLERY_ITEMS.filter((g) => g.category === activeCategory),
        [activeCategory]
    );

    const [featured, ...restVideos] = VIDEOS;
    const igThumbs = GALLERY_ITEMS.slice(0, 6);

    return (
        <>
            <Head title={`${title} — KIPAN Republik Indonesia`} />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-kipan-text-dark">
                <Navbar />

                <main className="flex-1">
                    {/* ===== Hero ===== */}
                    <GaleriHero category={category} title={title} subtitle={subtitle} />

                    {/* ===== Galeri Foto ===== */}
                    <section id="galeri-foto" className="py-16 lg:py-20 scroll-mt-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Dokumentasi
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-3">
                                    Galeri Foto Kegiatan
                                </h2>
                                <p className="text-slate-600 max-w-2xl mb-8">
                                    Momen-momen aksi kader KIPAN di berbagai daerah — saring
                                    berdasarkan jenis kegiatan.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.08}>
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {GALLERY_CATEGORIES.map((cat) => (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                                activeCategory === cat
                                                    ? 'bg-kipan-navy text-white shadow-sm'
                                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-kipan-blue hover:text-kipan-navy'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {filtered.map((item, idx) => (
                                    <ScrollReveal key={item.id} delay={0.05 * (idx % 3)}>
                                        <figure className="group relative h-60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#061C33]/90 via-transparent to-transparent" />
                                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-kipan-yellow text-kipan-navy text-[11px] font-black">
                                                {item.category}
                                            </span>
                                            <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                                                <p className="text-white font-bold leading-snug mb-1">
                                                    {item.title}
                                                </p>
                                                <p className="inline-flex items-center gap-1 text-xs text-blue-200/85">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {item.location}
                                                </p>
                                            </figcaption>
                                        </figure>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {filtered.length === 0 && (
                                <p className="text-center text-slate-500 py-12">
                                    Belum ada foto pada kategori ini.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* ===== Instagram ===== */}
                    <section className="py-16 lg:py-20 bg-white border-y border-kipan-border">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Media Sosial
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-8">
                                    Ikuti Kami di Instagram
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.08}>
                                <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-sm">
                                    {/* Header profil ala Instagram */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                                        <div className="flex items-center gap-4">
                                            <span className="block w-20 h-20 shrink-0 rounded-full bg-white border-2 border-kipan-yellow shadow-md p-2.5 overflow-hidden">
                                                <img
                                                    src="/logo-kipan.jpg"
                                                    alt="Logo KIPAN"
                                                    className="w-full h-full object-contain"
                                                />
                                            </span>
                                            <div>
                                                <p className="text-xl font-black text-kipan-navy">
                                                    {INSTAGRAM_HANDLE}
                                                </p>
                                                <p className="text-sm text-slate-500">
                                                    KIPAN Jawa Barat
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href={INSTAGRAM_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sm:ml-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-kipan-navy hover:bg-kipan-blue text-white text-xs font-bold transition-colors shadow-sm"
                                        >
                                            <InstagramIcon className="w-4 h-4" />
                                            Ikuti di Instagram
                                        </a>
                                    </div>

                                    <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-8">
                                        Ikuti keseharian aksi kader, keseruan jambore, dan kampanye
                                        kreatif anti narkoba langsung dari lapangan.
                                    </p>

                                    {/* Grid foto ala feed Instagram */}
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                                        {igThumbs.map((item) => (
                                            <a
                                                key={item.id}
                                                href={INSTAGRAM_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative block aspect-square rounded-xl overflow-hidden bg-slate-200"
                                                aria-label={`Lihat di Instagram: ${item.title}`}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <span className="absolute inset-0 bg-kipan-navy/0 group-hover:bg-kipan-navy/40 transition-colors flex items-center justify-center">
                                                    <InstagramIcon className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* ===== Video YouTube ===== */}
                    <section id="galeri-video" className="py-16 lg:py-20 scroll-mt-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                            <ScrollReveal>
                                <p className="text-xs font-bold uppercase tracking-widest text-kipan-blue mb-2">
                                    Dokumentasi Video
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-kipan-navy tracking-tight mb-3">
                                    Video Aksi Kader
                                </h2>
                                <p className="text-slate-600 max-w-2xl mb-10">
                                    Tonton liputan kegiatan, pelatihan, dan kampanye KIPAN dari
                                    berbagai daerah.
                                </p>
                            </ScrollReveal>

                            {/* Video utama */}
                            <ScrollReveal>
                                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-6 bg-black">
                                    <div className="aspect-video">
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${featured.id}`}
                                            title={featured.title}
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mb-10">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[11px] font-bold">
                                        <Play className="w-3 h-3" />
                                        {featured.tag}
                                    </span>
                                    <h3 className="font-bold text-kipan-navy">{featured.title}</h3>
                                </div>
                            </ScrollReveal>

                            {/* Video lainnya */}
                            <div className="grid gap-6 md:grid-cols-2 mb-10">
                                {restVideos.map((video, idx) => (
                                    <ScrollReveal key={video.id} delay={0.08 * idx}>
                                        <div className="rounded-2xl overflow-hidden shadow border border-slate-200 bg-black">
                                            <div className="aspect-video">
                                                <iframe
                                                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                                                    title={video.title}
                                                    loading="lazy"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 mt-3">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[11px] font-bold shrink-0">
                                                <Play className="w-3 h-3" />
                                                {video.tag}
                                            </span>
                                            <h4 className="text-sm font-bold text-kipan-navy leading-snug">
                                                {video.title}
                                            </h4>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <ScrollReveal>
                                <div className="text-center">
                                    <a
                                        href={YOUTUBE_SEARCH_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kipan-navy hover:bg-kipan-blue text-white text-xs font-bold transition-colors shadow-sm"
                                    >
                                        <YoutubeIcon className="w-4 h-4" />
                                        Lihat Video KIPAN di YouTube
                                        <ArrowRightIcon className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
