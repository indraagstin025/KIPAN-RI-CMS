import { Link } from '@inertiajs/react';
import { ChevronRightIcon, HomeIcon } from '@radix-ui/react-icons';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
    breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
    title,
    subtitle,
    badge,
    breadcrumbs,
}: PageHeaderProps) {
    return (
        <div className="relative bg-slate-950 pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-slate-800">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-slate-950 to-blue-950/60" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                        <HomeIcon className="w-3.5 h-3.5" />
                        <span>Beranda</span>
                    </Link>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600" />
                    {breadcrumbs ? (
                        breadcrumbs.map((b, i) => (
                            <span key={i} className="flex items-center gap-2">
                                {b.href ? (
                                    <Link href={b.href} className="hover:text-white transition-colors">
                                        {b.label}
                                    </Link>
                                ) : (
                                    <span className="text-sky-300 font-medium">{b.label}</span>
                                )}
                                {i < breadcrumbs.length - 1 && (
                                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600" />
                                )}
                            </span>
                        ))
                    ) : (
                        <span className="text-sky-300 font-medium">{title}</span>
                    )}
                </nav>

                {badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-500/40 rounded-full text-xs font-medium text-sky-200 mb-3 shadow-xs">
                        {badge}
                    </div>
                )}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
                    {title}
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
