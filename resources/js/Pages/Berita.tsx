import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { BERITA, type Berita as BeritaType } from '@/data/kipan-data';
import SafeImage from '@/Components/ui/safe-image';
import { Calendar, MapPin, Search, ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Semua', 'Nasional', 'Provinsi', 'Kabupaten'] as const;

export default function Berita() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
    const [search, setSearch] = useState<string>('');
    const [selected, setSelected] = useState<BeritaType | null>(null);

    const filtered = BERITA.filter((b) => {
        const matchesCategory = selectedCategory === 'Semua' || b.category === selectedCategory;
        const matchesSearch =
            b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
            b.location.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelected(null);
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
        <>
            <Head title="Warta Terkini & Publikasi : KIPAN Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Publikasi & Siaran Pers"
                        title="Warta Terkini KIPAN"
                        subtitle="Kumpulan berita, rilis resmi kegiatan, dan dokumentasi sosialisasi kader anti narkotika di seluruh Indonesia."
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        {/* Filter Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                            selectedCategory === cat
                                                ? 'bg-blue-600 text-white shadow-xs'
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full sm:w-72">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Cari judul berita..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* News Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((item) => (
                                <article
                                    key={item.id}
                                    onClick={() => setSelected(item)}
                                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between cursor-pointer group"
                                >
                                    <div>
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                            <SafeImage
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/95 text-blue-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-slate-200/80 shadow-xs">
                                                {item.category}
                                            </div>
                                            <div className="absolute bottom-2 right-2 bg-slate-950/75 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                                                <MapPin className="w-3 h-3 text-sky-400" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                                                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                                <span>{item.date}</span>
                                            </div>
                                            <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                                                {item.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                                        <span>Baca Liputan Lengkap</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Accessible Modal */}
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
                                    className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative"
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
                                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-sm"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="p-6 sm:p-8">
                                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4 text-blue-600" />
                                                <span>{selected.date}</span>
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-blue-600" />
                                                <span>{selected.location}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                                            {selected.title}
                                        </h3>

                                        <div className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                                            <p>{selected.excerpt}</p>
                                            <p>
                                                Program ini merupakan bagian dari implementasi Inpres No. 2 Tahun 2020 tentang Rencana Aksi Nasional P4GN.
                                                Kader KIPAN terus berkolaborasi dengan jajaran pemangku kepentingan untuk memastikan generasi muda terbentengi
                                                dari bahaya narkoba.
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-xs text-slate-400">
                                                Sumber: Rilis Resmi Sekretariat KIPAN
                                            </span>
                                            <button
                                                onClick={() => setSelected(null)}
                                                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
                                            >
                                                Tutup
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
