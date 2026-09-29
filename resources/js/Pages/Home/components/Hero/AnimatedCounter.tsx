import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
    readonly target: number;
    readonly duration?: number;
    readonly suffix?: string;
}

export default function AnimatedCounter({
    target,
    duration = 2000,
    suffix = '',
}: Readonly<AnimatedCounterProps>) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        // Smooth cubic ease-out deceleration curve
        const easeOutExpo = (t: number) =>
            t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);

            setCount(Math.round(eased * target));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        const timer = setTimeout(() => {
            animationFrameId = requestAnimationFrame(step);
        }, 180);

        return () => {
            clearTimeout(timer);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [target, duration]);

    return (
        <span>
            {count.toLocaleString('id-ID')}
            {suffix}
        </span>
    );
}
