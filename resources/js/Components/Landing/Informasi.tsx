import { motion } from 'framer-motion';
import {
    SpeakerLoudIcon,
    ReaderIcon,
    BookmarkIcon,
    RadiobuttonIcon,
    PersonIcon,
    CheckIcon,
    InfoCircledIcon,
    Component1Icon,
} from '@radix-ui/react-icons';
import { PROGRAMS } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Megaphone: SpeakerLoudIcon,
    Presentation: ReaderIcon,
    GraduationCap: BookmarkIcon,
    School: Component1Icon,
    Radio: RadiobuttonIcon,
    Users: PersonIcon,
};

export default function Informasi() {
    return (
        <section
            id="informasi"
            className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-14"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-700 text-xs font-semibold tracking-wider uppercase rounded-md border border-slate-200 shadow-xs mb-3">
                        <InfoCircledIcon className="w-3.5 h-3.5 text-blue-700" />
                        Pusat Informasi &amp; Program
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Program Kerja &amp; Informasi Kegiatan
                    </h2>
                    <p className="mt-3 text-slate-600 text-base leading-relaxed">
                        Inisiatif edukasi terpadu, sosialisasi, dan pembinaan kader anti narkoba
                        yang dijalankan KIPAN secara berkelanjutan di seluruh Indonesia.
                    </p>
                </motion.div>

                {/* Programs & Information Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {PROGRAMS.map((program, idx) => {
                        const Icon = ICON_MAP[program.icon] || SpeakerLoudIcon;
                        return (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    {/* Image Container with Badge */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
                                        <SafeImage
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        {/* Number Badge */}
                                        <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded border border-slate-200 shadow-xs">
                                            {program.number}
                                        </div>

                                        {/* Domain Icon Badge */}
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center shadow-xs">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Text Body */}
                                    <div className="p-5">
                                        <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide">
                                            {program.subtitle}
                                        </span>
                                        <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                                            {program.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                            {program.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Features Checklist */}
                                <div className="px-5 pb-5 pt-3 border-t border-slate-100">
                                    <ul className="space-y-1.5">
                                        {program.features.slice(0, 4).map((feat, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-xs text-slate-700 leading-snug"
                                            >
                                                <div className="w-4 h-4 rounded bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckIcon className="w-3 h-3" />
                                                </div>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
