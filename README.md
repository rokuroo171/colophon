# Website Colophon

Website resmi untuk Colophon, penerbit independen aplikasi desktop, layanan mandiri, dan perkakas sumber terbuka.

## Teknologi yang Digunakan

- Framework: Astro (menghasilkan berkas HTML statis murni)
- Styling: Tailwind CSS v4
- Progressive enhancement: Modul JavaScript vanilla
- Konten: Markdown dengan skema front matter

## Pengembangan Lokal

```bash
# Memasang dependensi
npm install

# Menjalankan server pengembangan lokal
npm run dev

# Membangun berkas statis produksi (tersimpan di folder /dist)
npm run build

# Meninjau pratinjau hasil build secara lokal
npm run preview
```

## Panduan Deploy Website

Website ini menghasilkan berkas statis murni (file HTML, CSS, dan JS mandiri di dalam folder `dist/`), sehingga dapat di-deploy secara mudah dan gratis ke berbagai layanan hosting statis.

### 1. Cloudflare Pages (Rekomendasi)

1. Sambungkan repositori GitHub Anda ke dasbor Cloudflare Pages.
2. Buat proyek baru (*Create a project > Connect to Git*).
3. Masukkan konfigurasi build berikut:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Klik tombol **Save and Deploy**.

### 2. GitHub Pages

1. Buka halaman repositori di GitHub, lalu pilih menu **Settings > Pages**.
2. Pada opsi **Build and deployment > Source**, pilih **GitHub Actions**.
3. Gunakan templat workflow Astro bawaan GitHub Actions atau buat berkas `.github/workflows/deploy.yml` dengan perintah build `npm run build` serta target upload folder `dist`.

### 3. Vercel atau Netlify

1. Impor repositori GitHub ke akun Vercel atau Netlify Anda.
2. Platform akan mengenali framework Astro secara otomatis.
3. Pastikan kolom konfigurasi build sudah sesuai:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Klik tombol **Deploy**.

## Mengubah Konfigurasi Situs

- Nama website dan tautan repositori: ubah berkas `src/config/site.json`.
- Token desain warna dan tipografi: ubah berkas `src/styles/global.css`.
- Konten katalog rilis: tambah atau perbarui berkas Markdown pada folder `src/content/releases/` (versi bahasa Inggris) dan `src/content/releases_id/` (versi bahasa Indonesia).
