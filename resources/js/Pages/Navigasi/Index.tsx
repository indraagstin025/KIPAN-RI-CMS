import React, { useState } from 'react';
import LandingLayout from '@/Layouts/LandingLayout';
import { 
    getProvinceTotalCases,
    getProvinceTotalArrests,
    getProvinceData,
    getMaxTotalCases,
    summaryData,
    barangBuktiData,
    kasusPerTahun
} from '@/data/narkotika-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import ScrollReveal from '@/Components/Layout/ScrollReveal';
import { MapContainer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geojsonData from '@/data/indonesia-prov.json';

const geojsonToNarkotikaKey: Record<string, string> = {
    'DI. ACEH': 'Aceh',
    'BANGKA BELITUNG': 'Kepulauan Bangka Belitung',
    'BALI': 'Bali',
    'PROBANTEN': 'Banten',
    'BENGKULU': 'Bengkulu',
    'DKI JAKARTA': 'DKI Jakarta',
    'GORONTALO': 'Gorontalo',
    'JAWA BARAT': 'Jawa Barat',
    'JAMBI': 'Jambi',
    'JAWA TENGAH': 'Jawa Tengah',
    'JAWA TIMUR': 'Jawa Timur',
    'KALIMANTAN BARAT': 'Kalimantan Barat',
    'KALIMANTAN SELATAN': 'Kalimantan Selatan',
    'KALIMANTAN TENGAH': 'Kalimantan Tengah',
    'KALIMANTAN TIMUR': 'Kalimantan Timur',
    'LAMPUNG': 'Lampung',
    'MALUKU': 'Maluku',
    'MALUKU UTARA': 'Maluku Utara',
    'NUSATENGGARA BARAT': 'Nusa Tenggara Barat',
    'NUSA TENGGARA TIMUR': 'Nusa Tenggara Timur',
    'IRIAN JAYA BARAT': 'Papua Barat',
    'IRIAN JAYA TIMUR': 'Papua',
    'IRIAN JAYA TENGAH': 'Papua',
    'RIAU': 'Riau',
    'SULAWESI SELATAN': 'Sulawesi Selatan',
    'SULAWESI TENGAH': 'Sulawesi Tengah',
    'SULAWESI TENGGARA': 'Sulawesi Tenggara',
    'SULAWESI UTARA': 'Sulawesi Utara',
    'SUMATERA BARAT': 'Sumatera Barat',
    'SUMATERA SELATAN': 'Sumatera Selatan',
    'SUMATERA UTARA': 'Sumatera Utara',
    'DAERAH ISTIMEWA YOGYAKARTA': 'DI Yogyakarta',
};

const tppuData = [
  { year: 2009, kasus: 0, tersangka: 0 },
  { year: 2010, kasus: 0, tersangka: 0 },
  { year: 2011, kasus: 11, tersangka: 23 },
  { year: 2012, kasus: 15, tersangka: 17 },
  { year: 2013, kasus: 15, tersangka: 15 },
  { year: 2014, kasus: 11, tersangka: 12 },
  { year: 2015, kasus: 15, tersangka: 17 },
  { year: 2016, kasus: 21, tersangka: 31 },
  { year: 2017, kasus: 21, tersangka: 31 },
  { year: 2018, kasus: 31, tersangka: 41 },
  { year: 2019, kasus: 45, tersangka: 45 },
  { year: 2020, kasus: 25, tersangka: 25 },
  { year: 2021, kasus: 14, tersangka: 16 },
  { year: 2022, kasus: 17, tersangka: 20 },
  { year: 2023, kasus: 21, tersangka: null },
  { year: 2024, kasus: 13, tersangka: null }
];

const asetData = [
  { year: 2009, aset: 0 },
  { year: 2010, aset: 0 },
  { year: 2011, aset: 0 },
  { year: 2012, aset: 31006622713 },
  { year: 2013, aset: 49466421122 },
  { year: 2014, aset: 85005509514 },
  { year: 2015, aset: 84407282171 },
  { year: 2016, aset: 261863413345 },
  { year: 2017, aset: 105077573395 },
  { year: 2018, aset: 142444956282 },
  { year: 2019, aset: 138221289439 },
  { year: 2020, aset: 87085839046 },
  { year: 2021, aset: 108853280961 },
  { year: 2022, aset: 33822009388 }
];

export default function NavigasiPage() {
    const [selectedProvince, setSelectedProvince] = useState<any>(null);
    const [popupPos, setPopupPos] = useState<any>(null);
    const [showTppuModal, setShowTppuModal] = useState(false);

    const styleFunc = (feature: any) => {
        const propinsi = feature.properties.Propinsi;
        const key = geojsonToNarkotikaKey[propinsi];
        const cases = key ? getProvinceTotalCases(key) : 0;
        const maxCases = getMaxTotalCases();
        
        let fillColor = '#dbeafe'; // blue-100
        if (cases > maxCases * 0.8) fillColor = '#1e3a8a'; // blue-900
        else if (cases > maxCases * 0.6) fillColor = '#1d4ed8'; // blue-700
        else if (cases > maxCases * 0.4) fillColor = '#2563eb'; // blue-600
        else if (cases > maxCases * 0.2) fillColor = '#60a5fa'; // blue-400
        else if (cases > 0) fillColor = '#bfdbfe'; // blue-200

        return {
            fillColor: fillColor,
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 1
        };
    };

    const onEachFeature = (feature: any, layer: any) => {
        layer.on({
            click: (e: any) => {
                const propinsi = feature.properties.Propinsi;
                const key = geojsonToNarkotikaKey[propinsi];
                
                if (key) {
                    const yearlyData = getProvinceData(key);
                    const cases = getProvinceTotalCases(key);
                    const tersangka = getProvinceTotalArrests(key);
                    
                    setSelectedProvince({ kasus: cases, tersangka: tersangka, propinsi: key, label: key, yearlyData });
                    setPopupPos(e.latlng);
                }
            },
            mouseover: (e: any) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 2,
                    color: '#64748b',
                    fillOpacity: 0.8,
                });
            },
            mouseout: (e: any) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 1,
                    color: 'white',
                    fillOpacity: 1,
                });
            }
        });
    };

    return (
        <LandingLayout title="Navigasi Sebaran Narkotika — KIPAN" className="bg-slate-50">
            {/* Hero Section */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061C33] via-[#0D3F70] to-[#0A3055] pb-14 pt-24 text-white sm:pb-16 sm:pt-28 lg:pt-32">
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-100">
                        <span className="h-2 w-2 rounded-full bg-kipan-yellow" />
                        Peta Data Nasional
                    </div>
                    <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl">
                        Dashboard Navigasi & Sebaran Narkotika
                    </h1>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-[1400px]">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        {/* LEFT COLUMN: Summary & Table */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {/* Summary Cards */}
                            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                <div className="bg-[#0B2545] py-3 text-center">
                                    <h3 className="text-sm font-bold text-white tracking-wide">Penanganan Kasus Narkotika</h3>
                                </div>
                                <div className="py-6 text-center bg-blue-50/50">
                                    <p className="text-4xl font-black text-amber-500">{summaryData.totalKasus}</p>
                                </div>
                            </div>
                            
                            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                <div className="bg-[#0B2545] py-3 text-center">
                                    <h3 className="text-sm font-bold text-white tracking-wide">Barang Bukti Aset (Dalam Rupiah)</h3>
                                </div>
                                <div className="py-6 text-center">
                                    <p 
                                        className="text-xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
                                        onClick={() => setShowTppuModal(true)}
                                    >
                                        {summaryData.totalAset}
                                    </p>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex-grow flex flex-col">
                                <div className="bg-[#0B2545] py-3 text-center">
                                    <h3 className="text-sm font-bold text-white tracking-wide">Barang Bukti Narkotika</h3>
                                </div>
                                <div className="overflow-y-auto max-h-[500px]">
                                    <table className="w-full text-left text-xs text-slate-600">
                                        <thead className="bg-slate-50 sticky top-0 z-10 shadow-sm">
                                            <tr>
                                                <th className="px-3 py-3 font-semibold border-b border-slate-200 w-10">No</th>
                                                <th className="px-3 py-3 font-semibold border-b border-slate-200">Sitaan / Seizures</th>
                                                <th className="px-3 py-3 font-semibold border-b border-slate-200 text-right">Total</th>
                                                <th className="px-3 py-3 font-semibold border-b border-slate-200">Satuan</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {barangBuktiData.map((item) => (
                                                <tr key={item.no} className="hover:bg-slate-50">
                                                    <td className="px-3 py-2 border-r border-slate-100">{item.no}</td>
                                                    <td className="px-3 py-2 border-r border-slate-100 font-medium">{item.nama}</td>
                                                    <td className="px-3 py-2 border-r border-slate-100 text-right">{item.total}</td>
                                                    <td className="px-3 py-2">{item.satuan}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Chart & Map */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            
                            {/* Line Chart */}
                            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden h-[300px] flex flex-col">
                                <div className="bg-[#0B2545] py-3 text-center">
                                    <h3 className="text-sm font-bold text-white tracking-wide">Penanganan Kasus Narkotika per Tahun</h3>
                                </div>
                                <div className="flex-grow p-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            data={kasusPerTahun}
                                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                            <XAxis 
                                                dataKey="year" 
                                                angle={-90} 
                                                textAnchor="end" 
                                                tick={{ fill: '#64748b', fontSize: 11 }} 
                                                axisLine={{ stroke: '#cbd5e1' }}
                                                tickLine={false}
                                                dy={10}
                                            />
                                            <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                                            <RechartsTooltip 
                                                cursor={{ fill: '#f8fafc' }}
                                                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            />
                                            <Line 
                                                type="monotone" 
                                                dataKey="kasus" 
                                                stroke="#2563eb" 
                                                strokeWidth={2}
                                                dot={{ r: 3, fill: "#2563eb" }}
                                                activeDot={{ r: 5 }}
                                                label={{ position: 'top', fill: '#64748b', fontSize: 10, dy: -5 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden h-[500px] flex flex-col">
                                <div className="bg-[#0B2545] py-3 text-center">
                                    <h3 className="text-sm font-bold text-white tracking-wide">Sebaran Penanganan Kasus Narkotika per Wilayah Pelaksana</h3>
                                </div>
                                <div className="flex-grow relative z-0 bg-white">
                                    {/* Map Container */}
                                    <MapContainer 
                                        center={[-2.5, 118.0]} 
                                        zoom={5} 
                                        style={{ height: '100%', width: '100%', zIndex: 0, backgroundColor: 'white' }}
                                        scrollWheelZoom={false}
                                        zoomControl={false}
                                    >
                                        <GeoJSON 
                                            data={geojsonData as any} 
                                            style={styleFunc} 
                                            onEachFeature={onEachFeature} 
                                        />

                                        {selectedProvince && popupPos && (
                                            <Popup position={popupPos} autoPan={true}>
                                                <div className="w-[300px]">
                                                    <div className="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-2">
                                                        {selectedProvince.label}
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="text-xs text-slate-500">Total Cases:</div>
                                                        <div className="font-bold text-blue-600">{selectedProvince.kasus}</div>
                                                    </div>
                                                    
                                                    <div className="h-[150px] w-full">
                                                        <ResponsiveContainer width="100%" height="100%">
                                                            <LineChart data={selectedProvince.yearlyData}>
                                                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                                <XAxis dataKey="year" fontSize={8} tickLine={false} axisLine={false} />
                                                                <RechartsTooltip contentStyle={{ fontSize: '10px', padding: '4px' }} />
                                                                <Line type="monotone" dataKey="kasus" stroke="#2563eb" strokeWidth={2} dot={false} />
                                                            </LineChart>
                                                        </ResponsiveContainer>
                                                    </div>
                                                </div>
                                            </Popup>
                                        )}
                                    </MapContainer>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* TPPU Modal */}
            {showTppuModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="flex justify-between items-start p-6 border-b border-slate-100 bg-slate-50">
                            <div>
                                <h2 className="text-xl font-bold text-[#0B2545] tracking-wide">
                                    KASUS NARKOTIKA: TINDAK PIDANA PENCUCIAN UANG (TPPU)
                                </h2>
                                <p className="text-sm text-slate-500 mt-1">Drug-Related Money Laundering</p>
                            </div>
                            <button 
                                onClick={() => setShowTppuModal(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="p-6 overflow-y-auto">
                            <div className="mb-6 flex gap-2 items-center border-b border-slate-200 pb-4">
                                <span className="font-semibold text-slate-700">Total Asset Seized: </span>
                                <span className="font-bold text-slate-900">{summaryData.totalAset}</span>
                            </div>

                            <div className="h-[400px] w-full mt-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={tppuData} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis 
                                            dataKey="year" 
                                            tick={{ fill: '#64748b', fontSize: 11 }} 
                                            axisLine={{ stroke: '#cbd5e1' }}
                                            tickLine={false}
                                            dy={10}
                                        />
                                        <YAxis 
                                            yAxisId="left" 
                                            label={{ value: 'Total Cases', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, dy: 30 }} 
                                            tick={{ fill: '#64748b', fontSize: 11 }} 
                                            axisLine={false} 
                                            tickLine={false} 
                                        />
                                        <YAxis 
                                            yAxisId="right" 
                                            orientation="right" 
                                            label={{ value: 'Total Arrests', angle: 90, position: 'insideRight', fill: '#64748b', fontSize: 12, dy: 30 }} 
                                            tick={{ fill: '#64748b', fontSize: 11 }} 
                                            axisLine={false} 
                                            tickLine={false} 
                                        />
                                        
                                        <RechartsTooltip 
                                            cursor={{ fill: '#f8fafc' }}
                                            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        />
                                        
                                        <Line 
                                            yAxisId="left"
                                            type="monotone" 
                                            dataKey="kasus" 
                                            name="Total Cases"
                                            stroke="#e11d48" 
                                            strokeWidth={2}
                                            dot={{ r: 4, fill: "#e11d48" }}
                                            activeDot={{ r: 6 }}
                                            label={{ position: 'top', fill: '#64748b', fontSize: 10, dy: -5 }}
                                        />
                                        <Line 
                                            yAxisId="right"
                                            type="monotone" 
                                            dataKey="tersangka" 
                                            name="Total Arrests"
                                            stroke="#f97316" 
                                            strokeWidth={2}
                                            dot={{ r: 4, fill: "#f97316" }}
                                            activeDot={{ r: 6 }}
                                            label={{ position: 'bottom', fill: '#64748b', fontSize: 10, dy: 5 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 mb-4">Grafik Nilai Aset (Rupiah)</h3>
                                <div className="h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={asetData} margin={{ top: 20, right: 10, left: 20, bottom: 20 }}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                            <XAxis 
                                                dataKey="year" 
                                                tick={{ fill: '#64748b', fontSize: 11 }} 
                                                axisLine={{ stroke: '#cbd5e1' }}
                                                tickLine={false}
                                                dy={10}
                                            />
                                            <YAxis 
                                                tickFormatter={(value) => `Rp ${(value / 1000000000).toFixed(0)}M`}
                                                tick={{ fill: '#64748b', fontSize: 11 }} 
                                                axisLine={false} 
                                                tickLine={false} 
                                                width={80}
                                            />
                                            
                                            <RechartsTooltip 
                                                formatter={(value: any) => [`Rp ${new Intl.NumberFormat('id-ID').format(value)}`, 'Nilai Aset']}
                                                cursor={{ fill: '#f8fafc' }}
                                                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            />
                                            
                                            <Line 
                                                type="monotone" 
                                                dataKey="aset" 
                                                name="Nilai Aset"
                                                stroke="#10b981" 
                                                strokeWidth={2}
                                                dot={{ r: 4, fill: "#10b981" }}
                                                activeDot={{ r: 6 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </LandingLayout>
    );
}
