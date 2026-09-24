import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cross2Icon,
    ReaderIcon,
    CalendarIcon,
    ArrowTopRightIcon,
    SewingPinIcon,
    ClockIcon,
    StarFilledIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { BERITA, type Berita } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

export default function BeritaUmum() {
    const [selected, setSelected] = useState<Berita | null>(null);
    const [activeTab, setActiveTab] = useState<'terbaru' | 'terpopuler'>('terbaru');

    // Featured Story (Center column)
    const featuredStory = BERITA[0];
    // Recent Ticker items (Left column)
    const tickerItems = BERITA.slice(1, 4);
    // Tabbed items (Right column)
    const tabbedItems = activeTab === 'terbaru' ? BERITA.slice(2, 6) : BERITA.slice(0, 4).reverse();

    // Keyboard ESC listener for accessible modal closing (R-32)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelected(null);
            }
        };

        if (selected) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selected]);

    return (
        <section
            id="berita-terkini"
            className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header (Jabarprov style: Left Title, Right Link Button) */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 lg:mb-12">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-blue-800 text-xs font-semibold tracking-wider uppercase rounded-md border border-slate-200 shadow-xs mb-3">
                            <ReaderIcon className="w-3.5 h-3.5 text-blue-600" />
                            Publikasi &amp; Informasi
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Warta Terkini &amp; Agenda KIPAN
                        </h2>
                        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                            Dokumentasi rilis kegiatan, edukasi pencegahan narkoba, dan pergerakan kader inti pemuda di seluruh Indonesia.
                        </p>
                    </div>

                    <a
                        href="/berita"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 text-xs sm:text-sm font-semibold rounded-lg border border-slate-200 hover:border-blue-300 transition-colors shadow-xs shrink-0 self-start md:self-end"
                    >
                        <span>Lihat Semua Berita</span>
                        <ArrowTopRightIcon className="w-4 h-4" />
                    </a>
                </div>

                {/* 3-Column Bento Layout (Signature Jabarprov Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Column 1: Info & Agenda Kilat (Left, 3 cols) */}
                    <div className="lg:col-span-3 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs p-5 justify-between">
                        <div>
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm pb-3 border-b border-slate-100 mb-4">
                                <ClockIcon className="w-4 h-4 text-blue-600" />
                                <span>Agenda &amp; Rilis Kilat</span>
                            </div>
                            <div className="space-y-4">
                                {tickerItems.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelected(item)}
                                        className="group cursor-pointer pb-4 border-b border-slate-100 last:border-b-0 hover:opacity-90 transition-opacity"
                                    >
                                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                                            <span className="font-semibold text-blue-700 uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                            <span>•</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                                            {item.excerpt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/60 rounded-xl p-3 border border-blue-100">
                            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-0.5">
                                <StarFilledIcon className="w-3.5 h-3.5 text-blue-600" />
                                <span>Pusat Siaran Pers</span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                                Liputan resmi kegiatan KIPAN bersama Menpora RI &amp; BNN RI.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Sorotan Utama / Featured Big Card (Center, 5 cols) */}
                    <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:shadow-md hover:border-slate-300 transition-all">
                        <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-900">
                            <SafeImage
                                src={featuredStory.image}
                                alt={featuredStory.title}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                            <div className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-xs uppercase tracking-wider">
                                Sorotan Nasional
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <div className="flex items-center gap-2 text-xs text-sky-200 mb-1.5">
                                    <CalendarIcon className="w-3.5 h-3.5" />
                                    <span>{featuredStory.date}</span>
                                    <span>•</span>
                                    <SewingPinIcon className="w-3.5 h-3.5" />
                                    <span>{featuredStory.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3
                                    onClick={() => setSelected(featuredStory)}
                                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug cursor-pointer"
                                >
                                    {featuredStory.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                                    {featuredStory.excerpt}
                                </p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-800 rounded-md border border-blue-200">
                                    {featuredStory.category}
                                </span>
                                <button
                                    onClick={() => setSelected(featuredStory)}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer"
                                >
                                    <span>Baca Liputan</span>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Tabbed List (Right, 4 cols - TERBARU | TERPOPULER) */}
                    <div className="lg:col-span-4 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs p-5">
                        {/* Tab Headers */}
                        <div className="flex items-center border-b border-slate-200 pb-2 mb-4">
                            <button
                                onClick={() => setActiveTab('terbaru')}
                                className={`flex-1 text-xs font-bold uppercase tracking-wider py-1.5 text-center transition-colors cursor-pointer ${
                                    activeTab === 'terbaru'
                                        ? 'text-blue-700 border-b-2 border-blue-600'
                                        : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                Terbaru
                            </button>
                            <button
                                onClick={() => setActiveTab('terpopuler')}
                                className={`flex-1 text-xs font-bold uppercase tracking-wider py-1.5 text-center transition-colors cursor-pointer ${
                                    activeTab === 'terpopuler'
                                        ? 'text-blue-700 border-b-2 border-blue-600'
                                        : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                Terpopuler
                            </button>
                        </div>

                        {/* List items with thumbnails */}
                        <div className="space-y-3.5 flex-1">
                            {tabbedItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelected(item)}
                                    className="group flex items-start gap-3 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors"
                                >
                                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                        <SafeImage
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
                                            <span className="font-semibold text-blue-700">{item.category}</span>
                                            <span>•</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Accessible News Detail Modal */}
            <AnimatePresence>
                {selected && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative"
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                                <SafeImage
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-blue-900/90 text-white text-xs font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                                    {selected.category}
                                </div>
                                <button
                                    onClick={() => setSelected(null)}
                                    aria-label="Tutup Detail Berita"
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <Cross2Icon className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <CalendarIcon className="w-4 h-4 text-blue-600" />
                                        <span>{selected.date}</span>
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center gap-1.5">
                                        <SewingPinIcon className="w-4 h-4 text-blue-600" />
                                        <span>{selected.location}</span>
                                    </div>
                                </div>

                                <h3
                                    id="modal-headline"
                                    className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight"
                                >
                                    {selected.title}
                                </h3>

                                <div className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                                    <p>{selected.excerpt}</p>
                                    <p>
                                        Program ini merupakan bagian integral dari Rencana Aksi Nasional P4GN (Inpres No. 2 Tahun 2020)
                                        yang terus digencarkan oleh KIPAN di berbagai tingkatan struktur kepengurusan. Sinergi antara pemerintah,
                                        masyarakat, dan kader pemuda menjadi kunci utama dalam membendung peredaran narkoba hingga ke tingkat akar rumput.
                                    </p>
                                </div>

                                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs text-slate-400">
                                        Sumber: Rilis Resmi Sekretariat KIPAN
                                    </span>
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
