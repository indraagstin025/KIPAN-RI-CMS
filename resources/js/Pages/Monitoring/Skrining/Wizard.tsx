import LandingLayout from '@/Layouts/LandingLayout';
import { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon, ArrowLeftIcon, InfoCircledIcon, ExclamationTriangleIcon, CheckCircledIcon, FileTextIcon, HeartIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { Head, Link } from '@inertiajs/react';

// Data Provinsi (38 Provinsi)
const PROVINCES = [
    'Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatera Selatan', 'Kepulauan Bangka Belitung', 'Bengkulu', 'Lampung', 'Banten', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Maluku Utara', 'Maluku', 'Papua Barat Daya', 'Papua Barat', 'Papua Tengah', 'Papua Pegunungan', 'Papua Selatan', 'Papua'
];

export default function Wizard() {
    const [step, setStep] = useState(1);
    const topRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (topRef.current) {
            // Scroll a bit higher than the element itself to account for the sticky navbar
            const y = topRef.current.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [step]);
    
    // Form State
    const [agreements, setAgreements] = useState({
        a1: false,
        a2: false,
        a3: false,
        a4: false
    });
    
    const [dataMinimal, setDataMinimal] = useState({
        usia: '',
        jenisKelamin: '',
        provinsi: ''
    });

    const [q1, setQ1] = useState<Record<string, 'Ya' | 'Tidak' | null>>({
        GANJA: null,
        KOKAIN: null,
        STIMULAN: null,
        INHALAN: null,
        PENENANG: null,
        HALUSINOGEN: null,
        OPIOID: null,
        LAINNYA: null,
    });
    const [teksZatLain, setTeksZatLain] = useState('');

    type SubstanceScores = {
        q2: number | null;
        q3: number | null;
        q4: number | null;
        q5: number | null;
        q6: number | null;
        q7: number | null;
    };
    const initialScores: SubstanceScores = { q2: null, q3: null, q4: null, q5: null, q6: null, q7: null };
    const [q2to7, setQ2to7] = useState<Record<string, SubstanceScores>>({
        GANJA: {...initialScores},
        KOKAIN: {...initialScores},
        STIMULAN: {...initialScores},
        INHALAN: {...initialScores},
        PENENANG: {...initialScores},
        HALUSINOGEN: {...initialScores},
        OPIOID: {...initialScores},
        LAINNYA: {...initialScores},
    });

    const [q8, setQ8] = useState<string | null>(null);

    const [dast, setDast] = useState<Record<string, 'Ya' | 'Tidak' | null>>({
        D1: null, D2: null, D3: null, D4: null, D5: null, 
        D6: null, D7: null, D8: null, D9: null, D10: null,
    });

    const ZAT_LIST = [
        { id: 'GANJA', label: 'Ganja / kanabis (mariyuana, hashish)' },
        { id: 'KOKAIN', label: 'Kokain' },
        { id: 'STIMULAN', label: 'Stimulan jenis amfetamin (mis. sabu, ekstasi)' },
        { id: 'INHALAN', label: 'Inhalan (mis. lem, thinner)' },
        { id: 'PENENANG', label: 'Obat penenang / obat tidur (tanpa resep)' },
        { id: 'HALUSINOGEN', label: 'Halusinogen (mis. LSD, jamur psilosibin)' },
        { id: 'OPIOID', label: 'Opioid (mis. heroin, putaw, morfin)' },
        { id: 'LAINNYA', label: 'Zat lain' },
    ];
    const activeSubstances = ZAT_LIST.filter(zat => q1[zat.id] === 'Ya');

    const isStep1Valid = Object.values(agreements).every(Boolean);
    const isStep2Valid = dataMinimal.usia !== '';
    const isStep3Valid = Object.values(q1).every(val => val !== null) && 
        (q1.LAINNYA !== 'Ya' || teksZatLain.trim() !== '');
    
    const isStep4Valid = activeSubstances.every(zat => 
        q2to7[zat.id].q2 !== null && 
        q2to7[zat.id].q3 !== null && 
        q2to7[zat.id].q4 !== null && 
        q2to7[zat.id].q5 !== null
    );

    const isStep5Valid = activeSubstances.every(zat => 
        q2to7[zat.id].q6 !== null && 
        q2to7[zat.id].q7 !== null
    );

    const isStep6Valid = q8 !== null && Object.values(dast).every(val => val !== null);

    const [result, setResult] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitKuesioner = async () => {
        setIsSubmitting(true);
        try {
            const payload = {
                persetujuan: true,
                usia: dataMinimal.usia,
                jenisKelamin: dataMinimal.jenisKelamin || null,
                provinsi: dataMinimal.provinsi || null,
                q1: q1,
                q2to7: q2to7,
                q8: q8,
                dast: dast,
                teksZatLain: teksZatLain
            };
            const response = await axios.post('/monitoring/cek-risiko/submit', payload);
            setResult(response.data);
            setStep(7);
        } catch (e) {
            alert('Terjadi kesalahan saat memproses data. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (step === 3) {
            if (activeSubstances.length === 0) {
                submitKuesioner();
                return;
            }
        }
        if (step === 6) {
            submitKuesioner();
            return;
        }
        setStep(prev => Math.min(prev + 1, 7));
    };

    const prevStep = () => {
        if (step === 7) {
            if (activeSubstances.length === 0) {
                setStep(3); // Go back to step 3
                return;
            }
            setStep(6);
            return;
        }
        setStep(prev => Math.max(prev - 1, 1));
    };

    return (
        <LandingLayout
            title="Cek Risiko Anda — KIPAN RI"
            className="bg-slate-50"
        >
            <Head title="Cek Risiko Anda — Skrining Narkoba" />
            
            <div className="relative min-h-screen bg-slate-50 pb-20">
                {/* Background Banner for Transparent Navbar */}
                <div className="absolute inset-x-0 top-0 h-[300px] bg-[#072442] lg:h-[350px]">
                    <div className="absolute inset-0 bg-black/10 bg-[url('/grid-pattern.svg')] bg-center opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50" />
                </div>

                <div ref={topRef} className="relative z-10 container mx-auto max-w-3xl px-4 pt-28 sm:px-6 sm:pt-32">
                    
                        {/* Header & Progress */}
                        {step < 7 && (
                            <div className="mb-8">
                                <div className="mb-4 flex flex-col items-center justify-between sm:flex-row gap-4">
                                    <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                                        Kuesioner Skrining Risiko
                                    </h1>
                                    <div className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-blue-100 backdrop-blur-md border border-white/20">
                                        Langkah {step} dari 6
                                    </div>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/20 shadow-inner backdrop-blur-sm">
                                    <div 
                                        className="h-full rounded-full bg-kipan-navy transition-all duration-300 ease-out"
                                        style={{ width: `${(step / 6) * 100}%` }}
                                    />
                                </div>
                            </div>
                        )}

                    {/* Emergency Help Link */}
                    <div className="mb-6 flex justify-end">
                        <button className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 transition-colors hover:bg-red-100">
                            <ExclamationTriangleIcon className="h-3.5 w-3.5" />
                            Butuh bantuan segera?
                        </button>
                    </div>

                    {/* Step Content Card */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        
                        {/* ================= STEP 1 ================= */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="mb-2 text-xl font-bold text-slate-900">Persetujuan & Pemahaman</h2>
                                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                                    Pengisian hanya memakan waktu sekitar 5–10 menit. Anda tidak perlu memasukkan nama, NIK, alamat, nomor telepon, atau email. Jawaban Anda tidak dapat dipakai untuk mengidentifikasi diri Anda.
                                </p>
                                
                                <div className="space-y-3">
                                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                                        <input 
                                            type="checkbox" 
                                            className="mt-0.5 h-5 w-5 rounded border-slate-300 text-kipan-navy focus:ring-kipan-navy"
                                            checked={agreements.a1}
                                            onChange={e => setAgreements({...agreements, a1: e.target.checked})}
                                        />
                                        <span className="text-sm text-slate-700">
                                            Kuesioner ini adalah alat skrining edukatif awal, <strong>bukan diagnosis medis dan bukan vonis hukum</strong>.
                                        </span>
                                    </label>
                                    
                                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                                        <input 
                                            type="checkbox" 
                                            className="mt-0.5 h-5 w-5 rounded border-slate-300 text-kipan-navy focus:ring-kipan-navy"
                                            checked={agreements.a2}
                                            onChange={e => setAgreements({...agreements, a2: e.target.checked})}
                                        />
                                        <span className="text-sm text-slate-700">
                                            Hasil hanya berupa gambaran awal dan saran tindak lanjut; bila diperlukan, penilaian lanjutan hanya dapat dilakukan tenaga profesional (dokter, psikiater, psikolog, konselor adiksi, atau asesor BNN).
                                        </span>
                                    </label>

                                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                                        <input 
                                            type="checkbox" 
                                            className="mt-0.5 h-5 w-5 rounded border-slate-300 text-kipan-navy focus:ring-kipan-navy"
                                            checked={agreements.a3}
                                            onChange={e => setAgreements({...agreements, a3: e.target.checked})}
                                        />
                                        <span className="text-sm text-slate-700">
                                            Jawaban saya bersifat <strong>anonim</strong> — tidak ada nama, NIK, alamat, kontak, maupun alamat IP yang disimpan.
                                        </span>
                                    </label>

                                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                                        <input 
                                            type="checkbox" 
                                            className="mt-0.5 h-5 w-5 rounded border-slate-300 text-kipan-navy focus:ring-kipan-navy"
                                            checked={agreements.a4}
                                            onChange={e => setAgreements({...agreements, a4: e.target.checked})}
                                        />
                                        <span className="text-sm text-slate-700">
                                            Data hanya digunakan dalam bentuk rekapitulasi agregat (kumpulan) untuk pemantauan program pencegahan KIPAN, dan <strong>tidak digunakan untuk kepentingan penindakan hukum</strong>.
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* ================= STEP 2 ================= */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="mb-2 text-xl font-bold text-slate-900">Data Demografis (Anonim)</h2>
                                <p className="mb-6 flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm leading-relaxed text-blue-800">
                                    <InfoCircledIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                    Data di bawah ini hanya digunakan untuk mengelompokkan hasil secara umum. Tidak ada pertanyaan mengenai identitas pribadi Anda.
                                </p>
                                
                                <div className="space-y-6">
                                    {/* Rentang Usia (Wajib) */}
                                    <div>
                                        <label className="mb-3 block text-sm font-bold text-slate-700">
                                            Rentang Usia <span className="text-red-500">*wajib</span>
                                        </label>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            {[
                                                { id: 'LT15', label: 'Kurang dari 15 tahun' },
                                                { id: '15_17', label: '15–17 tahun' },
                                                { id: '18_24', label: '18–24 tahun' },
                                                { id: '25_34', label: '25–34 tahun' },
                                                { id: '35_PLUS', label: '35 tahun atau lebih' },
                                            ].map(usia => (
                                                <label 
                                                    key={usia.id}
                                                    className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${dataMinimal.usia === usia.id ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}
                                                >
                                                    <input 
                                                        type="radio" 
                                                        name="usia"
                                                        value={usia.id}
                                                        checked={dataMinimal.usia === usia.id}
                                                        onChange={(e) => setDataMinimal({...dataMinimal, usia: e.target.value})}
                                                        className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy"
                                                    />
                                                    <span className="text-sm font-medium text-slate-800">{usia.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {/* Jenis Kelamin (Opsional) */}
                                        <div>
                                            <label className="mb-2 block text-sm font-bold text-slate-700">
                                                Jenis Kelamin <span className="text-slate-400 font-normal">(opsional)</span>
                                            </label>
                                            <select 
                                                value={dataMinimal.jenisKelamin}
                                                onChange={(e) => setDataMinimal({...dataMinimal, jenisKelamin: e.target.value})}
                                                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 focus:border-kipan-navy focus:outline-none focus:ring-1 focus:ring-kipan-navy"
                                            >
                                                <option value="">Pilih...</option>
                                                <option value="L">Laki-laki</option>
                                                <option value="P">Perempuan</option>
                                                <option value="X">Tidak ingin menyebutkan</option>
                                            </select>
                                        </div>

                                        {/* Provinsi (Opsional) */}
                                        <div>
                                            <label className="mb-2 block text-sm font-bold text-slate-700">
                                                Provinsi Domisili <span className="text-slate-400 font-normal">(opsional)</span>
                                            </label>
                                            <select 
                                                value={dataMinimal.provinsi}
                                                onChange={(e) => setDataMinimal({...dataMinimal, provinsi: e.target.value})}
                                                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 focus:border-kipan-navy focus:outline-none focus:ring-1 focus:ring-kipan-navy"
                                            >
                                                <option value="">Pilih...</option>
                                                <option value="X">Tidak ingin menyebutkan</option>
                                                <optgroup label="Daftar Provinsi">
                                                    {PROVINCES.map(prov => (
                                                        <option key={prov} value={prov}>{prov}</option>
                                                    ))}
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ================= STEP 3 ================= */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="mb-2 text-xl font-bold text-slate-900">Penggunaan Sepanjang Hidup</h2>
                                <div className="mb-6 flex items-start gap-3 rounded-xl bg-yellow-100 border border-yellow-200 p-4 shadow-sm">
                                    <InfoCircledIcon className="mt-0.5 h-6 w-6 shrink-0 text-yellow-600" />
                                    <p className="text-base font-bold leading-relaxed text-yellow-900">
                                        Sepanjang hidup Anda, apakah Anda pernah memakai zat-zat berikut — meskipun hanya satu kali — dan bukan karena anjuran dokter?
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {ZAT_LIST.map(zat => (
                                        <div key={zat.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                                <span className="text-sm font-semibold text-slate-800">
                                                    {zat.id === 'LAINNYA' ? 'Zat lain yang memengaruhi pikiran/perasaan' : zat.label}
                                                </span>
                                                <div className="flex shrink-0 gap-2">
                                                    <button
                                                        onClick={() => setQ1({ ...q1, [zat.id]: 'Tidak' })}
                                                        className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${q1[zat.id] === 'Tidak' ? 'bg-kipan-navy text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                                    >
                                                        Tidak
                                                    </button>
                                                    <button
                                                        onClick={() => setQ1({ ...q1, [zat.id]: 'Ya' })}
                                                        className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${q1[zat.id] === 'Ya' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                                    >
                                                        Ya, Pernah
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            {zat.id === 'LAINNYA' && q1.LAINNYA === 'Ya' && (
                                                <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                                                    <input 
                                                        type="text" 
                                                        placeholder="Sebutkan zat lainnya..."
                                                        maxLength={100}
                                                        value={teksZatLain}
                                                        onChange={e => setTeksZatLain(e.target.value)}
                                                        className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-kipan-navy focus:outline-none focus:ring-1 focus:ring-kipan-navy"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ================= STEP 4 ================= */}
                        {step === 4 && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="mb-2 text-xl font-bold text-slate-900">Frekuensi & Dampak (3 Bulan Terakhir)</h2>
                                <p className="mb-6 flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm leading-relaxed text-blue-800">
                                    <InfoCircledIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                    Jawablah pertanyaan berikut untuk setiap zat yang Anda nyatakan pernah dipakai pada langkah sebelumnya.
                                </p>

                                <div className="space-y-10">
                                    {activeSubstances.map(zat => {
                                        const zatName = zat.id === 'LAINNYA' && teksZatLain ? teksZatLain : zat.label;
                                        return (
                                            <div key={zat.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                                                    <h3 className="font-bold text-slate-800 text-lg">{zatName}</h3>
                                                </div>
                                                <div className="p-5 space-y-8">
                                                    
                                                    {/* Q2 */}
                                                    <div>
                                                        <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                            Dalam 3 bulan terakhir, seberapa sering Anda memakai <span className="text-kipan-navy">{zatName}</span>?
                                                        </label>
                                                        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                                                            {[
                                                                { score: 0, label: 'Tidak pernah' },
                                                                { score: 2, label: '1 atau 2 kali' },
                                                                { score: 3, label: 'Tiap bulan' },
                                                                { score: 4, label: 'Tiap minggu' },
                                                                { score: 6, label: 'Setiap hari / hampir setiap hari' },
                                                            ].map(opt => (
                                                                <label key={opt.score} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q2to7[zat.id].q2 === opt.score ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                                    <input type="radio" name={`q2_${zat.id}`} checked={q2to7[zat.id].q2 === opt.score} onChange={() => setQ2to7({...q2to7, [zat.id]: {...q2to7[zat.id], q2: opt.score}})} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                                    <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Q3 */}
                                                    <div>
                                                        <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                            Dalam 3 bulan terakhir, seberapa sering Anda merasakan keinginan atau dorongan kuat (craving) untuk memakai <span className="text-kipan-navy">{zatName}</span>?
                                                        </label>
                                                        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                                                            {[
                                                                { score: 0, label: 'Tidak pernah' },
                                                                { score: 3, label: 'Sekali atau dua kali' },
                                                                { score: 4, label: 'Tiap bulan' },
                                                                { score: 5, label: 'Tiap minggu' },
                                                                { score: 6, label: 'Setiap hari / hampir setiap hari' },
                                                            ].map(opt => (
                                                                <label key={opt.score} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q2to7[zat.id].q3 === opt.score ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                                    <input type="radio" name={`q3_${zat.id}`} checked={q2to7[zat.id].q3 === opt.score} onChange={() => setQ2to7({...q2to7, [zat.id]: {...q2to7[zat.id], q3: opt.score}})} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                                    <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Q4 */}
                                                    <div>
                                                        <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                            Dalam 3 bulan terakhir, seberapa sering pemakaian <span className="text-kipan-navy">{zatName}</span> menimbulkan masalah bagi Anda (kesehatan, sosial, hukum, atau keuangan)?
                                                        </label>
                                                        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                                                            {[
                                                                { score: 0, label: 'Tidak pernah' },
                                                                { score: 4, label: 'Sekali atau dua kali' },
                                                                { score: 5, label: 'Tiap bulan' },
                                                                { score: 6, label: 'Tiap minggu' },
                                                                { score: 7, label: 'Setiap hari / hampir setiap hari' },
                                                            ].map(opt => (
                                                                <label key={opt.score} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q2to7[zat.id].q4 === opt.score ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                                    <input type="radio" name={`q4_${zat.id}`} checked={q2to7[zat.id].q4 === opt.score} onChange={() => setQ2to7({...q2to7, [zat.id]: {...q2to7[zat.id], q4: opt.score}})} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                                    <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Q5 */}
                                                    <div>
                                                        <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                            Dalam 3 bulan terakhir, seberapa sering Anda gagal melakukan hal-hal yang biasanya diharapkan dari Anda karena pemakaian <span className="text-kipan-navy">{zatName}</span>?
                                                        </label>
                                                        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                                                            {[
                                                                { score: 0, label: 'Tidak pernah' },
                                                                { score: 5, label: 'Sekali atau dua kali' },
                                                                { score: 6, label: 'Tiap bulan' },
                                                                { score: 7, label: 'Tiap minggu' },
                                                                { score: 8, label: 'Setiap hari / hampir setiap hari' },
                                                            ].map(opt => (
                                                                <label key={opt.score} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q2to7[zat.id].q5 === opt.score ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                                    <input type="radio" name={`q5_${zat.id}`} checked={q2to7[zat.id].q5 === opt.score} onChange={() => setQ2to7({...q2to7, [zat.id]: {...q2to7[zat.id], q5: opt.score}})} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                                    <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ================= STEP 5 ================= */}
                        {step === 5 && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="mb-2 text-xl font-bold text-slate-900">Kekhawatiran & Upaya Berhenti</h2>
                                <p className="mb-6 flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm leading-relaxed text-blue-800">
                                    <InfoCircledIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                    Jawablah 2 pertanyaan terakhir untuk setiap zat.
                                </p>

                                <div className="space-y-10">
                                    {activeSubstances.map(zat => {
                                        const zatName = zat.id === 'LAINNYA' && teksZatLain ? teksZatLain : zat.label;
                                        return (
                                            <div key={zat.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                                                    <h3 className="font-bold text-slate-800 text-lg">{zatName}</h3>
                                                </div>
                                                <div className="p-5 space-y-8">
                                                    
                                                    {/* Q6 */}
                                                    <div>
                                                        <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                            Apakah teman, keluarga, atau orang lain pernah menyatakan khawatir atau keberatan tentang pemakaian <span className="text-kipan-navy">{zatName}</span> Anda?
                                                        </label>
                                                        <div className="grid gap-2 sm:grid-cols-1">
                                                            {[
                                                                { score: 0, label: 'Tidak pernah' },
                                                                { score: 3, label: 'Ya, tetapi bukan dalam 3 bulan terakhir' },
                                                                { score: 6, label: 'Ya, dalam 3 bulan terakhir' },
                                                            ].map(opt => (
                                                                <label key={opt.score} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q2to7[zat.id].q6 === opt.score ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                                    <input type="radio" name={`q6_${zat.id}`} checked={q2to7[zat.id].q6 === opt.score} onChange={() => setQ2to7({...q2to7, [zat.id]: {...q2to7[zat.id], q6: opt.score}})} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                                    <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Q7 */}
                                                    <div>
                                                        <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                            Apakah Anda pernah mencoba mengurangi atau berhenti memakai <span className="text-kipan-navy">{zatName}</span>, tetapi tidak berhasil?
                                                        </label>
                                                        <div className="grid gap-2 sm:grid-cols-1">
                                                            {[
                                                                { score: 0, label: 'Tidak pernah' },
                                                                { score: 3, label: 'Ya, tetapi bukan dalam 3 bulan terakhir' },
                                                                { score: 6, label: 'Ya, dalam 3 bulan terakhir' },
                                                            ].map(opt => (
                                                                <label key={opt.score} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q2to7[zat.id].q7 === opt.score ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                                    <input type="radio" name={`q7_${zat.id}`} checked={q2to7[zat.id].q7 === opt.score} onChange={() => setQ2to7({...q2to7, [zat.id]: {...q2to7[zat.id], q7: opt.score}})} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                                    <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ================= STEP 6 ================= */}
                        {step === 6 && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="mb-2 text-xl font-bold text-slate-900">Indikator Lanjutan</h2>
                                <p className="mb-6 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm leading-relaxed text-red-800">
                                    <ExclamationTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                    Jawablah pertanyaan berikut dengan jujur sesuai pengalaman Anda selama 12 bulan terakhir.
                                </p>

                                <div className="space-y-10">
                                    {/* Q8 */}
                                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                                            <h3 className="font-bold text-slate-800 text-lg">Metode Pemakaian</h3>
                                        </div>
                                        <div className="p-5">
                                            <label className="mb-3 block text-sm font-semibold text-slate-700">
                                                Apakah Anda pernah memakai zat/narkoba dengan cara disuntik?
                                            </label>
                                            <div className="grid gap-2 sm:grid-cols-1">
                                                {[
                                                    { id: 'TIDAK_PERNAH', label: 'Tidak pernah' },
                                                    { id: 'YA_BUKAN_3BULAN', label: 'Ya, tetapi bukan dalam 3 bulan terakhir' },
                                                    { id: 'YA_3BULAN', label: 'Ya, dalam 3 bulan terakhir' },
                                                ].map(opt => (
                                                    <label key={opt.id} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${q8 === opt.id ? 'border-kipan-navy bg-blue-50/50 ring-1 ring-kipan-navy' : 'border-slate-200 hover:bg-slate-50'}`}>
                                                        <input type="radio" name="q8" checked={q8 === opt.id} onChange={() => setQ8(opt.id)} className="h-4 w-4 border-slate-300 text-kipan-navy focus:ring-kipan-navy" />
                                                        <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* DAST-10 */}
                                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                                            <h3 className="font-bold text-slate-800 text-lg">Pengalaman 12 Bulan Terakhir</h3>
                                        </div>
                                        <div className="divide-y divide-slate-100">
                                            {[
                                                { id: 'D1', q: 'Apakah Anda pernah memakai narkoba atau obat-obatan selain untuk keperluan pengobatan yang dianjurkan dokter?' },
                                                { id: 'D2', q: 'Apakah Anda pernah memakai lebih dari satu jenis narkoba/obat pada saat yang bersamaan?' },
                                                { id: 'D3', q: 'Apakah Anda selalu bisa berhenti memakai narkoba jika Anda mau?' },
                                                { id: 'D4', q: 'Apakah Anda pernah mengalami "blackout" (tidak mengingat kejadian) atau "flashback" (merasakan kembali pengaruh zat padahal tidak sedang memakai) akibat pemakaian narkoba?' },
                                                { id: 'D5', q: 'Apakah Anda pernah merasa buruk, menyesal, atau bersalah tentang pemakaian narkoba Anda?' },
                                                { id: 'D6', q: 'Apakah pasangan Anda, orang tua, atau keluarga Anda pernah mengeluh atau mengkhawatirkan keterlibatan Anda dengan narkoba?' },
                                                { id: 'D7', q: 'Apakah teman atau kerabat Anda pernah mengetahui atau menduga Anda memakai narkoba?' },
                                                { id: 'D8', q: 'Apakah Anda pernah melakukan perbuatan yang melanggar hukum demi mendapatkan narkoba?' },
                                                { id: 'D9', q: 'Apakah Anda pernah merasa sakit atau sangat tidak nyaman setelah berhenti atau mengurangi pemakaian narkoba (gejala sakau/putus zat)?' },
                                                { id: 'D10', q: 'Apakah Anda pernah mengalami masalah kesehatan akibat narkoba — misalnya gangguan daya ingat, hepatitis, kejang, atau pendarahan?' },
                                            ].map((item, index) => (
                                                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 gap-4 hover:bg-slate-50/50 transition-colors">
                                                    <div className="flex gap-3">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">{index + 1}</span>
                                                        <span className="text-sm font-medium text-slate-700 leading-relaxed max-w-lg">{item.q}</span>
                                                    </div>
                                                    <div className="flex shrink-0 gap-2 ml-9 sm:ml-0">
                                                        <button
                                                            onClick={() => setDast({ ...dast, [item.id]: 'Tidak' })}
                                                            className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${dast[item.id] === 'Tidak' ? 'bg-kipan-navy text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                                        >
                                                            Tidak
                                                        </button>
                                                        <button
                                                            onClick={() => setDast({ ...dast, [item.id]: 'Ya' })}
                                                            className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${dast[item.id] === 'Ya' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                                        >
                                                            Ya
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* ================= STEP 7 (HASIL) ================= */}
                        {step === 7 && result && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                
                                {/* BANNER KLASIFIKASI */}
                                <div className={`p-8 rounded-3xl mb-8 text-center border-2 shadow-sm ${
                                    result.klasifikasi === 'MASIH_AMAN_RENDAH' ? 'bg-green-50/50 border-green-200 text-green-900' :
                                    result.klasifikasi === 'RISIKO_SEDANG' ? 'bg-yellow-50/50 border-yellow-200 text-yellow-900' :
                                    'bg-red-50/50 border-red-200 text-red-900'
                                }`}>
                                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 opacity-80">Klasifikasi Anda</h2>
                                    <h3 className="text-3xl sm:text-4xl font-black mb-4">{result.label_tampilan}</h3>
                                    
                                    {result.klasifikasi === 'MASIH_AMAN_RENDAH' && (
                                        <p className="text-sm font-semibold mt-4 px-4 py-2 bg-green-100/50 rounded-lg inline-block">
                                            Catatan: Hasil ini TIDAK menjamin kondisi Anda tetap aman; ini hanya gambaran awal berdasarkan jawaban Anda.
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    {/* DETAIL SKOR ZAT */}
                                    {result.detail_zat.some((z: any) => z.dipakai) && (
                                        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                                                <h3 className="font-bold text-slate-800">Detail Indikasi per Zat</h3>
                                            </div>
                                            <div className="p-0">
                                                <table className="w-full text-sm text-left text-slate-600">
                                                    <thead className="text-xs uppercase bg-slate-50 border-b border-slate-100">
                                                        <tr>
                                                            <th className="px-5 py-3 font-semibold text-slate-700">Zat</th>
                                                            <th className="px-5 py-3 font-semibold text-slate-700 text-center">Skor</th>
                                                            <th className="px-5 py-3 font-semibold text-slate-700">Tingkat Risiko</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-100">
                                                        {result.detail_zat.filter((z: any) => z.dipakai).map((z: any) => (
                                                            <tr key={z.kode} className="hover:bg-slate-50/50 transition-colors">
                                                                <td className="px-5 py-3 font-medium text-slate-800">{ZAT_LIST.find(zl => zl.id === z.kode)?.label || z.kode}</td>
                                                                <td className="px-5 py-3 text-center font-bold text-slate-800">{z.skor}</td>
                                                                <td className="px-5 py-3">
                                                                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold ${
                                                                        z.tingkat === 'RENDAH' ? 'bg-green-100 text-green-700' :
                                                                        z.tingkat === 'SEDANG' ? 'bg-yellow-100 text-yellow-700' :
                                                                        'bg-red-100 text-red-700'
                                                                    }`}>
                                                                        {z.tingkat}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {/* DAST & SUNTIK */}
                                    {(result.dast.diisi || result.suntik.peringatan) && (
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {result.dast.diisi && (
                                                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                                                    <h3 className="font-bold text-slate-800 mb-2">Masalah Pemakaian (DAST)</h3>
                                                    <div className="flex items-end gap-3 mt-4">
                                                        <span className="text-3xl font-black text-slate-900">{result.dast.total}</span>
                                                        <span className="text-sm font-medium text-slate-500 mb-1">dari 10 indikator</span>
                                                    </div>
                                                    <div className="mt-2 text-sm font-semibold text-slate-700">
                                                        Tingkat: <span className="text-kipan-navy">{result.dast.tingkat}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {result.suntik.peringatan && (
                                                <div className="rounded-2xl border border-red-200 bg-red-50 shadow-sm p-5">
                                                    <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                                        <ExclamationTriangleIcon className="h-5 w-5" />
                                                        Peringatan Pemakaian Suntik
                                                    </h3>
                                                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                                                        {result.suntik.peringatan === 'SUNTIK_AKTIF' 
                                                            ? 'Anda berisiko tinggi terkena infeksi seperti HIV atau Hepatitis. Segera cari layanan kesehatan sukarela terdekat.'
                                                            : 'Meskipun bukan dalam 3 bulan terakhir, riwayat pemakaian suntik berisiko meninggalkan dampak kesehatan jangka panjang. Pertimbangkan tes kesehatan sukarela.'}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* SARAN TINDAK LANJUT */}
                                    <div className="rounded-2xl border border-blue-200 bg-blue-50 shadow-sm p-6 mt-8">
                                        <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                                            <HeartIcon className="h-5 w-5" />
                                            Saran Tindak Lanjut
                                        </h3>
                                        
                                        {result.klasifikasi === 'MASIH_AMAN_RENDAH' && (
                                            <div className="text-sm text-blue-800 space-y-3 leading-relaxed">
                                                <p>Terima kasih atas kejujuran Anda. Pertahankan gaya hidup sehat Anda!</p>
                                                <p>Silakan pelajari lebih lanjut mengenai cara melindungi diri dan orang sekitar dari bahaya penyalahgunaan narkoba di menu Materi kami.</p>
                                            </div>
                                        )}

                                        {result.klasifikasi === 'RISIKO_SEDANG' && (
                                            <div className="text-sm text-blue-800 space-y-3 leading-relaxed">
                                                <p>Tingkat pemakaian Anda sudah mulai menimbulkan risiko kesehatan atau masalah lain dalam hidup Anda.</p>
                                                <p>Sangat disarankan agar Anda mulai mengurangi pemakaian atau mencari dukungan dari konselor, guru BK, atau Puskesmas terdekat sebelum masalah menjadi lebih berat.</p>
                                            </div>
                                        )}

                                        {result.klasifikasi === 'RISIKO_TINGGI' && (
                                            <div className="text-sm text-blue-800 space-y-3 leading-relaxed font-medium">
                                                <p>Hasil ini mengindikasikan kemungkinan adanya ketergantungan yang memerlukan perhatian serius.</p>
                                                <p>Jangan ragu untuk mencari bantuan profesional. Proses pemulihan sangat mungkin dilakukan jika Anda segera mendapatkan penanganan yang tepat (misalnya di IPWL atau klinik BNN).</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl mt-4">
                                        <p className="text-xs text-slate-500 text-center leading-relaxed">
                                            <strong>Penafian:</strong> Hasil skrining ini bersifat indikatif, <strong>bukan diagnosis medis</strong>, dan bukan vonis hukum. Hasil ini tidak tersimpan di akun Anda dan tidak dapat dipanggil ulang. <strong>Mohon simpan/cuplik layar (screenshot) halaman ini</strong> jika Anda ingin menyimpannya.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )}
                        
                        {/* ================= BUTTON CONTROLS ================= */}
                        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                            {step > 1 && step < 7 ? (
                                <button 
                                    onClick={prevStep}
                                    className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200"
                                >
                                    <ArrowLeftIcon className="h-4 w-4" />
                                    Kembali
                                </button>
                            ) : (
                                <div>
                                    {step === 1 && (
                                        <Link href="/monitoring" className="text-sm font-medium text-slate-500 hover:text-slate-800">
                                            Batal
                                        </Link>
                                    )}
                                </div>
                            )}

                            {step === 1 && (
                                <button 
                                    onClick={nextStep}
                                    disabled={!isStep1Valid}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-colors ${isStep1Valid ? 'bg-kipan-navy text-white hover:bg-[#061C33]' : 'cursor-not-allowed bg-slate-200 text-slate-400'}`}
                                >
                                    Mulai Kuesioner
                                    <ArrowRightIcon className="h-4 w-4" />
                                </button>
                            )}

                            {step === 2 && (
                                <button 
                                    onClick={nextStep}
                                    disabled={!isStep2Valid}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-colors ${isStep2Valid ? 'bg-kipan-navy text-white hover:bg-[#061C33]' : 'cursor-not-allowed bg-slate-200 text-slate-400'}`}
                                >
                                    Lanjutkan
                                    <ArrowRightIcon className="h-4 w-4" />
                                </button>
                            )}

                            {step === 3 && (
                                <button 
                                    onClick={nextStep}
                                    disabled={!isStep3Valid || isSubmitting}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-colors ${isStep3Valid ? 'bg-kipan-navy text-white hover:bg-[#061C33]' : 'cursor-not-allowed bg-slate-200 text-slate-400'}`}
                                >
                                    {isSubmitting ? 'Memproses...' : (activeSubstances.length > 0 ? 'Lanjutkan' : 'Lihat Hasil')}
                                    {!isSubmitting && <ArrowRightIcon className="h-4 w-4" />}
                                </button>
                            )}

                            {step === 4 && (
                                <button 
                                    onClick={nextStep}
                                    disabled={!isStep4Valid}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-colors ${isStep4Valid ? 'bg-kipan-navy text-white hover:bg-[#061C33]' : 'cursor-not-allowed bg-slate-200 text-slate-400'}`}
                                >
                                    Lanjutkan
                                    <ArrowRightIcon className="h-4 w-4" />
                                </button>
                            )}

                            {step === 5 && (
                                <button 
                                    onClick={nextStep}
                                    disabled={!isStep5Valid}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-colors ${isStep5Valid ? 'bg-kipan-navy text-white hover:bg-[#061C33]' : 'cursor-not-allowed bg-slate-200 text-slate-400'}`}
                                >
                                    Lanjutkan
                                    <ArrowRightIcon className="h-4 w-4" />
                                </button>
                            )}

                            {step === 6 && (
                                <button 
                                    onClick={nextStep}
                                    disabled={!isStep6Valid || isSubmitting}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-colors ${isStep6Valid ? 'bg-kipan-navy text-white hover:bg-[#061C33]' : 'cursor-not-allowed bg-slate-200 text-slate-400'}`}
                                >
                                    {isSubmitting ? 'Menghitung Hasil...' : 'Kirim Kuesioner & Lihat Hasil'}
                                    {!isSubmitting && <ArrowRightIcon className="h-4 w-4" />}
                                </button>
                            )}

                            {step === 7 && (
                                <button 
                                    onClick={() => window.location.reload()}
                                    className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors"
                                >
                                    Isi Ulang Kuesioner
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
