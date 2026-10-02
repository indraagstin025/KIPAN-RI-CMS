<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\RolesAndPermissionsSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminAuthTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(RolesAndPermissionsSeeder::class);
    }

    // =========================================================
    // Guest access protection
    // =========================================================

    public function test_guest_is_redirected_to_login_when_accessing_dashboard(): void
    {
        $response = $this->get('/admin/dashboard');

        $response->assertRedirect('/login');
    }

    public function test_guest_is_redirected_to_login_when_accessing_news(): void
    {
        $this->get('/admin/news')->assertRedirect('/login');
    }

    public function test_guest_is_redirected_to_login_when_accessing_events(): void
    {
        $this->get('/admin/events')->assertRedirect('/login');
    }

    // =========================================================
    // Login page
    // =========================================================

    public function test_login_page_is_accessible_to_guests(): void
    {
        $this->get('/login')->assertStatus(200);
    }

    public function test_authenticated_user_is_redirected_away_from_login(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->get('/login')->assertRedirect();
    }

    // =========================================================
    // Authentication
    // =========================================================

    public function test_user_can_login_with_valid_credentials(): void
    {
        $user = User::factory()->create([
            'email' => 'test@kipan.or.id',
            'password' => bcrypt('password'),
        ]);

        $response = $this->post('/login', [
            'email' => 'test@kipan.or.id',
            'password' => 'password',
        ]);

        $response->assertRedirect('/admin/dashboard');
        $this->assertAuthenticatedAs($user);
    }

    public function test_user_cannot_login_with_wrong_password(): void
    {
        User::factory()->create([
            'email' => 'test@kipan.or.id',
            'password' => bcrypt('correct-password'),
        ]);

        $this->post('/login', [
            'email' => 'test@kipan.or.id',
            'password' => 'wrong-password',
        ])->assertSessionHasErrors('email');

        $this->assertGuest();
    }

    public function test_user_cannot_login_with_nonexistent_email(): void
    {
        $this->post('/login', [
            'email' => 'nobody@kipan.or.id',
            'password' => 'any-password',
        ])->assertSessionHasErrors('email');

        $this->assertGuest();
    }

    // =========================================================
    // Authenticated access
    // =========================================================

    public function test_authenticated_user_with_permission_can_access_dashboard(): void
    {
        $user = User::factory()->create();
        $user->assignRole('super-admin');

        $this->actingAs($user)->get('/admin/dashboard')->assertStatus(200);
    }

    // =========================================================
    // Logout
    // =========================================================

    public function test_authenticated_user_can_logout(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->post('/logout')->assertRedirect('/');

        $this->assertGuest();
    }

    // =========================================================
    // Roles and permissions
    // =========================================================

    public function test_super_admin_role_has_view_dashboard_permission(): void
    {
        $user = User::factory()->create();
        $user->assignRole('super-admin');

        $this->assertTrue($user->can('view-dashboard'));
    }

    public function test_viewer_role_cannot_create_news(): void
    {
        $user = User::factory()->create();
        $user->assignRole('viewer');

        $this->assertFalse($user->can('create-news'));
    }

    public function test_editor_role_can_publish_news(): void
    {
        $user = User::factory()->create();
        $user->assignRole('editor');

        $this->assertTrue($user->can('publish-news'));
    }

    public function test_author_role_cannot_publish_news(): void
    {
        $user = User::factory()->create();
        $user->assignRole('author');

        $this->assertFalse($user->can('publish-news'));
    }

    public function test_author_role_cannot_delete_news(): void
    {
        $user = User::factory()->create();
        $user->assignRole('author');

        $this->assertFalse($user->can('delete-news'));
    }

    // =========================================================
    // Public website not affected
    // =========================================================

    public function test_public_homepage_is_still_accessible(): void
    {
        $this->get('/')->assertStatus(200);
    }

    public function test_public_berita_page_is_still_accessible(): void
    {
        $this->get('/berita')->assertStatus(200);
    }

    public function test_public_agenda_page_is_still_accessible(): void
    {
        $this->get('/agenda')->assertStatus(200);
    }

    // =========================================================
    // Rate limiting
    // =========================================================

    public function test_login_is_rate_limited_after_five_failed_attempts(): void
    {
        User::factory()->create(['email' => 'target@kipan.or.id']);

        for ($i = 0; $i < 5; $i++) {
            $this->post('/login', [
                'email' => 'target@kipan.or.id',
                'password' => 'wrong',
            ]);
        }

        $response = $this->post('/login', [
            'email' => 'target@kipan.or.id',
            'password' => 'wrong',
        ]);

        $response->assertSessionHasErrors('email');
    }
}
