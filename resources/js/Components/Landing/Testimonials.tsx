import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PersonIcon,
    StarFilledIcon,
    Component1Icon,
    SewingPinIcon,
    EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import { PENGURUS, TESTIMONIAL_STATS } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

const STATS_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Users: PersonIcon,
    Star: Component1Icon,
    Award: StarFilledIcon,
    MapPin: SewingPinIcon,
};

const FILTERS = ['Semua', 'Nasional', 'Provinsi', 'Kabupaten'] as const;

function getLevelBadgeStyle(level: string) {
    switch (level.toLowerCase()) {
        case 'nasional':
            return 'bg-blue-50 text-blue-900 border-blue-200';
        case 'provinsi':
            return 'bg-sky-50 text-sky-900 border-sky-200';
        case 'kabupaten':
            return 'bg-slate-100 text-slate-800 border-slate-200';
        default:
            return 'bg-slate-100 text-slate-800 border-slate-200';
    }
}

export default function Testimonials() {
    const [filter, setFilter] = useState<string>('Semua');

    const filtered =
        filter === 'Semua'
            ? PENGURUS
            : PENGURUS.filter((p) => p.level === filter);

    return (
        <section
            id="pengurus"
            className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-700 text-xs font-semibold tracking-wider uppercase rounded-md border border-slate-200 shadow-xs mb-3">
                        <PersonIcon className="w-3.5 h-3.5 text-blue-700" />
                        Direktori Kepengurusan
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Pengurus Organisasi KIPAN
                    </h2>
                    <p className="mt-3 text-slate-600 text-base leading-relaxed">
                        Kader pimpinan KIPAN di tingkat nasional, provinsi, hingga
                        kabupaten/kota yang mengawal konsistensi pembinaan pemuda.
                    </p>
                </motion.div>

                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto"
                >
                    {TESTIMONIAL_STATS.map((stat, idx) => {
                        const Icon = STATS_ICON_MAP[stat.icon] || Component1Icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs text-center flex flex-col items-center"
                            >
                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-3 text-blue-700">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Filter Tabs (Segmented Control) */}
                <div className="flex justify-center mb-10">
                    <div
                        role="tablist"
                        aria-label="Tingkatan Pengurus"
                        className="inline-flex p-1 bg-slate-200/70 rounded-lg border border-slate-300 max-w-full overflow-x-auto"
                    >
                        {FILTERS.map((f) => {
                            const active = filter === f;
                            return (
                                <button
                                    key={f}
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => setFilter(f)}
                                    className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                                        active
                                            ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    {f}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Pengurus Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.25, delay: idx * 0.03 }}
                                className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all p-5 flex flex-col justify-between"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Photo */}
                                    <div className="relative shrink-0">
                                        <SafeImage
                                            src={p.photo}
                                            alt={p.name}
                                            className="w-20 h-20 sm:w-22 sm:h-22 rounded-lg object-cover border border-slate-200 bg-slate-100"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="mb-1.5">
                                            <span
                                                className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${getLevelBadgeStyle(
                                                    p.level,
                                                )}`}
                                            >
                                                {p.level}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                                            {p.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-blue-700 font-semibold mt-0.5">
                                            {p.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Meta details */}
                                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <SewingPinIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                        <span className="truncate">{p.wilayah}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 truncate">
                                        <EnvelopeClosedIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                        <span className="truncate">{p.kontak}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filtered.length === 0 && (
                    <div className="text-center py-12 px-6 bg-white rounded-xl border border-slate-200 max-w-md mx-auto shadow-xs my-4">
                        <div className="w-12 h-12 mx-auto rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-3 text-slate-600">
                            <PersonIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">
                            Belum Ada Data Pengurus
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Data pengurus untuk tingkatan ini akan ditampilkan setelah proses
                            penetapan dan verifikasi resmi selesai.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
