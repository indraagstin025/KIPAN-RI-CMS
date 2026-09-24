import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY } from '@/data/kipan-data';

export default function FloatingWhatsApp() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        'Halo ' + COMPANY.name + ' Indonesia, saya ingin informasi lebih lanjut seputar KIPAN.',
    )}`;

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-50 flex flex-col items-end gap-3"
                >
                    {/* Tooltip Card */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="bg-white rounded-xl shadow-lg p-4 w-72 max-w-[calc(100vw-2.5rem)] border border-slate-200"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                                            <MessageCircle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-900 leading-tight">
                                                Sekretariat KIPAN
                                            </div>
                                            <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5 mt-0.5">
                                                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                                                Layanan Aktif
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-slate-400 hover:text-slate-700 p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                        aria-label="Tutup jendela chat"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                                    Ada pertanyaan seputar program pembinaan atau
                                    koordinasi wilayah KIPAN Indonesia?
                                </p>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                                >
                                    Hubungi Lewat WhatsApp
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="relative w-12 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md border border-emerald-500/20 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
                        aria-label="Buka obrolan WhatsApp Sekretariat KIPAN"
                    >
                        {open ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <MessageCircle className="w-5 h-5" />
                        )}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
