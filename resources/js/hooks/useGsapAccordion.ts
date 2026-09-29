import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export interface GsapAccordionConfig {
    defaultWidth: number;
    expandedWidth: number;
    contractedWidth: number;
    duration?: number;
    emblemShift?: number;
    emblemScale?: number;
}

export function useGsapAccordion(
    activeId: number | string | null,
    config: GsapAccordionConfig
) {
    const containerRef = useRef<HTMLDivElement>(null);
    const {
        defaultWidth,
        expandedWidth,
        contractedWidth,
        duration = 0.65,
        emblemShift = -56,
        emblemScale = 1.15,
    } = config;

    useEffect(() => {
        if (!containerRef.current) return;
        const cards = containerRef.current.children;

        Array.from(cards).forEach((card, idx) => {
            const cardEl = card as HTMLElement;
            const cardId = cardEl.getAttribute('data-id');
            const isExpanded = activeId !== null && (cardId === String(activeId) || idx === activeId);
            const isContracted = activeId !== null && !isExpanded;

            const targetWidth = isExpanded
                ? expandedWidth
                : isContracted
                ? contractedWidth
                : defaultWidth;

            const targetScale = isExpanded ? 1.02 : isContracted ? 0.98 : 1;
            const targetOpacity = isContracted ? 0.75 : 1;

            // Animate card container
            gsap.to(cardEl, {
                width: targetWidth,
                scale: targetScale,
                opacity: targetOpacity,
                duration,
                ease: 'power3.out',
                overwrite: 'auto',
            });

            // Animate emblem / photo
            const emblem = cardEl.querySelector('[data-gsap-emblem]');
            if (emblem) {
                gsap.to(emblem, {
                    x: isExpanded ? emblemShift : 0,
                    scale: isExpanded ? emblemScale : 1,
                    duration,
                    ease: 'power3.out',
                    overwrite: 'auto',
                });
            }

            // Animate expanded drawer
            const drawer = cardEl.querySelector('[data-gsap-drawer]');
            if (drawer) {
                gsap.to(drawer, {
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : 24,
                    duration: isExpanded ? duration * 0.75 : 0.25,
                    delay: isExpanded ? 0.08 : 0,
                    ease: isExpanded ? 'power2.out' : 'power2.in',
                    overwrite: 'auto',
                    pointerEvents: isExpanded ? 'auto' : 'none',
                });
            }

            // Animate watermark curve
            const watermark = cardEl.querySelector('[data-gsap-watermark]');
            if (watermark) {
                gsap.to(watermark, {
                    scale: isExpanded ? 1.15 : 1,
                    rotation: isExpanded ? 12 : 0,
                    duration,
                    ease: 'power3.out',
                    overwrite: 'auto',
                });
            }

            // Animate gradient overlay
            const gradient = cardEl.querySelector('[data-gsap-gradient]');
            if (gradient) {
                gsap.to(gradient, {
                    opacity: isExpanded ? 1 : 0,
                    duration: duration * 0.8,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            }

            // Animate idle bottom name
            const idleName = cardEl.querySelector('[data-gsap-idle]');
            if (idleName) {
                gsap.to(idleName, {
                    opacity: isExpanded ? 0 : 1,
                    y: isExpanded ? 8 : 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    overwrite: 'auto',
                    pointerEvents: isExpanded ? 'none' : 'auto',
                });
            }
        });
    }, [activeId, defaultWidth, expandedWidth, contractedWidth, duration, emblemShift, emblemScale]);

    return containerRef;
}
