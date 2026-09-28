import type { ReactNode } from 'react';
import { Badge } from '@/Components/ui/badge';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
    badge?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    children?: ReactNode;
    className?: string;
}

export default function HeroSection({
    badge,
    title,
    subtitle,
    align = 'left',
    children,
    className,
}: HeroSectionProps) {
    return (
        <section className={cn('max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-12', className)}>
            <div
                className={cn(
                    'max-w-3xl flex flex-col',
                    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start',
                )}
            >
                {badge && (
                    <Badge variant="secondary" className="mb-5">
                        {badge}
                    </Badge>
                )}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
                {subtitle && <p className="text-muted-foreground leading-relaxed text-lg">{subtitle}</p>}
                {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
        </section>
    );
}
