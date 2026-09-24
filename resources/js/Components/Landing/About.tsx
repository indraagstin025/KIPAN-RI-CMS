import { motion } from 'framer-motion';
import { Target, Compass, Users, CheckCircle2, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { ABOUT, COMPANY } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

const NILAI_ICONS = [
    ShieldCheck, // Bersih
    HeartHandshake, // Peduli
    Award, // Berkarakter
    Users, // Bersatu
];

export default function About() {
    return (
        <section
            id="tentang"
            className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md mb-4">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Profil Lembaga</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        Membangun Generasi Muda Indonesia yang{' '}
                        <span className="text-blue-700">Bersih dari Narkoba</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Media Column (Editorial Photo Grid) */}
                    <div className="lg:col-span-6 flex flex-col gap-5">
                        {/* Main Photography */}
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm aspect-[4/3]">
                            <SafeImage
                                src={ABOUT.image}
                                alt="Kegiatan Pelatihan KIPAN Indonesia"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-md border border-slate-700/80">
                                Mitra Resmi BNN RI
                            </div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <p className="font-bold text-lg leading-snug">KIPAN Indonesia</p>
                                <p className="text-xs text-slate-300 mt-0.5">{COMPANY.tagline}</p>
                            </div>
                        </div>

                        {/* Secondary Photos */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                                <SafeImage
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                                    alt="Pelatihan Kader Anti Narkoba"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 text-white text-[11px] font-medium px-2 py-1 rounded">
                                    Pelatihan Kader Inti
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                                <SafeImage
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Komunitas Relawan Pemuda"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 text-white text-[11px] font-medium px-2 py-1 rounded">
                                    Konsolidasi Wilayah
                                </div>
                            </div>
                        </div>

                        {/* Institutional Credibility Note */}
                        <div className="bg-white rounded-xl p-5 border border-slate-200 text-slate-700 text-sm leading-relaxed shadow-sm">
                            <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2">
                                <Award className="w-5 h-5 text-blue-700 shrink-0" />
                                <span>Komitmen Gerakan Nasional</span>
                            </div>
                            <p className="text-slate-600">
                                KIPAN bergerak sebagai garda terdepan di lingkungan masyarakat untuk mewujudkan pemuda Indonesia yang tangguh, mandiri, dan bebas dari ancaman narkotika melalui sinergi berkelanjutan bersama BNN RI.
                            </p>
                        </div>
                    </div>

                    {/* Content Column (Latar Belakang, Visi & Misi) */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        {/* Narrative Paragraphs */}
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                            <h3 className="text-xl font-bold text-slate-900">
                                Sekilas Tentang Organisasi
                            </h3>
                            {ABOUT.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-slate-700 text-sm sm:text-base leading-relaxed"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Visi Card */}
                        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2.5 mb-2.5">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                                    <Compass className="w-4 h-4" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                    Visi KIPAN
                                </h3>
                            </div>
                            <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed pl-1">
                                &ldquo;{ABOUT.visi}&rdquo;
                            </p>
                        </div>

                        {/* Misi Card */}
                        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                                    <Target className="w-4 h-4" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                    Misi Utama
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {ABOUT.misi.map((m, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Nilai Organisasi */}
                <div className="mt-16 lg:mt-20 pt-12 border-t border-slate-200">
                    <div className="max-w-2xl mx-auto text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Nilai-Nilai Dasar Organisasi
                        </h3>
                        <p className="text-slate-600 text-sm mt-1.5">
                            Prinsip moral dan etika yang menjadi pedoman seluruh kader KIPAN Indonesia.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {ABOUT.nilai.map((n, idx) => {
                            const Icon = NILAI_ICONS[idx] || ShieldCheck;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-300 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900 mb-1">
                                        {n.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {n.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

