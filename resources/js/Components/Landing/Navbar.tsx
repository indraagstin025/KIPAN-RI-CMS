import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY } from '@/data/kipan-data';

const NAV_GROUPS = [
    { label: 'Beranda', href: '#beranda' },
    {
        label: 'Profil',
        items: [
            { label: 'Tentang KIPAN', href: '#tentang' },
            { label: 'Struktur Organisasi', href: '#struktur' },
            { label: 'Jajaran Pengurus', href: '#pengurus' },
        ],
    },
    { label: 'Berita & Edukasi', href: '#berita-terkini' },
    { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Handle Escape key to close mobile menu (R-32 accessibility)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && mobileOpen) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [mobileOpen]);

    const isLightMode = scrolled;

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 pt-[env(safe-area-inset-top,0px)] ${
                isLightMode
                    ? 'bg-white border-b border-slate-200/80 shadow-sm'
                    : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/10'
            }`}
        >
            <nav className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12" aria-label="Navigasi Utama">
                <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
                    {/* Logo & Identity */}
                    <a
                        href="#beranda"
                        className="flex items-center gap-3 group shrink-0 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 shrink-0">
                            <img
                                src="/logo-kipan.jpg"
                                alt="Logo KIPAN"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div
                                className={`font-bold text-base lg:text-lg tracking-tight ${
                                    isLightMode ? 'text-slate-900' : 'text-white'
                                }`}
                            >
                                {COMPANY.name}{' '}
                                <span
                                    className={`font-extrabold ${
                                        isLightMode ? 'text-blue-700' : 'text-blue-400'
                                    }`}
                                >
                                    Indonesia
                                </span>
                            </div>
                            <div
                                className={`text-[11px] font-medium ${
                                    isLightMode ? 'text-slate-500' : 'text-slate-300'
                                }`}
                            >
                                Mitra Binaan BNN RI
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden xl:flex items-center justify-end gap-1 flex-1 mx-4">
                        {NAV_GROUPS.map((group) => (
                            <li key={group.label} className="relative group/nav">
                                {group.items ? (
                                    <>
                                        <button
                                            className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                                                isLightMode
                                                    ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
                                                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                                            }`}
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            {group.label}
                                            <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-150 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
                                        </button>
                                        <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-slate-200 p-1.5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-focus-within/nav:opacity-100 group-focus-within/nav:visible transition-all duration-150 transform origin-top-left scale-95 group-hover/nav:scale-100 group-focus-within/nav:scale-100">
                                            {group.items.map((subItem) => (
                                                <a
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href={group.href}
                                        className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                                            isLightMode
                                                ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
                                                : 'text-slate-200 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        {group.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`xl:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                            isLightMode
                                ? 'text-slate-900 hover:bg-slate-100'
                                : 'text-white hover:bg-white/10'
                        }`}
                        aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu drawer */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="xl:hidden overflow-hidden"
                        >
                            <div className="bg-white rounded-xl shadow-xl p-4 my-2 border border-slate-200 max-h-[calc(100dvh-5.5rem)] overflow-y-auto">
                                <ul className="space-y-1">
                                    {NAV_GROUPS.map((group) => (
                                        <li key={group.label}>
                                            {group.items ? (
                                                <div className="space-y-1">
                                                    <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                        {group.label}
                                                    </div>
                                                    <div className="pl-2 space-y-1">
                                                        {group.items.map((sub) => (
                                                            <a
                                                                key={sub.href}
                                                                href={sub.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block px-3 py-2.5 text-sm font-medium text-slate-800 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                                            >
                                                                {sub.label}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <a
                                                    href={group.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block px-3 py-2.5 text-sm font-medium text-slate-800 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                                >
                                                    {group.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}


