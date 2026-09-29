import { GalleryItem } from '@/data/landing-content';
import { SewingPinIcon } from '@radix-ui/react-icons';

interface HomeGalleryCardProps {
    item: GalleryItem;
}

export default function HomeGalleryCard({ item }: HomeGalleryCardProps) {
    return (
        <div className="shadow-xs group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-kipan-blue hover:shadow-lg">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100 p-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-24 max-w-24 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="shadow-2xs absolute left-3 top-3 rounded border border-slate-200 bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-kipan-navy">
                    {item.category}
                </div>
            </div>

            <div className="p-4 sm:p-5">
                <h3 className="mb-2 text-sm font-bold leading-snug text-kipan-navy transition-colors group-hover:text-kipan-blue">
                    {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <SewingPinIcon className="h-3.5 w-3.5 text-kipan-blue" />
                    <span>{item.location}</span>
                </div>
            </div>
        </div>
    );
}
