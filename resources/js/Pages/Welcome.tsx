import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="KIPAN Indonesia : Kader Inti Pemuda Anti Narkoba" />
            <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans antialiased text-slate-800 p-6">
                <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border border-slate-200 bg-white p-1 shadow-sm">
                        <img
                            src="/logo-kipan.jpg"
                            alt="Logo KIPAN"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <h1 className="text-xl font-bold text-slate-900">
                        KIPAN Indonesia
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Kader Inti Pemuda Anti Narkoba Republik Indonesia
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                            Siap Mendesain Tampilan Baru
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
