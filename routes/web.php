<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/program', function () {
    return Inertia::render('Program', [
        'title' => 'Program & Aksi Kepemudaan',
        'subtitle' => 'Pelatihan kader inti pemuda, workshop deteksi dini P4GN, advokasi sebaya, wirausaha kreatif, dan agenda kegiatan nasional.',
        'category' => 'Program & Aksi',
    ]);
})->name('program');
