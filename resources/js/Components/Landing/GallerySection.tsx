import { SewingPinIcon } from '@radix-ui/react-icons';
import { GALLERY_ITEMS } from '@/data/landing-content';

export default function GallerySection() {
    return (
        <section id="galeri" className="py-16 lg:py-24 bg-kipan-soft-blue border-b border-kipan-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold text-kipan-blue uppercase tracking-wider block mb-2">
                        Dokumentasi Visual
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight">
                        Aksi Nyata Pemuda di Lapangan
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
                        Potret semangat dan dedikasi para kader inti dalam mengedukasi dan membentengi sesama pemuda dari narkoba.
                    </p>
                </div>

                {/* Gallery Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {GALLERY_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-kipan-blue hover:shadow-sm transition-all flex flex-col justify-between"
                        >
                            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-24 max-w-24 object-contain"
                                />
                                <div className="absolute top-3 left-3 bg-white/95 text-kipan-navy text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs uppercase tracking-wider border border-slate-200">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-4 sm:p-5">
                                <h3 className="font-bold text-sm text-kipan-navy leading-snug mb-2">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <SewingPinIcon className="w-3.5 h-3.5 text-kipan-blue" />
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
