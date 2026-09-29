import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { GalleryItem } from '@/data/kipan-data';
import { MapPin, Maximize2 } from 'lucide-react';

interface GaleriPhotoCardProps {
    readonly item: GalleryItem;
    readonly onClick: (item: GalleryItem) => void;
    readonly delay?: number;
}

export default function GaleriPhotoCard({
    item,
    onClick,
    delay = 0,
}: Readonly<GaleriPhotoCardProps>) {
    return (
        <div className="mb-5 break-inside-avoid">
            <ScrollReveal delay={delay}>
                <button
                    type="button"
                    onClick={() => onClick(item)}
                    aria-label={`Buka detail foto: ${item.title}`}
                    className="shadow-xs group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 text-left transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                >
                    <figure className="m-0 p-0">
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />

                        {/* Vignette Gradient Overlay (Unsplash Style) */}
                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30 p-4 opacity-90 transition-opacity duration-300 sm:p-5 sm:opacity-0 sm:group-hover:opacity-100">
                            {/* Top Bar: Category badge & Zoom icon */}
                            <div className="flex items-center justify-between">
                                <span className="shadow-xs rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-black text-kipan-navy backdrop-blur-md">
                                    {item.category}
                                </span>
                                <span className="shadow-xs rounded-full bg-white/90 p-2 text-slate-800 backdrop-blur-md transition-transform group-hover:scale-110">
                                    <Maximize2 className="h-3.5 w-3.5" />
                                </span>
                            </div>

                            {/* Bottom Bar: Title & Location */}
                            <figcaption>
                                <p className="mb-1 text-sm font-bold leading-snug text-white drop-shadow-sm sm:text-base">
                                    {item.title}
                                </p>
                                <p className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-200/90">
                                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                                    {item.location}
                                </p>
                            </figcaption>
                        </div>
                    </figure>
                </button>
            </ScrollReveal>
        </div>
    );
}
