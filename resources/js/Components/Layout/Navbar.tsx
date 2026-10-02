import {
    Cross2Icon,
    HamburgerMenuIcon,
    PersonIcon,
} from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import EmergencyReportModal from '@/Components/Emergency/EmergencyReportModal';
import FloatingEmergencyButton from '@/Components/Emergency/FloatingEmergencyButton';

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
 
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [reportModalOpen, setReportModalOpen] = useState(false);

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
                                {item.label === 'Pelaporan' ? (
                                    <button
                                        type="button"
                                        onClick={() => setReportModalOpen(true)}
                                        className="group inline-flex items-center gap-1.5 rounded-lg border border-red-500/40 bg-gradient-to-r from-red-600/30 to-rose-600/30 px-3 py-1.5 text-xs font-bold text-red-200 transition-all hover:border-red-400 hover:from-red-600 hover:to-rose-600 hover:text-white hover:shadow-md hover:shadow-red-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 xl:text-[13px]"
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                        </span>
                                        <svg
                                            className="h-3.5 w-3.5 text-amber-300 transition-transform group-hover:scale-110"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <span>Pelaporan</span>
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="rounded-lg px-3.5 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-kipan-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow xl:text-[13px]"
                                    >
                                        {item.label}
                                    </a>
                                )}
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
                            item.label === 'Pelaporan' ? (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setReportModalOpen(true);
                                    }}
                                    className="flex w-full items-center justify-between rounded-lg border border-red-500/30 bg-red-950/40 px-3 py-2.5 text-sm font-bold text-red-200 transition-colors hover:bg-red-900/50 hover:text-white"
                                >
                                    <span className="flex items-center gap-2.5">
                                        <svg
                                            className="h-4 w-4 text-amber-300 animate-pulse"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <span>Pelaporan &amp; Aduan</span>
                                    </span>
                                    <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider">
                                        Emergency
                                    </span>
                                </button>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:text-kipan-yellow"
                                >
                                    {item.label}
                                </a>
                            )
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

            {/* PopUp Melayang & Tombol Emergency Call */}
            <FloatingEmergencyButton onClick={() => setReportModalOpen(true)} />
            <EmergencyReportModal
                isOpen={reportModalOpen}
                onClose={() => setReportModalOpen(false)}
            />
        </header>
    );
}
