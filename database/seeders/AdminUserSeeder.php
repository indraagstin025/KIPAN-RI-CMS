<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    /**
     * Seed the initial super-admin user.
     *
     * Credentials are read from environment variables:
     *   ADMIN_NAME    — defaults to "Super Admin"
     *   ADMIN_EMAIL   — defaults to "admin@kipan.or.id"
     *   ADMIN_PASSWORD — defaults to a secure random value (shown once in output)
     *
     * Idempotent: if a user with that email already exists, only the role is
     * (re)assigned. The password is NOT overwritten on subsequent runs.
     */
    public function run(): void
    {
        $name = env('ADMIN_NAME', 'Super Admin');
        $email = env('ADMIN_EMAIL', 'admin@kipan.or.id');
        $plainPassword = env('ADMIN_PASSWORD');

        $isNew = ! User::where('email', $email)->exists();
        $passwordToUse = $plainPassword ?? ($isNew ? $this->generatePassword() : null);

        $userData = ['name' => $name];

        if ($isNew && $passwordToUse) {
            $userData['password'] = Hash::make($passwordToUse);
        }

        $user = User::firstOrCreate(
            ['email' => $email],
            array_merge($userData, ['password' => Hash::make($passwordToUse ?? str()->random(32))]),
        );

        if (! $user->hasRole('super-admin')) {
            $user->assignRole('super-admin');
        }

        if ($isNew) {
            $this->command->warn('Admin user created:');
            $this->command->line("  Email   : {$email}");
            $this->command->line("  Password: {$passwordToUse}");
            $this->command->warn('Change this password immediately after first login.');
        } else {
            $this->command->info("Admin user {$email} already exists — role ensured.");
        }
    }

    private function generatePassword(): string
    {
        return str()->password(16);
    }
}
