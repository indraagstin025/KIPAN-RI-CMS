import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { ABOUT, COMPANY, STATS } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';
import {
    ShieldCheck,
    Scale,
    FileText,
    Target,
    Compass,
    CheckCircle2,
    Users,
    HeartHandshake,
    Award,
    Building2,
    MapPin,
} from 'lucide-react';

const NILAI_ICONS = [
    ShieldCheck, // Bersih
    HeartHandshake, // Peduli
    Award, // Berkarakter
    Users, // Bersatu
];

export default function Tentang() {
    return (
        <>
            <Head title="Tentang KIPAN Indonesia : Profil, Visi, Misi & Landasan Hukum" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Profil Lembaga Nasional"
                        title="Tentang KIPAN Indonesia"
                        subtitle="Kader Inti Pemuda Anti Narkoba Republik Indonesia binaan Kemenpora RI dan mitra strategis BNN RI."
                    />

                    {/* Content Section */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        {/* Grid: Story + Imagery */}
                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 lg:mb-24">
                            <div className="lg:col-span-6 flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-blue-200">
                                    <Compass className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Sejarah &amp; Latar Belakang</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                    Membentengi Generasi Muda Menuju <span className="text-blue-700">Indonesia Emas 2045</span>
                                </h2>
                                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                                    {ABOUT.paragraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>

                                {/* Payung Hukum Resmi */}
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-2">
                                    <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-3">
                                        <Scale className="w-5 h-5 text-blue-700 shrink-0" />
                                        <span>Landasan Yuridis &amp; Payung Regulasi</span>
                                    </div>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                                        <li className="flex items-start gap-2.5">
                                            <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>Undang-Undang No. 40 Tahun 2009</strong> tentang Kepemudaan (Amanat peran aktif dan kepemimpinan pemuda).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>Instruksi Presiden No. 2 Tahun 2020</strong> tentang Rencana Aksi Nasional Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika (RAN P4GN).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span><strong>Pedoman Teknis Pembinaan Kader Anti Narkoba Kemenpora RI</strong> tentang pembentukan jejaring kepemudaan nasional hingga daerah.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-6 flex flex-col gap-6">
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-900">
                                    <SafeImage
                                        src={ABOUT.image}
                                        alt="Kegiatan KIPAN Indonesia"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4 bg-blue-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-700/80">
                                        Binaan Kemenpora &amp; BNN RI
                                    </div>
                                    <div className="absolute bottom-5 left-5 right-5 text-white">
                                        <p className="font-bold text-lg">{COMPANY.fullName}</p>
                                        <p className="text-xs text-slate-300 mt-0.5">{COMPANY.tagline}</p>
                                    </div>
                                </div>

                                {/* Reach stats */}
                                <div className="grid grid-cols-3 gap-4 bg-blue-50/60 border border-blue-100 rounded-2xl p-5">
                                    {STATS.map((s) => (
                                        <div key={s.label} className="text-center">
                                            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">
                                                {s.value}
                                            </div>
                                            <div className="text-xs text-slate-600 mt-0.5">
                                                {s.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Visi & Misi */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16 lg:mb-24">
                            {/* Visi */}
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-blue-700 font-bold mb-3 uppercase tracking-wider text-xs">
                                        <Compass className="w-4 h-4" />
                                        <span>Visi Organisasi</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                                        Arah &amp; Cita-Cita Masa Depan
                                    </h3>
                                    <blockquote className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed pl-4 border-l-3 border-blue-600 italic">
                                        &ldquo;{ABOUT.visi}&rdquo;
                                    </blockquote>
                                </div>
                            </div>

                            {/* Misi */}
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
                                <div className="flex items-center gap-2 text-blue-700 font-bold mb-3 uppercase tracking-wider text-xs">
                                    <Target className="w-4 h-4" />
                                    <span>Misi Strategis</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                                    5 Langkah Gerakan Nyata
                                </h3>
                                <ul className="space-y-3">
                                    {ABOUT.misi.map((m, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{m}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Nilai-Nilai Dasar */}
                        <div>
                            <div className="max-w-2xl mx-auto text-center mb-10">
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                    Nilai-Nilai Dasar Kader KIPAN
                                </h3>
                                <p className="text-slate-600 text-sm mt-2">
                                    Pedoman etika moral dan integritas seluruh kader inti pemuda di seluruh Indonesia.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {ABOUT.nilai.map((n, idx) => {
                                    const Icon = NILAI_ICONS[idx] || ShieldCheck;
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1.5">
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
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
