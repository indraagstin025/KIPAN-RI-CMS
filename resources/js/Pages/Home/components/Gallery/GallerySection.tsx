import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { GALLERY_ITEMS } from '@/data/landing-content';
import HomeGalleryCard from './HomeGalleryCard';

export default function GallerySection() {
    return (
        <section
            id="galeri"
            className="overflow-hidden border-b border-kipan-border bg-kipan-soft-blue py-16 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-kipan-blue">
                            Dokumentasi Visual
                        </span>
                        <h2 className="text-2xl font-extrabold tracking-tight text-kipan-navy sm:text-3xl lg:text-4xl">
                            Aksi Nyata Pemuda di Lapangan
                        </h2>
                        <p className="mx-auto mt-2.5 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Potret semangat dan dedikasi para kader inti dalam
                            mengedukasi dan membentengi sesama pemuda dari
                            narkoba.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Gallery Cards Grid with Staggered Scroll Reveal */}
                <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {GALLERY_ITEMS.map((item, idx) => (
                        <ScrollReveal
                            key={item.id}
                            direction="up"
                            delay={0.08 + idx * 0.07}
                        >
                            <HomeGalleryCard item={item} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
