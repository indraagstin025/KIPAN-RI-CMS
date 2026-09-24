import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Newspaper, Calendar, ArrowUpRight, MapPin } from 'lucide-react';
import { BERITA } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';

export default function BeritaUmum() {
    const [selected, setSelected] = useState<(typeof BERITA)[0] | null>(null);

    return (
        <section
            id="berita-terkini"
            className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                        <Newspaper className="w-3.5 h-3.5" />
                        Berita & Artikel
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight">
                        Wawasan & Edukasi{' '}
                        <span className="text-gradient-water">Pencegahan</span>
                    </h2>
                    <p className="mt-5 text-slate-600 text-base lg:text-lg leading-relaxed">
                        Kumpulan artikel, rilis kegiatan, dan edukasi seputar bahaya narkoba
                        untuk membentengi generasi muda Indonesia.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {BERITA.slice(0, 6).map((item, idx) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelected(item)}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100 flex flex-col"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                                <SafeImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="font-bold text-base text-blue-950 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                                    <span>Baca Artikel</span>
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                                aria-label="Tutup"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                                <SafeImage
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                                <span className="bg-blue-100 text-blue-700 font-semibold px-2.5 py-0.5 rounded-full">
                                    {selected.category}
                                </span>
                                <span>{selected.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {selected.location}
                                </span>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-bold text-blue-950 mb-4">
                                {selected.title}
                            </h2>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                {selected.excerpt}
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
