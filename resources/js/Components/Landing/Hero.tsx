import { ArrowRightIcon, CheckCircledIcon } from '@radix-ui/react-icons';
import { HERO_CONTENT } from '@/data/landing-content';

export default function Hero() {
    return (
        <section
            id="beranda"
            className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white border-b border-kipan-border overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left: Content Column */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* Eyebrow Label */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-kipan-soft-blue border border-blue-200/80 rounded-md text-[11px] font-bold text-kipan-navy uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-kipan-blue" />
                            <span>{HERO_CONTENT.eyebrow}</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-kipan-navy leading-[1.15] tracking-tight mb-5">
                            PEMUDA BERGERAK,{' '}
                            <span className="text-kipan-blue underline decoration-kipan-yellow decoration-4 underline-offset-4">
                                INDONESIA BERSINAR
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                            {HERO_CONTENT.subheadline}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                            <a
                                href={HERO_CONTENT.primaryCta.href}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-kipan-blue hover:bg-blue-700 rounded-lg shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            >
                                <span>{HERO_CONTENT.primaryCta.label}</span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </a>

                            <a
                                href={HERO_CONTENT.secondaryCta.href}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-kipan-navy bg-kipan-soft-blue hover:bg-blue-100/80 border border-blue-200/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                            >
                                <span>{HERO_CONTENT.secondaryCta.label}</span>
                            </a>
                        </div>

                        {/* Verified Checklist Pills */}
                        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                            <div className="flex items-center gap-1.5 font-medium">
                                <CheckCircledIcon className="w-4 h-4 text-kipan-blue shrink-0" />
                                <span>Binaan Resmi Kemenpora RI</span>
                            </div>
                            <div className="flex items-center gap-1.5 font-medium">
                                <CheckCircledIcon className="w-4 h-4 text-kipan-blue shrink-0" />
                                <span>Mitra Pencegahan BNN RI</span>
                            </div>
                            <div className="flex items-center gap-1.5 font-medium">
                                <CheckCircledIcon className="w-4 h-4 text-kipan-blue shrink-0" />
                                <span>Jejaring Aktif 38 Provinsi</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual / Card Column */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md bg-kipan-soft-blue border border-blue-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
                            {/* Emblem & Identity */}
                            <div className="flex items-center gap-4 pb-6 border-b border-blue-200/70">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-1 border border-blue-200 shrink-0 shadow-xs">
                                    <img
                                        src="/logo-kipan.jpg"
                                        alt="Lambang Resmi KIPAN"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-kipan-blue uppercase tracking-wider">
                                        Gerakan Pemuda Nasional
                                    </div>
                                    <h2 className="text-lg font-bold text-kipan-navy leading-snug">
                                        Kader Inti Pemuda Anti Narkoba
                                    </h2>
                                    <div className="text-xs text-slate-500 mt-0.5">
                                        Republik Indonesia
                                    </div>
                                </div>
                            </div>

                            {/* Core Mission highlights */}
                            <div className="py-5 space-y-3.5 text-xs text-slate-700 leading-relaxed">
                                <div className="p-3 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-kipan-yellow shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-kipan-navy font-bold">Kaderisasi Terpadu</strong>
                                        Mendidik pemuda pelopor dengan wawasan P4GN dan kepemimpinan.
                                    </div>
                                </div>

                                <div className="p-3 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-kipan-blue shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-kipan-navy font-bold">Aksi Nyata Lapangan</strong>
                                        Sosialisasi masif di sekolah, kampus, dan ruang publik.
                                    </div>
                                </div>

                                <div className="p-3 bg-white rounded-xl border border-blue-100 flex items-start gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-kipan-navy font-bold">Kolaborasi Positif</strong>
                                        Pemberdayaan minat bakat, olahraga, seni, dan wirausaha mandiri.
                                    </div>
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="pt-4 border-t border-blue-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                <span>Dasar Hukum: Inpres No. 2/2020</span>
                                <span className="text-kipan-navy font-bold">Gerakan P4GN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
