import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import { ArrowLeftIcon, InfoCircledIcon } from '@radix-ui/react-icons';

interface PlaceholderPageProps {
    title: string;
    subtitle?: string;
    category?: string;
}

export default function PlaceholderPage({
    title,
    subtitle = 'Halaman ini sedang dalam tahap penyusunan konten detail dan akan segera memuat data komprehensif.',
    category = 'Halaman Khusus KIPAN RI',
}: PlaceholderPageProps) {
    return (
        <>
            <Head title={`${title} — KIPAN Republik Indonesia`} />
            <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-kipan-text-dark">
                <Navbar />

                <main className="flex-1 pt-36 pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        {/* Breadcrumb / Category */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/70 border border-blue-200 rounded-full text-xs font-bold text-kipan-navy uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-kipan-blue" />
                            <span>{category}</span>
                        </div>

                        {/* Title Header */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-kipan-navy tracking-tight leading-tight mb-4">
                            {title}
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                            {subtitle}
                        </p>

                        {/* Notice Card */}
                        <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm mb-8 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-kipan-blue flex items-center justify-center shrink-0 border border-blue-100">
                                <InfoCircledIcon className="w-5 h-5" />
                            </div>
                            <div className="space-y-2 text-sm text-slate-600">
                                <h2 className="text-base font-bold text-slate-800">
                                    Struktur Halaman Khusus Mandiri
                                </h2>
                                <p className="leading-relaxed">
                                    Sesuai rancangan arsitektur terbaru KIPAN RI, menu navigasi Navbar diarahkan langsung ke halaman khusus masing-masing agar halaman beranda tetap ringkas dan fokus sebagai etalase pengenalan gerakan.
                                </p>
                                <div className="pt-2 flex items-center gap-3">
                                    <span className="text-xs font-semibold text-kipan-blue bg-blue-50 px-2.5 py-1 rounded">
                                        Status: Siap Diisi Konten Lengkap
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home Button */}
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-kipan-navy hover:bg-kipan-blue text-white text-xs font-bold transition-colors shadow-xs"
                            >
                                <ArrowLeftIcon className="w-4 h-4" />
                                <span>Kembali ke Halaman Beranda</span>
                            </a>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
