export interface PartnerInstitution {
    id: string;
    shortName: string;
    fullName: string;
    roleTag: string;
    level: 'Pusat' | 'Daerah';
    emblemType:
        | 'kemenpora'
        | 'bnn'
        | 'pmk'
        | 'dispora'
        | 'bnnp'
        | 'bakesbangpol'
        | 'pemda';
}

export const SUPPORTING_INSTITUTIONS: PartnerInstitution[] = [
    {
        id: 'kemenpora',
        shortName: 'KEMENPORA RI',
        fullName: 'Kementerian Pemuda dan Olahraga',
        roleTag: 'Penggagas & Penanggung Jawab',
        level: 'Pusat',
        emblemType: 'kemenpora',
    },
    {
        id: 'bnn',
        shortName: 'BNN RI',
        fullName: 'Badan Narkotika Nasional',
        roleTag: 'Pembina Teknis P4GN',
        level: 'Pusat',
        emblemType: 'bnn',
    },
    {
        id: 'pmk',
        shortName: 'KEMENKO PMK',
        fullName: 'Kemenko Pembangunan Manusia & Kebudayaan',
        roleTag: 'Koordinator Nasional',
        level: 'Pusat',
        emblemType: 'pmk',
    },
    {
        id: 'dispora',
        shortName: 'DISPORA DAERAH',
        fullName: 'Dinas Pemuda & Olahraga 38 Provinsi',
        roleTag: 'Pembina Wilayah Daerah',
        level: 'Daerah',
        emblemType: 'dispora',
    },
    {
        id: 'bnnp',
        shortName: 'BNNP / BNNK',
        fullName: 'BNN Provinsi & Kabupaten/Kota',
        roleTag: 'Pengawas Teknis Lapangan',
        level: 'Daerah',
        emblemType: 'bnnp',
    },
    {
        id: 'bakesbangpol',
        shortName: 'BAKESBANGPOL',
        fullName: 'Badan Kesatuan Bangsa dan Politik',
        roleTag: 'Ketahanan Ideologi & Ormas',
        level: 'Daerah',
        emblemType: 'bakesbangpol',
    },
    {
        id: 'pemda',
        shortName: 'PEMERINTAH DAERAH',
        fullName: 'Pemprov & Pemkab / Pemkot',
        roleTag: 'Fasilitator Wilayah',
        level: 'Daerah',
        emblemType: 'pemda',
    },
];

export const MARQUEE_ITEMS: PartnerInstitution[] = [
    ...SUPPORTING_INSTITUTIONS,
    ...SUPPORTING_INSTITUTIONS,
    ...SUPPORTING_INSTITUTIONS,
];
