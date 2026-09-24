import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { PROGRAMS } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';
import {
    CheckIcon,
    BookmarkFilledIcon,
    LayersIcon,
    SpeakerLoudIcon,
    PersonIcon,
    StarFilledIcon,
    RocketIcon,
} from '@radix-ui/react-icons';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Megaphone: SpeakerLoudIcon,
    Presentation: LayersIcon,
    GraduationCap: BookmarkFilledIcon,
    School: StarFilledIcon,
    Radio: RocketIcon,
    Users: PersonIcon,
};

export default function Program() {
    return (
        <>
            <Head title="Program Kerja KIPAN Indonesia : Aksi Nyata P4GN Pemuda" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Program Kerja & Inisiatif"
                        title="Program Kerja KIPAN Indonesia"
                        subtitle="Rencana aksi komprehensif, sosialisasi sekolah, dan pengkaderan berkelanjutan dalam mewujudkan Pemuda Bersinar."
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PROGRAMS.map((program) => {
                                const Icon = ICON_MAP[program.icon] || SpeakerLoudIcon;
                                return (
                                    <div
                                        key={program.id}
                                        className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
                                                <SafeImage
                                                    src={program.image}
                                                    alt={program.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                                                    {program.number}
                                                </div>
                                                <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-xs">
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                                                    {program.subtitle}
                                                </span>
                                                <h3 className="text-lg font-bold text-slate-900 mt-1 leading-snug">
                                                    {program.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                                                    {program.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                                            <div className="text-xs font-semibold text-slate-500 mb-2">
                                                Cakupan Pelaksanaan:
                                            </div>
                                            <ul className="space-y-1.5">
                                                {program.features.map((feat, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                                                        <div className="w-4 h-4 rounded bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                                                            <CheckIcon className="w-3 h-3" />
                                                        </div>
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
