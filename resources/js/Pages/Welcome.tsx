import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="KIPAN CMS" />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
                <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md w-full">
                    <h1 className="text-2xl font-bold tracking-tight mb-2">KIPAN CMS</h1>
                    <p className="text-sm text-gray-500 mb-4">
                        Laravel 13 + React + Inertia JS + PostgreSQL + Spatie Permission
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Siap untuk pengembangan
                    </div>
                </div>
            </div>
        </>
    );
}
