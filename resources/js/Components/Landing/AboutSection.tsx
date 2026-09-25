import { CheckCircledIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { ABOUT_CONTENT } from '@/data/landing-content';

export default function AboutSection() {
    return (
        <section id="tentang" className="py-16 lg:py-24 bg-white border-b border-kipan-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                    {/* Left Column: Visual & Badge Panel */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-kipan-soft-blue border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 p-2 shadow-xs mb-5">
                                <img
                                    src="/logo-kipan.jpg"
                                    alt="Logo KIPAN RI"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-kipan-navy mb-2">
                                Gerakan Pemuda Berkarakter
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                Memadukan wawasan kebangsaan, integritas kepemudaan, dan kesadaran bahaya narkoba
                                demi menyelamatkan masa depan bangsa.
                            </p>

                            <div className="pt-4 border-t border-blue-200/80 space-y-2 text-xs text-slate-700">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">Kementerian Pembina</span>
                                    <strong className="text-kipan-navy">Kemenpora RI</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">Mitra Teknis Pencegahan</span>
                                    <strong className="text-kipan-navy">BNN RI</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">Landasan Hukum</span>
                                    <strong className="text-kipan-navy">Inpres No. 2/2020</strong>
                                </div>
                            </div>
                        </div>

                        {/* Visi Quote Card */}
                        <div className="bg-white border-l-4 border-kipan-blue border-y border-r border-slate-200 rounded-xl p-5 shadow-xs">
                            <div className="text-[11px] font-bold text-kipan-blue uppercase tracking-wider mb-1">
                                Visi KIPAN RI
                            </div>
                            <blockquote className="text-xs sm:text-sm font-semibold text-kipan-navy italic leading-snug">
                                &ldquo;{ABOUT_CONTENT.visi}&rdquo;
                            </blockquote>
                        </div>
                    </div>

                    {/* Right Column: Narrative & Mission */}
                    <div className="lg:col-span-7">
                        <div className="inline-block text-xs font-bold text-kipan-blue uppercase tracking-wider mb-2">
                            {ABOUT_CONTENT.tag}
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kipan-navy tracking-tight leading-tight mb-4">
                            {ABOUT_CONTENT.title}
                        </h2>

                        <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>

                        {/* Misi List */}
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                                Misi Strategis Gerakan:
                            </h3>
                            <ul className="space-y-2.5">
                                {ABOUT_CONTENT.misi.map((m, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                        <CheckCircledIcon className="w-4 h-4 text-kipan-blue shrink-0 mt-0.5" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={ABOUT_CONTENT.ctaHref}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-kipan-blue hover:text-blue-800 transition-colors"
                        >
                            <span>{ABOUT_CONTENT.ctaText}</span>
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
