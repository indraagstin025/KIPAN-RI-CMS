import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';

interface ProgramPageProps {
    title: string;
    subtitle: string;
    category: string;
}

interface Program {
    name: string;
    description: string;
    tags: string[];
    icon: ReactNode;
}

interface Agenda {
    date: string;
    event: string;
    location: string;
}

const programs: Program[] = [
    {
        name: 'Pelatihan Kader Inti Pemuda',
        description:
            'Pembekalan intensif bagi pemuda terpilih untuk menjadi kader inti penggerak P4GN — siap memimpin aksi pencegahan di lingkungan masing-masing.',
        tags: ['Kepemimpinan', 'P4GN', 'Sertifikasi'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
    },
    {
        name: 'Workshop Deteksi Dini P4GN',
        description:
            'Pelatihan praktis mengenali ciri-ciri awal penyalahgunaan narkoba serta langkah rujukan yang tepat bagi keluarga dan komunitas.',
        tags: ['Deteksi Dini', 'Keluarga', 'Rujukan'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        name: 'Advokasi Sebaya',
        description:
            'Membangun jejaring peer educator — pemuda yang aktif menyebarkan pesan hidup sehat tanpa narkoba lewat bahasa dan gaya mereka sendiri.',
        tags: ['Peer Educator', 'Kampanye', 'Komunitas'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        name: 'Wirausaha Kreatif',
        description:
            'Pemberdayaan ekonomi pemuda melalui pelatihan kewirausahaan, ekonomi kreatif, dan pendampingan usaha rintisan kader.',
        tags: ['UMKM', 'Ekonomi Kreatif', 'Pendampingan'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        ),
    },
    {
        name: 'Agenda Kegiatan Nasional',
        description:
            'Kalender kegiatan nasional — jambore kader, kampanye serentak, dan aksi kolaboratif pemuda anti-narkoba di seluruh Indonesia.',
        tags: ['Jambore', 'Kampanye', 'Nasional'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        ),
    },
];

const agendas: Agenda[] = [
    { date: 'Nov 2026', event: 'Jambore Kader Inti Nasional', location: 'Jakarta' },
    { date: 'Des 2026', event: 'Kampanye Serentak "Pemuda Bersinar"', location: '34 Provinsi' },
    { date: 'Jan 2027', event: 'Workshop Deteksi Dini P4GN — Batch 12', location: 'Hybrid' },
    { date: 'Feb 2027', event: 'Pelatihan Wirausaha Kreatif Kader', location: 'Bandung' },
];

export default function Program({ title, subtitle, category }: ProgramPageProps) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-gray-50 text-gray-800">
                <Navbar />
                <HeroSection badge={category} title={title} subtitle={subtitle} />

                {/* Program cards */}
                <section className="max-w-6xl mx-auto px-6 pb-14">
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {programs.map((program) => (
                            <article
                                key={program.name}
                                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition"
                            >
                                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-4">
                                    {program.icon}
                                </div>
                                <h2 className="text-lg font-semibold tracking-tight mb-2">{program.name}</h2>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                                    {program.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {program.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}

                        {/* CTA card */}
                        <article className="rounded-xl bg-emerald-700 text-white p-6 flex flex-col justify-between shadow-sm">
                            <div>
                                <h2 className="text-lg font-semibold tracking-tight mb-2">
                                    Siap jadi bagian dari gerakan?
                                </h2>
                                <p className="text-sm text-emerald-100 leading-relaxed mb-6">
                                    Daftarkan dirimu sebagai kader inti dan ikuti pembekalan gelombang
                                    berikutnya di kotamu.
                                </p>
                            </div>
                            <span className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition cursor-pointer">
                                Gabung Jadi Kader
                            </span>
                        </article>
                    </div>
                </section>

                {/* Agenda */}
                <section className="bg-white border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-14">
                        <h2 className="text-2xl font-bold tracking-tight mb-2">Agenda Kegiatan</h2>
                        <p className="text-sm text-gray-500 mb-8">
                            Jadwal kegiatan nasional yang akan datang — catat tanggalnya.
                        </p>
                        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden">
                            {agendas.map((agenda) => (
                                <div
                                    key={agenda.event}
                                    className="flex items-center gap-5 px-6 py-4 hover:bg-gray-50 transition"
                                >
                                    <span className="shrink-0 w-24 px-3 py-1.5 rounded-lg text-xs font-semibold text-center bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        {agenda.date}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm truncate">{agenda.event}</p>
                                        <p className="text-xs text-gray-500">{agenda.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
