import LandingLayout from '@/Layouts/LandingLayout';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Target, BarChart2, BookOpen, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/Components/Layout/ScrollReveal';

export default function Index() {
    return (
        <LandingLayout
            title="Monitoring Navigasi & Sebaran Wilayah — KIPAN Republik Indonesia"
            className="bg-slate-50"
        >
            {/* Hero Section */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-20 sm:pt-28 lg:pt-32">
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
                        Monitoring
                    </div>

                    {/* Title Header */}
                    <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Skrining Risiko Penyalahgunaan Narkoba
                    </h1>
                    
                    <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                            Alat skrining mandiri yang dikembangkan dari standar WHO ASSIST untuk membantu Anda memahami kondisi dan tingkat risiko terkait penggunaan zat secara anonim.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="w-full">
                        <ScrollReveal delay={0.1}>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                                {/* Card 1: CTA Cek Risiko */}
                                <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-xl sm:p-10 lg:col-span-5 flex flex-col justify-between">
                                    {/* Decorative BG */}
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-kipan-yellow/10 blur-2xl" />
                                    
                                    <div className="relative">
                                        <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
                                            <span className="relative flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                            </span>
                                            Fitur Baru
                                        </div>
                                        
                                        <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900">
                                            Cek Risiko Anda
                                        </h2>
                                        
                                        <p className="mb-8 text-base leading-relaxed text-slate-600">
                                            Kuesioner skrining mandiri yang dirancang khusus untuk memberikan gambaran awal mengenai risiko penyalahgunaan narkoba. Jawablah beberapa pertanyaan singkat untuk memahami kondisi Anda saat ini.
                                        </p>
                                    </div>

                                    <div className="relative mt-auto pt-4 border-t border-slate-100">
                                        <a
                                            href="/monitoring/cek-risiko"
                                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-kipan-navy px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#061C33] hover:shadow-lg"
                                        >
                                            Mulai Kuesioner Sekarang
                                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                        
                                        <p className="mt-4 text-center text-xs text-slate-400">
                                            *Alat ini merupakan skrining edukatif awal, bukan diagnosis medis.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2: Panduan & Tujuan */}
                                <div className="relative overflow-hidden rounded-3xl bg-slate-50 p-8 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-xl sm:p-10 lg:col-span-7 flex flex-col justify-center space-y-8">
                                    {/* Tujuan */}
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100/60 text-blue-600 shadow-sm ring-1 ring-blue-200">
                                            <Target className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-900">Tujuan Modul</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">
                                                Mendeteksi dini tingkat risiko penyalahgunaan zat, serta memberikan rekomendasi langkah tindak lanjut yang sesuai.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Output */}
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100/60 text-emerald-600 shadow-sm ring-1 ring-emerald-200">
                                            <BarChart2 className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-900">Output & Hasil</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">
                                                Kalkulasi skor dan <strong>Tingkat Risiko (Rendah/Sedang/Tinggi)</strong> untuk tiap zat, beserta rujukan suportif.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panduan */}
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100/60 text-indigo-600 shadow-sm ring-1 ring-indigo-200">
                                            <BookOpen className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-900">Panduan Pengisian</h3>
                                            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                                                    <span>Jawablah dengan <strong>jujur</strong> berdasarkan pengalaman aktual Anda.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                                                    <span>Waktu pengisian <strong>5–10 menit</strong>. Tidak ada jawaban benar/salah.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                                                    <span>Kerahasiaan <strong>100% anonim</strong>. Tidak meminta nama atau NIK.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Dokumentasi Link */}
                            <div className="mt-8 text-center">
                                <a 
                                    href="/monitoring/cek-risiko/dokumentasi"
                                    className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
                                >
                                    Lihat Selengkapnya mengenai Dokumentasi Modul Ini
                                    <ArrowRightIcon className="h-4 w-4" />
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
