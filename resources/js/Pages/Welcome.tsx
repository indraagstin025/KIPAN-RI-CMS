import { Head, Link } from '@inertiajs/react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';

const stats = [
    { value: '34', label: 'Provinsi Terjangkau' },
    { value: '12K+', label: 'Kader Terlatih' },
    { value: '150+', label: 'Kegiatan per Tahun' },
];

const focuses = [
    {
        title: 'Pencegahan',
        description:
            'Edukasi bahaya narkoba dan penguatan ketahanan diri pemuda melalui workshop deteksi dini P4GN.',
    },
    {
        title: 'Pemberdayaan',
        description:
            'Peningkatan kapasitas pemuda lewat pelatihan kepemimpinan, advokasi sebaya, dan wirausaha kreatif.',
    },
    {
        title: 'Penggerakan',
        description:
            'Aksi nyata kader di komunitas — kampanye, jambore, dan agenda kegiatan nasional yang kolaboratif.',
    },
];

export default function Welcome() {
    return (
        <>
            <Head title="Beranda" />
            <div className="min-h-screen bg-gray-50 text-gray-800">
                <Navbar />

                <HeroSection
                    align="center"
                    badge="Gerakan Nasional Pemuda Anti Narkoba"
                    title="Pemuda Bersinar, Indonesia Tanpa Narkoba"
                    subtitle="KIPAN menggerakkan kader inti pemuda di seluruh Indonesia untuk mencegah penyalahgunaan narkoba melalui edukasi, pemberdayaan, dan aksi nyata."
                >
                    <Link
                        href="/program"
                        className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
                    >
                        Jelajahi Program
                    </Link>
                    <span className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:border-gray-300 transition cursor-pointer">
                        Gabung Jadi Kader
                    </span>
                </HeroSection>

                {/* Stats */}
                <section className="max-w-6xl mx-auto px-6 pb-14">
                    <div className="grid grid-cols-3 gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-700">
                                    {stat.value}
                                </p>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Focus */}
                <section className="max-w-6xl mx-auto px-6 pb-16">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">Fokus Gerakan</h2>
                    <p className="text-sm text-gray-500 mb-8 max-w-2xl">
                        Tiga pilar utama yang menjadi fondasi setiap program dan aksi KIPAN.
                    </p>
                    <div className="grid gap-5 md:grid-cols-3">
                        {focuses.map((focus, i) => (
                            <article
                                key={focus.title}
                                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition"
                            >
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-bold mb-4">
                                    {i + 1}
                                </span>
                                <h3 className="text-lg font-semibold tracking-tight mb-2">{focus.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{focus.description}</p>
                            </article>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/program"
                            className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition"
                        >
                            Lihat semua program
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-6xl mx-auto px-6 pb-16">
                    <div className="rounded-xl bg-emerald-700 text-white p-10 text-center shadow-sm">
                        <h2 className="text-2xl font-bold tracking-tight mb-3">
                            Satu langkah kecilmu, perubahan besar bagi generasimu
                        </h2>
                        <p className="text-emerald-100 text-sm max-w-xl mx-auto mb-6">
                            Bergabunglah dengan ribuan kader pemuda yang bergerak bersama mewujudkan
                            Indonesia bersinar tanpa narkoba.
                        </p>
                        <span className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition cursor-pointer">
                            Daftar Sebagai Kader
                        </span>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
