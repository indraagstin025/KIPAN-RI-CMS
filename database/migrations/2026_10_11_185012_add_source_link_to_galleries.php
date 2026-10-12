<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('galleries', function (Blueprint $table) {
            // Galeri tautan (IG/YouTube/Drive) agar tak wajib upload foto
            // asli ke server: hemat storage + tanpa wajah di server.
            $table->string('source', 10)->default('upload')->after('image');
            $table->string('external_url', 500)->nullable()->after('source');
            $table->string('provider', 20)->nullable()->after('external_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('galleries', function (Blueprint $table) {
            $table->dropColumn(['source', 'external_url', 'provider']);
        });
    }
};
