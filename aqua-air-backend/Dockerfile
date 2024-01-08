FROM php:8.2.12

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /app/backend
COPY . .
RUN composer install

EXPOSE 3001
CMD php artisan serve --host=0.0.0.0 --port=3001
