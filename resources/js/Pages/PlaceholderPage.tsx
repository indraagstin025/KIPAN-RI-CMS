import LandingLayout from '@/Layouts/LandingLayout';
import { ArrowLeftIcon, InfoCircledIcon } from '@radix-ui/react-icons';

interface PlaceholderPageProps {
    readonly title: string;
    readonly subtitle?: string;
    readonly category?: string;
}

export default function PlaceholderPage({
    title,
    subtitle = 'Halaman ini sedang dalam tahap penyusunan konten detail dan akan segera memuat data komprehensif.',
    category = 'Halaman Khusus KIPAN RI',
}: Readonly<PlaceholderPageProps>) {
    return (
        <LandingLayout
            title={`${title} — KIPAN Republik Indonesia`}
            className="bg-slate-50"
        >
            <div className="container mx-auto max-w-4xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
                {/* Breadcrumb / Category */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-kipan-navy">
                    <span className="h-2 w-2 rounded-full bg-kipan-blue" />
                    <span>{category}</span>
                </div>

                {/* Title Header */}
                <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-kipan-navy sm:text-4xl lg:text-5xl">
                    {title}
                </h1>

                <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    {subtitle}
                </p>

                {/* Notice Card */}
                <div className="mb-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-kipan-blue">
                        <InfoCircledIcon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                        <h2 className="text-base font-bold text-slate-800">
                            Struktur Halaman Khusus Mandiri
                        </h2>
                        <p className="leading-relaxed">
                            Sesuai rancangan arsitektur terbaru KIPAN RI, menu
                            navigasi Navbar diarahkan langsung ke halaman khusus
                            masing-masing agar halaman beranda tetap ringkas dan
                            fokus sebagai etalase pengenalan gerakan.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <span className="rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-kipan-blue">
                                Status: Siap Diisi Konten Lengkap
                            </span>
                        </div>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div>
                    <a
                        href="/"
                        className="shadow-xs inline-flex items-center gap-2 rounded-full bg-kipan-navy px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-kipan-blue"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span>Kembali ke Halaman Beranda</span>
                    </a>
                </div>
            </div>
        </LandingLayout>
    );
}
