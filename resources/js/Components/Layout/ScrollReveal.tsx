import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.65,
}: ScrollRevealProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;

        let x = 0;
        let y = 0;
        if (direction === 'up') y = 24;
        if (direction === 'down') y = -24;
        if (direction === 'left') x = 24;
        if (direction === 'right') x = -24;

        gsap.set(el, { opacity: 0, x, y });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry && entry.isIntersecting) {
                    gsap.to(el, {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration,
                        delay,
                        ease: 'power3.out',
                        overwrite: 'auto',
                    });
                    observer.unobserve(el);
                }
            },
            { rootMargin: '-40px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, direction, duration]);

    return (
        <div ref={elRef} className={className}>
            {children}
        </div>
    );
}
