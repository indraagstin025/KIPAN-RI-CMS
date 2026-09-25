import { useState, useEffect } from 'react';
import {
    HamburgerMenuIcon,
    Cross2Icon,
    EnterIcon,
    PersonIcon,
} from '@radix-ui/react-icons';

interface NavItem {
    label: string;
    href: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Program & Aksi', href: '/program' },
    { label: 'Berita', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

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

                    {/* Desktop Navigation Links (Center - Flat 6 Items) */}
                    <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="px-3.5 py-2 text-xs xl:text-[13px] font-semibold text-white/90 hover:text-kipan-yellow hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right CTA Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Outlined Pill Button */}
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
                            <PersonIcon className="w-3.5 h-3.5" />
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
                    <div className="space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-kipan-yellow transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="pt-4 border-t border-white/15 space-y-2">
                        <a
                            href="/login"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 text-center text-xs font-semibold text-white border border-white/70 rounded-full hover:bg-white hover:text-kipan-navy transition-colors"
                        >
                            <EnterIcon className="w-3.5 h-3.5" />
                            <span>Masuk Portal KIPAN</span>
                        </a>
                        <a
                            href="/kontak"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 text-center text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-full shadow-xs transition-colors"
                        >
                            <PersonIcon className="w-3.5 h-3.5" />
                            <span>Daftar Jadi Kader</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
