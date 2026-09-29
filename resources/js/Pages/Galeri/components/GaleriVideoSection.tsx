import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { GalleryVideo } from '@/data/kipan-data';
import { Calendar, Clock, Film, Play, Sparkles } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

interface GaleriVideoSectionProps {
    readonly videos: readonly GalleryVideo[];
}

export default function GaleriVideoSection({
    videos,
}: Readonly<GaleriVideoSectionProps>) {
    if (!videos.length) return null;

    const [selectedVideo, setSelectedVideo] = useState<GalleryVideo>(
        () => videos.find((v) => v.isFeatured) ?? videos[0],
    );
    const [activeCategory, setActiveCategory] = useState<string>('Semua');
    const playerContainerRef = useRef<HTMLDivElement>(null);

    // Dynamic categories from CMS data
    const categories = useMemo(() => {
        const unique = Array.from(
            new Set(videos.map((v) => v.category).filter(Boolean)),
        );
        return ['Semua', ...unique];
    }, [videos]);

    // Filtered videos based on active category
    const filteredVideos = useMemo(() => {
        if (activeCategory === 'Semua') return videos;
        return videos.filter((v) => v.category === activeCategory);
    }, [videos, activeCategory]);

    const handleSelectVideo = (video: GalleryVideo) => {
        setSelectedVideo(video);
        if (playerContainerRef.current) {
            playerContainerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <section
            id="galeri-video"
            className="scroll-mt-24 border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24"
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header CMS Template */}
                <ScrollReveal>
                    <div className="mb-10 text-center">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-kipan-blue/20 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-kipan-blue">
                            <Film className="h-3.5 w-3.5" />
                            Dokumentasi Multimedia
                        </div>
                        <h2 className="mb-3 text-2xl font-black tracking-tight text-kipan-navy sm:text-4xl">
                            Galeri Video Kegiatan
                        </h2>
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                            Koleksi liputan aksi lapangan, modul edukasi, dan
                            video kampanye kepemudaan yang dikelola terpusat
                            melalui KIPAN CMS.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Cinema Player Preview Showcase */}
                <ScrollReveal delay={0.08}>
                    <div
                        ref={playerContainerRef}
                        className="mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl transition-all"
                    >
                        {/* 16:9 Cinema Screen */}
                        <div className="relative aspect-video w-full bg-black">
                            <iframe
                                key={selectedVideo.id}
                                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0&modestbranding=1`}
                                title={selectedVideo.title}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="h-full w-full"
                            />
                        </div>

                        {/* Player Metadata Bar */}
                        <div className="border-t border-slate-800 bg-slate-950/90 p-5 text-white sm:p-7">
                            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/90 px-3 py-1 font-bold text-white shadow-sm">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                                        PREVIEW AKTIF
                                    </span>
                                    <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-blue-200">
                                        {selectedVideo.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-slate-300">
                                        <Clock className="h-3.5 w-3.5 text-kipan-yellow" />
                                        {selectedVideo.duration}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-slate-300">
                                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                        {selectedVideo.date}
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
                                    <Sparkles className="h-3.5 w-3.5 text-kipan-yellow" />
                                    In-Page Player
                                </span>
                            </div>

                            <h3 className="mb-2 text-lg font-black tracking-tight text-white sm:text-2xl">
                                {selectedVideo.title}
                            </h3>
                            <p className="max-w-3xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                                {selectedVideo.description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* CMS Filter Bar & Grid Heading */}
                <ScrollReveal delay={0.1}>
                    <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
                        <div>
                            <h3 className="text-lg font-bold text-kipan-navy sm:text-xl">
                                Daftar Video Arsip
                            </h3>
                            <p className="text-xs text-slate-500">
                                Pilih tayangan video di bawah untuk memutar
                                preview.
                            </p>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                                        activeCategory === cat
                                            ? 'bg-kipan-navy text-white shadow-sm'
                                            : 'border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-navy'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* CMS Video Card Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredVideos.map((video, idx) => {
                        const isCurrentActive = video.id === selectedVideo.id;
                        return (
                            <ScrollReveal key={video.id} delay={0.05 * (idx % 3)}>
                                <div
                                    onClick={() => handleSelectVideo(video)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleSelectVideo(video);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue ${
                                        isCurrentActive
                                            ? 'border-kipan-blue bg-blue-50/20 ring-2 ring-kipan-blue/40'
                                            : 'border-slate-200/80 hover:border-kipan-blue/50'
                                    }`}
                                >
                                    {/* Thumbnail 16:9 */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                                        {/* Play icon overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 group-hover:scale-110 ${
                                                    isCurrentActive
                                                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 ring-4 ring-white/50'
                                                        : 'bg-white/90 text-kipan-navy shadow-md group-hover:bg-kipan-blue group-hover:text-white'
                                                }`}
                                            >
                                                <Play className="ml-0.5 h-5 w-5 fill-current" />
                                            </div>
                                        </div>

                                        {/* Badges on thumbnail */}
                                        <div className="absolute left-3 top-3">
                                            <span className="rounded-full bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">
                                                {video.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-2.5 right-3">
                                            <span className="inline-flex items-center gap-1 rounded bg-black/85 px-1.5 py-0.5 font-mono text-[11px] font-medium text-white backdrop-blur-sm">
                                                <Clock className="h-3 w-3 text-kipan-yellow" />
                                                {video.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                                            <span className="inline-flex items-center gap-1.5 font-medium">
                                                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                                {video.date}
                                            </span>
                                            {isCurrentActive && (
                                                <span className="font-bold text-red-600">
                                                    Sedang Diputar
                                                </span>
                                            )}
                                        </div>

                                        <h4 className="mb-2 line-clamp-2 text-sm font-bold leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue">
                                            {video.title}
                                        </h4>
                                        <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-slate-500">
                                            {video.description}
                                        </p>

                                        <div className="mt-auto border-t border-slate-100 pt-3">
                                            <span
                                                className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                                                    isCurrentActive
                                                        ? 'text-red-600'
                                                        : 'text-kipan-navy group-hover:text-kipan-blue'
                                                }`}
                                            >
                                                <Play className="h-3 w-3 fill-current" />
                                                {isCurrentActive
                                                    ? 'Sedang Ditampilkan'
                                                    : 'Tonton Preview'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Empty State when no videos match */}
                {filteredVideos.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-14 text-center">
                        <Film className="mx-auto mb-3 h-10 w-10 text-slate-300" />
                        <h4 className="mb-1 text-base font-bold text-slate-700">
                            Belum ada video pada kategori ini
                        </h4>
                        <p className="mb-4 text-xs text-slate-500">
                            Silakan pilih kategori lain atau reset filter untuk
                            melihat seluruh arsip video.
                        </p>
                        <button
                            type="button"
                            onClick={() => setActiveCategory('Semua')}
                            className="rounded-full bg-kipan-navy px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-kipan-blue"
                        >
                            Tampilkan Semua Video
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
