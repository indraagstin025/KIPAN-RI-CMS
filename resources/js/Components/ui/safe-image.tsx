import { useState, useEffect } from 'react';
import { ImageIcon } from '@radix-ui/react-icons';

interface SafeImageProps {
    src: string | undefined | null;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    placeholderClassName?: string;
    iconClassName?: string;
}

export default function SafeImage({
    src,
    alt,
    className = '',
    loading = 'lazy',
    placeholderClassName = '',
    iconClassName = 'w-8 h-8',
}: SafeImageProps) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setHasError(false);
    }, [src]);

    if (!src || src.trim() === '' || hasError) {
        return (
            <div
                className={`flex items-center justify-center bg-slate-100 text-slate-300 ${placeholderClassName || className}`}
                role="img"
                aria-label={alt || 'No image'}
            >
                <ImageIcon className={iconClassName} />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={loading}
            onError={() => setHasError(true)}
        />
    );
}
