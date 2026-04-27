# Bun + ElysiaJS + Drizzle + MySQL Starter

Project ini adalah fondasi backend sederhana yang menggunakan Bun, ElysiaJS, Drizzle, dan MySQL.

## Yang Sudah Disiapkan

- server ElysiaJS dengan endpoint dasar
- konfigurasi environment untuk aplikasi dan database
- integrasi awal Drizzle ke MySQL
- schema contoh `users`
- script dasar untuk development dan workflow database

## Menjalankan Project

1. Salin `.env.example` menjadi `.env`.
2. Sesuaikan konfigurasi database MySQL.
3. Jalankan server development:

```bash
bun run dev
```

## Script Penting

```bash
bun run dev
bun run start
bun run check
bun run db:generate
bun run db:migrate
bun run db:studio
```

## Endpoint Awal

- `GET /`
- `GET /health`
- `GET /db/ping`
