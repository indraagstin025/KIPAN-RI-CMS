import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { Head, Link, router } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    Calendar,
    CheckCircle2,
    CloudDownload,
    ExternalLink,
    FileCheck,
    FileText,
    FolderDown,
    Search,
    Shield,
    Sparkles,
    X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

interface MateriItem {
    id: number;
    title: string;
    category: string;
    format: string;
    size: string;
    description: string;
    image: string;
    drive_url: string;
    updated_at: string;
}

interface MateriPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
    readonly materi: MateriItem[];
    readonly categories: string[];
    readonly activeCategory: string;
    readonly search: string;
    readonly masterDriveUrl: string;
    readonly totalCount: number;
}

export default function MateriIndex({
    title,
    subtitle,
    category,
    materi,
    categories,
    activeCategory,
    search: initialSearch,
    masterDriveUrl,
    totalCount,
}: Readonly<MateriPageProps>) {
    const [selectedCategory, setSelectedCategory] = useState(activeCategory || 'Semua');
    const [searchQuery, setSearchQuery] = useState(initialSearch || '');

    const allCategories = useMemo(() => ['Semua', ...categories], [categories]);

    // Handle Category Filter
    function handleCategoryClick(cat: string) {
        setSelectedCategory(cat);
        router.get(
            '/materi',
            {
                category: cat === 'Semua' ? '' : cat,
                search: searchQuery || undefined,
            },
            { preserveState: true, replace: true },
        );
    }

    // Handle Search Submit
    function handleSearchSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.get(
            '/materi',
            {
                category: selectedCategory === 'Semua' ? '' : selectedCategory,
                search: searchQuery || undefined,
            },
            { preserveState: true, replace: true },
        );
    }

    // Clear search
    function handleClearSearch() {
        setSearchQuery('');
        router.get(
            '/materi',
            {
                category: selectedCategory === 'Semua' ? '' : selectedCategory,
            },
            { preserveState: true, replace: true },
        );
    }

    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            <Head>
                <meta
                    name="description"
                    content="Unduh modul pelatihan, materi penyuluhan bahaya narkoba, buku panduan kader pemuda, dan regulasi P4GN KIPAN Republik Indonesia."
                />
            </Head>

            {/* ============================================================ */}
            {/* HERO SECTION (Konsisten dengan Elemen Berita & Hero Website) */}
            {/* ============================================================ */}
            <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-16 pt-24 text-white sm:pb-20 sm:pt-28 lg:pt-32">
                {/* Subtle Youth Network Graphic Grid Background */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* Subtle Glow Accents */}
                <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

                <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Category Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100 shadow-xs">
                            <span className="h-2 w-2 rounded-full bg-kipan-yellow animate-pulse" />
                            {category}
                        </div>

                        {/* Title Header */}
                        <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>

                        {/* Yellow Bar Accent */}
                        <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                        {/* Subtitle with border accent */}
                        <div className="border-l-4 border-kipan-yellow pl-4">
                            <p className="text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Quick Stats & Info Strip */}
                    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-white/10 pt-8">
                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 backdrop-blur-xs border border-white/10">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kipan-yellow/20 text-kipan-yellow">
                                <BookOpen className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-white">{totalCount} Modul</p>
                                <p className="text-[11px] text-blue-200">Materi Terverifikasi</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 backdrop-blur-xs border border-white/10">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-400">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-white">100% Gratis</p>
                                <p className="text-[11px] text-blue-200">Akses Publik Bebas</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 backdrop-blur-xs border border-white/10">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/20 text-blue-300">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-white">Standar P4GN</p>
                                <p className="text-[11px] text-blue-200">Kemenpora & BNN RI</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 backdrop-blur-xs border border-white/10">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/20 text-purple-300">
                                <CloudDownload className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-white">Google Drive</p>
                                <p className="text-[11px] text-blue-200">Unduh Instan Cloud</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CONTENT SECTION: SEARCH, FILTER, CARDS */}
            {/* ============================================================ */}
            <section className="py-14 lg:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Section Intro */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-kipan-blue">
                                    Arsip Edukasi & Pelatihan
                                </p>
                                <h2 className="text-2xl font-black tracking-tight text-kipan-navy sm:text-3xl">
                                    Daftar Modul & Materi Lengkap
                                </h2>
                                <p className="mt-1 text-sm text-slate-600 max-w-xl">
                                    Pilih modul yang ingin dipelajari, klik tombol <strong className="text-slate-800">Pelajari Materi</strong> untuk langsung membuka dan mengunduh berkas lengkap di Google Drive.
                                </p>
                            </div>

                            {/* Direct Master Folder Link */}
                            <a
                                href={masterDriveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-kipan-navy shadow-xs transition hover:border-kipan-blue hover:bg-blue-50/50 hover:text-kipan-blue"
                            >
                                <FolderDown className="h-4 w-4 text-kipan-blue" />
                                <span>Buka Semua di Google Drive</span>
                                <ExternalLink className="h-3 w-3 text-slate-400" />
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Search and Category Filters */}
                    <div className="mt-8 space-y-4">
                        {/* Search Input Bar */}
                        <ScrollReveal delay={0.04}>
                            <form onSubmit={handleSearchSubmit} className="relative max-w-xl">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Cari judul materi, modul pelatihan, atau regulasi..."
                                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-sm text-slate-800 placeholder-slate-400 shadow-2xs transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={handleClearSearch}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </form>
                        </ScrollReveal>

                        {/* Category Filter Pills */}
                        <ScrollReveal delay={0.08}>
                            <div className="flex flex-wrap items-center gap-2 pt-2">
                                {allCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                                            selectedCategory === cat
                                                ? 'bg-kipan-navy text-white shadow-sm'
                                                : 'border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-navy'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* ============================================================ */}
                    {/* MATERI CARDS GRID (Mirip Halaman Berita) */}
                    {/* ============================================================ */}
                    <div className="mt-10">
                        {materi.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-16 text-center shadow-xs">
                                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-kipan-navy">
                                    <BookOpen className="h-7 w-7" />
                                </div>
                                <h3 className="text-base font-bold text-slate-800">Materi Tidak Ditemukan</h3>
                                <p className="mt-1 max-w-sm text-xs text-slate-500">
                                    {searchQuery
                                        ? `Tidak ada materi yang sesuai dengan kata kunci "${searchQuery}". Coba gunakan kata kunci lain.`
                                        : 'Belum ada materi untuk kategori yang dipilih.'}
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchQuery('');
                                        handleCategoryClick('Semua');
                                    }}
                                    className="mt-4 rounded-xl bg-kipan-navy px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-900"
                                >
                                    Tampilkan Semua Materi
                                </button>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {materi.map((item, idx) => (
                                    <ScrollReveal key={item.id} delay={0.04 * (idx % 4)}>
                                        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kipan-blue/40 hover:shadow-lg">
                                            {/* Cover Image Container */}
                                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />

                                                {/* Gradient Overlay for Text Readability */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                                {/* Category Badge (Top Left) */}
                                                <span className="absolute left-3 top-3 rounded-full bg-kipan-navy/90 px-3 py-1 text-[10px] font-bold text-white shadow-xs backdrop-blur-xs">
                                                    {item.category}
                                                </span>

                                                {/* Format Badge (Top Right) */}
                                                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 shadow-xs backdrop-blur-xs">
                                                    <FileText className="h-3 w-3 text-kipan-blue" />
                                                    <span>{item.format.split(' ')[0]}</span>
                                                </span>

                                                {/* Size & Pages on Bottom Image */}
                                                <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90 drop-shadow-xs">
                                                    {item.size}
                                                </span>
                                            </div>

                                            {/* Card Body */}
                                            <div className="flex flex-1 flex-col p-5">
                                                {/* Updated Date */}
                                                <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3 text-kipan-blue" />
                                                        {item.updated_at}
                                                    </span>
                                                    <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-kipan-blue">
                                                        Google Drive
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-bold text-base leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue line-clamp-2">
                                                    {item.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
                                                    {item.description}
                                                </p>

                                                {/* CTA Button: Pelajari Materi -> Direct to Google Drive */}
                                                <div className="mt-5 border-t border-slate-100 pt-4">
                                                    <a
                                                        href={item.drive_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-kipan-navy to-kipan-blue px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition-all hover:from-blue-900 hover:to-kipan-navy hover:shadow-md active:scale-[0.98]"
                                                    >
                                                        <span>Pelajari Materi</span>
                                                        <ExternalLink className="h-3.5 w-3.5 text-kipan-yellow" />
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* GOOGLE DRIVE MASTER ACCESS BANNER */}
            {/* ============================================================ */}
            <section className="pb-16 lg:pb-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-kipan-navy via-[#0A3055] to-kipan-blue px-6 py-12 text-center text-white sm:p-14 shadow-xl">
                            {/* Decorative blur orbs */}
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-kipan-yellow/20 blur-3xl pointer-events-none" />

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-kipan-yellow backdrop-blur-xs border border-white/20">
                                    <CloudDownload className="h-7 w-7" />
                                </div>

                                <h2 className="mb-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                                    Akses Seluruh Folder Materi di Google Drive
                                </h2>
                                <p className="mb-8 text-sm leading-relaxed text-blue-100 sm:text-base">
                                    Dapatkan seluruh paket modul PDF, slide presentasi interaktif, draf undang-undang, serta toolkit grafis media sosial dalam satu penyimpanan cloud terpadu KIPAN.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                    <a
                                        href={masterDriveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-kipan-yellow px-7 py-3.5 text-sm font-black text-kipan-navy shadow-lg transition-all hover:bg-yellow-300 hover:scale-105"
                                    >
                                        <FolderDown className="h-4 w-4" />
                                        <span>Buka Google Drive Lengkap</span>
                                        <ExternalLink className="h-4 w-4" />
                                    </a>

                                    <Link
                                        href="/kontak"
                                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xs transition hover:bg-white/20"
                                    >
                                        <span>Konsultasi Materi Pelatihan</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </LandingLayout>
    );
}
