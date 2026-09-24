<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
})->name('tentang');

Route::get('/program', function () {
    return Inertia::render('Program');
})->name('program');

Route::get('/struktur', function () {
    return Inertia::render('Struktur');
})->name('struktur');

Route::get('/pengurus', function () {
    return Inertia::render('Pengurus');
})->name('pengurus');

Route::get('/agenda', function () {
    return Inertia::render('Agenda');
})->name('agenda');

Route::get('/berita', function () {
    return Inertia::render('Berita');
})->name('berita');

Route::get('/kontak', function () {
    return Inertia::render('Kontak');
})->name('kontak');
