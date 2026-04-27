# Planning Pembuatan Project Baru

## Tujuan

Buat project backend baru di folder ini dengan menggunakan Bun sebagai runtime dan package manager, ElysiaJS sebagai web framework, Drizzle sebagai ORM, dan MySQL sebagai database.

## Hasil yang Diharapkan

Implementasi tahap awal ini harus menghasilkan fondasi project yang rapi, mudah dipahami, dan siap dilanjutkan untuk pengembangan fitur berikutnya.

Hasil akhirnya diharapkan mencakup:

- struktur project berbasis Bun
- server ElysiaJS yang dapat dijalankan
- integrasi awal Drizzle untuk MySQL
- konfigurasi environment untuk koneksi database
- struktur kode awal yang mudah dikembangkan

## Ruang Lingkup

Pekerjaan implementasi cukup mencakup hal-hal berikut:

1. Inisialisasi project baru menggunakan Bun di folder ini.
2. Pasang dependency utama yang dibutuhkan:
   - ElysiaJS
   - Drizzle
   - MySQL driver/client
3. Susun struktur folder dan file dasar agar project mudah dibaca dan dirawat.
4. Siapkan entry point aplikasi dan endpoint sederhana untuk memastikan server berjalan.
5. Siapkan konfigurasi koneksi database berbasis environment variable.
6. Hubungkan Drizzle ke MySQL sebagai dasar untuk pengelolaan schema dan query.
7. Tambahkan contoh schema atau model awal sebagai referensi implementasi lanjutan.
8. Siapkan kebutuhan dasar untuk workflow development dan migrasi database.

## Deliverable

Output yang diharapkan dari implementasi:

- project Bun baru di folder ini
- dependency utama sudah terpasang
- struktur folder `src` atau struktur setara yang jelas
- file konfigurasi environment
- konfigurasi Drizzle
- setup koneksi MySQL
- endpoint sederhana untuk health check atau uji server
- contoh schema/model awal
- script dasar untuk development dan workflow database

## Arahan Implementasi

- Gunakan pendekatan yang sederhana, jelas, dan mudah diteruskan oleh programmer lain.
- Hindari desain yang terlalu kompleks pada tahap awal.
- Fokus pada fondasi project, bukan pada fitur bisnis.
- Prioritaskan struktur yang konsisten dan mudah dikembangkan.
- Dokumentasi singkat boleh ditambahkan bila membantu proses handoff.

## Kriteria Selesai

Task ini dianggap selesai jika:

- project dapat dijalankan menggunakan Bun
- server ElysiaJS berhasil start
- konfigurasi MySQL menggunakan environment variable
- Drizzle sudah siap dipakai untuk schema dan migrasi
- struktur project cukup jelas untuk dilanjutkan oleh programmer atau model yang lebih murah

## Di Luar Scope

Bagian berikut tidak perlu dikerjakan pada tahap ini:

- autentikasi
- fitur bisnis yang kompleks
- arsitektur modular tingkat lanjut
- deployment production
- testing yang lengkap

## Instruksi Penutup

Bangun fondasi project saja. Pastikan hasilnya cukup rapi, stabil, dan jelas sehingga implementasi tahap berikutnya bisa dikerjakan dengan cepat tanpa perlu menyusun ulang struktur dari awal.
