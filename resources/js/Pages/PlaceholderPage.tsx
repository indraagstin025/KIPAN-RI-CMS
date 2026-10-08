import LandingLayout from '@/Layouts/LandingLayout';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import ScrollReveal from '@/Components/Layout/ScrollReveal';

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
            {/* Hero Section matching BeritaHero */}
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-20 sm:pt-28 lg:pt-32">
                {/* Subtle Youth Network Graphic Grid Background */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* Subtle Diagonal Glow */}
                <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

                <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Category */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100">
                        <span className="h-2 w-2 rounded-full bg-kipan-yellow" />
                        {category}
                    </div>

                    {/* Title Header */}
                    <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    
                    <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex min-h-screen items-center bg-slate-50">
                <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 w-full">
                <ScrollReveal>
                    <div className="relative overflow-hidden rounded-3xl bg-kipan-navy px-6 py-12 text-center sm:p-14">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kipan-blue/30 blur-3xl" />
                        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-kipan-yellow/20 blur-3xl" />
                        <div className="relative">
                            <h2 className="mb-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                                Halaman Segera Tersedia
                            </h2>
                            <p className="mx-auto mb-8 max-w-xl text-sm text-blue-100/90 sm:text-base">
                                Kami sedang menyusun konten dan data komprehensif untuk halaman ini. Silakan kembali ke beranda untuk menjelajahi informasi KIPAN lainnya.
                            </p>
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full bg-kipan-yellow px-7 py-3.5 text-sm font-black text-kipan-navy shadow-lg transition-colors hover:bg-yellow-300"
                            >
                                <ArrowLeftIcon className="h-5 w-5" />
                                Kembali ke Beranda
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            </div>
        </LandingLayout>
    );
}
