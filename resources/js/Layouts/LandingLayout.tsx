import Footer from '@/Components/Layout/Footer';
import Navbar from '@/Components/Layout/Navbar';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

interface LandingLayoutProps {
    readonly children: ReactNode;
    readonly title?: string;
    readonly className?: string;
}

export default function LandingLayout({
    children,
    title,
    className = 'bg-white',
}: Readonly<LandingLayoutProps>) {
    return (
        <>
            {title && <Head title={title} />}
            <div
                className={`flex min-h-screen flex-col font-sans text-kipan-text-dark antialiased selection:bg-kipan-blue selection:text-white ${className}`}
            >
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
}
