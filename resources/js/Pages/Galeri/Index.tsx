import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import {
    GALLERY_CATEGORIES,
    GALLERY_ITEMS,
    GALLERY_VIDEOS,
    GalleryItem,
} from '@/data/kipan-data';
import { useCallback, useMemo, useState } from 'react';
import GaleriHero from './components/GaleriHero';
import GaleriLightbox from './components/GaleriLightbox';
import GaleriPhotoCard from './components/GaleriPhotoCard';
import GaleriVideoSection from './components/GaleriVideoSection';

interface GaleriPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
}

export default function GaleriIndex({
    title,
    subtitle,
    category,
}: Readonly<GaleriPageProps>) {
    const [activeCategory, setActiveCategory] = useState<string>('Semua');
    const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(
        null,
    );

    const filtered = useMemo(
        () =>
            activeCategory === 'Semua'
                ? GALLERY_ITEMS
                : GALLERY_ITEMS.filter((g) => g.category === activeCategory),
        [activeCategory],
    );

    const modalList = useMemo(() => {
        if (!selectedPhoto) return [];
        if (filtered.some((i) => i.id === selectedPhoto.id)) return filtered;
        return GALLERY_ITEMS;
    }, [selectedPhoto, filtered]);

    const handlePrevPhoto = useCallback(() => {
        if (!selectedPhoto || modalList.length <= 1) return;
        const currentIndex = modalList.findIndex(
            (item) => item.id === selectedPhoto.id,
        );
        if (currentIndex === -1) return;
        const prevIndex =
            (currentIndex - 1 + modalList.length) % modalList.length;
        setSelectedPhoto(modalList[prevIndex]);
    }, [selectedPhoto, modalList]);

    const handleNextPhoto = useCallback(() => {
        if (!selectedPhoto || modalList.length <= 1) return;
        const currentIndex = modalList.findIndex(
            (item) => item.id === selectedPhoto.id,
        );
        if (currentIndex === -1) return;
        const nextIndex = (currentIndex + 1) % modalList.length;
        setSelectedPhoto(modalList[nextIndex]);
    }, [selectedPhoto, modalList]);

    const currentPhotoIndex = selectedPhoto
        ? modalList.findIndex((item) => item.id === selectedPhoto.id) + 1
        : 0;

    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            {/* ===== Hero ===== */}
            <GaleriHero category={category} title={title} subtitle={subtitle} />

            {/* ===== Galeri Foto (Unsplash-style Masonry) ===== */}
            <section id="galeri-foto" className="scroll-mt-24 py-16 lg:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-kipan-blue">
                            Dokumentasi
                        </p>
                        <h2 className="mb-3 text-2xl font-black tracking-tight text-kipan-navy sm:text-3xl">
                            Galeri Foto Kegiatan
                        </h2>
                        <p className="mb-8 max-w-2xl text-slate-600">
                            Momen-momen aksi kader KIPAN di berbagai daerah —
                            saring berdasarkan jenis kegiatan. Klik foto untuk
                            melihat tampilan penuh.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.08}>
                        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {GALLERY_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActiveCategory(cat)}
                                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                                            activeCategory === cat
                                                ? 'bg-kipan-navy text-white shadow-sm'
                                                : 'border border-slate-200 bg-white text-slate-600 hover:border-kipan-blue hover:text-kipan-navy'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <span className="hidden text-xs font-medium text-slate-400 sm:inline-block">
                                Menampilkan {filtered.length} foto
                            </span>
                        </div>
                    </ScrollReveal>

                    {/* Unsplash-style Masonry Columns */}
                    <div className="columns-1 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
                        {filtered.map((item, idx) => (
                            <GaleriPhotoCard
                                key={item.id}
                                item={item}
                                onClick={setSelectedPhoto}
                                delay={0.03 * (idx % 3)}
                            />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p className="py-12 text-center text-slate-500">
                            Belum ada foto pada kategori ini.
                        </p>
                    )}
                </div>
            </section>

            {/* ===== Preview Video ===== */}
            <GaleriVideoSection videos={GALLERY_VIDEOS} />

            {/* ===== Lightbox Modal ===== */}
            <GaleriLightbox
                photo={selectedPhoto}
                onClose={() => setSelectedPhoto(null)}
                onPrev={handlePrevPhoto}
                onNext={handleNextPhoto}
                currentIndex={currentPhotoIndex}
                totalPhotos={modalList.length}
            />
        </LandingLayout>
    );
}
