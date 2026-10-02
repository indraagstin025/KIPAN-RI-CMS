import {
    Cross2Icon,
    HamburgerMenuIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

interface NavItem {
    label: string;
    href: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Program & Aksi', href: '/program' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Berita', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Pelaporan', href:'/kontak'},
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                setScrollProgress(
                    Math.min(
                        100,
                        Math.max(0, (window.scrollY / totalHeight) * 100),
                    ),
                );
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-white/15 bg-[#0D3F70]/95 py-3 shadow-lg backdrop-blur-md'
                    : 'border-b border-white/10 bg-transparent py-4 lg:py-5'
            }`}
        >
            {/* Scroll Reading Progress Bar Indicator */}
            <div
                className="shadow-xs absolute left-0 top-0 z-50 h-[3px] bg-kipan-yellow transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav
                    className="flex items-center justify-between"
                    aria-label="Navigasi Utama KIPAN RI"
                >
                    {/* Brand / Logo (Left) */}
                    <a
                        href="/"
                        className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                    >
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/30 bg-white p-0.5 shadow-sm transition-transform group-hover:scale-105 lg:h-11 lg:w-11">
                            <img
                                src="/logo-kipan.jpg"
                                alt="Logo KIPAN RI"
                                className="h-full w-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="flex items-center gap-1.5 text-base font-extrabold tracking-tight text-white lg:text-lg">
                                <span>KIPAN</span>
                                <span className="font-bold text-kipan-yellow">
                                    REPUBLIK INDONESIA
                                </span>
                            </div>
                            <div className="text-[11px] font-medium tracking-wide text-blue-200/90">
                                Binaan Kemenpora &amp; BNN RI
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation Links (Center - Flat 6 Items) */}
                    <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="rounded-lg px-3.5 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-kipan-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow xl:text-[13px]"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right CTA Actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        {/* Gold Pill CTA */}
                        <a
                            href="/kontak"
                            className="shadow-xs inline-flex items-center gap-1.5 rounded-full bg-kipan-yellow px-4 py-2 text-xs font-bold text-kipan-navy transition-colors hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow"
                        >
                            <PersonIcon className="h-3.5 w-3.5" />
                            <span>Daftar Kader</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label={
                            mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'
                        }
                        className="rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow lg:hidden"
                    >
                        {mobileOpen ? (
                            <Cross2Icon className="h-6 w-6" />
                        ) : (
                            <HamburgerMenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileOpen && (
                <div className="animate-in fade-in slide-in-from-top-2 max-h-[80vh] space-y-4 overflow-y-auto border-b border-white/15 bg-[#072442] px-4 py-5 lg:hidden">
                    <div className="space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:text-kipan-yellow"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="border-t border-white/15 pt-4">
                        <a
                            href="/kontak"
                            onClick={() => setMobileOpen(false)}
                            className="shadow-xs flex w-full items-center justify-center gap-2 rounded-full bg-kipan-yellow py-2.5 text-center text-xs font-bold text-kipan-navy transition-colors hover:bg-amber-400"
                        >
                            <PersonIcon className="h-3.5 w-3.5" />
                            <span>Daftar Jadi Kader</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
