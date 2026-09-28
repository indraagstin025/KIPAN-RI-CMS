<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

// Rute Halaman Publik Utama (6 Halaman Terpadu)
Route::get('/tentang', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/program', function () {
    return Inertia::render('Program', [
        'title' => 'Program & Aksi Kepemudaan',
        'subtitle' => 'Pelatihan kader inti pemuda, workshop deteksi dini P4GN, advokasi sebaya, wirausaha kreatif, dan agenda kegiatan nasional.',
        'category' => 'Program & Aksi',
    ]);
})->name('programs');

Route::get('/agenda', function () {
    return Inertia::render('Agenda', [
        'title' => 'Agenda & Kalender Kegiatan Nasional',
        'subtitle' => 'Jadwal pelatihan nasional, jambore pemuda bersinar, sosialisasi sekolah/kampus, dan kalender aksi P4GN di 38 provinsi.',
        'category' => 'Agenda',
    ]);
})->name('agenda');

Route::get('/berita', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Berita & Kabar Aksi Daerah',
        'subtitle' => 'Publikasi, siaran pers, dan liputan aksi nyata kader KIPAN di berbagai provinsi dan kabupaten/kota seluruh Indonesia.',
        'category' => 'Berita',
    ]);
})->name('news');

Route::get('/galeri', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Galeri Dokumentasi Pemuda',
        'subtitle' => 'Dokumentasi foto dan video kegiatan kaderisasi, aksi lapangan, jambore pemuda, dan kolaborasi positif pemuda anti narkoba.',
        'category' => 'Galeri',
    ]);
})->name('gallery');

Route::get('/kontak', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Hubungi Sekretariat & Pendaftaran Kader',
        'subtitle' => 'Layanan informasi resmi, konsultasi sebaya, pendaftaran kader baru, dan kemitraan kolaborasi pemuda anti narkoba.',
        'category' => 'Kontak',
    ]);
})->name('contact');

// Redirect Ramah Kompatibilitas Tautan Sub-Menu Lama
Route::redirect('/tentang/fokus', '/tentang');
Route::redirect('/tentang/tokoh', '/tentang#tokoh');
Route::redirect('/tentang/jejaring', '/tentang#jejaring');
Route::redirect('/kampanye', '/program');
Route::redirect('/mitra', '/#mitra');

