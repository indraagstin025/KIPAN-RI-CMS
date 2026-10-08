<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Seed roles and permissions.
     *
     * Idempotent: safe to run multiple times — will not create duplicates
     * or break existing users.
     */
    public function run(): void
    {
        // Reset cached roles and permissions before seeding
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            // Dashboard
            'view-dashboard',

            // News
            'view-news',
            'create-news',
            'edit-news',
            'delete-news',
            'publish-news',

            // Events (Agenda)
            'view-events',
            'create-events',
            'edit-events',
            'delete-events',
            'publish-events',

            // Programs
            'view-programs',
            'create-programs',
            'edit-programs',
            'delete-programs',
            'publish-programs',

            // Gallery
            'view-gallery',
            'create-gallery',
            'edit-gallery',
            'delete-gallery',

            // Media
            'manage-media',

            // Users
            'manage-users',

            // Settings
            'manage-settings',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // super-admin: all permissions (bypasses all checks via gate override in config)
        $superAdmin = Role::firstOrCreate(['name' => 'super-admin']);
        $superAdmin->syncPermissions($permissions);

        // admin: all CMS permissions except manage-users and manage-settings
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $admin->syncPermissions([
            'view-dashboard',
            'view-news', 'create-news', 'edit-news', 'delete-news', 'publish-news',
            'view-events', 'create-events', 'edit-events', 'delete-events', 'publish-events',
            'view-programs', 'create-programs', 'edit-programs', 'delete-programs', 'publish-programs',
            'view-gallery', 'create-gallery', 'edit-gallery', 'delete-gallery',
            'manage-media',
        ]);

        // editor: can create/edit content and publish, no delete
        $editor = Role::firstOrCreate(['name' => 'editor']);
        $editor->syncPermissions([
            'view-dashboard',
            'view-news', 'create-news', 'edit-news', 'publish-news',
            'view-events', 'create-events', 'edit-events', 'publish-events',
            'view-programs', 'create-programs', 'edit-programs', 'publish-programs',
            'view-gallery', 'create-gallery', 'edit-gallery',
            'manage-media',
        ]);

        // author: can create and edit own content, cannot publish or delete
        $author = Role::firstOrCreate(['name' => 'author']);
        $author->syncPermissions([
            'view-dashboard',
            'view-news', 'create-news', 'edit-news',
            'view-events', 'create-events', 'edit-events',
            'view-programs', 'create-programs', 'edit-programs',
            'view-gallery', 'create-gallery',
            'manage-media',
        ]);

        // viewer: read-only access to CMS dashboard
        $viewer = Role::firstOrCreate(['name' => 'viewer']);
        $viewer->syncPermissions([
            'view-dashboard',
            'view-news',
            'view-events',
            'view-programs',
            'view-gallery',
        ]);

        $this->command->info('Roles and permissions seeded successfully.');
    }
}
