import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HamburgerMenuIcon,
    Cross2Icon,
    CaretDownIcon,
} from '@radix-ui/react-icons';
import { Link, usePage } from '@inertiajs/react';
import { COMPANY } from '@/data/kipan-data';

interface SubMenuItem {
    label: string;
    href: string;
    desc?: string;
}

interface NavItem {
    label: string;
    href?: string;
    items?: SubMenuItem[];
}

const NAV_DROPDOWNS: NavItem[] = [
    { label: 'Beranda', href: '/' },
    {
        label: 'Profil KIPAN',
        items: [
            {
                label: 'Tentang KIPAN',
                href: '/tentang',
                desc: 'Sejarah, legalitas UU & Inpres, visi misi resmi',
            },
            {
                label: 'Struktur Organisasi',
                href: '/struktur',
                desc: 'Hierarki komando nasional & dewan pembina',
            },
            {
                label: 'Direktori Pengurus',
                href: '/pengurus',
                desc: 'Data pimpinan pusat dan koordinator daerah',
            },
        ],
    },
    {
        label: 'Program & Aksi',
        items: [
            {
                label: 'Program Kerja P4GN',
                href: '/program',
                desc: 'Inisiatif pencegahan, sosialisasi, dan pembinaan',
            },
            {
                label: 'Kalender & Agenda',
                href: '/agenda',
                desc: 'Jadwal kegiatan pemuda di 38 provinsi',
            },
        ],
    },
    {
        label: 'Publikasi',
        items: [
            {
                label: 'Warta Terkini',
                href: '/berita',
                desc: 'Siaran pers resmi dan dokumentasi kegiatan',
            },
        ],
    },
    {
        label: 'Kontak & Layanan',
        items: [
            {
                label: 'Hubungi Sekretariat',
                href: '/kontak',
                desc: 'Kanal kemitraan, permohonan narasumber & audiensi',
            },
            {
                label: 'Hotline BNN 184',
                href: '/kontak',
                desc: 'Layanan darurat bebas pulsa BNN RI',
            },
        ],
    },
];

export default function Navbar() {
    const { url } = usePage();
    const isHome = url === '/' || url === '';

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

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

    // Close desktop dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Escape listener for accessibility
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileOpen(false);
                setOpenDropdown(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const isLightMode = !isHome || scrolled;

    return (
        <header
            ref={navRef}
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

                    {/* Desktop Dropdown Navigation (Jabarprov Style with Radix UI CaretDownIcon) */}
                    <ul className="hidden xl:flex items-center justify-end gap-1 flex-1 mx-4">
                        {NAV_DROPDOWNS.map((item) => {
                            if (!item.items) {
                                const isActive = isHome;
                                return (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href || '/'}
                                            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                                                isActive
                                                    ? isLightMode
                                                        ? 'text-blue-700 bg-blue-50'
                                                        : 'text-white bg-white/20'
                                                    : isLightMode
                                                    ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
                                                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            }

                            const isGroupActive = item.items.some((sub) => url.startsWith(sub.href));
                            const isOpen = openDropdown === item.label;

                            return (
                                <li
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                                        aria-expanded={isOpen}
                                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                                            isGroupActive
                                                ? isLightMode
                                                    ? 'text-blue-700 bg-blue-50'
                                                    : 'text-white bg-white/20'
                                                : isLightMode
                                                ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
                                                : 'text-slate-200 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        <CaretDownIcon
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu Popover */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 6 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute top-full right-0 sm:left-0 pt-2 z-50 w-72"
                                            >
                                                <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 overflow-hidden text-slate-800">
                                                    {item.items.map((sub) => {
                                                        const isSubActive = url === sub.href;
                                                        return (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                onClick={() => setOpenDropdown(null)}
                                                                className={`block p-3 rounded-xl transition-colors ${
                                                                    isSubActive
                                                                        ? 'bg-blue-50 text-blue-700'
                                                                        : 'hover:bg-slate-50 text-slate-800'
                                                                }`}
                                                            >
                                                                <div className="text-xs sm:text-sm font-bold">
                                                                    {sub.label}
                                                                </div>
                                                                {sub.desc && (
                                                                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                                                        {sub.desc}
                                                                    </div>
                                                                )}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile toggle with Radix UI Icon */}
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
                        {mobileOpen ? <Cross2Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
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
                                    {NAV_DROPDOWNS.map((item) => {
                                        if (!item.items) {
                                            return (
                                                <li key={item.label}>
                                                    <Link
                                                        href={item.href || '/'}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block px-3.5 py-2.5 text-sm font-semibold rounded-xl text-slate-800 hover:bg-slate-100"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            );
                                        }

                                        const isGroupOpen = openMobileGroup === item.label;

                                        return (
                                            <li key={item.label} className="border-b border-slate-100 last:border-b-0 pb-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenMobileGroup(isGroupOpen ? null : item.label)}
                                                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-900 rounded-xl hover:bg-slate-50"
                                                >
                                                    <span>{item.label}</span>
                                                    <CaretDownIcon
                                                        className={`w-4 h-4 transition-transform duration-200 ${
                                                            isGroupOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>
                                                {isGroupOpen && (
                                                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl mb-1">
                                                        {item.items.map((sub) => (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
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
