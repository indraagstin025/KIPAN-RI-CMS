import { CheckCircledIcon, SewingPinIcon } from '@radix-ui/react-icons';
import { NETWORK_REGIONS } from '@/data/landing-content';
import ScrollReveal from './ScrollReveal';

export default function NetworkSection() {
    return (
        <section id="jejaring" className="py-16 lg:py-24 bg-kipan-navy text-white border-b border-blue-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-xs font-bold text-kipan-yellow uppercase tracking-widest block mb-2">
                            Jangkauan Nasional
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                            Bergerak Bersama di Seluruh Indonesia
                        </h2>
                        <p className="text-xs sm:text-sm text-blue-100/80 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                            KIPAN mengonsolidasikan jejaring kepengurusan dan relawan pemuda di 38 provinsi dari Sabang sampai Merauke dalam satu kesatuan garis gerakan P4GN.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Regional Clusters Grid with Staggered Scroll Reveal */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
                    {NETWORK_REGIONS.map((reg, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.06}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/12 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-kipan-yellow text-kipan-navy flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                                        <SewingPinIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-white group-hover:text-kipan-yellow transition-colors">
                                            {reg.name}
                                        </h3>
                                        <div className="text-xs text-kipan-yellow font-semibold mt-0.5">
                                            {reg.count}
                                        </div>
                                    </div>
                                </div>

                                <span className="text-[11px] font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                                    {reg.status}
                                </span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Network Commitment Banner */}
                <ScrollReveal direction="up" delay={0.3}>
                    <div className="bg-white/10 border border-white/15 rounded-2xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left hover:bg-white/15 transition-colors">
                        <div className="flex items-center gap-3">
                            <CheckCircledIcon className="w-6 h-6 text-kipan-yellow shrink-0 hidden sm:block" />
                            <div>
                                <div className="font-bold text-sm text-white">
                                    Koordinasi Berjenjang: Pusat, Provinsi, hingga Kabupaten/Kota
                                </div>
                                <div className="text-xs text-blue-100/70 mt-0.5">
                                    Didukung oleh Dinas Pemuda dan Olahraga (Dispora) serta BNN di seluruh tingkatan wilayah.
                                </div>
                            </div>
                        </div>

                        <a
                            href="/tentang/jejaring"
                            className="px-4 py-2 rounded-lg bg-kipan-yellow text-kipan-navy font-bold text-xs hover:bg-amber-400 transition-colors shrink-0 shadow-xs"
                        >
                            Direktori Wilayah
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
