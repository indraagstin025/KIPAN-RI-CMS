import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { MARQUEE_ITEMS } from '../../constants/supportingInstitutions';
import PartnerCard from './PartnerCard';

export default function PartnersSection() {
    return (
        <section
            id="mitra-pemerintah"
            className="sm:py-18 relative overflow-hidden border-b border-slate-200/90 bg-white py-14"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
                        <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-lime-600 sm:text-[#7cb342]">
                            PARTNERS &amp; SUPPORTERS
                        </span>

                        <h2 className="text-2xl font-black tracking-tight text-kipan-navy sm:text-3xl lg:text-4xl">
                            Partner dalam Membangun Masa Depan
                        </h2>

                        <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                            Didukung secara sinergis oleh 7 instansi
                            kementerian, lembaga negara, dan pemerintah daerah
                            yang memiliki komitmen kuat dalam membina generasi
                            muda Indonesia Bersinar.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Infinite Auto-Scrolling Marquee Track */}
                <ScrollReveal direction="up" delay={0.12}>
                    <div className="relative w-full overflow-hidden py-2">
                        {/* Soft Fade Gradients */}
                        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-28" />
                        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-28" />

                        {/* Auto-scrolling Track */}
                        <div className="animate-marquee flex items-center gap-5 py-2">
                            {MARQUEE_ITEMS.map((inst, idx) => (
                                <PartnerCard
                                    key={`${inst.id}-${idx}`}
                                    institution={inst}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
