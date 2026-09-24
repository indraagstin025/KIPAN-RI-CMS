import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { STRUKTUR_LEVELS } from '@/data/kipan-data';
import {
    StarFilledIcon,
    ChevronDownIcon,
    LayersIcon,
    GlobeIcon,
    Component1Icon,
} from '@radix-ui/react-icons';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Landmark: LayersIcon,
    Map: GlobeIcon,
    Building2: Component1Icon,
};

export default function Struktur() {
    return (
        <>
            <Head title="Struktur Organisasi : Tata Kelola KIPAN Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Tata Kelola Organisasi"
                        title="Struktur & Hierarki Nasional"
                        subtitle="Sistem koordinasi berjenjang dari tingkat pusat hingga daerah dalam satu kesatuan garis komando gerakan pemuda."
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        {/* Dewan Pembina / Penasihat */}
                        <div className="max-w-4xl mx-auto mb-16 bg-blue-50/70 border border-blue-200/80 rounded-3xl p-6 sm:p-8">
                            <div className="flex items-center gap-2.5 font-bold text-blue-900 mb-4">
                                <StarFilledIcon className="w-5 h-5 text-amber-500 shrink-0" />
                                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                                    Dewan Pembina Nasional KIPAN RI
                                </h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-xs">
                                    <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                                        Pembina Utama
                                    </div>
                                    <div className="font-bold text-slate-900 text-base">
                                        Menteri Pemuda dan Olahraga RI
                                    </div>
                                    <div className="text-xs text-slate-500 mt-0.5">
                                        Kementerian Pemuda dan Olahraga (Kemenpora RI)
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-xs">
                                    <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                                        Mitra Strategis Nasional
                                    </div>
                                    <div className="font-bold text-slate-900 text-base">
                                        Kepala Badan Narkotika Nasional RI
                                    </div>
                                    <div className="text-xs text-slate-500 mt-0.5">
                                        Badan Narkotika Nasional (BNN RI)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hierarki Tingkatan */}
                        <div className="max-w-3xl mx-auto space-y-6">
                            {STRUKTUR_LEVELS.map((level, idx) => {
                                const Icon = ICON_MAP[level.icon] || LayersIcon;
                                const isLast = idx === STRUKTUR_LEVELS.length - 1;
                                return (
                                    <div key={level.level} className="relative">
                                        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0">
                                                    <Icon className="w-7 h-7" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                                                            Tingkat {level.level}
                                                        </span>
                                                        <span className="text-slate-300">•</span>
                                                        <span className="text-xs text-slate-500 font-medium">
                                                            {level.count}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                                                        {level.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                                                        {level.desc}
                                                    </p>
                                                </div>

                                                <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg shrink-0">
                                                    {level.count}
                                                </span>
                                            </div>
                                        </div>

                                        {!isLast && (
                                            <div className="flex justify-center my-2 text-slate-300">
                                                <ChevronDownIcon className="w-5 h-5 animate-bounce" />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
