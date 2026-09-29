export interface LeafletMap {
    remove: () => void;
    flyTo: (
        center: [number, number],
        zoom: number,
        options?: { duration?: number },
    ) => void;
    invalidateSize: () => void;
    getZoom: () => number;
}

export interface LeafletGlobal {
    map: (el: HTMLElement, options: Record<string, unknown>) => LeafletMap;
    control: {
        zoom: (options: { position: string }) => {
            addTo: (map: LeafletMap) => void;
        };
    };
    tileLayer: (
        url: string,
        options: Record<string, unknown>,
    ) => { addTo: (map: LeafletMap) => void };
    divIcon: (options: Record<string, unknown>) => unknown;
    marker: (
        coords: [number, number],
        options: Record<string, unknown>,
    ) => {
        addTo: (map: LeafletMap) => {
            on: (event: string, handler: () => void) => void;
        };
    };
}

declare global {
    interface Window {
        L?: LeafletGlobal;
    }
}

export interface RegionPoint {
    readonly id: string;
    readonly name: string;
    readonly island: string;
    readonly coords: readonly [number, number];
    readonly cadres: string;
    readonly satgas: string;
    readonly status: string;
}

export interface IslandGroup {
    readonly label: string;
    readonly center: readonly [number, number];
    readonly zoom: number;
}

export const REGION_POINTS: readonly RegionPoint[] = [
    {
        id: 'aceh',
        name: 'Banda Aceh, Aceh',
        island: 'Sumatera',
        coords: [5.5483, 95.3238],
        cadres: '1.250 Kader',
        satgas: '23 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'medan',
        name: 'Medan, Sumatera Utara',
        island: 'Sumatera',
        coords: [3.5952, 98.6722],
        cadres: '3.400 Kader',
        satgas: '33 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'padang',
        name: 'Padang, Sumatera Barat',
        island: 'Sumatera',
        coords: [-0.9471, 100.4172],
        cadres: '1.800 Kader',
        satgas: '19 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'pekanbaru',
        name: 'Pekanbaru, Riau',
        island: 'Sumatera',
        coords: [0.5071, 101.4478],
        cadres: '1.600 Kader',
        satgas: '12 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'palembang',
        name: 'Palembang, Sumsel',
        island: 'Sumatera',
        coords: [-2.9761, 104.7754],
        cadres: '2.100 Kader',
        satgas: '17 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'lampung',
        name: 'Bandar Lampung, Lampung',
        island: 'Sumatera',
        coords: [-5.4297, 105.2625],
        cadres: '1.750 Kader',
        satgas: '15 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'jakarta',
        name: 'DKI Jakarta (Sekretariat Nasional)',
        island: 'Jawa & Bali',
        coords: [-6.2088, 106.8456],
        cadres: '4.800 Kader',
        satgas: '6 Wilayah',
        status: 'Pusat Komando',
    },
    {
        id: 'bandung',
        name: 'Bandung, Jawa Barat',
        island: 'Jawa & Bali',
        coords: [-6.9175, 107.6191],
        cadres: '6.200 Kader',
        satgas: '27 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'semarang',
        name: 'Semarang, Jawa Tengah',
        island: 'Jawa & Bali',
        coords: [-6.9667, 110.4167],
        cadres: '5.100 Kader',
        satgas: '35 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'jogja',
        name: 'DI Yogyakarta',
        island: 'Jawa & Bali',
        coords: [-7.7956, 110.3695],
        cadres: '2.200 Kader',
        satgas: '5 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'surabaya',
        name: 'Surabaya, Jawa Timur',
        island: 'Jawa & Bali',
        coords: [-7.2575, 112.7521],
        cadres: '5.900 Kader',
        satgas: '38 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'serang',
        name: 'Serang, Banten',
        island: 'Jawa & Bali',
        coords: [-6.1104, 106.164],
        cadres: '1.950 Kader',
        satgas: '8 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'denpasar',
        name: 'Denpasar, Bali',
        island: 'Jawa & Bali',
        coords: [-8.6705, 115.2126],
        cadres: '1.400 Kader',
        satgas: '9 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'mataram',
        name: 'Mataram, NTB',
        island: 'Nusa Tenggara',
        coords: [-8.5833, 116.1167],
        cadres: '1.150 Kader',
        satgas: '10 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'kupang',
        name: 'Kupang, NTT',
        island: 'Nusa Tenggara',
        coords: [-10.1772, 123.607],
        cadres: '1.300 Kader',
        satgas: '22 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'pontianak',
        name: 'Pontianak, Kalbar',
        island: 'Kalimantan',
        coords: [-0.0263, 109.3425],
        cadres: '1.500 Kader',
        satgas: '14 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'banjarmasin',
        name: 'Banjarmasin, Kalsel',
        island: 'Kalimantan',
        coords: [-3.3194, 114.5908],
        cadres: '1.650 Kader',
        satgas: '13 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'samarinda',
        name: 'Samarinda, Kaltim',
        island: 'Kalimantan',
        coords: [-0.5022, 117.1537],
        cadres: '1.850 Kader',
        satgas: '10 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'makassar',
        name: 'Makassar, Sulsel',
        island: 'Sulawesi',
        coords: [-5.1477, 119.4327],
        cadres: '2.800 Kader',
        satgas: '24 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'manado',
        name: 'Manado, Sulut',
        island: 'Sulawesi',
        coords: [1.4748, 124.8421],
        cadres: '1.450 Kader',
        satgas: '15 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'ambon',
        name: 'Ambon, Maluku',
        island: 'Maluku & Papua',
        coords: [-3.6554, 128.1906],
        cadres: '950 Kader',
        satgas: '11 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
    {
        id: 'jayapura',
        name: 'Jayapura, Papua',
        island: 'Maluku & Papua',
        coords: [-2.5337, 140.7181],
        cadres: '1.350 Kader',
        satgas: '9 Kab/Kota',
        status: 'Aktif Terkoordinasi',
    },
];

export const ISLAND_GROUPS: readonly IslandGroup[] = [
    { label: 'Semua', center: [-1.8, 118.5], zoom: 5 },
    { label: 'Sumatera', center: [-0.5, 102.0], zoom: 6 },
    {
        label: 'Jawa & Bali',
        center: [-7.2, 110.5],
        zoom: 7,
    },
    { label: 'Kalimantan', center: [-1.5, 114.5], zoom: 6 },
    { label: 'Sulawesi', center: [-2.5, 121.0], zoom: 6 },
    {
        label: 'Nusa Tenggara',
        center: [-8.8, 119.5],
        zoom: 7,
    },
    {
        label: 'Maluku & Papua',
        center: [-3.5, 135.0],
        zoom: 6,
    },
];
