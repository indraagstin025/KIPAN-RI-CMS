import ScrollReveal from '@/Components/Layout/ScrollReveal';
import LandingLayout from '@/Layouts/LandingLayout';
import { GALLERY_VIDEOS } from '@/data/kipan-data';
import { useCallback, useState } from 'react';
import GaleriHero from './components/GaleriHero';
import GaleriLightbox from './components/GaleriLightbox';
import GaleriPhotoCard from './components/GaleriPhotoCard';
import GaleriVideoSection from './components/GaleriVideoSection';

interface DbGalleryItem {
    id: number;
    title: string;
    caption: string | null;
    image: string;
    location: string | null;
    category: string | null;
}

interface PaginatedGallery {
    data: DbGalleryItem[];
    total: number;
}

interface GaleriPageProps {
    readonly title: string;
    readonly subtitle: string;
    readonly category: string;
    readonly galleries: PaginatedGallery;
}

export default function GaleriIndex({
    title,
    subtitle,
    category,
    galleries,
}: Readonly<GaleriPageProps>) {
    const [selectedPhoto, setSelectedPhoto] = useState<{ id: number; src: string; alt: string; caption?: string } | null>(null);

    // Map DB items to lightbox-compatible format
    const photoList = galleries.data.map((g) => ({
        id: g.id,
        src: g.image,
        alt: g.title,
        caption: g.caption ?? g.title,
        category: g.category ?? '',
        location: g.location ?? '',
    }));

    const handlePrev = useCallback(() => {
        if (!selectedPhoto) return;
        const idx = photoList.findIndex((p) => p.id === selectedPhoto.id);
        setSelectedPhoto(photoList[(idx - 1 + photoList.length) % photoList.length]);
    }, [selectedPhoto, photoList]);

    const handleNext = useCallback(() => {
        if (!selectedPhoto) return;
        const idx = photoList.findIndex((p) => p.id === selectedPhoto.id);
        setSelectedPhoto(photoList[(idx + 1) % photoList.length]);
    }, [selectedPhoto, photoList]);

    const currentIndex = selectedPhoto
        ? photoList.findIndex((p) => p.id === selectedPhoto.id) + 1
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


                    {/* DB Gallery */}
                    {galleries.data.length > 0 ? (
                        <div className="columns-1 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
                            {photoList.map((item, idx) => (
                                <ScrollReveal key={item.id} delay={0.03 * (idx % 3)}>
                                    <div
                                        className="group mb-5 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                                        onClick={() => setSelectedPhoto(item)}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            loading="lazy"
                                            className="w-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {item.caption && (
                                            <div className="p-3">
                                                <p className="text-xs text-slate-500">{item.caption}</p>
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-slate-500">
                            Belum ada foto di galeri.
                        </p>
                    )}
                </div>
            </section>

            <GaleriVideoSection videos={GALLERY_VIDEOS} />

            {/* Lightbox */}
            {selectedPhoto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedPhoto(null)}>
                    <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="max-h-[80vh] rounded-2xl object-contain" />
                        {selectedPhoto.caption && (
                            <p className="mt-2 text-center text-sm text-white/80">{selectedPhoto.caption}</p>
                        )}
                        <button onClick={() => setSelectedPhoto(null)} className="absolute -right-3 -top-3 rounded-full bg-white p-2 shadow-lg hover:bg-red-50">✕</button>
                        {photoList.length > 1 && (
                            <>
                                <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white">‹</button>
                                <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white">›</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </LandingLayout>
    );
}
