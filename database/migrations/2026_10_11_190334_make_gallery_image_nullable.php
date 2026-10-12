<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Baris tautan tak punya berkas lokal, jadi kolom image harus nullable.
        // Raw SQL agar tanpa doctrine/dbal (tidak ada di composer).
        DB::statement('ALTER TABLE galleries ALTER COLUMN image DROP NOT NULL');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('ALTER TABLE galleries ALTER COLUMN image SET NOT NULL');
    }
};
