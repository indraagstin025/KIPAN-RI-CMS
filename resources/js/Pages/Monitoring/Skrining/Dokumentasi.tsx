import LandingLayout from '@/Layouts/LandingLayout';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, AlertTriangleIcon, CheckCircle2, ShieldCheck, FileText, Activity, Layers, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/Components/Layout/ScrollReveal';

export default function Dokumentasi() {
    return (
        <LandingLayout title="Dokumentasi Modul Skrining Risiko">
            <Head title="Dokumentasi Modul Skrining" />

            {/* Hero Section */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-20 sm:pt-28 lg:pt-32">
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-kipan-yellow/10 blur-3xl" />

                <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100">
                        <span className="h-2 w-2 rounded-full bg-kipan-yellow" />
                        Dokumentasi Resmi KIPAN RI
                    </div>

                    <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Dokumentasi Modul Skrining Risiko
                    </h1>
                    
                    <div className="mb-6 mt-4 h-1.5 w-24 rounded-full bg-kipan-yellow" />

                    <div className="border-l-4 border-kipan-yellow pl-4">
                        <p className="text-base font-normal leading-relaxed text-blue-100/90 sm:text-lg">
                            Penjelasan lengkap mengenai instrumen kuesioner, basis ilmiah, privasi data, dan metode perhitungan skor risiko penyalahgunaan narkoba.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-slate-50 py-12 sm:py-16">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <Link
                            href="/monitoring/cek-risiko"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            <ArrowLeftIcon className="h-4 w-4" />
                            Kembali ke Halaman Skrining
                        </Link>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            
                            {/* Peringatan Utama */}
                            <div className="border-b border-amber-200 bg-amber-50 p-6 sm:p-8">
                                <div className="flex items-start gap-3">
                                    <AlertTriangleIcon className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
                                    <div>
                                        <h3 className="mb-2 text-base font-bold text-amber-900">PERINGATAN UTAMA</h3>
                                        <p className="text-sm leading-relaxed text-amber-800">
                                            Instrumen ini merupakan adaptasi bahasa Indonesia yang <strong>belum melalui uji validasi dan reliabilitas formal</strong>. Hasil kuesioner bersifat indikatif edukatif awal, <strong>bukan diagnosis medis, dan bukan vonis hukum</strong>. Hasil "Masih Aman" tidak menjamin kondisi seseorang secara mutlak. Bila diperlukan, penilaian lanjutan hanya dapat dilakukan oleh tenaga profesional (dokter, psikiater, psikolog, konselor adiksi, atau asesor BNN).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 sm:p-10 space-y-12">
                                
                                {/* 1. Basis Ilmiah */}
                                <section>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-xl font-bold tracking-tight text-slate-900">1. Basis Ilmiah Instrumen</h2>
                                    </div>
                                    <p className="mb-4 text-base leading-relaxed text-slate-600">
                                        Modul skrining ini disusun berbasiskan instrumen yang telah diakui secara global dan diadaptasi secara khusus untuk keperluan skrining edukatif, meliputi:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                                            <h4 className="font-bold text-slate-900">WHO ASSIST v3.1</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                (<em>The Alcohol, Smoking and Substance Involvement Screening Test</em>): Instrumen utama yang digunakan untuk menilai frekuensi penggunaan, dorongan, serta masalah yang timbul akibat berbagai jenis zat. Untuk fokus program KIPAN, instrumen ini diadaptasi dengan membatasi ruang lingkup pada 8 kategori zat narkotika/psikotropika, dan secara eksplisit mengecualikan alkohol serta tembakau.
                                            </p>
                                        </div>
                                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                                            <h4 className="font-bold text-slate-900">DAST-10</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                (<em>Drug Abuse Screening Test</em>, Skinner 1982): Digunakan untuk melihat pola perilaku dan dampak sekunder penyalahgunaan narkoba secara lebih komprehensif dalam rentang 12 bulan terakhir. Bagian ini hanya tampil jika responden pernah mencoba setidaknya satu zat.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <hr className="border-slate-100" />

                                {/* 2. Privasi dan Keamanan Data */}
                                <section>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-xl font-bold tracking-tight text-slate-900">2. Privasi dan Keamanan Data (100% Anonim)</h2>
                                    </div>
                                    <p className="mb-5 text-base leading-relaxed text-slate-600">
                                        Kejujuran responden adalah kunci utama keakuratan instrumen ini. Oleh karena itu, sistem menjamin perlindungan anonimitas secara penuh:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                            <span className="text-slate-600">Sistem <strong>tidak pernah meminta identitas pribadi</strong> (Nama, NIK, Nomor HP, Email, atau Alamat).</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                            <span className="text-slate-600">Sistem <strong>tidak melacak atau menyimpan IP Address</strong> pengguna saat mengisi kuesioner.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                            <span className="text-slate-600">Data demografis yang dihimpun hanya Rentang Usia, Jenis Kelamin, dan Provinsi. Data ini digunakan murni dalam bentuk <strong>rekapitulasi agregat wilayah</strong> dan tidak dapat melacak identitas individu.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                            <span className="text-slate-600">Data hasil skrining <strong>tidak digunakan untuk kepentingan penindakan hukum</strong>, melainkan semata-mata untuk evaluasi program pencegahan KIPAN RI.</span>
                                        </li>
                                    </ul>
                                </section>

                                <hr className="border-slate-100" />

                                {/* 3. Spesifikasi Perhitungan */}
                                <section>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                            <Activity className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-xl font-bold tracking-tight text-slate-900">3. Spesifikasi Perhitungan dan Skoring</h2>
                                    </div>
                                    <p className="mb-6 text-base leading-relaxed text-slate-600">
                                        Perhitungan skor dilakukan pada dua instrumen yang berbeda, yang kemudian disintesis menjadi satu klasifikasi akhir profil risiko.
                                    </p>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="rounded-xl border border-slate-200 p-6">
                                            <h3 className="mb-3 font-bold text-slate-900">3.1. Skoring ASSIST (Per Zat)</h3>
                                            <p className="mb-4 text-sm leading-relaxed text-slate-600">
                                                Dihitung per zat yang pernah dicoba (rentang skor 0-39) berdasarkan 6 indikator dalam 3 bulan terakhir.
                                            </p>
                                            <div className="mb-4 space-y-1 text-sm text-slate-600">
                                                <div className="flex justify-between border-b border-slate-100 py-1"><span>Frekuensi Pemakaian</span><span className="font-medium">Skor 0-6</span></div>
                                                <div className="flex justify-between border-b border-slate-100 py-1"><span>Keinginan Kuat</span><span className="font-medium">Skor 0-6</span></div>
                                                <div className="flex justify-between border-b border-slate-100 py-1"><span>Masalah Akibat Pakai</span><span className="font-medium">Skor 0-7</span></div>
                                                <div className="flex justify-between border-b border-slate-100 py-1"><span>Gagal Kewajiban</span><span className="font-medium">Skor 0-8</span></div>
                                                <div className="flex justify-between border-b border-slate-100 py-1"><span>Kekhawatiran Lain</span><span className="font-medium">Skor 0, 3, 6</span></div>
                                                <div className="flex justify-between border-b border-slate-100 py-1"><span>Gagal Berhenti</span><span className="font-medium">Skor 0, 3, 6</span></div>
                                            </div>
                                            <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm">
                                                <div className="font-bold text-slate-900 mb-2">Ambang Klasifikasi:</div>
                                                <ul className="space-y-1">
                                                    <li className="text-slate-600"><span className="inline-block w-14 font-semibold text-emerald-600">0 - 3</span> Risiko Rendah</li>
                                                    <li className="text-slate-600"><span className="inline-block w-14 font-semibold text-amber-500">4 - 26</span> Risiko Sedang</li>
                                                    <li className="text-slate-600"><span className="inline-block w-14 font-semibold text-red-600">27 - 39</span> Risiko Tinggi</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 p-6">
                                            <h3 className="mb-3 font-bold text-slate-900">3.2. Skoring DAST-10</h3>
                                            <p className="mb-4 text-sm leading-relaxed text-slate-600">
                                                Terdiri dari 10 pertanyaan (Ya/Tidak) tentang dampak penggunaan narkoba dalam 12 bulan terakhir.
                                            </p>
                                            <p className="mb-4 text-sm leading-relaxed text-slate-600">
                                                Setiap jawaban <strong>"Ya" bernilai 1</strong>, kecuali pertanyaan No. 3 (pertanyaan terbalik, di mana "Tidak" bernilai 1). Rentang total skor 0–10.
                                            </p>
                                            
                                            <div className="mt-auto rounded-lg bg-slate-50 p-3 text-sm">
                                                <div className="font-bold text-slate-900 mb-2">Ambang Klasifikasi:</div>
                                                <ul className="space-y-1">
                                                    <li className="text-slate-600"><span className="inline-block w-14 font-semibold text-emerald-600">0 - 2</span> Tidak Ada / Rendah</li>
                                                    <li className="text-slate-600"><span className="inline-block w-14 font-semibold text-amber-500">3 - 5</span> Masalah Sedang</li>
                                                    <li className="text-slate-600"><span className="inline-block w-14 font-semibold text-red-600">6 - 10</span> Substansial / Berat</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <hr className="border-slate-100" />

                                {/* 4. Klasifikasi Final */}
                                <section>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                            <Layers className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-xl font-bold tracking-tight text-slate-900">4. Klasifikasi Final & Aturan Keputusan</h2>
                                    </div>
                                    <p className="mb-6 text-base leading-relaxed text-slate-600">
                                        Prinsip utama sistem klasifikasi adalah <strong>mengambil kategori risiko tertinggi dari semua indikator</strong>. Sistem akan mengevaluasi aturan secara berurutan.
                                    </p>
                                    
                                    <div className="overflow-hidden rounded-xl border border-slate-200">
                                        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                                            <thead className="bg-slate-50">
                                                <tr>
                                                    <th className="px-4 py-3 font-semibold text-slate-900">Urutan</th>
                                                    <th className="px-4 py-3 font-semibold text-slate-900">Kondisi Pemicu</th>
                                                    <th className="px-4 py-3 font-semibold text-slate-900">Klasifikasi Akhir</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 bg-white">
                                                <tr>
                                                    <td className="px-4 py-3 text-slate-500">1</td>
                                                    <td className="px-4 py-3 font-medium text-slate-700">Skor ASSIST salah satu zat ≥ 27</td>
                                                    <td className="px-4 py-3 font-bold text-red-600">Risiko Tinggi</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-slate-500">2</td>
                                                    <td className="px-4 py-3 font-medium text-slate-700">Skor DAST-10 ≥ 6</td>
                                                    <td className="px-4 py-3 font-bold text-red-600">Risiko Tinggi</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-slate-500">3</td>
                                                    <td className="px-4 py-3 font-medium text-slate-700">Ada penggunaan jarum suntik (3 bln terakhir)</td>
                                                    <td className="px-4 py-3 font-bold text-red-600">Risiko Tinggi</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-slate-500">4</td>
                                                    <td className="px-4 py-3 font-medium text-slate-700">Skor ASSIST salah satu zat berada di (4 - 26)</td>
                                                    <td className="px-4 py-3 font-bold text-amber-500">Risiko Sedang</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-slate-500">5</td>
                                                    <td className="px-4 py-3 font-medium text-slate-700">Skor DAST-10 berada di (3 - 5)</td>
                                                    <td className="px-4 py-3 font-bold text-amber-500">Risiko Sedang</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-slate-500">6</td>
                                                    <td className="px-4 py-3 font-medium text-slate-700">Tidak memenuhi semua syarat di atas</td>
                                                    <td className="px-4 py-3 font-bold text-emerald-600">Masih Aman (Rendah)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <hr className="border-slate-100" />

                                {/* 5. Saran */}
                                <section>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                            <AlertCircle className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-xl font-bold tracking-tight text-slate-900">5. Saran dan Tindak Lanjut</h2>
                                    </div>
                                    <p className="mb-6 text-base leading-relaxed text-slate-600">
                                        Sistem secara otomatis akan memberikan rekomendasi tindakan edukatif yang disesuaikan dengan profil klasifikasi akhir.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex flex-col gap-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 sm:flex-row sm:items-start">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                                <span className="font-bold">A</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-emerald-900">Risiko Rendah</h4>
                                                <p className="mt-1 text-sm leading-relaxed text-emerald-800">
                                                    Jaga gaya hidup sehat, tetap waspada, pelajari keterampilan menolak tekanan kelompok, dan jadilah agen perubahan untuk membantu teman-teman menjauhi narkoba.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-start">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-amber-700">
                                                <span className="font-bold">B</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-amber-900">Risiko Sedang</h4>
                                                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                                                    Narkoba mulai berdampak buruk pada fisik, emosi, atau hubungan sosial. Dianjurkan untuk segera mengurangi pemakaian atau mencari teman/konselor terpercaya untuk berdiskusi sebelum berkembang menjadi kecanduan kronis.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 rounded-xl border border-red-200 bg-red-50 p-5 sm:flex-row sm:items-start">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-200 text-red-700">
                                                <span className="font-bold">C</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-red-900">Risiko Tinggi</h4>
                                                <p className="mt-1 text-sm leading-relaxed text-red-800">
                                                    Terindikasi kuat adanya pola kecanduan/ketergantungan mendalam. Kondisi ini sangat berbahaya bagi masa depan dan nyawa. Segera cari pertolongan medis (dokter/psikiater) atau melapor secara sukarela ke Institusi Penerima Wajib Lapor (IPWL) / layanan pengaduan BNN (184).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Referensi */}
                                <div className="mt-12 rounded-xl bg-slate-100 p-6 sm:p-8">
                                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">Rujukan Utama Instrumen</h4>
                                    <ol className="list-inside list-decimal space-y-2 text-sm text-slate-600">
                                        <li>World Health Organization. <em>The Alcohol, Smoking and Substance Involvement Screening Test (ASSIST): manual for use in primary care</em>. Geneva: WHO; 2010.</li>
                                        <li>Skinner HA. The Drug Abuse Screening Test. <em>Addictive Behaviors</em>. 1982;7(4):363–371.</li>
                                        <li>Kanal Pengaduan dan Konseling BNN Republik Indonesia (Layanan 184).</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </LandingLayout>
    );
}
