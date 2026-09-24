import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { COMPANY } from '@/data/kipan-data';

const NAV_ITEMS = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Program', href: '/program' },
    { label: 'Struktur', href: '/struktur' },
    { label: 'Pengurus', href: '/pengurus' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Berita', href: '/berita' },
    { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
    const { url } = usePage();
    const isHome = url === '/' || url === '';

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (!isHome) {
            setScrolled(true);
            return;
        }

        const handleScroll = () => {
            const hero = document.getElementById('beranda');
            if (hero) {
                const rect = hero.getBoundingClientRect();
                setScrolled(rect.bottom <= 80);
            } else {
                setScrolled(window.scrollY > 300);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isHome]);

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

    const isLightMode = !isHome || scrolled;

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
                isLightMode
                    ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
                    : 'bg-gradient-to-b from-blue-950/90 via-blue-950/40 to-transparent'
            }`}
        >
            <nav className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12" aria-label="Navigasi Utama">
                <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
                    {/* Logo & Identity (Preserved Circular Logos) */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                    >
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden border border-white/20 bg-white p-0.5 shrink-0 shadow-md">
                            <img
                                src="/logo-kipan.jpg"
                                alt="Logo KIPAN"
                                className="w-full h-full object-cover rounded-full"
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
                                Binaan Kemenpora &amp; BNN RI
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation (Direct Links to Dedicated Pages) */}
                    <ul className="hidden xl:flex items-center justify-end gap-1 flex-1 mx-4">
                        {NAV_ITEMS.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? isHome
                                    : url === item.href || url.startsWith(item.href);

                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                                            isActive
                                                ? isLightMode
                                                    ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs'
                                                    : 'text-white bg-white/20 border border-white/20 shadow-xs'
                                                : isLightMode
                                                ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100 border border-transparent'
                                                : 'text-slate-200 hover:text-white hover:bg-white/10 border border-transparent'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
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
                            <div className="bg-white rounded-2xl shadow-xl p-4 my-2 border border-slate-200 max-h-[calc(100dvh-5.5rem)] overflow-y-auto">
                                <ul className="space-y-1">
                                    {NAV_ITEMS.map((item) => {
                                        const isActive =
                                            item.href === '/'
                                                ? isHome
                                                : url === item.href || url.startsWith(item.href);
                                        return (
                                            <li key={item.label}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                                                        isActive
                                                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                            : 'text-slate-800 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
