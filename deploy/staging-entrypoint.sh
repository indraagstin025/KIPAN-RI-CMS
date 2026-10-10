#!/bin/sh
# staging-entrypoint.sh — boot kipan-cms staging: migrasi SQLite lalu Apache.
# .env dimount dari compose (fail-closed bila APP_KEY kosong).
set -eu
cd /var/www/html
: "${APP_KEY:?APP_KEY kosong — isi .env.cms}"
touch database/database.sqlite
chown www-data:www-data database/database.sqlite
php artisan migrate --force
php artisan config:cache || true
php artisan route:cache || true
exec apache2-foreground
