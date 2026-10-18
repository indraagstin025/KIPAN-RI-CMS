<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MateriController extends Controller
{
    /**
     * Master Google Drive folder containing all official KIPAN educational materials.
     */
    private const MASTER_DRIVE_URL = 'https://drive.google.com/drive/folders/1KIPAN-Pusat-Materi-Edukasi-AntiNarkoba-Nasional';

    /**
     * Structured collection of P4GN educational modules and handbooks.
     *
     * @var array<int, array<string, mixed>>
     */
    private array $materiList = [
        [
            'id' => 1,
            'title' => 'Buku Panduan Kader Inti Pemuda Anti Narkoba (KIPAN) Nasional',
            'category' => 'Panduan Kader',
            'format' => 'Buku Panduan (PDF)',
            'size' => '148 Halaman • 18.4 MB',
            'description' => 'Pedoman komprehensif bagi kader KIPAN di seluruh Indonesia memuat nilai dasar organisasi, etika penggerak pemuda, teknik komunikasi publik, serta kurikulum aksi P4GN di akar rumput.',
            'image' => 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Panduan-Kader-Nasional',
            'updated_at' => 'Oktober 2026',
        ],
        [
            'id' => 2,
            'title' => 'Modul Training of Trainers (TOT) Fasilitator P4GN Pemuda',
            'category' => 'Modul Pelatihan',
            'format' => 'Modul TOT (PDF)',
            'size' => '92 Halaman • 12.1 MB',
            'description' => 'Panduan instruktur dan fasilitator pelatihan kepemudaan. Berisi metode pengajaran interaktif, simulasi studi kasus penyalahgunaan narkotika, dan teknik manajemen forum diskusi pemuda.',
            'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Modul-TOT-Fasilitator',
            'updated_at' => 'Oktober 2026',
        ],
        [
            'id' => 3,
            'title' => 'Kompilasi Regulasi & Aspek Hukum P4GN (UU No. 35/2009 & Inpres)',
            'category' => 'Regulasi & Hukum',
            'format' => 'Buku Regulasi (PDF)',
            'size' => '115 Halaman • 9.8 MB',
            'description' => 'Rangkuman landasan yuridis Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika, Inpres No. 2/2020, serta perlindungan hukum bagi pelapor dan pecandu yang melapor sukarela.',
            'image' => 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Regulasi-Hukum-P4GN',
            'updated_at' => 'September 2026',
        ],
        [
            'id' => 4,
            'title' => 'Buku Saku Konseling Sebaya (Peer Counselor) Remaja & Pelajar',
            'category' => 'Penyuluhan & Kampanye',
            'format' => 'Buku Saku (PDF)',
            'size' => '64 Halaman • 6.5 MB',
            'description' => 'Teknik mendengarkan aktif (active listening), deteksi dini perubahan perilaku teman sebaya, serta panduan mendampingi remaja yang rentan terhadap tekanan pergaulan bebas dan zat adiktif.',
            'image' => 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Buku-Saku-Konseling-Sebaya',
            'updated_at' => 'September 2026',
        ],
        [
            'id' => 5,
            'title' => 'Bahan Tayang & Slide Presentasi Sosialisasi Narkoba Golongan I, II, III',
            'category' => 'Penyuluhan & Kampanye',
            'format' => 'Slide Presentasi (PPT/PDF)',
            'size' => '58 Slide • 24.0 MB',
            'description' => 'Materi visual siap tayang untuk sosialisasi di sekolah, universitas, dan karang taruna. Mengulas dampak farmakologis narkotika, zat psikoaktif baru (NPS), dan studi kasus nyata.',
            'image' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Slide-Sosialisasi-Bahaya-Narkoba',
            'updated_at' => 'Agustus 2026',
        ],
        [
            'id' => 6,
            'title' => 'Pedoman Pembentukan & Penguatan Desa / Kelurahan Bersinar (Bersih Narkoba)',
            'category' => 'Panduan Lapangan',
            'format' => 'Buku Panduan (PDF)',
            'size' => '80 Halaman • 10.7 MB',
            'description' => 'Langkah-langkah strategis bagi relawan pemuda dalam menginisiasi posko informasi warga, pemetaan kawasan rawan, dan penguatan ketahanan keluarga berbasis kearifan lokal.',
            'image' => 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Desa-Bersinar',
            'updated_at' => 'Agustus 2026',
        ],
        [
            'id' => 7,
            'title' => 'Alur Rujukan Layanan Rehabilitasi Medis & Sosial BNN RI',
            'category' => 'Rehabilitasi & Medis',
            'format' => 'SOP & Infografis (PDF)',
            'size' => '36 Halaman • 5.2 MB',
            'description' => 'Panduan tata cara permohonan asesmen terpadu, mekanisme IPWL (Institusi Penerima Wajib Lapor), pembiayaan, serta jaminan kerahasiaan bagi korban penyalahgunaan zat.',
            'image' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Alur-Rehabilitasi-BNN',
            'updated_at' => 'Juli 2026',
        ],
        [
            'id' => 8,
            'title' => 'Paket Toolkit Kampanye Digital & Desain Konten Media Sosial Anti Narkoba',
            'category' => 'Toolkit Advokasi',
            'format' => 'Toolkit & Asset (ZIP/Drive)',
            'size' => '120+ Asset • 85.0 MB',
            'description' => 'Template poster grafis, aset visual vector, banner twibbon, dan copy konten kampanye kreatif untuk platform Instagram, TikTok, dan YouTube guna menyasar Generasi Z.',
            'image' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
            'drive_url' => 'https://drive.google.com/drive/folders/1KIPAN-Toolkit-Kampanye-Digital',
            'updated_at' => 'Oktober 2026',
        ],
    ];

    /**
     * Display the public educational materials index page.
     */
    public function index(Request $request): Response
    {
        $search = strtolower(trim((string) $request->input('search', '')));
        $category = trim((string) $request->input('category', ''));

        $filtered = array_values(array_filter($this->materiList, function ($item) use ($search, $category) {
            $matchesCategory = empty($category) || $category === 'Semua' || strcasecmp($item['category'], $category) === 0;

            $matchesSearch = empty($search)
                || str_contains(strtolower($item['title']), $search)
                || str_contains(strtolower($item['description']), $search)
                || str_contains(strtolower($item['category']), $search);

            return $matchesCategory && $matchesSearch;
        }));

        $categories = array_values(array_unique(array_map(fn ($item) => $item['category'], $this->materiList)));

        return Inertia::render('Materi/Index', [
            'title' => 'Pusat Materi & Modul Edukasi Anti Narkoba',
            'subtitle' => 'Kumpulan modul pelatihan, materi penyuluhan bahaya narkotika, regulasi hukum, dan panduan kader pemuda.',
            'category' => 'Materi',
            'materi' => $filtered,
            'categories' => $categories,
            'activeCategory' => $category,
            'search' => $search,
            'masterDriveUrl' => self::MASTER_DRIVE_URL,
            'totalCount' => count($this->materiList),
        ]);
    }
}
