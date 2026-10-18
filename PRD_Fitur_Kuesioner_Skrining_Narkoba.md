# PRD — FITUR "CEK RISIKO ANDA"
# KUESIONER SKRINING RISIKO PENYALAHGUNAAN NARKOBA — SIM KIPAN

| | |
|---|---|
| **Nama produk** | Fitur **"Cek Risiko Anda"** — Kuesioner Skrining Risiko Penyalahgunaan Narkoba |
| **Jenis dokumen** | Product Requirements Document (PRD) — kebutuhan produk level fungsional |
| **Proyek** | SIM KIPAN — Sistem Informasi Manajemen Keanggotaan Pemuda Anti Narkoba |
| **Organisasi** | KIPAN Republik Indonesia — Binaan Kemenpora & BNN RI |
| **Lokasi fitur** | Situs web KIPAN → menu **Monitoring** → kartu **"Cek Risiko Anda"** |
| **Versi dokumen** | 0.1 (Draf untuk Reviu — JANGAN dipakai sebagai acuan final sebelum disetujui) |
| **Tanggal** | Oktober 2026 |
| **Status** | Menunggu persetujuan pemilik produk dan reviu ahli (psikolog/konselor adiksi/asesor BNN) |
| **Penyusun** | Tim Penyusun SIM KIPAN |
| **Audiens dokumen** | Developer / penerbang web (internal atau vendor) yang akan membangun fitur |

## Rujukan dokumen terkait

| Dokumen | Kedudukan terhadap PRD ini |
|---|---|
| **Tahap 1 — Instrumen & Spesifikasi Perhitungan** (`Tahap1_Instrumen_dan_Spesifikasi_Perhitungan.md`) | **Acuan TUNGGAL skor, ambang, dan aturan klasifikasi.** Seluruh angka pada PRD ini disalin dari sana. Bila ada selisih, yang berlaku adalah Tahap 1. |
| **Buku Panduan Kuesioner** (`Buku_Panduan_Kuesioner_Skrining_Narkoba.md`) | Sumber redaksi konten halaman hasil, saran tindak lanjut, etika & privasi, dan penanganan krisis (Bab 6–8). |
| **Dokumen Desain Teknis SIM KIPAN v2.0** | Konteks sistem induk (arsitektur, keamanan, endpoint umum). PRD ini TIDAK mengubahnya. |

**Sistem penanda yang dipakai di dokumen ini:**

| Penanda | Arti |
|---|---|
| **[FAKTA BAKU]** | Butir/ambang diambil apa adanya dari instrumen asli (ASSIST v3.1 / DAST-10). |
| **[ADAPTASI]** | Keputusan penyusun saat menerjemahkan/menyederhanakan — perlu reviu ahli sebelum rilis publik. |
| **[PERLU VERIFIKASI]** | Rujukan eksternal (nomor layanan, pasal UU) yang harus dicek ulang pemilik produk sebelum tayang. |
| **[KEPUTUSAN TERBUKA]** | Butir yang keputusan finalnya menunggu pemilik produk (lihat Bab 14). |

> ### KOTAK PERINGATAN UTAMA
> Fitur ini adalah **alat skrining edukatif awal**, bukan alat diagnosis, bukan layanan darurat, dan bukan alat hukum. Instrumen merupakan adaptasi bahasa Indonesia dari WHO ASSIST v3.1 dan DAST-10 (Skinner 1982) yang **belum melalui uji validasi dan reliabilitas formal**. Hasil kuesioner bersifat indikatif dan selalu disertai penafian. Kategori "Masih Aman (Risiko Rendah)" **tidak menjamin** kondisi seseorang.

## Kendali skor & ambang (berlaku untuk seluruh tim)

1. Seluruh skor, ambang, dan aturan klasifikasi pada PRD ini bersumber dari **dokumen Tahap 1 dan tidak boleh diubah oleh implementasi** (tidak di-mundurkan, tidak dibulatkan, tidak disederhanakan) tanpa persetujuan tertulis pemilik produk yang disertai reviu ahli.
2. Setiap perubahan instrumen wajib menaiki proses tata kelola versi (Buku Panduan Bab 9.3) dan memicu pembaruan serentak: spesifikasi, seeder/service, tampilan, dan pengujian ulang seluruh kasus uji.
3. Developer menemukan kejanggalan angka? **Laporkan, jangan perbaiki sendiri.** Angka pada Lampiran B–D adalah kontrak.

## Daftar isi

- Ringkasan Eksekutif
- Bab 1 — Latar Belakang & Tujuan Produk
- Bab 2 — Ruang Lingkup
- Bab 3 — Pengguna & Personas
- Bab 4 — Alur Pengalaman Pengguna
- Bab 5 — User Stories & Acceptance Criteria
- Bab 6 — Kebutuhan Fungsional (FR)
- Bab 7 — Aturan Bisnis & Logika Skoring
- Bab 8 — Spesifikasi API (Ringkas)
- Bab 9 — Kebutuhan Non-Fungsional (NFR)
- Bab 10 — Metrik Sukses & KPI
- Bab 11 — Roadmap & Milestone
- Bab 12 — Risiko & Mitigasi
- Bab 13 — Batasan, Asumsi & Ketergantungan
- Bab 14 — Pertanyaan Terbuka & Keputusan Menunggu
- Lampiran A — Instrumen Kuesioner Lengkap
- Lampiran B — Tabel Skor & Aturan Klasifikasi Final
- Lampiran C — Aturan Validasi Masukan V1–V11
- Lampiran D — 19 Kasus Uji Penerimaan
- Lampiran E — Glosarium & Daftar Rujukan

---

# RINGKASAN EKSEKUTIF

**Apa yang dibangun.** Sebuah fitur skrining mandiri bernama "Cek Risiko Anda" di menu Monitoring situs KIPAN: kuesioner anonim 5–10 menit berbentuk wizard bertahap yang menanyakan pengalaman pemakaian delapan kelompok zat (adaptasi ASSIST v3.1) dan sepuluh butir masalah pemakaian setahun terakhir (adaptasi DAST-10). Sistem menghitung skor di server, lalu menampilkan satu dari tiga kategori hasil dengan warna, skor rinci, penafian, dan saran tindak lanjut yang sesuai — termasuk tombol darurat "Lapor Sekarang – BNN 184" yang selalu tampil. Sebagai pelengkap, admin pengelola mendapat dasbor rekapitulasi agregat dengan ambang penyembunyian n<5.

**Mengapa dibangun.** KIPAN adalah organisasi pemuda pencegahan narkoba binaan Kemenpora dan BNN RI, tetapi situsnya belum memiliki alat yang menggerakkan pengunjung dari sekadar membaca materi menuju menilai kondisi diri secara mandiri. Alat skrining edukatif mengisi celah itu: memberi pengunjung bahasa dan kerangka untuk memahami pola pemakaiannya, menormalkan mencari bantuan, dan mengarahkan yang berindikasi risiko ke layanan profesional (Puskesmas, IPWL, BNN 184) tanpa menunggu keadaan darurat. Fitur ini juga menghasilkan data agregat yang berguna untuk perencanaan program pencegahan — dengan desain privasi yang memungkinkan hal itu tanpa menyentuh identitas siapa pun.

**Untuk siapa.** Pengunjung umum situs KIPAN — mayoritas diproyeksikan pemuda — yang mengisi tanpa login, tanpa nama, tanpa NIK, tanpa alamat, dan tanpa alamat IP yang disimpan. Pengisian sepenuhnya sukarela dan dapat dihentikan kapan saja. Sisi pengelola dijalankan oleh admin terbatas yang hanya melihat angka kumpulan.

**Tiga kategori hasil.**

| Kategori | Label yang tampil | Warna | Pemicu (ringkas — aturan lengkap di Bab 7) |
|---|---|---|---|
| MASIH_AMAN_RENDAH | "Masih Aman (Risiko Rendah)" | Hijau | Tidak memakai zat apa pun, atau semua skor per zat 0–3 dan skor DAST 0–2 |
| RISIKO_SEDANG | "Risiko Sedang" | Kuning | Ada skor per zat 4–26, atau skor DAST 3–5 |
| RISIKO_TINGGI | "Risiko Tinggi (Terindikasi Kecanduan)" | Merah | Ada skor per zat ≥27, atau DAST ≥6, atau pemakaian suntik dalam 3 bulan terakhir |

**Prinsip yang tidak bisa dinegosiasikan.** (1) Anonimitas total — tidak ada identitas yang diminta, disimpan, atau dicatat. (2) Skor dihitung di server dari dokumen Tahap 1 tanpa perubahan. (3) Setiap hasil disertai penafian bahwa ini bukan diagnosis dan bukan vonis hukum. (4) Informasi darurat tidak pernah dikunci di belakang hasil. (5) Bahasa yang tidak membubuhi stigma di seluruh antarmuka.

**Status.** PRD versi 0.1 untuk reviu pemilik produk dan ahli. Instrumen belum tervalidasi; roadmap (Bab 11) menempatkan reviu ahli sebagai gerbang wajib sebelum rilis publik. Angka metrik pada Bab 10 adalah usulan awal untuk disepakati, bukan janji.

---

# BAB 1 — LATAR BELAKANG & TUJUAN PRODUK

## 1.1 Latar Belakang

KIPAN (Pemuda Anti Narkoba) berdiri sebagai gerakan pemuda pencegahan penyalahgunaan narkoba di bawah pembinaan Kemenpora dan BNN RI. Kegiatannya selama ini berporos pada pendekatan langsung — edukasi sekolah, penyuluhan komunitas, dan pendampingan kader. Situs web organisasi menampilkan materi pencegahan, namun perjalanan pengunjungnya berhenti di membaca: tidak ada mekanisme yang membantu pengunjung menjawab pertanyaan paling pribadi sekaligus paling menentukan — "bagaimana sebenarnya kondisi saya atau orang di dekat saya?"

Celah ini penting karena karakteristik masalah narkoba itu sendiri. Orang yang mulai terlibat zat umumnya tidak datang mencari bantuan sampai keadaan memburuk; hambatan terbesarnya adalah stigma dan ketakutan akan penilaian atau konsekuensi hukum. Alat skrining mandiri yang anonim menjawab kedua hambatan itu sekaligus: tidak ada yang mengawasi, tidak ada identitas yang disimpan, dan hasilnya dibingkai sebagai gambaran awal — bukan vonis. Di sisi lain, pengelola program membutuhkan gambaran agregat untuk memutuskan ke mana program pencegahan diarahkan, sesuatu yang selama ini hanya tersedia dari survei nasional berkala dengan cakupan dan ritme yang berbeda.

Organisasi kesehatan dunia telah menyediakan instrumen skrining zat yang diakui luas: WHO ASSIST v3.1 untuk memetakan tingkat keterlibatan per jenis zat, dan DAST-10 (Skinner, 1982) untuk memotret masalah pemakaian secara keseluruhan dalam dua belas bulan terakhir. Fitur ini mengadaptasi keduanya menjadi satu alur pengisian web yang singkat (5–10 menit), dengan sintesis klasifikasi tiga tingkat yang memudahkan pemahaman awam — lampu lalu lintas hijau/kuning/merah. Konsekuensinya diakui secara jujur: adaptasi ini belum melalui uji validasi formal sehingga seluruh keluaran bersifat indikatif dan wajib disertai penafian.

## 1.2 Tujuan Produk

| ID | Tujuan | Ukuran keberhasilan (indikatif) |
|---|---|---|
| GOAL-01 | Memberi pengunjung situs KIPAN alat evaluasi diri yang cepat, gratis, anonim, dan tidak menghakimi | Jumlah pengisian selesai per bulan; tingkat penyelesaian wizard (Bab 10) |
| GOAL-02 | Menggerakkan pengunjung berindikasi risiko menuju bantuan profesional (Puskesmas/IPWL/BNN 184) tanpa menunggu keadaan darurat | Distribusi kategori hasil; interaksi dengan tombol BNN 184 dan tautan tindak lanjut (agregat) |
| GOAL-03 | Menyediakan data agregat wilayah untuk perencanaan program pencegahan KIPAN | Dasbor agregat aktif dengan ambang n<5; data retensi terkelola |
| GOAL-04 | Menjadi contoh praktik baik privasi: layanan publik yang meminta data seminimal mungkin | Nol data identitas tersimpan; audit privasi lolos |
| GOAL-05 | Menjaga keselaman pengunjung dalam kondisi krisis melalui akses darurat yang selalu tersedia | Kanal darurat tampil di 100% langkah; waktu akses nomor darurat ≤ 1 klik |

## 1.3 Non-Tujuan (Anti-Goals)

Produk ini secara sengaja TIDAK: (1) mendiagnosis ketergantungan atau gangguan kesehatan jiwa — itu wewenang tenaga profesional setelah asesmen; (2) menilai, melaporkan, atau menindak siapa pun — data tidak dapat dan tidak boleh dipakai untuk kepentingan penindakan hukum; (3) menggantikan layanan darurat — nomor darurat ditampilkan, bukan digantikan; (4) menjadi survei ilmiah nasional — pengisian mandiri tidak mewakili populasi; (5) menilai pemakaian alkohol dan tembakau — di luar fokus narkoba KIPAN dan ambang ASSIST-nya berbeda; (6) menyimpan riwayat pengisian per individu yang dapat diambil ulang.

## 1.4 Basis Ilmiah & Statusnya

Bagian 1 kuesioner adalah adaptasi ASSIST v3.1 (8 zat, skor per zat 0–39, ambang 0–3/4–26/≥27) dan Bagian 2 adaptasi DAST-10 (10 butir, skor 0–10, butir ke-3 terbalik). Penggabungan keduanya menjadi satu klasifikasi tiga kategori dengan prinsip "ambil kategori tertinggi" adalah **sintesis proyek [ADAPTASI]** yang lazimnya belum teruji psikometrik — karenanya reviu ahli (M3 pada roadmap) adalah gerbang wajib sebelum rilis publik, dan status "adaptasi yang belum divalidasi" terus dicantumkan pada seluruh materi publik hingga uji validasi selesai.

---

# BAB 2 — RUANG LINGKUP

## 2.1 Dalam Lingkup (Rilis Pertama)

1. **Kartu fitur** "Cek Risiko Anda" pada halaman menu **Monitoring** situs publik KIPAN.
2. **Wizard 7 langkah**: persetujuan → data minimal (usia; jenis kelamin & provinsi opsional) → Q1 (8 zat) → Q2–Q7 per zat yang dipakai → Q8 (suntik) → DAST-10 → halaman hasil; termasuk progress bar dan navigasi mundur antar langkah.
3. **Perhitungan skor di server** sesuai Aturan Bisnis Bab 7 (identik Tahap 1).
4. **Halaman hasil**: kategori + warna, skor rinci per zat & DAST, status Q8 & peringatannya, penafian wajib, saran tindak lanjut per kategori, tautan menu Materi.
5. **Akses darurat**: tombol "Lapor Sekarang – BNN 184" mengambang di seluruh halaman; tautan "Butuh bantuan segera?" di tiap langkah; ringkasan panduan krisis dari halaman hasil.
6. **Penyimpanan anonim** hasil sebagai baris data bertanda UUID acak sekali pakai (tanpa identitas, tanpa IP).
7. **Dasbor agregat admin** (login terbatas): jumlah per kategori, sebaran rentang usia & provinsi, zat yang paling sering dilaporkan — semua dengan **ambang penyembunyian n<5**.
8. **Penghapusan terjadwal** jawaban rinci setelah 24 bulan (retensi agregat tak terbatas) **[KEPUTUSAN TERBUKA: Q-04]**.

## 2.2 Di Luar Lingkup (Rilis Pertama)

1. Akun pengguna, login, atau penyimpanan hasil yang dapat diambil ulang oleh pengisi.
2. Identitas apa pun: nama, NIK, tanggal lahir, alamat, kontak, lokasi GPS, alamat IP, sidik perangkat.
3. Skrining alkohol dan tembakau.
4. Diagnosa, rekomendasi obat, atau terapi apa pun.
5. Integrasi dengan basis data anggota SIM KIPAN — hasil skrining TIDAK tertaut ke data keanggotaan.
6. Fitur obrolan/konseling daring (hanya tautan ke kanal yang ada: BNN 184, dsb.).
7. Multi-bahasa (Indonesia saja) **[KEPUTUSAN TERBUKA: Q-05]**.
8. API publik untuk pihak ketiga.
9. Mode kertas luring dengan entri massal oleh kader **[KEPUTUSAN TERBUKA: Q-06]**.
10. Ekspor laporan dasbor (CSV/PDF) **[KEPUTUSAN TERBUKA: Q-02]**.

## 2.3 Konteks dalam SIM KIPAN

Fitur ini hidup di **menu Monitoring** pada sisi publik situs — wilayah situs yang tidak memerlukan login. Ia TIDAK membaca atau menulis data modul keanggotaan (pendataan kader/pengurus). Satu-satunya perwujudan sisi pengelola adalah dasbor agregat yang diakses admin melalui area terproteksi, dengan sumber data tabel jawaban skrining yang terpisah dari tabel keanggotaan. Dengan kata lain: kegagalan atau penonaktifan fitur ini tidak berdampak apa pun pada sistem keanggotaan, dan sebaliknya.

---

# BAB 3 — PENGGUNA & PERSONAS

## 3.1 Persona Utama — "Pengunjung Anonim"

Pengisi kuesioner adalah pengunjung situs tanpa login, tanpa akun, dan (dari sisi sistem) tanpa nama. Tiga varian dominan:

**Varian A — Penasihat diri (paling umum).** Pemuda/pemudi 18–24 tahun yang tiba di situs KIPAN karena iklan media sosial, tautan dari teman, atau setelah membaca materi. Ragu-ragu, ingin tahu "apakah saya termasuk berisiko", tetapi takut dikenali. *Kebutuhan:* proses singkat, jaminan anonim di muka, hasil yang mudah dipahami, arahan konkret setelahnya. *Kekhawatiran:* data diselidiki; hasil "bocor"; dihakimi. *Implikasi desain:* persetujuan 4 poin di layar pertama; tidak ada kolom identitas; hasil berbahasa sederhana dengan penafian.

**Varian B — Remaja penasaran.** Usia 15–17 (atau kurang), sering datang dari pencarian sekolah. Pemahaman baca-tulis sedang berkembang; bisa jadi mengisi karena pernah mencoba zat di acara teman. *Kebutuhan:* bahasa sederhana tanpa istilah medis; durasi pendek; saran tindak lanjut yang realistis untuk usianya (bicara dengan orang tua/wali/guru BK). *Kekhawatiran:* orang tua tahu; kesehatan diri. *Implikasi desain:* redaksi butir uji keterbacaan; saran kategori Aman/Sedang menyebut jalur pendampingan orang dewasa; tombol darurat mudah ditemukan.

**Varian C — Pendamping yang mencari.** Orang dewasa muda (atau kakak/kawan) yang mengisi sambil membayangkan orang yang mereka khawatirkan, atau mendampingi langsung. *Kebutuhan:* kejelasan bahwa hasil hanya berlaku bila diisi jujur atas pengalaman sendiri; kanal bantuan untuk "orang yang saya khawatirkan". *Kebutuhan khusus:* penegasan bahwa kuesioner ini bukan alat uji orang lain. *Implikasi desain:* kalimat pembungkus pada Q1 ("jawab berdasarkan pengalaman Anda sendiri"); nomor darurat mudah diakses dari mana saja.

## 3.2 Persona Sekunder — "Admin Pengelola Program"

Pengurus KIPAN bertugas merencanakan kegiatan pencegahan (admin provinsi/kabupaten-kota pada matriks RBAC SIM KIPAN, atau petugas yang ditunjuk). *Kebutuhan:* angka agregat per wilayah & waktu untuk menyusun program; keyakinan bahwa data aman dan tidak melanggar privasi; pemahaman batas tafsir (sampling mandiri). *Kekhawatiran:* salah menggunakan data; tampilan yang mengundang penarikan kesimpulan per individu. *Implikasi desain:* dasbor hanya agregat dengan n<5; disclaimer metodologi tampil tetap; log akses.

## 3.3 Persona Tersier — "Kader Lapangan"

Anggota KIPAN terlatih yang memakai situs saat sosialisasi (proyektor, pos kegiatan) untuk menjelaskan skrining, atau membagikan tautan. *Kebutuhan:* halaman yang rapi saat diproyeksikan; versi cetak untuk kegiatan luring (tersedia di Buku Panduan); pemahaman sendiri atas arti kategori agar bisa menjawab pertanyaan peserta. *Implikasi desain:* tampilan bersih kontras tinggi; konten tindak lanjut konsisten dengan Buku Panduan agar kader tidak mengarang tafsir.

## 3.4 Ringkasan Kebutuhan vs Persona

| Kebutuhan | Varian A | Varian B | Varian C | Admin | Kader |
|---|---|---|---|---|---|
| Jaminan anonim sejak layar pertama | ●● | ●● | ● | — | ● |
| Bahasa sederhana non-stigma | ● | ●● | ● | — | ● |
| Durasi 5–10 menit | ●● | ●● | ● | — | ● |
| Hasil + penafian + saran konkret | ●● | ●● | ●● | — | ● |
| Kanal darurat selalu terlihat | ● | ● | ●● | — | ●● |
| Angka agregat + n<5 + disclaimer | — | — | — | ●● | ● |
| Konsistensi dengan Buku Panduan | — | ● | ● | ● | ●● |

● = penting · ●● = sangat penting

---

# BAB 4 — ALUR PENGALAMAN PENGGUNA

## 4.1 Peta Wizard 7 Langkah

| Langkah | Layar | Isi & aksi | Perkiraan waktu | Catatan |
|---|---|---|---|---|
| 1 | Persetujuan | Penjelasan (5–10 menit; anonim; skrining bukan diagnosis; data agregat) + 4 butir persetujuan yang harus dicentang | 1–2 menit | Tombol "Mulai" nonaktif hingga keempat butir tercentang (V1) |
| 2 | Data minimal | Rentang usia (wajib, 5 pilihan); jenis kelamin (opsional); provinsi (opsional, dropdown) | 15 detik | Tanpa kolom identitas apa pun |
| 3 | Q1 — 8 zat | Untuk tiap zat: "Tidak"/"Ya" (pernah seumur hidup); bila LAINNYA=Ya muncul kolom teks 1–100 karakter | 1–2 menit | Kalimat pembungkus: jawab berdasarkan pengalaman sendiri, bukan anjuran dokter |
| 4 | Q2–Q7 per zat | Untuk SETIAP zat yang dijawab "Ya": 6 pertanyaan lanjutan (3 bulan terakhir) | 1–3 menit | Zat "Tidak" otomatis dilewati (skip logic) |
| 5 | Q8 — suntik | Satu pertanyaan, 3 pilihan waktu | 15 detik | Hanya muncul bila ≥1 zat = "Ya" (V8) |
| 6 | DAST-10 | 10 butir Ya/Tidak, kerangka 12 bulan terakhir | 2–3 menit | Hanya muncul bila ≥1 zat = "Ya" (V9) |
| 7 | Hasil | Kategori + warna; skor rinci per zat & DAST; status Q8 & peringatan; penafian; saran tindak lanjut; tombol BNN 184; tautan Materi; saran menyimpan hasil | 2–3 menit | Hasil dirender dari respons submit; tidak ada URL hasil |

Bilah kemajuan (progress bar) tampil di bagian atas langkah 1–7, memperlihatkan posisi pengisi dan memperkecil kecemasan durasi.

## 4.2 Jalur Pintasan "Semua Tidak"

Bila pada langkah 3 seluruh delapan zat dijawab "Tidak": langkah 4, 5, dan 6 dilewati otomatis; sistem langsung menyusun hasil "Masih Aman (Risiko Rendah)" dengan seluruh skor 0; halaman hasil tetap menampilkan penafian, saran tindak lanjut (apresiasi + edukasi pencegahan), tombol BNN 184, dan tautan Materi. Layar antara (mis. teks "Terima kasih, jawaban Anda sudah cukup") harus menegaskan bahwa hasil ini normal dan sering terjadi, agar pengisi tidak merasa "mengisi dengan salah".

## 4.3 Navigasi Mundur

Pengisi dapat kembali ke langkah sebelumnya dari langkah 2 dan seterusnya untuk memperbaiki jawaban. Dua aturan menjaga konsistensi data: (1) mengubah jawaban Q1 suatu zat dari "Ya" menjadi "Tidak" menghapus jawaban Q2–Q7 zat itu dari payload (konsisten V7 — server juga akan menolak bila dikirim); (2) mengubah seluruh Q1 menjadi "Tidak" setelah sebelumnya ada yang "Ya" mengosongkan pula Q8 dan DAST (konsisten V8–V9). Navigasi mundur tidak pernah mengirim data ke server; hanya submit pada langkah terakhir yang mengirim.

## 4.4 Jalur Darurat (Selalu Terbuka)

Akses bantuan tidak pernah bergantung pada penyelesaian kuesioner: (1) tombol mengambang **"Lapor Sekarang – BNN 184"** di pojok kanan bawah seluruh halaman situs; (2) tautan kecil **"Butuh bantuan segera?"** pada setiap langkah wizard yang membuka panel nomor darurat (BNN 184; 119; 119 ekstensi 8; 112); (3) dari halaman hasil, ringkasan panduan krisis (dugaan overdosis, pikiran menyakiti diri, sakau berat) dapat dibuka tanpa mengisi ulang. Prinsip pesannya satu: **bila ada ancaman nyawa, hubungi layanan darurat — jangan menunggu kuesioner selesai.**

## 4.5 Perilaku Saat Meninggalkan Halaman

Menutup tab, menekan kembali, atau kehilangan koneksi sebelum submit = pengisian hangus; tidak ada hasil yang tersimpan dan tidak ada yang dapat dipulihkan (memang demikian adanya, demi anonimitas). Untuk koneksi tiba-tiba terputus saat submit, sistem menampilkan pesan bahwa jawaban belum terkirim dan menyediakan tombol coba kirim ulang pada layar yang sama. Setelah submit berhasil, satu-satunya salinan hasil yang tersisa di tangan pengisi adalah layar hasil itu sendiri — karenanya halaman hasil menyarankan menyimpan/mencuplik layarnya, dan sistem TIDAK menyediakan URL hasil yang dapat dibagikan atau diakses ulang (anti-penguraian-enumerasi).

## 4.6 Setelah Hasil

Halaman hasil diakhiri tiga pintu keluar yang selaras tujuan: (1) tautan ke **menu Materi** untuk memperdalam pemahaman; (2) tombol/tautan **kanal bantuan** sesuai kategori (Puskesmas/konselor untuk Sedang; asesmen profesional, IPWL, dan BNN 184 untuk Tinggi); (3) tautan **isi ulang kuesioner** bagi yang ingin memeriksa ulang jawabannya. Pengisian ulang diperlakukan sebagai pengisian baru yang sama sekali tidak berhubungan dengan pengisian sebelumnya (UUID baru).

---

# BAB 5 — USER STORIES & ACCEPTANCE CRITERIA

Konvensi: setiap user story diberi nomor US-x.y, acceptance criteria diberi nomor AC-x.y.z dan harus dapat diuji (terhubung ke FR Bab 6, BR Bab 7, dan/atau TC Lampiran D).

## E1 — Persetujuan & Data Minimal

**US-1.1** — *Sebagai pengunjung anonim, saya ingin memahami sifat dan tujuan kuesioner sebelum memulai, sehingga saya dapat memutuskan secara sukarela apakah akan melanjutkan.*

- AC-1.1.1 Layar 1 memuat: perkiraan durasi (5–10 menit); pernyataan tidak ada nama/NIK/kontak/IP yang diminta; sifat skrining (bukan diagnosis, bukan vonis hukum); penggunaan data hanya untuk rekapitulasi agregat program pencegahan.
- AC-1.1.2 Tombol "Mulai" tetap nonaktif hingga KEEMPAT butir persetujuan tercentang.
- AC-1.1.3 Payload tanpa `persetujuan=true` ditolak server sebelum diproses (V1; TC-V4).

**US-1.2** — *Sebagai pengunjung, saya ingin hanya wajib mengisi rentang usia, sehingga data yang saya berikan seminimal mungkin.*

- AC-1.2.1 Rentang usia wajib; pilihan tepat 5: LT15, 15–17, 18–24, 25–34, 35+ (Lampiran A); tidak dapat melanjutkan tanpa memilih.
- AC-1.2.2 Jenis kelamin (L/P/X) dan provinsi dapat dibiarkan kosong; kuesioner berfungsi penuh tanpa keduanya.
- AC-1.2.3 Provinsi berupa dropdown dari daftar resmi + "Tidak ingin menyebutkan" — bukan teks bebas (V4).

## E2 — Pemindaian Zat (Q1)

**US-2.1** — *Sebagai pengunjung, saya ingin menjawab pernah-tidak pernah untuk 8 jenis zat dalam satu layar ringkas, sehingga saya cepat tahu bagian mana dari kuesioner yang relevan bagi saya.*

- AC-2.1.1 Kedelapan zat tampil dengan redaksi Q1 Lampiran A; pilihan hanya "Tidak"/"Ya".
- AC-2.1.2 Bila LAINNYA = "Ya", kolom teks (1–100 karakter) muncul dan wajib diisi; teks disanitasi (V10; TC-15).
- AC-2.1.3 Bila semua zat "Tidak", sistem langsung ke hasil "Masih Aman" tanpa Q2–Q8/DAST (BR-09; TC-01).
- AC-2.1.4 Tidak ada pertanyaan tentang cara memperoleh zat, nama orang, atau tempat.

## E3 — Pertanyaan Lanjutan (Q2–Q7) & Logika Lompat

**US-3.1** — *Sebagai pengunjung yang pernah memakai zat tertentu, saya ingin menjawab 6 pertanyaan lanjutan hanya untuk zat itu, sehingga saya tidak menjawab pertanyaan yang tidak relevan.*

- AC-3.1.1 Q2–Q7 hanya tampil untuk zat dengan Q1 = "Ya" (antarmuka) dan hanya diterima untuk zat demikian (server, V6–V7; TC-V2).
- AC-3.1.2 Setiap butir Q2–Q7 wajib terjawab sebelum melanjutkan; pilihan dan label persis tabel skor Lampiran B.
- AC-3.1.3 Zat dengan Q1 = "Tidak" otomatis mendapat skor 0 dan tingkat "TIDAK_DIPAKAI" pada hasil.

**US-3.2** — *Sebagai pengunjung yang salah klik, saya ingin dapat kembali dan mengubah jawaban, sehingga hasil saya tidak rusak karena kekeliruan.*

- AC-3.2.1 Tombol "Kembali" tersedia di semua langkah ≥ 2 dan mempertahankan jawaban yang sudah terisi.
- AC-3.2.2 Mengubah Q1 dari "Ya" menjadi "Tidak" menghapus jawaban Q2–Q7 zat tersebut dari payload.

## E4 — Pemakaian Suntik (Q8)

**US-4.1** — *Sebagai pengunjung yang pernah memakai zat, saya ingin menjawab satu pertanyaan tentang pemakaian suntik, sehingga risiko kesehatan serius yang tidak terlihat dari skor dapat ditangani.*

- AC-4.1.1 Q8 hanya muncul bila ≥1 zat Q1 = "Ya" (V8) dengan tepat tiga pilihan (Lampiran A).
- AC-4.1.2 Jawaban "Ya, dalam 3 bulan terakhir" memaksa klasifikasi RISIKO TINGGI + menampilkan peringatan risiko HIV/hepatitis (BR-06; TC-11).
- AC-4.1.3 Jawaban "Ya, bukan dalam 3 bulan terakhir" tidak menaikkan klasifikasi tetapi menampilkan peringatan riwayat suntik dengan saran pemeriksaan kesehatan sukarela/VCT (BR-07; TC-12).

## E5 — DAST-10

**US-5.1** — *Sebagai pengunjung yang pernah memakai zat, saya ingin menjawab 10 pertanyaan Ya/Tidak tentang 12 bulan terakhir, sehingga gambaran masalah pemakaian saya lebih lengkap.*

- AC-5.1.1 DAST-10 hanya tampil bila ≥1 Q1 = "Ya" (V9), dengan teks pengantar tentang kerangka 12 bulan dan pengecualian alkohol/rokok.
- AC-5.1.2 Butir D3 dijawab "Ya"/"Tidak" apa adanya; pembalikan nilai terjadi di server (BR-03), bukan di antarmuka.
- AC-5.1.3 Kesepuluh butir wajib terjawab sebelum submit diaktifkan.
- AC-5.1.4 Payload berisi jawaban DAST padahal semua Q1 = "Tidak" ditolak server (V9; TC-V1).

## E6 — Halaman Hasil & Tindak Lanjut

**US-6.1** — *Sebagai pengisi yang baru selesai, saya ingin melihat kategori hasil berwarna beserta skor rinci dan penjelasan berbahasa sederhana, sehingga saya memahami artinya tanpa istilah teknis.*

- AC-6.1.1 Halaman hasil menampilkan keenam elemen wajib: klasifikasi final (label + warna); skor rinci per zat + tingkatnya; skor D + tingkatnya; status Q8 + peringatan bila ada; saran tindak lanjut; tombol "Lapor Sekarang – BNN 184" (BR-08).
- AC-6.1.2 Kategori "Masih Aman (Risiko Rendah)" SELALU diikuti kalimat penafian wajib: *"Hasil ini TIDAK menjamin kondisi Anda tetap aman; ini hanya gambaran awal berdasarkan jawaban Anda."*
- AC-6.1.3 Semua kategori menyertakan penafian: hasil bersifat indikatif, bukan diagnosis, bukan vonis hukum.
- AC-6.1.4 Warna hasil: hijau/kuning/merah sesuai BR-08; kontras memenuhi NFR-05.

**US-6.2** — *Sebagai pengisi dengan indikasi risiko, saya ingin saran tindak lanjut yang konkret sesuai kategori saya, sehingga saya tahu langkah berikutnya yang paling masuk akal.*

- AC-6.2.1 Kategori Aman: apresiasi kejujuran; arahan ke menu Materi; faktor pelindung; imbauan waspada (Buku Panduan 6.2).
- AC-6.2.2 Kategori Sedang: penjelasan arti kategori; saran intervensi singkat; arahan konseling (BK/Puskesmas/konselor/kader terlatih); langkah mandiri; batas waktu penilaian ulang 1–3 bulan (Buku Panduan 6.3).
- AC-6.2.3 Kategori Tinggi: saran asesmen profesional; rehabilitasi melalui IPWL (Pasal 55 UU 35/2009 [PERLU VERIFIKASI]); hubungi BNN 184; libatkan orang kepercayaan; arahan darurat (Buku Panduan 6.4).

**US-6.3** — *Sebagai pengisi yang ingin menyimpan hasil, saya ingin memahami bahwa satu-satunya salinan ada di layar ini, sehingga saya dapat menyimpannya sebelum menutup halaman.*

- AC-6.3.1 Halaman hasil menampilkan saran menyimpan/mencuplik layar beserta alasan (tidak dapat diambil ulang).
- AC-6.3.2 Tidak tersedia endpoint pengambilan ulang hasil per individu; hasil dirender dari respons submit.

## E7 — Darurat

**US-7.1** — *Sebagai pengunjung yang sedang berada dalam (atau mendampingi) keadaan darurat, saya ingin mengakses nomor darurat kapan pun tanpa harus menyelesaikan kuesioner.*

- AC-7.1.1 Tombol "Lapor Sekarang – BNN 184" tampil mengambang di pojok kanan bawah pada seluruh halaman situs, termasuk semua langkah wizard dan halaman hasil.
- AC-7.1.2 Tautan "Butuh bantuan segera?" tampil di setiap langkah wizard; panel berisi BNN 184, 119, 119 ekstensi 8, dan 112 beserta kapan dipakainya.
- AC-7.1.3 Ringkasan panduan krisis (overdosis; pikiran menyakiti diri; sakau) dapat diakses dari halaman hasil tanpa memerlukan hasil kuesioner.

## E8 — Dasbor Admin (Agregat)

**US-8.1** — *Sebagai admin pengelola program, saya ingin melihat rekapitulasi agregat hasil skrining, sehingga saya dapat merencanakan program pencegahan berbasis data.*

- AC-8.1.1 Dasbor hanya menampilkan angka agregat: jumlah pengisian per kategori, sebaran rentang usia, sebaran provinsi, zat yang paling sering dilaporkan; tidak ada tampilan per-baris jawaban.
- AC-8.1.2 Sel dengan jumlah pengisian < 5 ditampilkan sebagai "<5", bukan angka (semua dimensi pemisahan).
- AC-8.1.3 Akses memerlukan login admin terbatas; setiap akses tercatat pada log akses (NFR-08).
- AC-8.1.4 Disclaimer sampling mandiri tampil menetap di dasbor (Buku Panduan 9.1 butir 6).

**US-8.2** — *Sebagai admin, saya ingin membatasi tampilan menurut waktu, sehingga saya dapat membaca tren program terbaru.*

- AC-8.2.1 Filter rentang waktu (bulan/tahun) tersedia pada dasbor **[KEPUTUSAN TERBUKA: Q-01]**.
- AC-8.2.2 Semua angka hasil filter tetap tunduk pada ambang n<5.

---

# BAB 6 — KEBUTUHAN FUNGSIONAL (FR)

Prioritas memakai MoSCoW: **Must** (wajib rilis pertama), **Should** (diharapkan rilis pertama, boleh menyusul bila terbukti sulit), **Could** (nice-to-have, kandidat iterasi berikutnya). Setiap FR merujuk ke user story dan/atau aturan bisnis terkait.

## 6.1 Akses & Antarmuka

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-01 | Kartu "Cek Risiko Anda" tampil pada menu Monitoring dengan deskripsi singkat, durasi (5–10 menit), dan penanda "anonim" | Must | 2.1 |
| FR-02 | Wizard berjalan penuh pada ponsel (tata letak satu kolom, target sentuh ≥ 44 px) | Must | NFR-05 |
| FR-03 | Progress bar menampilkan posisi langkah (1–7) selama pengisian | Should | US-3.2 |
| FR-04 | Tombol "Kembali" per langkah; jawaban langkah sebelumnya tetap terisi saat mundur | Should | US-3.2 |

## 6.2 Persetujuan & Data Minimal

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-05 | Layar 1 menampilkan pengantar + 4 butir persetujuan; tombol "Mulai" aktif hanya bila keempatnya tercentang | Must | US-1.1, V1 |
| FR-06 | Rentang usia wajib dengan tepat 5 pilihan (LT15, 15–17, 18–24, 25–34, 35+) | Must | US-1.2, V2 |
| FR-07 | Jenis kelamin opsional (L/P/X, dapat dikosongkan) | Must | US-1.2, V3 |
| FR-08 | Provinsi opsional; dropdown daftar resmi + "Tidak ingin menyebutkan"; bukan teks bebas | Must | US-1.2, V4 |

## 6.3 Instrumen & Logika Lompat

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-09 | Q1 menampilkan 8 zat dengan pilihan "Tidak"/"Ya" sesuai Lampiran A | Must | US-2.1, V5 |
| FR-10 | Bila LAINNYA="Ya", kolom teks 1–100 karakter muncul dan wajib diisi; teks disanitasi | Must | US-2.1, V10 |
| FR-11 | Q2–Q7 hanya tampil dan hanya dikirim untuk zat dengan Q1="Ya" | Must | US-3.1, V6–V7 |
| FR-12 | Q8 (3 pilihan) hanya tampil bila ≥1 zat "Ya"; wajib dijawab bila tampil | Must | US-4.1, V8 |
| FR-13 | DAST-10 hanya tampil bila ≥1 zat "Ya"; kesepuluh butir wajib; butir D3 disajikan apa adanya tanpa pembalikan di antarmuka | Must | US-5.1, V9, BR-03 |
| FR-14 | Bila semua Q1="Tidak": Q2–Q8 dan DAST dilewati; langsung ke hasil "Masih Aman" dengan konfirmasi singkat | Must | 4.2, BR-09, TC-01 |

## 6.4 Skoring & Hasil

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-15 | Seluruh perhitungan (S[z], D, klasifikasi, peringatan suntik) dilakukan di server sesuai Bab 7 — hasil hitung klien tidak dipercaya | Must | BR-01..08 |
| FR-16 | Halaman hasil menampilkan 6 elemen wajib (Bab 7 BR-08) dengan warna kategori | Must | US-6.1 |
| FR-17 | Kalimat penafian wajib tampil pada kategori "Masih Aman"; penafian umum (bukan diagnosis/vonis) tampil pada semua kategori | Must | US-6.1, BR-08 |
| FR-18 | Saran tindak lanjut per kategori sesuai Buku Panduan Bab 6 (ringkas, bahasa sederhana) | Must | US-6.2 |
| FR-19 | Peringatan suntik 2 varian: SUNTIK_AKTIF (risiko HIV/hepatitis + saran VCT) dan RIWAYAT_SUNTIK (tanpa menaikkan kategori) | Must | US-4.1, BR-06/07 |
| FR-20 | Halaman hasil menyarankan menyimpan/mencuplik layar; tidak ada URL hasil yang dapat diakses ulang | Must | US-6.3 |
| FR-21 | Tautan "Isi ulang" memulai pengisian baru dari langkah 1 (UUID baru) | Should | 4.6 |

## 6.5 Darurat & Edukasi

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-22 | Tombol mengambang "Lapor Sekarang – BNN 184" di pojok kanan bawah seluruh halaman | Must | US-7.1 |
| FR-23 | Tautan "Butuh bantuan segera?" di tiap langkah wizard membuka panel nomor darurat (BNN 184; 119; 119 ext 8; 112) beserta kapan memakainya | Must | US-7.1 |
| FR-24 | Ringkasan panduan krisis (overdosis; pikiran menyakiti diri; sakau) dapat dibuka dari halaman hasil | Should | US-7.1, Buku Panduan Bab 8 |
| FR-25 | Tautan menu Materi tampil di halaman hasil (semua kategori) dan di saran kategori Aman | Must | US-6.2 |

## 6.6 Data & Dasbor

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-26 | Hasil tersimpan sebagai baris anonim bertanda UUID acak sekali pakai; kolom identitas tidak ada; tanpa IP/user-agent/cookie pelacak | Must | NFR-01, 7.2 |
| FR-27 | Penghapusan terjadwal jawaban rinci setelah 24 bulan; agregat dipertahankan **[KEPUTUSAN TERBUKA: Q-04]** | Must | 2.1, Buku Panduan 7.5 |
| FR-28 | Dasbor admin hanya agregat (kategori; usia; provinsi; zat terbanyak) dengan ambang penyembunyian n<5 pada semua sel | Must | US-8.1 |
| FR-29 | Filter rentang waktu dasbor (bulan/tahun) | Should | US-8.2, Q-01 |
| FR-30 | Log akses dasbor (siapa, kapan) — tanpa mencatat isi jawaban | Must | NFR-08 |
| FR-31 | Ekspor dasbor (CSV/PDF) | Could | Q-02 |

## 6.7 Antisipasi Kesalahan Pengguna

| ID | Kebutuhan | Prioritas | Rujukan |
|---|---|---|---|
| FR-32 | Validasi klien ringan (field wajib) sebelum mengaktifkan "Lanjut"/"Submit", dengan pesan ramah per langkah | Must | US-3.1 |
| FR-33 | Server menolak payload tak valid dengan kode aturan V yang dilanggar (Lampiran C) dan pesan yang dapat dipahami awam pada antarmuka | Must | 8.3 |
| FR-34 | Bila koneksi terputus saat submit: pesan "belum terkirim" + tombol coba ulang pada layar yang sama | Should | 4.5 |
| FR-35 | Mode cetak ramah (versi instrumen kertas untuk kader, merujuk Buku Panduan) | Could | Q-06 |

---

# BAB 7 — ATURAN BISNIS & LOGIKA SKORING

> **Seluruh angka pada bab ini identik dengan dokumen Tahap 1 (acuan tunggal).** Bila implementasi menemukan selisih terhadap bab ini, hentikan dan laporkan — jangan "perbaiki" sendiri.

## BR-01 — Skor per zat S[z] (ASSIST)

Untuk tiap zat z dari 8 zat (GANJA, KOKAIN, STIMULAN, INHALAN, PENENANG, HALUSINOGEN, OPIOID, LAINNYA):

```
S[z] = 0                              bila Q1 zat z = "Tidak"
S[z] = Q2 + Q3 + Q4 + Q5 + Q6 + Q7    bila Q1 zat z = "Ya"          (rentang 0–39)
```

Nilai tiap butir mengikuti tabel skor induk (Lampiran B). Pertahanan server: setiap S[z] wajib berada dalam 0–39; di luar itu payload ditolak (V11).

## BR-02 — Tingkat per zat [FAKTA BAKU]

| S[z] | Tingkat zat |
|---|---|
| 0–3 | Rendah |
| 4–26 | Sedang |
| 27–39 | Tinggi |

*(ASSIST asli memakai ambang berbeda khusus alkohol; karena alkohol dikecualikan, tabel tunggal ini berlaku untuk seluruh zat yang ditanyakan.)*

## BR-03 — Skor DAST-10 (D)

```
D = 0                                                  bila semua Q1 = "Tidak" (Bagian 2 tidak diisi)
D = Σ p(i), untuk i = 1..10                            bila minimal satu Q1 = "Ya"

dengan:
p(i) = 1 bila d[i]="Ya", 0 bila d[i]="Tidak"           (untuk semua i ≠ 3)
p(3) = 1 bila d[3]="Tidak", 0 bila d[3]="Ya"           (butir ke-3 TERBALIK)
```

Rentang D: 0–10. Pembalikan D3 terjadi sepenuhnya di server — antarmuka tidak menandai butir ini secara mencolok agar tidak memancing jawaban tidak jujur.

## BR-04 — Tingkat DAST-10 dan pemetaannya [FAKTA BAKU untuk pemotongan; ADAPTASI untuk pemetaan]

| D | Tingkat DAST-10 | Pemetaan ke klasifikasi final |
|---|---|---|
| 0 | Tidak ada masalah terindikasi | Tidak menaikkan kategori |
| 1–2 | Rendah | Tidak menaikkan kategori |
| 3–5 | Sedang | Kandidat **RISIKO SEDANG** |
| 6–8 | Substansial | Kandidat **RISIKO TINGGI** |
| 9–10 | Berat | Kandidat **RISIKO TINGGI** |

## BR-05 — Klasifikasi final (prinsip: ambil kategori TERTINGGI)

Evaluasi berurutan — aturan PERTAMA yang terpenuhi menentukan hasil:

| Urut | Kondisi pemicu (cukup SATU yang benar) | Klasifikasi final |
|---|---|---|
| 1 | Ada zat dengan S[z] ≥ 27 | **RISIKO TINGGI (terindikasi kecanduan)** |
| 2 | D ≥ 6 | **RISIKO TINGGI (terindikasi kecanduan)** |
| 3 | Q8 = "Ya, dalam 3 bulan terakhir" | **RISIKO TINGGI (terindikasi kecanduan)** |
| 4 | Ada zat dengan 4 ≤ S[z] ≤ 26 | **RISIKO SEDANG** |
| 5 | 3 ≤ D ≤ 5 | **RISIKO SEDANG** |
| 6 | Tidak ada zat dengan Q1 = "Ya", ATAU semua S[z] ≤ 3 dan D ≤ 2 | **MASIH AMAN (RISIKO RENDAH)** |

Catatan: (a) bila semua Q1 = "Tidak" maka semua S[z] = 0 dan D = 0 sehingga aturan 1–5 tidak mungkin terpenuhi; (b) subjek yang memenuhi syarat "sedang" sekaligus "tinggi" otomatis jatuh ke Tinggi karena urutan evaluasi.

## BR-06 — Suntik dalam 3 bulan terakhir

Q8 = "Ya, dalam 3 bulan terakhir" **memaksa klasifikasi RISIKO TINGGI** apa pun skornya, dan menampilkan peringatan khusus risiko HIV/hepatitis B/C beserta saran pemeriksaan kesehatan sukarela (termasuk konseling dan tes HIV sukarela/VCT). Pemaksaan ini terjadi pada aturan 3 — tidak dapat ditunda atau dinonaktifkan.

## BR-07 — Riwayat suntik di luar 3 bulan [ADAPTASI]

Q8 = "Ya, bukan dalam 3 bulan terakhir" TIDAK menaikkan klasifikasi, tetapi halaman hasil tetap menampilkan kotak peringatan riwayat suntik (jangan berbagi jarum/siring; pertimbangkan pemeriksaan kesehatan sukarela; konsultasi pengurangan dampak buruk). Peringatan ini tidak boleh disembunyikan.

## BR-08 — Label, warna, dan isi wajib halaman hasil

| Klasifikasi | Label yang tampil | Warna |
|---|---|---|
| MASIH_AMAN_RENDAH | "Masih Aman (Risiko Rendah)" + kalimat wajib: *"Hasil ini TIDAK menjamin kondisi Anda tetap aman; ini hanya gambaran awal berdasarkan jawaban Anda."* | Hijau |
| RISIKO_SEDANG | "Risiko Sedang" | Kuning |
| RISIKO_TINGGI | "Risiko Tinggi (Terindikasi Kecanduan)" | Merah |

Halaman hasil SELALU menampilkan: (1) klasifikasi final; (2) skor rinci per zat beserta tingkatnya; (3) skor D beserta tingkatnya; (4) status Q8 dan peringatannya bila ada; (5) saran tindak lanjut sesuai kategori; (6) tombol "Lapor Sekarang – BNN 184".

## BR-09 — Jalur "semua tidak"

Bila seluruh Q1 = "Tidak": Q2–Q7, Q8, dan DAST-10 tidak ditampilkan dan tidak boleh ada dalam payload; hasil adalah MASIH AMAN (RISIKO RENDAH) dengan seluruh skor 0. Server menolak payload yang melanggar kondisi ini (V7–V9).

## BR-10 — Pengendalian perubahan skor/ambang

Skor, ambang, label, dan aturan klasifikasi hanya dapat berubah melalui: usulan tertulis → persetujuan pemilik produk + reviu ahli → pembaruan dokumen Tahap 1 → pembaruan serentak implementasi (seeder/service, tampilan) → pengujian ulang seluruh TC Lampiran D. Commit kode yang mengubah angka tanpa jejak proses ini wajib ditolak dalam reviu.

---

# BAB 8 — SPESIFIKASI API (RINGKAS)

> Bab ini memuat **kontrak perilaku** level fungsional. Nama rute final, penamaan field internal, dan struktuktur implementasi ditetapkan pada tahap implementasi (Tahap 3) — yang tidak boleh berubah adalah perilaku, struktur logika, dan semantik error di bawah ini.

## 8.1 Endpoint

| Metode & rute (indikatif) | Akses | Perilaku |
|---|---|---|
| `GET /monitoring` | Publik | Halaman menu Monitoring berisi kartu "Cek Risiko Anda" |
| `GET /monitoring/cek-risiko` | Publik | Memulai wizard (langkah 1 — persetujuan) |
| `POST /monitoring/cek-risiko/submit` | Publik | Mengirim seluruh jawaban sekali saja; respons = halaman hasil (dirender dari payload hasil); tidak ada endpoint pengambilan ulang |
| `GET /admin/monitoring/cek-risiko/agregat` | Login admin terbatas | Dasbor agregat dengan n<5 |

Catatan penting: **tidak ada** `GET /hasil/{id}` — hasil tidak dapat diakses ulang oleh siapa pun, termasuk pengisinya (Bab 4.5). Respons submit sekaligus merender halaman hasil.

## 8.2 Payload masukan (submit) — struktur logika

```json
{
  "persetujuan": true,
  "rentang_usia": "18_24",
  "jenis_kelamin": "L",
  "provinsi": "Jawa Barat",

  "zat": {
    "GANJA":      { "q1": "Ya", "q2": 1, "q3": 0, "q4": 0, "q5": 0, "q6": 0, "q7": 0 },
    "KOKAIN":     { "q1": "Tidak" },
    "STIMULAN":   { "q1": "Tidak" },
    "INHALAN":    { "q1": "Tidak" },
    "PENENANG":  { "q1": "Tidak" },
    "HALUSINOGEN": { "q1": "Tidak" },
    "OPIOID":     { "q1": "Tidak" },
    "LAINNYA":    { "q1": "Tidak" }
  },

  "q8": "TIDAK_PERNAH",
  "dast": { "d1": "Ya", "d2": "Tidak", "d3": "Ya", "d4": "Tidak", "d5": "Tidak",
            "d6": "Tidak", "d7": "Tidak", "d8": "Tidak", "d9": "Tidak", "d10": "Tidak" },
  "teks_zat_lain": null
}
```

Konvensi indeks jawaban:

| Butir | Nilai indeks |
|---|---|
| Q2–Q5 (lima pilihan) | 0 = Tidak pernah · 1 = Sekali/dua kali · 2 = Tiap bulan · 3 = Tiap minggu · 4 = Setiap hari/hampir setiap hari |
| Q6–Q7 (tiga pilihan) | 0 = Tidak pernah · 1 = Ya, bukan dalam 3 bulan terakhir · 2 = Ya, dalam 3 bulan terakhir |
| Q1 / d1–d10 | "Tidak" / "Ya" |
| Q8 | "TIDAK_PERNAH" / "YA_BUKAN_3BULAN" / "YA_3BULAN" |

Aturan kehadiran field (dijamin V5–V10): zat dengan `q1="Tidak"` hanya membawa `q1` (tanpa q2–q7); `q8` dan `dast` hanya hadir bila ≥1 zat "Ya"; `teks_zat_lain` hanya bermakna bila LAINNYA="Ya".

## 8.3 Semantik error validasi

Payload tak valid ditolak dengan **HTTP 422** dan daftar aturan V yang dilanggar (pesan antarmuka versi awam, tanpa mengungkap detail teknis):

| Pelanggaran | Kode aturan | Contoh pesan antarmuka |
|---|---|---|
| Persetujuan tidak dicentang | V1 | "Kuesioner hanya dapat diproses bila Anda menyetujui pernyataan di atas." |
| Rentang usia kosong/invalid | V2 | "Silakan pilih rentang usia Anda." |
| Jenis kelamin di luar L/P/X | V3 | "Pilihan jenis kelamin tidak dikenal." |
| Provinsi di luar daftar | V4 | "Provinsi yang dipilih tidak dikenal." |
| q1 tidak lengkap 8 zat / nilai lain | V5 | "Pastikan seluruh jenis zat telah dijawab." |
| q2–q7 kurang untuk zat "Ya" | V6 | "Masih ada pertanyaan yang belum dijawab." |
| q2–q7 terisi untuk zat "Tidak" | V7 | "Terdapat jawaban tidak konsisten — periksa kembali langkah zat." |
| q8 hilang saat ada zat "Ya" / terisi saat tidak ada | V8 | "Pertanyaan tentang suntik belum dijawab." |
| dast tidak lengkap / terisi saat tidak seharusnya | V9 | "Masih ada pertanyaan yang belum dijawab." |
| teks zat lain kosong/terlalu panjang saat LAINNYA="Ya" | V10 | "Tuliskan nama zat lain (maks. 100 karakter)." |
| Skor di luar rentang defensif | V11 | "Data tidak dapat diproses — silakan isi ulang." |

## 8.4 Payload hasil (struktur keluaran — dirender halaman hasil & disimpan baris anonim)

```json
{
  "klasifikasi": "RISIKO_SEDANG",
  "label_tampilan": "Risiko Sedang",
  "detail_zat": [
    { "kode": "GANJA",      "dipakai": true,  "skor": 4,  "tingkat": "SEDANG" },
    { "kode": "KOKAIN",     "dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" },
    { "kode": "STIMULAN",   "dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" },
    { "kode": "INHALAN",    "dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" },
    { "kode": "PENENANG",  "dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" },
    { "kode": "HALUSINOGEN","dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" },
    { "kode": "OPIOID",     "dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" },
    { "kode": "LAINNYA",    "dipakai": false, "skor": 0,  "tingkat": "TIDAK_DIPAKAI" }
  ],
  "dast": { "diisi": true, "total": 1, "tingkat": "RENDAH" },
  "suntik": { "jawaban": "TIDAK_PERNAH", "peringatan": null },
  "meta": {
    "rentang_usia": "18_24",
    "jenis_kelamin": "L",
    "provinsi": "Jawa Barat",
    "waktu_pengisian": "2026-10-07T09:15:00+07:00"
  }
}
```

Struktur ini identik dengan Tahap 1 B.7 (contoh di atas menggambarkan Contoh Kasus 2 Buku Panduan: Rizky — S[GANJA]=4, D=1 → RISIKO SEDANG). `suntik.peringatan` bernilai `"SUNTIK_AKTIF"` atau `"RIWAYAT_SUNTIK"` sesuai BR-06/07.

---

# BAB 9 — KEBUTUHAN NON-FUNGSIONAL (NFR)

## NFR-01 — Privasi & Anonimitas (Must)

Sistem tidak menyimpan: nama, NIK, tanggal lahir, alamat, kontak, lokasi GPS, alamat IP, user agent, sidik perangkat, atau cookie pelacak pada seluruh alur skrining. Setiap pengisian disimpan sebagai baris dengan UUID acak sekali pakai yang tidak diturunkan dari identitas, tidak disimpan di perangkat pengisi, dan tidak diperlihatkan ke pengisi. Endpoint skrining tidak menulis entri alamat-IP pada log akses (non-logging pada akses skrining). Teks bebas "zat lain" disanitasi (strip tag, escape, potong 100 karakter).

## NFR-02 — Keamanan (Must)

(1) Seluruh validasi dan skoring di server (FR-15) — input klien tidak dipercaya. (2) Perlindungan XSS pada satu-satunya field teks bebas. (3) Pembatasan laju (rate limiting) pada endpoint submit untuk mencegah pengisian spam massal — ambang ditetapkan implementasi dan tidak menghalangi pengguna normal **[ADAPTASI]**. (4) Dasbor admin di belakang autentikasi + otorisasi peran terbatas. (5) Header noindex/nofollow pada halaman wizard & hasil agar hasil tidak terindeks mesin pencari **[ADAPTASI]**.

## NFR-03 — Kinerja (Should)

Halaman hasil tampil ≤ 2 detik setelah submit pada koneksi seluler rata-rata 3G/4G di Indonesia. Pergantian langkah wizard terasa seketika (≤ 300 ms persepsi) — boleh memakai navigasi ringan tanpa memuat ulang seluruh halaman. Latensi server p95 untuk submit < 500 ms di luar faktor jaringan.

## NFR-04 — Skala & Retensi (Should)

Menampung lonjakan wajar saat kampanye/penyuluhan tanpa degradasi (ambang beban ditetapkan bersama pada uji beban M2). Penghapusan terjadwal 24 bulan berjalan otomatis (FR-27) dan hasilnya dapat diverifikasi (jumlah baris tersisa vs agregat).

## NFR-05 — Aksesibilitas & Usability (Must)

(1) Kontras warna minimal WCAG 2.1 AA untuk seluruh teks — termasuk teks pada lingkaran warna hasil; warna hasil selalu DIPERKAYA label teks, bukan warna semata (akomodasi buta warna). (2) Font terbaca pada ponsel; target sentuh ≥ 44 px. (3) Bahasa sederhana (target pemahaman usia 15 tahun), istilah teknis dihindari atau dijelaskan. (4) Navigasi papan tuntas (keyboard) dasar untuk semua kontrol formulir. (5) Tidak mengandalkan elemen yang hanya bermakna lewat warna/ikon.

## NFR-06 — Gaya Bahasa Non-Stigma (Must)

Seluruh teks antarmuka mengikuti panduan bahasa Buku Panduan 7.8: tidak melabeli orang (gunakan "orang yang memakai narkoba", bukan "penyalah guna"); tidak mengancam/menakut-nakuti; tidak menyebut hasil "vonis"; nada suportif dan mengajak pada bantuan. Kalimat wajib (penafian BR-08) tidak boleh diparafrasakan tanpa persetujuan pemilik produk.

## NFR-07 — Kompatibilitas (Should)

Berfungsi penuh pada dua versi terakhir browser utama (Chrome, Safari, Firefox, Edge — termasuk versi Android/iOS) tanpa fitur yang hilang; penurunan tata letak yang wajar pada layar 320 px diperbolehkan.

## NFR-08 — Auditabilitas & Tata Kelola Akses (Must)

Akses dasbor memerlukan peran admin terbatas; setiap akses tercatat (siapa, kapan) tanpa mencatat isi jawaban; tampilan per-baris jawaban tidak tersedia pada dasbor. Kebijakan penolakan permintaan data eksternal (Buku Panduan 7.7) berlaku: data bersifat anonim dan tidak dapat diidentifikasi.

## NFR-09 — Identitas Visual (Should)

Antarmuka mengikuti identitas situs KIPAN: latar biru tua, aksen kuning, tipografi tebal tanpa-serif; hasil menggunakan tiga warna kategori (hijau/kuning/merah) yang tetap DIPERKAYA label teks. Konsistensi komponen (tombol, kartu, formulir) dengan pola situs yang ada.

---

# BAB 10 — METRIK SUKSES & KPI

Prinsip pengukuran: **semua metrik agregat dan anonim** — tidak ada pelacakan individu; perhitungan dari tabel hasil tersimpan atau pencacah agregat; seluruh tampilan metrik tunduk pada ambang n<5. Angka target adalah usulan awal untuk disepakati pemilik produk pada M0, bukan janji.

| ID | Metrik | Definisi | Target awal (usulan) | Cara ukur |
|---|---|---|---|---|
| KPI-01 | Pengisian selesai per bulan | Jumlah baris hasil tersimpan per bulan kalender | Tren naik stabil bulan-ke-bulan; baseline ditetapkan 3 bulan pertama | Pencacah agregat baris |
| KPI-02 | Tingkat penyelesaian wizard | Pengisian selesai ÷ pengisian dimulai (klik "Mulai") | ≥ 70% | Pencacah agregat mulai vs selesai (tanpa identitas) **[ADAPTASI]** |
| KPI-03 | Distribusi kategori hasil | Proporsi Aman / Sedang / Tinggi per periode | Pemantauan (bukan target) — angka ekstrem perlu dicek kualitas data | Agregat klasifikasi |
| KPI-04 | Kualitas data opsional | Proporsi pengisian dengan provinsi terisi | ≥ 50% | Agregat kolom provinsi |
| KPI-05 | Interaksi tautan bantuan | Jumlah klik menuju Materi dan tombol BNN 184 dari halaman hasil | Pemantauan — indikator edukatif | Pencacah agregat CTA |
| KPI-06 | Ketersediaan & kesehatan teknis | Uptime halaman; latensi p95 submit; error rate | Uptime ≥ 99,5%; p95 < 500 ms; error 5xx < 0,5% | Pemantauan infrastruktur |
| KPI-07 | Kebersihan input | Rasio penolakan 422 per total submit | Pemantauan anomali (lonjakan = indikasi spam/penyalahgunaan) | Log agregat validasi |

Catatan interpretasi yang wajib menempel pada setiap pemakaian angka (dasbor dan laporan): pengisian mandiri (self-selected) sehingga **tidak mewakili populasi**; tidak boleh dibandingkan langsung dengan angka survei nasional; perubahan kecil pada wilayah kecil tidak bermakna statistik (karenanya n<5).

---

# BAB 11 — ROADMAP & MILESTONE

Durasi bersifat indikatif untuk tim kecil (1–2 developer + pemilik produk); M3 berjalan paralel dan merupakan **gerbang wajib** sebelum M4.

| Milestone | Lingkup | Kriteria keluar (exit) | Durasi indikatif |
|---|---|---|---|
| **M0 — Persiapan & Persetujuan** | Reviu & persetujuan PRD ini; penetapan target KPI (Bab 10); penyiapan lingkungan pengembangan/staging; penunjukan peninjau ahli (psikolog klinis / konselor adiksi / asesor BNN) | PRD disetujui tertulis; target KPI terkunci; akses lingkungan siap | 1–2 minggu |
| **M1 — MVP Internal** | Seluruh FR **Must** (wizard, skoring server, hasil, darurat, dasbor n<5, penyimpanan anonim); seluruh NFR Must teruji dasar | Semua 19 kasus uji (Lampiran D) lulus otomatis/manual di staging; walkthrough pemilik produk diterima | 2–4 minggu |
| **M2 — Uji Terbatas** | Uji pengguna kelompok kecil (kader/pengurus, 10–30 orang) termasuk uji pemahaman butir & bahasa; uji beban ringan; perbaikan UX | Tingkat penyelesaian uji ≥ 70%; tidak ada kebingungan butir yang belum selesai; NFR-03 terverifikasi | 2 minggu |
| **M3 — Reviu Ahli & Validasi Konten** | Reviu butir & redaksi oleh minimal 3 penilai ahli; penyesuaian redaksi (tanpa mengubah skor/ambang tanpa proses BR-10); keputusan pertanyaan terbuka Bab 14 | Laporan reviu ahli diterima; seluruh perubahan redaksi terdokumentasi; status "belum tervalidasi" tetap terpasang hingga uji formal | 2–4 minggu (paralel) |
| **M4 — Rilis Publik & Pemantauan** | Deploy produksi; pengumuman; pemantauan KPI bulanan; verifikasi nomor darurat tiap 6 bulan; tinjauan instrumen 12 bulan | Fitur live tanpa insiden P1 selama 2 minggu pertama; laporan KPI bulan pertama terbit | Berjalan |

Setelah M4, iterasi kandidat (belum diikat): ekspor dasbor (Q-02), multi-bahasa (Q-05), mode luring kader (Q-06), penyempurnaan berdasar data pemakaian.

---

# BAB 12 — RISIKO & MITIGASI

Skala: Dampak (Tinggi/T, Sedang/S, Rendah/R) × Peluang (Tinggi/T, Sedang/S, Rendah/R).

| ID | Risiko | D | P | Mitigasi utama | Pemilik |
|---|---|---|---|---|---|
| R-01 | Hasil ditafsirkan sebagai diagnosis atau vonis | T | S | Penafian wajib di semua kategori (BR-08); bahasa sederhana; edukasi pengurus; larangan klaim "tervalidasi" | Pemilik produk |
| R-02 | Instrumen belum tervalidasi — keputusan salah arah dari hasil | T | S | Gerbang reviu ahli M3; status "adaptasi belum divalidasi" menetap; rencana uji validasi formal (Buku Panduan 9.2) | Pemilik produk + ahli |
| R-03 | Kebocoran/penyalahgunaan data jawaban | T | R | Minimalisasi data (tanpa identitas/IP); non-logging akses skrining; akses dasbor terbatas + log; sanitasi teks | Developer + admin |
| R-04 | Data dipakai/diminta untuk penindakan hukum | T | R | Data secara teknis tak tertaut individu; kebijakan penolakan permintaan (Buku Panduan 7.7) | Pengurus KIPAN |
| R-05 | Pengisi berada dalam krisis saat mengisi | T | S | Tombol darurat global; tautan bantuan tiap langkah; panduan krisis dari halaman hasil; pesan "jangan tunggu kuesioner" | Developer |
| R-06 | Salah paham butir (usia muda / baca-tulis terbatas) | S | S | Bahasa sederhana; uji pemahaman pada M2; saran pendampingan orang dewasa untuk <15 tahun | Developer + ahli |
| R-07 | Konten darurat usang (nomor berubah/ekstensi berhenti) | S | S | Verifikasi berkala 6 bulan [PERLU VERIFIKASI]; daftar nomor terpusat mudah diperbarui | Admin konten |
| R-08 | Angka dasbor disalahartikan sebagai data nasional | S | T | Disclaimer sampling mandiri menetap di dasbor (AC-8.1.4); edukasi pengguna dasbor | Pengurus KIPAN |
| R-09 | Lonjakan akses menurunkan kinerja saat kampanye | S | R | NFR-03/04; uji beban M2; arsitektur stateless ringan | Developer |
| R-10 | Kepercayaan pengunjung rendah → tidak jujur / tidak mengisi | S | S | Transparansi persetujuan 4 poin; tanpa kolom identitas; publikasi ringkas kebijakan privasi | Pemilik produk |
| R-11 | Perubahan skor/ambang menyusup tanpa proses (regresi) | T | R | BR-10: 19 TC otomatis wajib lulus di CI; reviu kode menolak perubahan angka tanpa jejak proses | Developer |

---

# BAB 13 — BATASAN, ASUMSI & KETERGANTUNGAN

## 13.1 Batasan instrumen (wajib dipahami pengelola; diringkas dari Buku Panduan 9.1)

(1) Bergantung laporan sendiri — tidak ada verifikasi kejujuran. (2) Bias kerapatan sosial — topik sensitif cenderung direndahkan. (3) Belum tervalidasi lokal. (4) Kombinasi ASSIST+DAST menjadi 3 kategori adalah sintesis proyek [ADAPTASI]. (5) Tidak mencakup alkohol/tembakau. (6) Sampling mandiri — agregat tidak mewakili populasi. (7) Pemahaman butir dapat berbeda pada usia dini. (8) Kerangka waktu ASSIST 3 bulan — pemakaian berat lampau yang telah berhenti terbaca rendah (sesuai desain). (9) Kasus ambang (mis. S=3 vs S=4) sensitif terhadap satu butir. (10) Bukan alat hukum/administratif.

## 13.2 Asumsi

(1) Kanal BNN 184 aktif 24 jam dan dapat menerima peningkatan arahan dari fitur ini **[PERLU VERIFIKASI]**. (2) Daftar provinsi resmi = 38 + mekanisme pembaruan bila pemekaran **[PERLU VERIFIKASI]**. (3) Pengunjung memahami bahasa Indonesia tulis. (4) Admin dasbor mendapat orientasi membaca data agregat. (5) Situs KIPAN berjalan dan dapat menampung halaman baru tanpa perombakan menu besar.

## 13.3 Ketergantungan

(1) **Reviu ahli (M3)** — gerbang rilis publik; tanpa ini fitur tetap berstatus "uji coba terbatas". (2) **Keputusan pemilik produk** atas pertanyaan terbuka Bab 14 (retensi, filter dasbor, dsb.). (3) **Daftar nomor darurat** terverifikasi dan pemilik konten yang memperbaruinya. (4) **Menu Materi** situs KIPAN tersedia sebagai tautan tindak lanjut. (5) Infrastruktur hosting mendukung penjadwalan penghapusan (cron/scheduler).

## 13.4 Daftar [PERLU VERIFIKASI] terkonsolidasi

| Butir | Kegunaan di fitur | Status perlu cek |
|---|---|---|
| BNN 184 (telepon; alternatif +62-21-8087-1566/1567; 24 jam) | Tombol darurat, saran kategori Tinggi | Terverifikasi per 6 Okt 2026 — cek ulang tiap 6 bulan |
| 119 ekstensi 8 (SEJIWA, layanan kesehatan jiwa) | Panel darurat, panduan krisis | Terverifikasi per 6 Okt 2026 — kanal resmi terbaru |
| 112 (nomor darurat nasional) | Panel darurat | Cek berkala kanal aktif daerah |
| Pasal 55 UU No. 35/2009 (wajib lapor; IPWL) | Saran kategori Tinggi | Terverifikasi per 6 Okt 2026; Pasal 103 & peraturan pelaksana IPWL perlu konfirmasi redaksi |
| UU No. 27/2022 (UU PDP) | Kerangka privasi | Pasal spesifik bila dikutip formal |
| Daftar 38 provinsi | Dropdown KP-3 | Sesuaikan bila pemekaran wilayah |
| Kode dokumen WHO/MSD/MSB/01.6a | Sitasi manual ASSIST | Konfirmasi sebelum publikasi resmi |

---

# BAB 14 — PERTANYAAN TERBUKA & KEPUTUSAN MENUNGGU

Keputusan berikut tidak memblokir pengembangan M1 (implementasi memakai usulan sementara yang tertulis), tetapi harus diputuskan pemilik produk sebelum atau selama M3.

| ID | Pertanyaan | Usulan sementara (dipakai M1) | Dampak bila berubah |
|---|---|---|---|
| Q-01 | Apakah dasbor perlu filter rentang waktu? | Ya — filter bulan/tahun (FR-29) | Kecil |
| Q-02 | Apakah dasbor perlu ekspor CSV/PDF untuk laporan pengurus? | Tidak di rilis pertama (FR-31 Could) | Kecil |
| Q-03 | Apakah pengisi dapat mengunduh hasil sebagai PDF? | Tidak — saran cuplik layar (FR-20) demi privasi & kesederhanaan | Sedang |
| Q-04 | Retensi final jawaban rinci? | 24 bulan lalu dihapus/diiradiasi agregat (Buku Panduan 7.5) | Kecil (konfigurasi) |
| Q-05 | Multi-bahasa (EN/daerah)? | Tidak di rilis pertama | Besar bila disetujui |
| Q-06 | Mode kertas luring untuk kader (entri massal)? | Tidak di rilis pertama; kader memakai Buku Panduan versi cetak | Sedang |
| Q-07 | Apakah dasbor menampilkan tren "zat terbanyak dilaporkan"? | Ya — agregat + n<5 | Kecil |
| Q-08 | Apakah fitur perlu pengumuman resmi/kanal tersendiri saat rilis? | Ya — koordinasi humas pada M4 | Kecil (nonteknis) |

---

# LAMPIRAN A — INSTRUMEN KUESIONER LENGKAP

> Reproduksi utuh dari dokumen Tahap 1 (Bagian A). Redaksi pada antarmuka TIDAK BOLEH menyimpang dari teks di bawah tanpa proses BR-10. Setiap butir wajib tetap membawa keterangan "diadaptasi dari …" pada halaman informasi kuesioner (tidak harus per layar).

## A.1 Bagian 0 — Persetujuan & Data Minimal (Anonim)

**Teks pengantar (tampil sebelum kuesioner):** "Pengisian hanya memakan waktu sekitar 5–10 menit. Anda tidak perlu memasukkan nama, NIK, alamat, nomor telepon, atau surel. Jawaban Anda tidak dapat dipakai untuk mengidentifikasi diri Anda."

### KP-0. Pernyataan persetujuan (wajib dicentang — tanpa ini kuesioner tidak dapat dimulai)

> Saya mengisi kuesioner ini secara sukarela. Saya memahami bahwa:
> 1. Kuesioner ini adalah alat skrining edukatif awal, **bukan diagnosis medis dan bukan vonis hukum**.
> 2. Hasil hanya berupa gambaran awal dan saran tindak lanjut; bila diperlukan, penilaian lanjutan hanya dapat dilakukan tenaga profesional (dokter, psikiater, psikolog, konselor adiksi, atau asesor BNN).
> 3. Jawaban saya bersifat **anonim** — tidak ada nama, NIK, alamat, kontak, maupun alamat IP yang disimpan.
> 4. Data hanya digunakan dalam bentuk rekapitulasi agregat (kumpulan) untuk pemantauan program pencegahan KIPAN, dan **tidak digunakan untuk kepentingan penindakan hukum**.

### KP-1. Rentang usia (wajib) [ADAPTASI — dimensi proyek]

(a) Kurang dari 15 tahun; (b) 15–17 tahun; (c) 18–24 tahun; (d) 25–34 tahun; (e) 35 tahun atau lebih.

### KP-2. Jenis kelamin (opsional)

Laki-laki; Perempuan; Tidak ingin menyebutkan.

### KP-3. Provinsi domisili (opsional)

Dropdown 38 provinsi + "Tidak ingin menyebutkan" **[PERLU VERIFIKASI — sesuaikan bila ada pemekaran wilayah]**.

## A.2 Bagian 1 — Butir Skrining ASSIST (Q1–Q8)

### Q1. Pemakaian seumur hidup — per zat

**"Sepanjang hidup Anda, apakah Anda pernah memakai zat-zat berikut — meskipun hanya satu kali — dan bukan karena anjuran dokter?"** *(diadaptasi dari ASSIST v3.1, pertanyaan pembuka per zat)*

| Kode | Zat | Jawaban |
|---|---|---|
| GANJA | Ganja / kanabis (mariyuana, hashish) | Tidak / Ya |
| KOKAIN | Kokain | Tidak / Ya |
| STIMULAN | Stimulan jenis amfetamin (mis. sabu, ekstasi) | Tidak / Ya |
| INHALAN | Inhalan (mis. lem, thinner) | Tidak / Ya |
| PENENANG | Obat penenang / obat tidur yang dipakai tanpa resep | Tidak / Ya |
| HALUSINOGEN | Halusinogen (mis. LSD, jamur psilosibin) | Tidak / Ya |
| OPIOID | Opioid (mis. heroin, putaw, morfin) | Tidak / Ya |
| LAINNYA | Zat lain yang memengaruhi pikiran/perasaan — sebutkan: ………… (teks bebas, maks. 100 karakter) | Tidak / Ya |

Aturan lompat: zat yang dijawab "Tidak" dilewati pada Q2–Q7. Jika minimal satu zat dijawab "Ya", Q8 dan Bagian 2 ditampilkan.

### Q2–Q7 — Pertanyaan lanjutan per zat yang pernah dipakai (3 bulan terakhir)

**Q2.** "Dalam 3 bulan terakhir, seberapa sering Anda memakai [zat]?" *(diadaptasi dari ASSIST v3.1 butir 2)* — Tidak pernah (0) · 1 atau 2 kali (2) · Tiap bulan (3) · Tiap minggu (4) · Setiap hari/hampir setiap hari (6)

**Q3.** "Dalam 3 bulan terakhir, seberapa sering Anda merasakan keinginan atau dorongan kuat untuk memakai [zat]?" *(butir 3)* — Tidak pernah (0) · Sekali atau dua kali (3) · Tiap bulan (4) · Tiap minggu (5) · Setiap hari/hampir setiap hari (6)

**Q4.** "Dalam 3 bulan terakhir, seberapa sering pemakaian [zat] menimbulkan masalah bagi Anda — misalnya masalah kesehatan, hubungan dengan orang lain, pekerjaan atau sekolah, hukum, atau keuangan?" *(butir 4)* — Tidak pernah (0) · Sekali atau dua kali (4) · Tiap bulan (5) · Tiap minggu (6) · Setiap hari/hampir setiap hari (7)

**Q5.** "Dalam 3 bulan terakhir, seberapa sering Anda gagal melakukan hal-hal yang biasanya diharapkan dari Anda (misalnya pekerjaan, tugas sekolah/kuliah, atau kewajiban di rumah) karena pemakaian [zat]?" *(butir 5)* — Tidak pernah (0) · Sekali atau dua kali (5) · Tiap bulan (6) · Tiap minggu (7) · Setiap hari/hampir setiap hari (8)

**Q6.** "Apakah teman, keluarga, atau orang lain yang mengenal Anda pernah menyatakan khawatir atau keberatan tentang pemakaian [zat] Anda?" *(butir 6)* — Tidak pernah (0) · Ya, tetapi bukan dalam 3 bulan terakhir (3) · Ya, dalam 3 bulan terakhir (6)

**Q7.** "Apakah Anda pernah mencoba mengurangi atau berhenti memakai [zat], tetapi tidak berhasil?" *(butir 7)* — Tidak pernah (0) · Ya, tetapi bukan dalam 3 bulan terakhir (3) · Ya, dalam 3 bulan terakhir (6)

### Q8. Pemakaian dengan cara disuntik

**"Apakah Anda pernah memakai zat/narkoba dengan cara disuntik?"** *(diadaptasi dari ASSIST v3.1 butir 8; ditanyakan satu kali setelah blok per zat — **[ADAPTASI]** penyederhanaan untuk wizard web)*

| Pilihan | Perlakuan |
|---|---|
| Tidak pernah | Tidak masuk skor |
| Ya, tetapi bukan dalam 3 bulan terakhir | Tidak masuk skor; memunculkan peringatan riwayat suntik **[ADAPTASI]** |
| Ya, dalam 3 bulan terakhir | Tidak masuk skor; **memaksa kategori Risiko Tinggi** + peringatan risiko HIV/hepatitis |

## A.3 Bagian 2 — Butir DAST-10

**Syarat tampil:** hanya muncul bila minimal satu zat pada Q1 dijawab "Ya". Kerangka waktu: **12 bulan terakhir**; cakupan: narkoba/obat **di luar anjuran dokter** (alkohol dan tembakau tidak termasuk).

**Teks pengantar:** "Sepuluh pertanyaan berikut menyangkut pengalaman Anda selama 12 bulan terakhir dengan narkoba atau obat-obatan yang dipakai tanpa anjuran dokter. Alkohol dan rokok tidak termasuk. Jawab dengan jujur sesuai pengalaman Anda — jawaban Anda anonim."

| No | Butir (adaptasi DAST-10, Skinner 1982) | Ya | Tidak |
|---|---|---|---|
| D1 | Apakah Anda pernah memakai narkoba atau obat-obatan selain untuk keperluan pengobatan yang dianjurkan dokter? | 1 | 0 |
| D2 | Apakah Anda pernah memakai lebih dari satu jenis narkoba/obat pada saat yang bersamaan? | 1 | 0 |
| D3 | **Apakah Anda selalu bisa berhenti memakai narkoba jika Anda mau?** | **0** | **1** ← terbalik |
| D4 | Apakah Anda pernah mengalami "blackout" (tidak mengingat kejadian) atau "flashback" (merasakan kembali pengaruh zat padahal tidak sedang memakai) akibat pemakaian narkoba? | 1 | 0 |
| D5 | Apakah Anda pernah merasa buruk, menyesal, atau bersalah tentang pemakaian narkoba Anda? | 1 | 0 |
| D6 | Apakah pasangan Anda, orang tua, atau keluarga Anda pernah mengeluh atau mengkhawatirkan keterlibatan Anda dengan narkoba? | 1 | 0 |
| D7 | Apakah teman atau kerabat Anda pernah mengetahui atau menduga Anda memakai narkoba? | 1 | 0 |
| D8 | Apakah Anda pernah melakukan perbuatan yang melanggar hukum demi mendapatkan narkoba? | 1 | 0 |
| D9 | Apakah Anda pernah merasa sakit atau sangat tidak nyaman setelah berhenti atau mengurangi pemakaian narkoba (gejala sakau/putus zat)? | 1 | 0 |
| D10 | Apakah Anda pernah mengalami masalah kesehatan akibat narkoba — misalnya gangguan daya ingat, hepatitis, kejang, atau pendarahan? | 1 | 0 |

---

# LAMPIRAN B — TABEL SKOR & ATURAN KLASIFIKASI FINAL

> Identik dokumen Tahap 1 (Bagian B). Ini kontrak angka bagi implementasi dan pengujian.

## B.1 Tabel skor induk

**Butir lima pilihan (Q2–Q5):**

| Butir | Tidak pernah | Sekali/dua kali | Tiap bulan | Tiap minggu | Setiap hari/hampir setiap hari |
|---|---|---|---|---|---|
| Q2 — frekuensi pakai | 0 | 2 | 3 | 4 | 6 |
| Q3 — keinginan kuat | 0 | 3 | 4 | 5 | 6 |
| Q4 — masalah | 0 | 4 | 5 | 6 | 7 |
| Q5 — gagal kewajiban | 0 | 5 | 6 | 7 | 8 |

**Butir tiga pilihan (Q6–Q7):**

| Butir | Tidak pernah | Ya, bukan 3 bulan terakhir | Ya, 3 bulan terakhir |
|---|---|---|---|
| Q6 — orang lain khawatir | 0 | 3 | 6 |
| Q7 — gagal mengurangi/berhenti | 0 | 3 | 6 |

**DAST-10:** "Ya" = 1, "Tidak" = 0, **kecuali D3 terbalik** ("Ya" = 0, "Tidak" = 1). **Q8 tidak masuk skor sama sekali.**

## B.2 Rumus ringkas

```
S[z] = 0                              bila Q1 zat z = "Tidak"
S[z] = Q2 + Q3 + Q4 + Q5 + Q6 + Q7    bila Q1 zat z = "Ya"          (0–39)

D = 0                                 bila semua Q1 = "Tidak"
D = Σ skor 10 butir DAST (D3 terbalik) bila ada zat yang dipakai      (0–10)

Tinggi  : ada S ≥ 27, ATAU D ≥ 6, ATAU suntik dalam 3 bulan terakhir
Sedang  : ada S 4–26, ATAU D 3–5
Aman    : sisanya (tidak ada zat dipakai, atau semua S ≤ 3 dan D ≤ 2)
```

## B.3 Tingkat per zat dan tingkat DAST

| S[z] | Tingkat zat | | D | Tingkat DAST-10 | Pemetaan final |
|---|---|---|---|---|---|
| 0–3 | Rendah | | 0 | Tidak ada masalah terindikasi | Tidak menaikkan |
| 4–26 | Sedang | | 1–2 | Rendah | Tidak menaikkan |
| 27–39 | Tinggi | | 3–5 | Sedang | Kandidat **SEDANG** |
| | | | 6–8 | Substansial | Kandidat **TINGGI** |
| | | | 9–10 | Berat | Kandidat **TINGGI** |

## B.4 Tabel keputusan klasifikasi final (6 aturan berurutan)

| Urut | Kondisi pemicu (cukup SATU yang benar) | Klasifikasi final |
|---|---|---|
| 1 | Ada zat dengan S[z] ≥ 27 | **RISIKO TINGGI (terindikasi kecanduan)** |
| 2 | D ≥ 6 | **RISIKO TINGGI (terindikasi kecanduan)** |
| 3 | Q8 = "Ya, dalam 3 bulan terakhir" (suntik) | **RISIKO TINGGI (terindikasi kecanduan)** |
| 4 | Ada zat dengan 4 ≤ S[z] ≤ 26 | **RISIKO SEDANG** |
| 5 | 3 ≤ D ≤ 5 | **RISIKO SEDANG** |
| 6 | Tidak ada zat dengan Q1 = "Ya", ATAU semua S[z] ≤ 3 dan D ≤ 2 | **MASIH AMAN (RISIKO RENDAH)** |

## B.5 Label tampilan

| Klasifikasi | Label yang tampil | Warna |
|---|---|---|
| MASIH_AMAN_RENDAH | "Masih Aman (Risiko Rendah)" + kalimat wajib: *"Hasil ini TIDAK menjamin kondisi Anda tetap aman; ini hanya gambaran awal berdasarkan jawaban Anda."* | Hijau |
| RISIKO_SEDANG | "Risiko Sedang" | Kuning |
| RISIKO_TINGGI | "Risiko Tinggi (Terindikasi Kecanduan)" | Merah |

---

# LAMPIRAN C — ATURAN VALIDASI MASUKAN V1–V11

> Identik dokumen Tahap 1 (B.8). Seluruh aturan dievaluasi di server; validasi klien hanya berlapis pertama (FR-32), bukan pengganti.

| Kode | Aturan |
|---|---|
| V1 | `persetujuan` wajib `true` — tanpa itu seluruh payload ditolak (HTTP 422). |
| V2 | `rentang_usia` wajib; salah satu dari: LT15, 15_17, 18_24, 25_34, 35_PLUS. |
| V3 | `jenis_kelamin` opsional; bila diisi harus salah satu: L, P, X. |
| V4 | `provinsi` opsional; bila diisi harus anggota daftar provinsi resmi (bukan teks bebas). |
| V5 | `q1[z]` wajib untuk **semua 8 zat**; nilai hanya "Tidak" atau "Ya". |
| V6 | Bila `q1[z] = "Ya"` → `q2[z]..q7[z]` wajib diisi dan valid. |
| V7 | Bila `q1[z] = "Tidak"` → `q2[z]..q7[z]` harus kosong/null (ditolak bila terisi — penegakan logika lompat di sisi server). |
| V8 | `q8` wajib **hanya bila** minimal satu `q1 = "Ya"`; harus null bila semua "Tidak". |
| V9 | `d[1..10]` wajib **hanya bila** minimal satu `q1 = "Ya"`; harus null semua bila tidak. |
| V10 | Bila `q1[LAINNYA] = "Ya"` → `teks_zat_lain` wajib (1–100 karakter, disanitasi); bila "Tidak" → teks diabaikan/dihapus. |
| V11 | Pertahanan server: total `S[z]` harus 0–39 dan `D` harus 0–10; di luar rentang → tolak. |

---

# LAMPIRAN D — 19 KASUS UJI PENERIMAAN

> Identik dokumen Tahap 1 (B.9). Seluruh TC wajib lulus (otomatis/manual) sebagai kriteria keluar M1; setiap perubahan kode skoring/validasi mewajibkan pengulangan seluruh TC (BR-10).

## D.1 Kasus uji skoring (15 kasus)

**Notasi jawaban Q2–Q7** (berurutan: Q2, Q3, Q4, Q5, Q6, Q7): **TP** = Tidak pernah · **S2** = Sekali/dua kali · **TB** = Tiap bulan · **TM** = Tiap minggu · **SH** = Setiap hari/hampir setiap hari · **Y3** = Ya, dalam 3 bulan terakhir · **Y≠3** = Ya, bukan dalam 3 bulan terakhir. **DAST**: hanya butir bernilai "Ya" yang ditulis; D3 selalu dicatat eksplisit; butir lain = "Tidak".

| TC | Input (zat yang Q1="Ya" + jawaban Q2–Q7) | Q8 | DAST | Skor terhitung | Klasifikasi yang diharapkan | Aspek yang diuji |
|---|---|---|---|---|---|---|
| TC-01 | Semua Q1 = "Tidak" | (tidak tampil) | (tidak tampil) | Semua S[z]=0; D=0 | **MASIH AMAN (RISIKO RENDAH)** | Kasus dasar semua "Tidak" |
| TC-02 | GANJA: [TP,TP,TP,TP,TP,TP] | TIDAK_PERNAH | D3=Ya; lainnya Tidak → D=0 | S(GANJA)=0 (RENDAH) | **MASIH AMAN** | Pernah coba, tanpa pemakaian terkini; D3 terbalik memberi 0 |
| TC-03 | GANJA: [TB,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1; D3=Ya → D=1 | S(GANJA)=3 (RENDAH) | **MASIH AMAN** | Batas atas Rendah per zat (S=3) |
| TC-04 | GANJA: [TM,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1; D3=Ya → D=1 | S(GANJA)=4 (SEDANG) | **RISIKO SEDANG** | Batas bawah Sedang per zat (S=4) |
| TC-05 | STIMULAN: [SH,SH,TM,SH,TP,TP] | TIDAK_PERNAH | Ya: D1,D4,D5,D9; D3=Tidak → D=5 | S(STIMULAN)=6+6+6+8=26 (SEDANG) | **RISIKO SEDANG** | Batas atas Sedang zat (26) + batas atas DAST Sedang (5) sekaligus |
| TC-06 | OPIOID: [SH,SH,SH,SH,TP,TP] | TIDAK_PERNAH | Ya: D1; D3=Ya → D=1 | S(OPIOID)=6+6+7+8=27 (TINGGI) | **RISIKO TINGGI** | Batas bawah Tinggi per zat (S=27) |
| TC-07 | GANJA: [TP,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1,D5; D3=Ya → D=2 | S(GANJA)=0 | **MASIH AMAN** | Batas atas DAST kategori rendah (D=2). Catatan: bila D3="Tidak", D=3 → klasifikasi berubah Sedang (uji butir terbalik) |
| TC-08 | GANJA: [TP,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1,D5,D7; D3=Ya → D=3 | S(GANJA)=0 | **RISIKO SEDANG** | Batas bawah DAST Sedang (D=3) — DAST saja cukup menaikkan klasifikasi walau ASSIST rendah |
| TC-09 | GANJA: [S2,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1,D4,D5,D7,D9; D3=Ya → D=5 | S(GANJA)=2 | **RISIKO SEDANG** | Batas atas DAST Sedang (D=5) |
| TC-10 | GANJA: [S2,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1,D2,D4,D5,D7,D9; D3=Ya → D=6 | S(GANJA)=2 | **RISIKO TINGGI** | Batas bawah DAST Tinggi (D=6) |
| TC-11 | STIMULAN: [TB,TP,TP,TP,TP,TP] | **YA_3BULAN** | Ya: D1; D3=Ya → D=1 | S(STIMULAN)=3 | **RISIKO TINGGI** + peringatan SUNTIK_AKTIF (HIV/hepatitis) | Suntik ≤3 bulan memaksa Tinggi meski semua skor rendah |
| TC-12 | GANJA: [S2,TP,TP,TP,TP,TP] | **YA_BUKAN_3BULAN** | Ya: D1; D3=Ya → D=1 | S(GANJA)=2 | **MASIH AMAN** + peringatan RIWAYAT_SUNTIK tetap tampil | [ADAPTASI] Suntik di luar 3 bulan tidak menaikkan klasifikasi |
| TC-13 | GANJA: [TM,S2,TP,TP,Y≠3,TP]; STIMULAN: [SH,TB,TB,TB,Y3,Y3]; INHALAN: [TP,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1,D2,D4,D5,D7,D9,D10; D3=Tidak → D=8 | S(GANJA)=4+3+0+0+3+0=10 (SEDANG); S(STIMULAN)=6+4+5+6+6+6=33 (TINGGI); S(INHALAN)=0 | **RISIKO TINGGI** | Multi-zat, prinsip kategori tertinggi; skor rinci semua zat tetap tampil |
| TC-14 | GANJA: [TB,S2,TP,TP,TP,TP]; PENENANG: [S2,TP,TP,TP,TP,TP]; KOKAIN: Q1=Tidak | TIDAK_PERNAH | Ya: D1,D2; D3=Tidak → D=3 | S(GANJA)=3+3=6 (SEDANG); S(PENENANG)=2 (RENDAH); S(KOKAIN)=0 | **RISIKO SEDANG** | Multi-zat campuran rendah+sedang; D3 terbalik berkontribusi |
| TC-15 | LAINNYA (teks: "obat batuk tertentu"): [TM,TP,TP,TP,TP,TP] | TIDAK_PERNAH | Ya: D1; D3=Ya → D=1 | S(LAINNYA)=4 (SEDANG) | **RISIKO SEDANG** | Zat lain dengan teks bebas; validasi V10 |

## D.2 Kasus uji validasi (4 kasus)

| TC | Input | Output yang diharapkan |
|---|---|---|
| TC-V1 | Semua q1 = "Tidak" TETAPI DAST terisi | Ditolak 422 — Bagian 2 hanya boleh terisi bila minimal satu q1 = "Ya" (V9) |
| TC-V2 | q1[GANJA] = "Tidak" TETAPI q2[GANJA] terisi | Ditolak 422 — penegakan logika lompat di server (V7) |
| TC-V3 | q1[LAINNYA] = "Ya" dengan teks zat lain kosong | Ditolak 422 — teks zat lain wajib (V10) |
| TC-V4 | `persetujuan` tidak dicentang | Ditolak 422 — payload tidak diproses sama sekali (V1) |

---

# LAMPIRAN E — GLOSARIUM & DAFTAR RUJUKAN

## E.1 Glosarium untuk developer

| Istilah | Arti dalam fitur ini |
|---|---|
| ASSIST v3.1 | Alcohol, Smoking and Substance Involvement Screening Test (WHO) — basis Bagian 1; 8 zat, skor per zat 0–39 |
| DAST-10 | Drug Abuse Screening Test 10 butir (Skinner 1982) — basis Bagian 2; skor 0–10; butir D3 terbalik |
| S[z] | Skor ASSIST untuk zat z (z = salah satu dari 8 kode zat) |
| D | Total skor DAST-10 |
| Q8 | Pertanyaan tunggal pemakaian suntik (3 pilihan; tidak masuk skor) |
| Klasifikasi final | Salah satu dari MASIH_AMAN_RENDAH / RISIKO_SEDANG / RISIKO_TINGGI hasil 6 aturan berurutan |
| Skip logic | Aturan menyembunyikan/menolak pertanyaan lanjutan untuk zat yang dijawab "Tidak" (V6–V7) |
| Butir terbalik | Butir yang skornya berlawanan dengan arah jawaban (D3: "Tidak" = 1) |
| UUID sekali pakai | Penanda baris data acak yang tidak diturunkan dari identitas dan tidak dipakai ulang |
| Ambang n<5 | Penyembunyian angka agregat yang kurang dari 5 menjadi "<5" demi anonimitas |
| Agregat | Angka kumpulan yang tidak dapat dirunut ke individu |
| IPWL | Institusi Penerima Wajib Lapor (UU 35/2009) — fasilitas rehabilitasi bagi pelapor diri |
| VCT | Konseling dan tes HIV secara sukarela |
| Penafian | Kalimat wajib yang menegaskan hasil bukan jaminan/diagnosis (BR-08) |
| Payload | Struktur data yang dikirim/diterima endpoint (Bab 8) |
| MoSCoW | Skala prioritas: Must / Should / Could / Won't |
| Milestone (M0–M4) | Tahapan roadmap Bab 11; M3 = gerbang reviu ahli |

## E.2 Daftar rujukan

1. World Health Organization. *The Alcohol, Smoking and Substance Involvement Screening Test (ASSIST): manual for use in primary care.* Geneva: WHO; 2010 (WHO/MSD/MSB/01.6a). **[PERLU VERIFIKASI kode dokumen saat sitasi final]**
2. Skinner HA. The Drug Abuse Screening Test. *Addictive Behaviors.* 1982;7(4):363–371. doi:10.1016/0306-4603(82)90005-3
3. Humeniuk R, Ali R, Babor TF, et al.; WHO ASSIST Phase II Study Group. Validation of the ASSIST. *Addiction.* 2008;103(6):922–927.
4. Humeniuk R, Dennington V, Ali R; WHO ASSIST Phase III Study Group. *The effectiveness of a brief intervention for illicit drug use linked to the ASSIST in primary health care settings.* Geneva: WHO; 2008.
5. Yudko E, Lozhkina OV, Fouts PA. A comprehensive review of the psychometric properties of the Drug Abuse Screening Test. *Journal of Substance Abuse Treatment.* 2007;32(2):189–198.
6. Republik Indonesia. *Undang-Undang Nomor 35 Tahun 2009 tentang Narkotika.* (Pasal 55 wajib lapor — terverifikasi 6 Okt 2026; Pasal 103 & peraturan pelaksana IPWL **[PERLU VERIFIKASI]** redaksi lengkap.)
7. Republik Indonesia. *Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.* **[PERLU VERIFIKASI pasal spesifik bila dikutip formal]**
8. Badan Narkotika Nasional RI. Layanan "Lapor!" — Call Center 184. https://bnn.go.id (diakses 6 Okt 2026; terverifikasi aktif 24 jam).
9. Kementerian Kesehatan RI. Layanan kesehatan jiwa 119 ekstensi 8 (SEJIWA). (Terverifikasi per 6 Okt 2026; **[PERLU VERIFIKASI]** kanal resmi terbaru.)
10. Dokumen internal proyek: *Tahap 1 — Instrumen dan Spesifikasi Perhitungan* (acuan tunggal angka); *Buku Panduan Kuesioner* (konten, etika, krisis); *Dokumen Desain Teknis SIM KIPAN v2.0* (konteks sistem induk).

---

*Dokumen PRD v0.1 ini menunggu persetujuan pemilik produk dan hasil reviu ahli (M3) sebelum statusnya naik menjadi "Disetujui untuk Implementasi". Segala perselisihan angka dengan dokumen Tahap 1 diselesaikan demi Tahap 1.*







