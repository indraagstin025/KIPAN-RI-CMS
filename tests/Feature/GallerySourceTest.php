<?php

namespace Tests\Feature;

use App\Models\Gallery;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

// Galeri tautan (IG/YouTube/Drive): tanpa upload foto asli ke server.
class GallerySourceTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        return User::factory()->create();
    }

    public function test_create_link_youtube_ok_provider_derived(): void
    {
        $this->actingAs($this->admin())->post('/admin/gallery', [
            'title' => 'Aksi Lapangan UJI',
            'status' => 'published',
            'source' => 'link',
            'external_url' => 'https://youtu.be/dQw4w9WgXcQ',
        ])->assertRedirect('/admin/gallery');

        $row = Gallery::where('title', 'Aksi Lapangan UJI')->firstOrFail();
        $this->assertSame('link', $row->source);
        $this->assertSame('youtube', $row->provider);
        $this->assertNull($row->image);
    }

    public function test_create_link_evil_host_rejected(): void
    {
        $this->actingAs($this->admin())->post('/admin/gallery', [
            'title' => 'Jahat UJI',
            'status' => 'draft',
            'source' => 'link',
            'external_url' => 'https://evil.example/x',
        ])->assertSessionHasErrors('external_url');

        $this->assertSame(0, Gallery::where('title', 'Jahat UJI')->count());
    }

    public function test_create_link_javascript_rejected(): void
    {
        $this->actingAs($this->admin())->post('/admin/gallery', [
            'title' => 'XSS UJI',
            'status' => 'draft',
            'source' => 'link',
            'external_url' => 'javascript:alert(1)',
        ])->assertSessionHasErrors('external_url');
    }

    public function test_create_upload_still_works(): void
    {
        Storage::fake('public');

        $this->actingAs($this->admin())->post('/admin/gallery', [
            'title' => 'Foto Asli UJI',
            'status' => 'published',
            'source' => 'upload',
            'image' => UploadedFile::fake()->image('asli.jpg', 800, 600),
        ])->assertRedirect('/admin/gallery');

        $row = Gallery::where('title', 'Foto Asli UJI')->firstOrFail();
        $this->assertSame('upload', $row->source);
        $this->assertNull($row->external_url);
        Storage::disk('public')->assertExists($row->image);
    }

    public function test_public_index_shows_link_card(): void
    {
        Gallery::create([
            'title' => 'IG UJI', 'status' => 'published', 'source' => 'link',
            'external_url' => 'https://instagram.com/p/abc123/', 'provider' => 'instagram',
            'created_by' => $this->admin()->id,
        ]);

        $this->get('/galeri')->assertOk()->assertSee('IG UJI', false);
    }
}
