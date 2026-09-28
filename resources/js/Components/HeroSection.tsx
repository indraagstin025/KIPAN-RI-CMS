import type { ReactNode } from 'react';

interface HeroSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    children?: ReactNode;
}

export default function HeroSection({ badge, title, subtitle, align = 'left', children }: HeroSectionProps) {
    const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

    return (
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-12">
            <div className={`max-w-3xl flex flex-col ${alignClass}`}>
                {badge && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 mb-5">
                        {badge}
                    </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
                {subtitle && <p className="text-gray-500 leading-relaxed text-lg">{subtitle}</p>}
                {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
        </section>
    );
}
