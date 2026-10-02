import { Head, useForm } from '@inertiajs/react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface LoginProps {
    errors: {
        email?: string;
        password?: string;
    };
}

export default function Login({ errors }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/login');
    }

    return (
        <>
            <Head title="Masuk CMS — KIPAN Indonesia" />

            <div className="flex min-h-screen bg-gradient-to-br from-[#061C33] via-[#0D3F70] to-[#0A3055]">
                {/* Left panel — branding */}
                <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
                    {/* Dot grid background */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
                            backgroundSize: '28px 28px',
                        }}
                    />
                    {/* Glow */}
                    <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

                    {/* Logo */}
                    <div className="relative z-10 flex items-center gap-3">
                        <img
                            src="/logo-kipan.jpg"
                            alt="Logo KIPAN"
                            className="h-12 w-12 rounded-full object-cover shadow-lg"
                        />
                        <div>
                            <div className="text-sm font-bold text-kipan-yellow tracking-wide">KIPAN</div>
                            <div className="text-xs text-blue-200">Republik Indonesia</div>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="relative z-10">
                        <h1 className="text-4xl font-black text-white leading-tight mb-4">
                            Panel Admin<br />
                            <span className="text-kipan-yellow">KIPAN CMS</span>
                        </h1>
                        <p className="text-blue-200 text-base leading-relaxed max-w-sm">
                            Sistem manajemen konten resmi KIPAN Republik Indonesia untuk mengelola berita, agenda, program, dan galeri dokumentasi.
                        </p>
                    </div>

                    {/* Footer note */}
                    <div className="relative z-10 text-xs text-blue-400">
                        Hanya untuk admin dan pengelola konten yang berwenang.
                    </div>
                </div>

                {/* Right panel — login form */}
                <div className="flex w-full lg:w-1/2 items-center justify-center p-6 lg:p-12">
                    <div className="w-full max-w-md">
                        {/* Mobile logo */}
                        <div className="mb-8 flex items-center gap-3 lg:hidden">
                            <img
                                src="/logo-kipan.jpg"
                                alt="Logo KIPAN"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <span className="text-lg font-bold text-white">KIPAN CMS</span>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-2xl">
                            <div className="mb-8">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-kipan-yellow/20">
                                        <Lock className="h-4 w-4 text-kipan-yellow" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                                        Area Terproteksi
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-white">Masuk ke Dashboard</h2>
                                <p className="mt-1 text-sm text-blue-300">
                                    Gunakan akun admin yang diberikan oleh Sekretariat KIPAN.
                                </p>
                            </div>

                            <form onSubmit={submit} className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-1.5 block text-sm font-medium text-blue-100"
                                    >
                                        Alamat Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-blue-300/60 transition focus:border-kipan-yellow/60 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-kipan-yellow/30"
                                        placeholder="admin@kipan.or.id"
                                    />
                                    {errors.email && (
                                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-1.5 block text-sm font-medium text-blue-100"
                                    >
                                        Kata Sandi
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            autoComplete="current-password"
                                            required
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            className="block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 pr-12 text-sm text-white placeholder-blue-300/60 transition focus:border-kipan-yellow/60 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-kipan-yellow/30"
                                            placeholder="Kata sandi"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((v) => !v)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 transition hover:text-white"
                                            aria-label={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1.5 text-xs text-red-400">{errors.password}</p>
                                    )}
                                </div>

                                {/* Remember */}
                                <div className="flex items-center gap-2.5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="h-4 w-4 rounded border-white/30 bg-white/10 text-kipan-yellow accent-kipan-yellow focus:ring-kipan-yellow/30"
                                    />
                                    <label htmlFor="remember" className="text-sm text-blue-200 cursor-pointer">
                                        Ingat saya di perangkat ini
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-kipan-yellow px-6 py-3.5 text-sm font-bold text-kipan-navy shadow-lg transition-all hover:bg-amber-400 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-yellow active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                />
                                            </svg>
                                            Memproses...
                                        </>
                                    ) : (
                                        'Masuk ke Dashboard'
                                    )}
                                </button>
                            </form>
                        </div>

                        <p className="mt-6 text-center text-xs text-blue-400">
                            Lupa akses? Hubungi Administrator Sistem KIPAN.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
