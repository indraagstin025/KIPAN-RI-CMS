import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import CampaignVideoPlayer from './CampaignVideoPlayer';

export default function CampaignSlogan() {
    return (
        <section className="overflow-hidden border-b border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Large Rounded Curved Card Revealed on Scroll */}
                <ScrollReveal direction="up" delay={0.1} duration={0.65}>
                    <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-[#0D3F70] via-[#0E5E9D] to-[#0E6CAC] p-5 shadow-2xl transition-shadow duration-500 hover:shadow-[0_25px_50px_-12px_rgba(13,63,112,0.35)] sm:p-10 lg:p-12">
                        {/* Subtle Background Watermark / Motif */}
                        <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
                        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

                        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
                            {/* Left Column: Accent Bar, Headline, Subtext, Actions */}
                            <div className="flex flex-col items-start text-white lg:col-span-6 xl:col-span-6">
                                <div className="shadow-xs mb-4 h-1.5 w-14 rounded-full bg-kipan-yellow sm:mb-6" />

                                <h2 className="text-2xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl lg:text-[2.65rem] xl:text-5xl">
                                    Jelajahi Gerakan Bersama
                                </h2>
                                <div className="mt-1 text-2xl font-black leading-[1.18] tracking-tight text-kipan-yellow sm:mt-2 sm:text-4xl lg:text-[2.65rem] xl:text-5xl">
                                    KIPAN Republik Indonesia
                                </div>

                                <div className="border-l-3 my-5 max-w-xl border-white/70 pl-4 sm:my-6">
                                    <p className="text-xs leading-relaxed text-blue-50/95 sm:text-base">
                                        Temukan dan kembangkan potensimu untuk
                                        berkarya hebat, melindungi generasi
                                        sebaya dari ancaman narkotika, dan
                                        berkontribusi nyata mewujudkan{' '}
                                        <strong>Indonesia Bersinar</strong>{' '}
                                        (Bersih Narkoba) bersama pemuda di 38
                                        provinsi.
                                    </p>
                                </div>

                                <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                                    <a
                                        href="/tentang"
                                        className="shadow-xs inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center text-xs font-bold text-kipan-navy transition-all hover:scale-[1.02] hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 sm:w-auto sm:text-sm"
                                    >
                                        <span>Pelajari Profil Lengkap</span>
                                        <ArrowRightIcon className="h-3.5 w-3.5" />
                                    </a>

                                    <a
                                        href="/program"
                                        className="backdrop-blur-xs inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3.5 text-center text-xs font-semibold text-white transition-all hover:scale-[1.02] hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 sm:w-auto sm:text-sm"
                                    >
                                        <span>Lihat Program &amp; Aksi</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Interactive Video Player Frame */}
                            <div className="flex w-full items-center justify-center lg:col-span-6 lg:justify-end xl:col-span-6">
                                <CampaignVideoPlayer />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
