<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\RolesAndPermissionsSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminUserManagementTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(RolesAndPermissionsSeeder::class);
    }

    public function test_guest_cannot_access_user_management(): void
    {
        $this->get('/admin/users')->assertRedirect('/login');
    }

    public function test_admin_can_view_users_list(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('super-admin');

        $response = $this->actingAs($admin)->get('/admin/users');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Admin/Users/Index'));
    }

    public function test_admin_can_create_new_user_without_specifying_role(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('super-admin');

        $response = $this->actingAs($admin)->post('/admin/users', [
            'name' => 'Budi Verifikator',
            'email' => 'budi@kipan.or.id',
            'password' => 'secret12345',
            'password_confirmation' => 'secret12345',
        ]);

        $response->assertRedirect('/admin/users');
        $this->assertDatabaseHas('users', [
            'name' => 'Budi Verifikator',
            'email' => 'budi@kipan.or.id',
        ]);

        $newUser = User::where('email', 'budi@kipan.or.id')->first();
        $this->assertTrue($newUser->hasRole('admin'));
        $this->assertTrue(Hash::check('secret12345', $newUser->password));
    }

    public function test_cannot_create_user_with_duplicate_email(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('super-admin');

        $existing = User::factory()->create(['email' => 'duplicate@kipan.or.id']);

        $response = $this->actingAs($admin)->post('/admin/users', [
            'name' => 'User Duplikat',
            'email' => 'duplicate@kipan.or.id',
            'password' => 'secret12345',
            'password_confirmation' => 'secret12345',
        ]);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_admin_can_update_user_info(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('super-admin');

        $target = User::factory()->create([
            'name' => 'Old Name',
            'email' => 'old@kipan.or.id',
        ]);

        $response = $this->actingAs($admin)->put("/admin/users/{$target->id}", [
            'name' => 'New Name',
            'email' => 'new@kipan.or.id',
        ]);

        $response->assertRedirect('/admin/users');
        $this->assertDatabaseHas('users', [
            'id' => $target->id,
            'name' => 'New Name',
            'email' => 'new@kipan.or.id',
        ]);
    }

    public function test_user_cannot_delete_their_own_account(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('super-admin');

        $response = $this->actingAs($admin)->delete("/admin/users/{$admin->id}");

        $response->assertSessionHas('error');
        $this->assertDatabaseHas('users', ['id' => $admin->id]);
    }

    public function test_admin_can_delete_other_user(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('super-admin');

        $target = User::factory()->create();

        $response = $this->actingAs($admin)->delete("/admin/users/{$target->id}");

        $response->assertRedirect('/admin/users');
        $this->assertDatabaseMissing('users', ['id' => $target->id]);
    }
}
