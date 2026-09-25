import { useState, useEffect } from 'react';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import { NAV_LINKS } from '@/data/landing-content';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b border-kipan-border shadow-xs py-3'
                    : 'bg-white border-b border-slate-100 py-4'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between" aria-label="Navigasi Utama KIPAN RI">
                    {/* Logo & Identity */}
                    <a href="#beranda" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue rounded-lg">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden border border-slate-200 bg-white p-0.5 shrink-0 shadow-xs">
                            <img
                                src="/logo-kipan.jpg"
                                alt="Logo KIPAN"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="font-bold text-base lg:text-lg text-kipan-navy tracking-tight group-hover:text-kipan-blue transition-colors">
                                KIPAN <span className="text-kipan-blue">Indonesia</span>
                            </div>
                            <div className="text-[11px] font-medium text-kipan-text-muted">
                                Binaan Kemenpora &amp; BNN RI
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-kipan-blue hover:bg-slate-50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Right CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="#kontak"
                            className="px-4 py-2 text-xs font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-lg shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                            Bergabung Jadi Kader
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                        className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-kipan-navy hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-blue"
                    >
                        {mobileOpen ? (
                            <Cross2Icon className="w-6 h-6" />
                        ) : (
                            <HamburgerMenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Panel */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-b border-kipan-border px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2">
                    <ul className="space-y-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-kipan-navy"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-3 border-t border-slate-100">
                        <a
                            href="#kontak"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full py-2.5 text-center text-sm font-bold text-kipan-navy bg-kipan-yellow hover:bg-amber-400 rounded-lg shadow-xs transition-colors"
                        >
                            Bergabung Jadi Kader
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
