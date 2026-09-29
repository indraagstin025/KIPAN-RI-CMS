import { motion } from 'framer-motion';
import { ReactNode } from 'react';

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
    duration = 0.55,
}: ScrollRevealProps) {
    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: 24 };
            case 'down':
                return { opacity: 0, y: -24 };
            case 'left':
                return { opacity: 0, x: 24 };
            case 'right':
                return { opacity: 0, x: -24 };
            default:
                return { opacity: 0 };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
