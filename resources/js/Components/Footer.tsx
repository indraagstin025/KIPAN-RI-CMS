import { Link } from '@inertiajs/react';
import SafeImage from '@/Components/ui/safe-image';
import { COMPANY } from '@/data/kipan-data';

export default function Footer() {
    return (
        <footer className="border-t bg-card">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-2.5">
                    <SafeImage
                        src="/logo-kipan.jpg"
                        alt="Logo KIPAN"
                        className="w-9 h-9 rounded-full object-cover border"
                        placeholderClassName="w-9 h-9 rounded-full"
                    />
                    <span className="leading-tight">
                        <span className="block font-bold tracking-tight">{COMPANY.name}</span>
                        <span className="block text-[11px] text-muted-foreground">{COMPANY.fullName}</span>
                    </span>
                </Link>
                <div className="text-center md:text-right text-xs text-muted-foreground space-y-1">
                    <p>{COMPANY.tagline}</p>
                    <p>
                        {COMPANY.email} • {COMPANY.instagram}
                    </p>
                </div>
            </div>
        </footer>
    );
}
