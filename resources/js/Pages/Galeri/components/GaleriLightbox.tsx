import { GalleryItem } from '@/data/kipan-data';
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    MapPin,
    X,
} from 'lucide-react';
import { useEffect } from 'react';

interface GaleriLightboxProps {
    readonly photo: GalleryItem | null;
    readonly onClose: () => void;
    readonly onPrev: () => void;
    readonly onNext: () => void;
    readonly currentIndex: number;
    readonly totalPhotos: number;
}

export default function GaleriLightbox({
    photo,
    onClose,
    onPrev,
    onNext,
    currentIndex,
    totalPhotos,
}: Readonly<GaleriLightboxProps>) {
    useEffect(() => {
        if (!photo) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                onPrev();
            } else if (e.key === 'ArrowRight') {
                onNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [photo, onClose, onPrev, onNext]);

    if (!photo) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-md transition-all sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={photo.title}
        >
            {/* Transparent backdrop button for outside clicks */}
            <button
                type="button"
                className="absolute inset-0 h-full w-full cursor-default border-0 bg-transparent"
                onClick={onClose}
                aria-label="Tutup latar belakang"
                tabIndex={-1}
            />
            {/* Tombol Tutup */}
            <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
                aria-label="Tutup preview"
            >
                <X className="h-6 w-6" />
            </button>

            {/* Tombol Sebelumnya */}
            {totalPhotos > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="backdrop-blur-xs absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-all hover:bg-white/25 sm:left-6 sm:p-3"
                    aria-label="Foto sebelumnya"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            )}

            {/* Tombol Selanjutnya */}
            {totalPhotos > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="backdrop-blur-xs absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-all hover:bg-white/25 sm:right-6 sm:p-3"
                    aria-label="Foto selanjutnya"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            )}

            {/* Kontainer Modal */}
            <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col items-center justify-center">
                <div className="relative flex max-h-[76vh] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
                    <img
                        src={photo.image}
                        alt={photo.title}
                        className="max-h-[76vh] w-auto max-w-full object-contain"
                    />
                </div>

                {/* Info Bar */}
                <div className="mt-4 flex w-full flex-col justify-between gap-3 px-2 text-white sm:flex-row sm:items-center">
                    <div>
                        <div className="mb-1.5 flex items-center gap-2">
                            <span className="rounded-full bg-kipan-yellow px-2.5 py-0.5 text-[11px] font-black text-kipan-navy">
                                {photo.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-blue-200">
                                <MapPin className="h-3.5 w-3.5" />
                                {photo.location}
                            </span>
                            {totalPhotos > 1 && (
                                <span className="text-xs text-slate-400">
                                    • {currentIndex} dari {totalPhotos}
                                </span>
                            )}
                        </div>
                        <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                            {photo.title}
                        </h3>
                    </div>

                    <a
                        href={photo.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/25 sm:self-auto"
                    >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Buka Ukuran Asli
                    </a>
                </div>
            </div>
        </div>
    );
}
