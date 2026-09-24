import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import FloatingWhatsApp from '@/Components/Landing/FloatingWhatsApp';
import PageHeader from '@/Components/Landing/PageHeader';
import { COMPANY } from '@/data/kipan-data';
import {
    SewingPinIcon,
    ChatBubbleIcon,
    EnvelopeClosedIcon,
    GlobeIcon,
    ExclamationTriangleIcon,
    PaperPlaneIcon,
    CheckCircledIcon,
    ClockIcon,
} from '@radix-ui/react-icons';

export default function Kontak() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        nama: '',
        instansi: '',
        whatsapp: '',
        pesan: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to WhatsApp with pre-filled text
        const text = `Halo Sekretariat ${COMPANY.name},\nNama: ${form.nama}\nInstansi: ${form.instansi || '-'}\nNo HP: ${form.whatsapp}\nPesan: ${form.pesan}`;
        const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <>
            <Head title="Hubungi Sekretariat : KIPAN Indonesia" />
            <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800">
                <Navbar />
                <main className="flex-1">
                    <PageHeader
                        badge="Layanan & Konsultasi"
                        title="Hubungi Sekretariat KIPAN"
                        subtitle="Saluran komunikasi resmi untuk kemitraan, sosialisasi sekolah, verifikasi kader, dan informasi umum."
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            {/* Left: Contact Info & Hotline BNN 184 (5 cols) */}
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                {/* Hotline Alert Card */}
                                <div className="bg-red-50 border border-red-200 rounded-3xl p-6 shadow-xs">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                                            <ExclamationTriangleIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base text-red-950">
                                                Call Center BNN RI 184
                                            </h3>
                                            <p className="text-xs text-red-700">Layanan Darurat Bebas Pulsa</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-red-800 leading-relaxed mt-2">
                                        Untuk pengaduan peredaran narkoba, konsultasi rehabilitasi medis, atau laporan darurat narkotika langsung ke BNN RI.
                                    </p>
                                    <a
                                        href="tel:184"
                                        className="mt-4 inline-flex items-center justify-center w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                                    >
                                        Hubungi Hotline 184
                                    </a>
                                </div>

                                {/* Secretariat Details */}
                                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5">
                                    <h3 className="font-bold text-lg text-slate-900 border-b border-slate-200 pb-3">
                                        Sekretariat Nasional
                                    </h3>

                                    <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                                        <SewingPinIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-900">Alamat Kantor</strong>
                                            <span>{COMPANY.currentAddress}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                                        <ChatBubbleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-900">WhatsApp Sekretariat</strong>
                                            <span>+{COMPANY.whatsapp}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                                        <EnvelopeClosedIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-900">Email Resmi</strong>
                                            <span>{COMPANY.email}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                                        <ClockIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-900">Jam Operasional</strong>
                                            <span>Senin - Jumat, 08.30 - 17.00 WIB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Consultation & Message Form (7 cols) */}
                            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                                    Kirim Pesan &amp; Permohonan Kemitraan
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                    Silakan isi formulir di bawah ini. Tim Sekretariat KIPAN akan merespons melalui WhatsApp atau email resmi.
                                </p>

                                {submitted ? (
                                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                                        <CheckCircledIcon className="w-10 h-10 text-emerald-600 mx-auto" />
                                        <h4 className="font-bold text-base text-emerald-950">
                                            Pesan Diteruskan ke WhatsApp
                                        </h4>
                                        <p className="text-xs text-emerald-700">
                                            Terima kasih! Pesan Anda telah dibuka melalui kanal WhatsApp resmi Sekretariat KIPAN.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
                                        >
                                            Kirim Pesan Lain
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={form.nama}
                                                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                                                placeholder="Contoh: Muhammad Ilham"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                                    Instansi / Sekolah / Komunitas
                                                </label>
                                                <input
                                                    type="text"
                                                    value={form.instansi}
                                                    onChange={(e) => setForm({ ...form, instansi: e.target.value })}
                                                    placeholder="Contoh: SMKN 1 Bandung"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                                    Nomor WhatsApp *
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={form.whatsapp}
                                                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                                                    placeholder="0812xxxxxxxx"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                                Pesan / Kebutuhan Kegiatan *
                                            </label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={form.pesan}
                                                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                                                placeholder="Tuliskan permohonan narasumber sosialisasi, audiensi, atau pertanyaan seputar KIPAN..."
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
                                        >
                                            <PaperPlaneIcon className="w-4 h-4" />
                                            <span>Kirim via WhatsApp Sekretariat</span>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </>
    );
}
