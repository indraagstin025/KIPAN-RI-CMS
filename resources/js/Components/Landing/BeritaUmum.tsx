import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Newspaper, Calendar, ArrowUpRight, MapPin } from 'lucide-react';
import { BERITA } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

export default function BeritaUmum() {
    const [selected, setSelected] = useState<(typeof BERITA)[0] | null>(null);

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
            className="py-16 lg:py-24 bg-white border-t border-slate-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-14"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase rounded-md border border-slate-200 mb-3">
                        <Newspaper className="w-3.5 h-3.5 text-blue-700" />
                        Publikasi & Informasi
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Warta Terkini & Rilis Kegiatan
                    </h2>
                    <p className="mt-3 text-slate-600 text-base leading-relaxed">
                        Dokumentasi rilis kegiatan, edukasi pencegahan narkoba, dan
                        agenda kader KIPAN di berbagai daerah.
                    </p>
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {BERITA.slice(0, 6).map((item, idx) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            onClick={() => setSelected(item)}
                            className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col focus-within:ring-2 focus-within:ring-blue-600"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 border-b border-slate-200">
                                <SafeImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                                    <span>Baca Rilis</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Modal Detail Berita */}
            <AnimatePresence>
                {selected && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="article-modal-title"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 15 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-xl border border-slate-200 p-6 sm:p-8 relative"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                aria-label="Tutup jendela rilis"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 border border-slate-200 bg-slate-100">
                                <SafeImage
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 mb-3">
                                <span className="bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded border border-blue-200 text-[11px] uppercase tracking-wide">
                                    {selected.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                    {selected.date}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                    {selected.location}
                                </span>
                            </div>

                            <h2
                                id="article-modal-title"
                                className="text-lg sm:text-xl font-bold text-slate-900 mb-4 leading-snug"
                            >
                                {selected.title}
                            </h2>

                            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                                {selected.excerpt}
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
