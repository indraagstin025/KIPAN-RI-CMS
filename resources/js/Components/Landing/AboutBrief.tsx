import { motion } from 'framer-motion';
import {
    ShieldCheck,
    ArrowRight,
    School,
    GraduationCap,
    HeartPulse,
    Sparkles,
    Scale,
    Compass,
    Award,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ABOUT, COMPANY } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

const PILAR_BRIEF = [
    {
        title: 'Edukasi & Sosialisasi Pelajar',
        desc: 'Pencegahan dini melalui program Goes to School & Goes to Campus di seluruh Indonesia.',
        icon: School,
        color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
        title: 'Pelatihan & Kaderisasi Inti',
        desc: 'Pembekalan wawasan kebangsaan, karakter kepemimpinan, dan deteksi dini narkotika.',
        icon: GraduationCap,
        color: 'text-sky-600 bg-sky-50 border-sky-200',
    },
    {
        title: 'Konseling Sebaya (Peer Support)',
        desc: 'Pendampingan humanis sesama pemuda dan jembatan rujukan rehabilitasi sukarela BNN.',
        icon: HeartPulse,
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
        title: 'Pemberdayaan Minat & Kreativitas',
        desc: 'Menyalurkan energi pemuda ke olahraga, seni budaya, digitalisasi, dan wirausaha kreatif.',
        icon: Sparkles,
        color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
];

export default function AboutBrief() {
    return (
        <section
            id="tentang"
            className="-mt-10 sm:-mt-14 rounded-t-3xl sm:rounded-t-[2.5rem] bg-white relative z-20 shadow-xl border-t border-slate-200/80 pt-14 sm:pt-20 pb-16 lg:pb-20"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* 4 Pilar Gerakan Pemuda Ringkas */}
                <div className="mb-14 lg:mb-18">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-blue-200 shadow-xs mb-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                                4 Pilar Gerakan P4GN
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Aksi Nyata Pemuda Membentengi Bangsa
                            </h2>
                        </div>
                        <Link
                            href="/program"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors shrink-0"
                        >
                            <span>Detail Program Kerja</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {PILAR_BRIEF.map((p, idx) => {
                            const Icon = p.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${p.color} shadow-xs mb-4`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-base text-slate-900 leading-snug mb-2">
                                            {p.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Brief Profile Card (Ringkasan Singkat Eksekutif) */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-slate-200 mb-3 shadow-xs">
                                <Compass className="w-3.5 h-3.5 text-blue-600" />
                                <span>Sekilas KIPAN Indonesia</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Wadah Kaderisasi Nasional Binaan{' '}
                                <span className="text-blue-700">Kemenpora RI &amp; Mitra BNN RI</span>
                            </h3>
                            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                                KIPAN hadir sebagai penggerak utama pencegahan narkoba di kalangan generasi muda,
                                berlandaskan <strong>UU No. 40 Tahun 2009</strong> tentang Kepemudaan dan <strong>Inpres No. 2 Tahun 2020</strong> tentang
                                Rencana Aksi Nasional P4GN di seluruh 38 provinsi dan 514 kabupaten/kota.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/tentang"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                                >
                                    <span>Pelajari Profil &amp; Legalitas Lengkap</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/struktur"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                                >
                                    <span>Struktur Organisasi</span>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-900">
                                <SafeImage
                                    src={ABOUT.image}
                                    alt="Kegiatan Pelatihan KIPAN Indonesia"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="text-xs text-sky-300 font-semibold">
                                        Pemuda Bergerak, Indonesia Bersinar
                                    </div>
                                    <div className="text-sm font-bold mt-0.5">
                                        Generasi Bebas Narkoba 2045
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
