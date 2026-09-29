import React, { useCallback, useEffect, useRef, useState } from 'react';

interface MinimalTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number; // Maximum tilt angle in degrees (default: 7 - subtle & minimal)
    enableGyro?: boolean; // Enable mobile gyroscope orientation tilt (default: true)
    enableGlare?: boolean; // Subtle glass glare reflection (default: true)
}

export default function MinimalTiltCard({
    children,
    className = '',
    maxTilt = 7,
    enableGyro = true,
    enableGlare = true,
    ...props
}: MinimalTiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({
        x: 50,
        y: 50,
        opacity: 0,
    });
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const isTouchDeviceRef = useRef<boolean>(false);
    const animFrameRef = useRef<number | null>(null);

    // Desktop Mouse Move Handler
    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            // Normalized coordinates [-0.5, 0.5]
            const normX = (e.clientX - rect.left) / width - 0.5;
            const normY = (e.clientY - rect.top) / height - 0.5;

            const rotateX = -normY * maxTilt;
            const rotateY = normX * maxTilt;

            setTilt({ x: rotateX, y: rotateY });

            if (enableGlare) {
                const glareX = ((e.clientX - rect.left) / width) * 100;
                const glareY = ((e.clientY - rect.top) / height) * 100;
                setGlare({ x: glareX, y: glareY, opacity: 0.35 });
            }
        },
        [maxTilt, enableGlare]
    );

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
        setGlare((prev) => ({ ...prev, opacity: 0 }));
    };

    // Mobile Gyroscope Handler
    useEffect(() => {
        if (!enableGyro || typeof window === 'undefined') return;

        // Check if user prefers reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) return;

        // Check if touch device
        const isTouch =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(hover: none)').matches;
        isTouchDeviceRef.current = isTouch;

        if (!isTouch) return;

        const handleOrientation = (e: DeviceOrientationEvent) => {
            if (e.gamma === null || e.beta === null) return;

            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }

            animFrameRef.current = requestAnimationFrame(() => {
                // gamma is left/right [-90, 90]
                const clampedGamma = Math.max(-20, Math.min(20, e.gamma || 0));
                // beta is front/back [-180, 180] (typical handheld phone is ~45deg)
                const clampedBeta = Math.max(-20, Math.min(20, (e.beta || 45) - 45));

                const rotY = (clampedGamma / 20) * (maxTilt * 0.8);
                const rotX = -(clampedBeta / 20) * (maxTilt * 0.8);

                setTilt({ x: rotX, y: rotY });

                if (enableGlare) {
                    const glareX = 50 + (clampedGamma / 20) * 30;
                    const glareY = 50 + (clampedBeta / 20) * 30;
                    setGlare({ x: glareX, y: glareY, opacity: 0.25 });
                }
            });
        };

        window.addEventListener('deviceorientation', handleOrientation, { passive: true });

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
        };
    }, [enableGyro, maxTilt, enableGlare]);

    // Dynamic style computation
    const transformStyle = {
        transform: `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) ${
            isHovered ? 'scale3d(1.025, 1.025, 1.025)' : 'scale3d(1, 1, 1)'
        }`,
        transition: isHovered
            ? 'transform 0.12s ease-out, box-shadow 0.2s ease-out'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: isHovered
            ? `${(-tilt.y * 1.5).toFixed(1)}px ${(tilt.x * 1.5 + 14).toFixed(1)}px 28px -6px rgba(13, 63, 112, 0.16), 0 4px 10px -2px rgba(14, 108, 172, 0.08)`
            : '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={transformStyle}
            className={`relative overflow-hidden will-change-transform ${className}`}
            {...props}
        >
            {/* Minimalist Glare / Reflection Layer */}
            {enableGlare && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
                    style={{
                        opacity: glare.opacity,
                        background: `radial-gradient(circle 260px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)`,
                    }}
                />
            )}

            {/* Inner Content with 3D depth */}
            <div className="relative z-10 h-full w-full">{children}</div>
        </div>
    );
}
