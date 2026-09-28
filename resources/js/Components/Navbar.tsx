import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/Components/ui/button';
import SafeImage from '@/Components/ui/safe-image';
import { COMPANY, NAV_LINKS } from '@/data/kipan-data';
import { cn } from '@/lib/utils';

// Tautan utama yang tampil di navbar desktop
const DESKTOP_LINKS = ['Beranda', 'Tentang', 'Program', 'Berita', 'Galeri', 'Kontak'];

function isActiveLink(href: string, component: string): boolean {
    if (href === '/') return component === 'Welcome';
    if (href.startsWith('/#')) return false;
    const page = href.replace(/^\//, '').split('/')[0];
    return component.toLowerCase().startsWith(page.toLowerCase());
}

export default function Navbar() {
    const { component } = usePage();
    const [open, setOpen] = useState(false);

    const desktopLinks = NAV_LINKS.filter((l) => DESKTOP_LINKS.includes(l.label));

    const renderLink = (label: string, href: string, mobile = false) => {
        const active = isActiveLink(href, component);
        const classes = mobile
            ? cn(
                  'block px-3 py-2.5 rounded-md text-sm transition',
                  active
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              )
            : cn(
                  'text-sm transition',
                  active ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground',
              );

        // Tautan anchor (#) pakai <a> biasa agar scroll halus tanpa visit Inertia
        if (href.includes('#')) {
            return (
                <a key={label} href={href} className={classes} onClick={() => setOpen(false)}>
                    {label}
                </a>
            );
        }
        return (
            <Link key={label} href={href} className={classes} onClick={() => setOpen(false)}>
                {label}
            </Link>
        );
    };

    return (
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <SafeImage
                        src="/logo-kipan.jpg"
                        alt="Logo KIPAN"
                        className="w-9 h-9 rounded-full object-cover border"
                        placeholderClassName="w-9 h-9 rounded-full"
                    />
                    <span className="leading-tight">
                        <span className="block font-bold tracking-tight">{COMPANY.name}</span>
                        <span className="block text-[11px] text-muted-foreground">Indonesia</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-7">
                    {desktopLinks.map((l) => renderLink(l.label, l.href))}
                    <Button asChild size="sm">
                        <Link href="/pendaftaran">Daftar</Link>
                    </Button>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-accent transition"
                    aria-label="Buka menu navigasi"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav className="lg:hidden border-t bg-background px-4 py-3 flex flex-col gap-1">
                    {NAV_LINKS.map((l) => renderLink(l.label, l.href, true))}
                    <Button asChild className="mt-2">
                        <Link href="/pendaftaran">Daftar Sekarang</Link>
                    </Button>
                </nav>
            )}
        </header>
    );
}
