import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const links = [
    { label: 'Beranda', href: '/', component: 'Welcome' },
    { label: 'Program', href: '/program', component: 'Program' },
];

export default function Navbar() {
    const { component } = usePage();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    KIPAN <span className="text-emerald-600">CMS</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {links.map((link) => {
                        const active = component === link.component;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    active
                                        ? 'text-gray-900 font-semibold'
                                        : 'text-gray-500 hover:text-gray-900 transition'
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <span className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition cursor-pointer">
                        Gabung Jadi Kader
                    </span>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
                    aria-label="Buka menu navigasi"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1 text-sm">
                    {links.map((link) => {
                        const active = component === link.component;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    active
                                        ? 'px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold'
                                        : 'px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 transition'
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <span className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold cursor-pointer">
                        Gabung Jadi Kader
                    </span>
                </nav>
            )}
        </header>
    );
}
