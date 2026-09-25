import { useState, useEffect } from 'react';
import {
    HamburgerMenuIcon,
    Cross2Icon,
    ChevronDownIcon,
    EnterIcon,
    ArrowRightIcon,
} from '@radix-ui/react-icons';

interface DropdownItem {
    label: string;
    href: string;
    description?: string;
}

interface NavGroup {
    label: string;
    href?: string;
    items?: DropdownItem[];
}

const NAV_GROUPS: NavGroup[] = [
    {
        label: 'Beranda',
        href: '/',
    },
    {
        label: 'Tentang Kami',
        items: [
            {
                label: 'Profil KIPAN',
                href: '/tentang',
                description: 'Latar belakang, visi, misi, dan dasar hukum organisasi',
            },
            {
                label: 'Fokus Strategis',
                href: '/tentang/fokus',
                description: '4 pilar pencegahan, kaderisasi, dan aksi positif pemuda',
            },
            {
                label: 'Tokoh & Penggerak',
                href: '/tentang/tokoh',
                description: 'Pimpinan pusat, dewan pembina, dan koordinator wilayah',
            },
            {
                label: 'Jejaring 38 Provinsi',
                href: '/tentang/jejaring',
                description: 'Sebaran kader dan pengurus daerah di seluruh Indonesia',
            },
        ],
    },
    {
        label: 'Program & Aksi',
        items: [
            {
                label: 'Program Unggulan',
                href: '/program',
                description: 'Kaderisasi inti, advokasi sebaya, dan wirausaha pemuda',
            },
            {
                label: 'Agenda Kegiatan',
                href: '/agenda',
                description: 'Jadwal pelatihan nasional, jambore, dan sosialisasi',
            },
            {
                label: 'Kampanye Nasional P4GN',
                href: '/kampanye',
                description: 'Gerakan Pemuda Bergerak Indonesia Bersinar',
            },
        ],
    },
    {
        label: 'Publikasi',
        items: [
            {
                label: 'Berita & Kabar Aksi',
                href: '/berita',
                description: 'Informasi terkini kegiatan kader di berbagai daerah',
            },
            {
                label: 'Galeri Dokumentasi',
                href: '/galeri',
                description: 'Dokumentasi foto aksi lapangan pemuda anti narkoba',
            },
            {
                label: 'Mitra & Kolaborasi',
                href: '/mitra',
                description: 'Kemenpora RI, BNN RI, dan pemangku kepentingan',
            },
        ],
    },
    {
        label: 'Kontak',
        href: '/kontak',
    },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.nav-dropdown-container')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0D3F70]/95 backdrop-blur-md border-b border-white/15 shadow-lg py-3'
                    : 'bg-transparent border-b border-white/10 py-4 lg:py-5'
            }`}
        >
            {/* Scroll Reading Progress Bar Indicator */}
            <div
                className="h-[3px] bg-kipan-yellow transition-all duration-150 ease-out absolute top-0 left-0 z-50 shadow-xs"
                style={{ width: `${scrollProgress}%` }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between" aria-label="Navigasi Utama KIPAN RI">
                    {/* Brand / Logo (Left) */}
                    <a
                        href="/"
                        className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow rounded-lg"
                    >
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden bg-white p-0.5 border border-white/30 shrink-0 shadow-sm transition-transform group-hover:scale-105">
                            <img
                                src="/logo-kipan.jpg"
                                alt="Logo KIPAN RI"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="font-extrabold text-base lg:text-lg text-white tracking-tight flex items-center gap-1.5">
                                <span>KIPAN</span>
                                <span className="text-kipan-yellow font-bold">REPUBLIK INDONESIA</span>
                            </div>
                            <div className="text-[11px] font-medium text-blue-200/90 tracking-wide">
                                Binaan Kemenpora &amp; BNN RI
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation Links & Dropdowns (Center) */}
                    <ul className="hidden lg:flex items-center gap-1 xl:gap-2 nav-dropdown-container">
                        {NAV_GROUPS.map((group) => {
                            if (!group.items) {
                                return (
                                    <li key={group.label}>
                                        <a
                                            href={group.href}
                                            className="px-3.5 py-2 text-xs font-semibold text-white/90 hover:text-kipan-yellow hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                                        >
                                            {group.label}
                                        </a>
                                    </li>
                                );
                            }

                            const isOpen = activeDropdown === group.label;

                            return (
                                <li key={group.label} className="relative">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDropdown(group.label);
                                        }}
                                        aria-expanded={isOpen}
                                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow ${
                                            isOpen
                                                ? 'text-kipan-yellow bg-white/10'
                                                : 'text-white/90 hover:text-kipan-yellow hover:bg-white/5'
                                        }`}
                                    >
                                        <span>{group.label}</span>
                                        <ChevronDownIcon
                                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                                isOpen ? 'rotate-180 text-kipan-yellow' : 'text-white/70'
                                            }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu Panel */}
                                    {isOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-72 bg-[#092B4E] border border-blue-400/20 rounded-xl shadow-2xl p-2 z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-2">
                                            <div className="space-y-1">
                                                {group.items.map((item) => (
                                                    <a
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() => setActiveDropdown(null)}
                                                        className="block px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                                                    >
                                                        <div className="text-xs font-bold text-white group-hover/item:text-kipan-yellow flex items-center justify-between">
                                                            <span>{item.label}</span>
                                                            <ArrowRightIcon className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-kipan-yellow" />
                                                        </div>
                                                        {item.description && (
                                                            <div className="text-[11px] text-blue-200/70 mt-0.5 leading-snug">
                                                                {item.description}
                                                            </div>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right CTA Actions (Youth Innovation outlined pill style) */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Outlined Pill Button (Like Youth Innovation "Masuk") */}
                        <a
                            href="/login"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white border border-white/80 rounded-full hover:bg-white hover:text-kipan-navy transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <EnterIcon className="w-3.5 h-3.5" />
                            <span>Masuk Portal</span>
                        </a>

                        {/* Gold Pill CTA */}
                        <a
                            href="/kontak"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                        >
                            <span>Daftar Kader</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                    >
                        {mobileOpen ? (
                            <Cross2Icon className="w-6 h-6" />
                        ) : (
                            <HamburgerMenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#072442] border-b border-white/15 px-4 py-5 space-y-4 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-2">
                        {NAV_GROUPS.map((group) => {
                            if (!group.items) {
                                return (
                                    <a
                                        key={group.label}
                                        href={group.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-kipan-yellow"
                                    >
                                        {group.label}
                                    </a>
                                );
                            }

                            return (
                                <div key={group.label} className="border-t border-white/10 pt-2 mt-2">
                                    <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-kipan-yellow">
                                        {group.label}
                                    </div>
                                    <div className="space-y-1 pl-2">
                                        {group.items.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-3 py-2 rounded-lg text-xs font-medium text-blue-100 hover:bg-white/10 hover:text-white"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="pt-4 border-t border-white/15 space-y-2">
                        <a
                            href="/login"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full py-2.5 text-center text-xs font-semibold text-white border border-white/70 rounded-full hover:bg-white hover:text-kipan-navy transition-colors"
                        >
                            Masuk Portal KIPAN
                        </a>
                        <a
                            href="/kontak"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full py-2.5 text-center text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full shadow-xs transition-colors"
                        >
                            Daftar Jadi Kader
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
