import { TargetIcon } from '@radix-ui/react-icons';

export default function VisiMisiSection() {
    return (
        <section id="visi-misi" className="scroll-mt-20 py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D3F70]">
                        <TargetIcon className="h-3.5 w-3.5 text-[#0E6CAC]" />
                        <span>Visi &amp; Misi Gerakan</span>
                    </div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-[#0D3F70] sm:text-3xl">
                        Arah &amp; Panduan Gerakan Nasional
                    </h2>
                </div>

                {/* Banner Visi */}
                <div
                    className="mb-8 rounded-2xl border border-blue-900 p-8 text-white sm:p-10"
                    style={{
                        backgroundColor: '#0D3F70',
                        backgroundImage: 'linear-gradient(180deg, #092B4D 0%, #0D3F70 100%)',
                    }}
                >
                    <div className="max-w-3xl">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-amber-300">
                            Visi KIPAN RI
                        </span>
                        <h3 className="mb-3 text-xl font-extrabold leading-snug sm:text-2xl lg:text-3xl">
                            "Mewujudkan Generasi Pemuda Indonesia yang Tangguh, Berkarakter, Berdaya Saing,
                            dan Bersih dari Narkoba Menuju Indonesia Emas 2045."
                        </h3>
                        <p className="text-xs font-normal leading-relaxed text-blue-100 sm:text-sm">
                            Membangun benteng moral pemuda melalui kemandirian, kepeloporan, dan aksi
                            nyata terorganisir dari perkotaan hingga pelosok desa.
                        </p>
                    </div>
                </div>

                {/* 4 Pilar Misi */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                            1
                        </div>
                        <div>
                            <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                Edukasi &amp; Deteksi Dini
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-600">
                                Menyosialisasikan bahaya narkoba secara intensif melalui pendekatan sebaya
                                di sekolah, kampus, dan ruang komunitas anak muda.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                            2
                        </div>
                        <div>
                            <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                Kaderisasi Terstruktur Berkelanjutan
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-600">
                                Mempersiapkan kader pemuda bersertifikat yang memiliki wawasan kepemimpinan,
                                regulasi narkotika, dan keterampilan konseling sebaya.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                            3
                        </div>
                        <div>
                            <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                Aksi Kreatif &amp; Pemberdayaan Positif
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-600">
                                Menyalurkan energi dan potensi kreatif anak muda ke dalam kompetisi olahraga,
                                wirausaha muda, seni budaya, serta bakti sosial lingkungan.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-[#0D3F70]">
                            4
                        </div>
                        <div>
                            <h4 className="mb-1.5 text-base font-bold text-[#0D3F70]">
                                Kolaborasi Sinergis Multisektor
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-600">
                                Membangun kemitraan strategis pentahelix antara pemerintah, aparat penegak
                                hukum, akademisi, media, dan dunia usaha dalam mewujudkan Indonesia Bersinar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
