#!/bin/bash

wait_for_db() {
    until mysqladmin ping -h"$DB_HOST" -P"$DB_PORT" --silent; do
        echo "waiting for MySQL"
        sleep 1
    done
}

DB_HOST=db
DB_PORT=3306

wait_for_db

php artisan migrate

php artisan db:seed --class=PostsSeeder

php artisan serve --host=0.0.0.0 --port=3001
