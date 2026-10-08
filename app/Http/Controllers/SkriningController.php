<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SkriningController extends Controller
{
    public function create()
    {
        return Inertia::render('Monitoring/Skrining/Wizard');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'persetujuan' => 'required|accepted',
            'usia' => 'required|string',
            'jenisKelamin' => 'nullable|string|in:L,P,X',
            'provinsi' => 'nullable|string',
            'q1' => 'required|array',
            'q2to7' => 'nullable|array',
            'q8' => 'nullable|string',
            'dast' => 'nullable|array',
            'teksZatLain' => 'nullable|string|max:100',
        ]);

        $q1 = $validated['q1'];
        $q2to7 = $validated['q2to7'] ?? [];
        $q8 = $validated['q8'] ?? 'TIDAK_PERNAH';
        $dast = $validated['dast'] ?? [];

        $hasAnyYes = false;
        foreach ($q1 as $zat => $answer) {
            if ($answer === 'Ya') $hasAnyYes = true;
        }

        $detailZat = [];
        $highestS = 0;
        
        $zatList = ['GANJA', 'KOKAIN', 'STIMULAN', 'INHALAN', 'PENENANG', 'HALUSINOGEN', 'OPIOID', 'LAINNYA'];

        foreach ($zatList as $zat) {
            $isDipakai = ($q1[$zat] ?? 'Tidak') === 'Ya';
            $skor = 0;
            $tingkat = 'TIDAK_DIPAKAI';

            if ($isDipakai) {
                $scores = $q2to7[$zat] ?? [];
                $skor = ($scores['q2'] ?? 0) + ($scores['q3'] ?? 0) + ($scores['q4'] ?? 0) + 
                        ($scores['q5'] ?? 0) + ($scores['q6'] ?? 0) + ($scores['q7'] ?? 0);
                
                if ($skor >= 0 && $skor <= 3) $tingkat = 'RENDAH';
                elseif ($skor >= 4 && $skor <= 26) $tingkat = 'SEDANG';
                elseif ($skor >= 27 && $skor <= 39) $tingkat = 'TINGGI';
            }

            if ($skor > $highestS) {
                $highestS = $skor;
            }

            $detailZat[] = [
                'kode' => $zat,
                'dipakai' => $isDipakai,
                'skor' => $skor,
                'tingkat' => $tingkat
            ];
        }

        $dastScore = 0;
        if ($hasAnyYes) {
            for ($i = 1; $i <= 10; $i++) {
                $key = "D{$i}";
                $ans = $dast[$key] ?? 'Tidak';
                if ($i === 3) {
                    if ($ans === 'Tidak') $dastScore += 1;
                } else {
                    if ($ans === 'Ya') $dastScore += 1;
                }
            }
        }
        
        $dastTingkat = 'TIDAK_ADA';
        if ($dastScore >= 1 && $dastScore <= 2) $dastTingkat = 'RENDAH';
        elseif ($dastScore >= 3 && $dastScore <= 5) $dastTingkat = 'SEDANG';
        elseif ($dastScore >= 6 && $dastScore <= 8) $dastTingkat = 'SUBSTANSIAL';
        elseif ($dastScore >= 9 && $dastScore <= 10) $dastTingkat = 'BERAT';

        $klasifikasi = 'MASIH_AMAN_RENDAH';
        $labelTampilan = 'Masih Aman (Risiko Rendah)';

        if ($highestS >= 27 || $dastScore >= 6 || $q8 === 'YA_3BULAN') {
            $klasifikasi = 'RISIKO_TINGGI';
            $labelTampilan = 'Risiko Tinggi (Terindikasi Kecanduan)';
        } elseif (($highestS >= 4 && $highestS <= 26) || ($dastScore >= 3 && $dastScore <= 5)) {
            $klasifikasi = 'RISIKO_SEDANG';
            $labelTampilan = 'Risiko Sedang';
        }

        $peringatanSuntik = null;
        if ($q8 === 'YA_3BULAN') {
            $peringatanSuntik = 'SUNTIK_AKTIF';
        } elseif ($q8 === 'YA_BUKAN_3BULAN') {
            $peringatanSuntik = 'RIWAYAT_SUNTIK';
        }

        $hasil = [
            'klasifikasi' => $klasifikasi,
            'label_tampilan' => $labelTampilan,
            'detail_zat' => $detailZat,
            'dast' => [
                'diisi' => $hasAnyYes,
                'total' => $dastScore,
                'tingkat' => $dastTingkat
            ],
            'suntik' => [
                'jawaban' => $q8,
                'peringatan' => $peringatanSuntik
            ],
            'meta' => [
                'rentang_usia' => $validated['usia'],
                'jenis_kelamin' => $validated['jenisKelamin'],
                'provinsi' => $validated['provinsi'],
                'waktu_pengisian' => now()->toIso8601String()
            ]
        ];

        return response()->json($hasil);
    }
}
