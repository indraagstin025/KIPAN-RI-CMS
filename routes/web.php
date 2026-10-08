<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\ProgramController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\ProgramPublicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Rute Halaman Publik Utama (6 Halaman Terpadu)
Route::get('/tentang', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/program', [ProgramPublicController::class, 'index'])->name('programs');
Route::get('/program/{slug}', [ProgramPublicController::class, 'show'])->name('programs.show');

Route::get('/agenda', [AgendaController::class, 'index'])->name('agenda');
Route::get('/agenda/{slug}', [AgendaController::class, 'show'])->name('agenda.show');

Route::get('/berita', [BeritaController::class, 'index'])->name('news');
Route::get('/berita/{slug}', [BeritaController::class, 'show'])->name('news.show');

Route::get('/galeri', [GaleriController::class, 'index'])->name('gallery');

Route::get('/kontak', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Hubungi Sekretariat & Pendaftaran Kader',
        'subtitle' => 'Layanan informasi resmi, konsultasi sebaya, pendaftaran kader baru, dan kemitraan kolaborasi pemuda anti narkoba.',
        'category' => 'Kontak',
    ]);
})->name('contact');

Route::get('/monitoring', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Monitoring Navigasi & Sebaran Wilayah KIPAN RI',
        'subtitle' => 'Dashboard pemantauan pergerakan kader, peta sebaran wilayah binaan, dan capaian aksi anti narkoba nasional.',
        'category' => 'Monitoring Navigasi',
    ]);
})->name('monitoring');

Route::get('/materi', function () {
    return Inertia::render('PlaceholderPage', [
        'title' => 'Pusat Materi & Modul Edukasi Anti Narkoba',
        'subtitle' => 'Kumpulan modul pelatihan, materi penyuluhan bahaya narkotika, regulasi hukum, dan panduan kader pemuda.',
        'category' => 'Materi',
    ]);
})->name('materi');

// Redirect Ramah Kompatibilitas Tautan Sub-Menu Lama
Route::redirect('/tentang/fokus', '/tentang');
Route::redirect('/tentang/tokoh', '/tentang#tokoh');
Route::redirect('/tentang/jejaring', '/tentang#jejaring');
Route::redirect('/kampanye', '/program');
Route::redirect('/mitra', '/#mitra');

// ============================================================
// Authentication Routes
// ============================================================
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
});

Route::post('/logout', [LoginController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

// ============================================================
// Admin CMS Routes
// Protected by auth middleware — all routes require login.
// Resource-level authorization is handled inside controllers
// via Policies and permission checks.
// ============================================================
Route::middleware(['auth'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        // Dashboard
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Profile
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'updateInfo'])->name('profile.update');
        Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.password');

        // News (Berita)
        Route::resource('news', NewsController::class)->except(['show']);
        Route::match(['patch', 'post'], 'news/{news}/publish', [NewsController::class, 'publish'])->name('news.publish');
        Route::match(['patch', 'post'], 'news/{news}/unpublish', [NewsController::class, 'unpublish'])->name('news.unpublish');
        Route::get('news/{news}/publish', fn () => redirect()->route('admin.news.index'));
        Route::get('news/{news}/unpublish', fn () => redirect()->route('admin.news.index'));

        // Events (Agenda)
        Route::resource('events', EventController::class)->except(['show']);
        Route::match(['patch', 'post'], 'events/{event}/publish', [EventController::class, 'publish'])->name('events.publish');
        Route::match(['patch', 'post'], 'events/{event}/unpublish', [EventController::class, 'unpublish'])->name('events.unpublish');
        Route::get('events/{event}/publish', fn () => redirect()->route('admin.events.index'));
        Route::get('events/{event}/unpublish', fn () => redirect()->route('admin.events.index'));

        // Programs
        Route::resource('programs', ProgramController::class)->except(['show']);
        Route::match(['patch', 'post'], 'programs/{program}/publish', [ProgramController::class, 'publish'])->name('programs.publish');
        Route::match(['patch', 'post'], 'programs/{program}/unpublish', [ProgramController::class, 'unpublish'])->name('programs.unpublish');
        Route::get('programs/{program}/publish', fn () => redirect()->route('admin.programs.index'));
        Route::get('programs/{program}/unpublish', fn () => redirect()->route('admin.programs.index'));

        // Gallery
        Route::resource('gallery', GalleryController::class)->except(['show']);
        Route::match(['patch', 'post'], 'gallery/{gallery}/publish', [GalleryController::class, 'publish'])->name('gallery.publish');
        Route::match(['patch', 'post'], 'gallery/{gallery}/unpublish', [GalleryController::class, 'unpublish'])->name('gallery.unpublish');
        Route::get('gallery/{gallery}/publish', fn () => redirect()->route('admin.gallery.index'));
        Route::get('gallery/{gallery}/unpublish', fn () => redirect()->route('admin.gallery.index'));

        // Media
        Route::resource('media', MediaController::class)->except(['show']);

        // Partners
        Route::resource('partners', PartnerController::class)->except(['show']);
        Route::patch('partners/{partner}/toggle', [PartnerController::class, 'toggle'])->name('partners.toggle');
    });
