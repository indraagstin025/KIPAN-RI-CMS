<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

// Rute Halaman Khusus Mandiri (Terpisah dari Beranda)
Route::get('/tentang', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Profil & Tentang KIPAN RI',
        'subtitle' => 'Sejarah, dasar hukum UU No. 40/2009 & Inpres No. 2/2020, visi misi, serta struktur kepengurusan nasional.',
        'category' => 'Tentang Kami',
    ]);
})->name('about');

Route::get('/tentang/fokus', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Fokus Strategis & 4 Pilar Gerakan',
        'subtitle' => 'Pilar pencegahan, kaderisasi, advokasi sebaya, dan penyaluran minat bakat pemuda bersih narkoba.',
        'category' => 'Tentang Kami',
    ]);
})->name('about.focus');

Route::get('/tentang/tokoh', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Pimpinan & Tokoh Penggerak KIPAN RI',
        'subtitle' => 'Dewan pembina Kemenpora RI, BNN RI, dan pengurus pimpinan pusat serta koordinator wilayah.',
        'category' => 'Tentang Kami',
    ]);
})->name('about.leaders');

Route::get('/tentang/jejaring', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Jejaring Pengurus 38 Provinsi',
        'subtitle' => 'Sebaran koordinator daerah dan cabang kabupaten/kota di seluruh pelosok Indonesia.',
        'category' => 'Tentang Kami',
    ]);
})->name('about.network');

Route::get('/program', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Program Unggulan & Aksi Kepemudaan',
        'subtitle' => 'Pelatihan kader inti, workshop deteksi dini, advokasi regulasi P4GN, dan pemberdayaan wirausaha muda.',
        'category' => 'Program & Aksi',
    ]);
})->name('programs');

Route::get('/agenda', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Agenda & Kalender Kegiatan Nasional',
        'subtitle' => 'Jadwal pelatihan nasional, jambore pemuda, sosialisasi sekolah/kampus, dan rapat koordinasi.',
        'category' => 'Program & Aksi',
    ]);
})->name('agenda');

Route::get('/kampanye', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Kampanye Nasional P4GN Pemuda',
        'subtitle' => 'Gerakan Hidup Sehat, Berkarya Hebat, Tanpa Narkoba menuju Indonesia Emas 2045.',
        'category' => 'Program & Aksi',
    ]);
})->name('campaign');

Route::get('/berita', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Kabar & Berita Aksi Daerah',
        'subtitle' => 'Publikasi dan liputan aksi nyata kader KIPAN di berbagai provinsi dan kabupaten/kota.',
        'category' => 'Publikasi',
    ]);
})->name('news');

Route::get('/galeri', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Galeri Dokumentasi Aksi Pemuda',
        'subtitle' => 'Dokumentasi foto dan video kegiatan kaderisasi, aksi lapangan, dan kolaborasi positif pemuda.',
        'category' => 'Publikasi',
    ]);
})->name('gallery');

Route::get('/mitra', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Mitra & Pemangku Kepentingan',
        'subtitle' => 'Sinergi strategis bersama Kemenpora RI, BNN RI, dinas pemuda daerah, sekolah, dan kampus.',
        'category' => 'Publikasi',
    ]);
})->name('partners');

Route::get('/kontak', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Hubungi Sekretariat & Pendaftaran Kader',
        'subtitle' => 'Layanan informasi resmi, pendaftaran kader baru, dan kemitraan kolaborasi pemuda anti narkoba.',
        'category' => 'Kontak',
    ]);
})->name('contact');
