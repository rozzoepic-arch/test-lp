# Landing Page Portofolio IoT — Owen Reza

Selamat datang di proyek landing page portofolio pertama Anda! Halaman web ini dirancang dengan gaya visual modern **Telemetry Minimalist** (latar *Abyss Navy* `#0B1220` dan aksen *Signal Cyan* `#22D3EE`), dibangun murni menggunakan **HTML5, CSS3, dan JavaScript standar** tanpa ketergantungan rumit (*zero dependency*), sehingga sangat ramah bagi pemula untuk dipahami, dijalankan, dan dimodifikasi secara mandiri.

---

## 📁 Struktur Berkas Proyek

Proyek ini memiliki struktur bersih dan rapi:

```text
test-lp/
├── index.html       # Struktur konten semantik (Navbar, Hero, Tentang, Proyek, Kontak, Footer)
├── styles.css       # Seluruh gaya desain, variabel warna (design tokens), dan tata letak responsif
├── script.js        # Logika interaktif: simulasi data 7 titik, menu mobile, salin email
├── serve.ps1        # Skrip lokal web server ringan Windows PowerShell (HttpListener native)
├── assets/          # Ikon dan aset lokal
│   └── favicon.svg  # Favicon SVG simpul node IoT
├── PRD.md           # Dokumen spesifikasi kebutuhan produk (P0/P1)
├── README.md        # Panduan pemula, cara menjalankan, dan petunjuk kustomisasi
└── stitch_portofolio_iot_owen_reza/ # Sumber acuan desain UI dari Google Stitch (tetap dipertahankan)
    ├── portfolio_owen_reza_desktop/
    ├── portfolio_owen_reza_mobile/
    └── telemetry_minimalist/
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Halaman web ini adalah situs statis biasa. Anda dapat menjalankannya dengan beberapa cara mudah:

### Cara 1: Menggunakan Web Server Lokal PowerShell (Rekomendasi untuk Windows)
Tanpa perlu instalasi Node.js atau Python, Anda dapat menjalankan server bawaan Windows melalui PowerShell:
1. Buka PowerShell di folder `test-lp`.
2. Jalankan perintah:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 8080
   ```
3. Buka peramban (Chrome, Edge, atau Firefox) dan kunjungi:
   👉 **`http://127.0.0.1:8080/`** atau **`http://localhost:8080/`**

### Cara 2: Langsung Buka Berkas (Double-Click)
Cukup klik ganda berkas `index.html` dari File Explorer Windows Anda. Halaman akan langsung terbuka di peramban favorit Anda tanpa perlu server apa pun.

---

## ⚙️ Fitur Utama yang Telah Diimplementasikan

1. **Aksesibilitas & Struktur Semantik:**
   - Atribut bahasa `lang="id"`.
   - Satu judul `<h1>` utama di Hero: *"Mengeksplorasi IoT dan Dashboard Monitoring"*.
   - Tombol lewati konten (*skip to main content link*).
   - Seluruh target interaktif memenuhi standar ukuran sentuh minimal 44 × 44 px.
   - Indikator fokus keyboard terlihat jelas (`:focus-visible`).
   - Mode ramah gerak (`prefers-reduced-motion: reduce`) yang otomatis menonaktifkan animasi dan smooth-scroll jika diatur pengguna.
   - Tetap terbaca rapi saat JavaScript dimatikan (menampilkan sampel statis acuan dan penjelasan).

2. **Mini Dashboard "Monitoring Ruangan" (7 Sampel Tetap):**
   - Menampilkan label permanen **Data simulasi**.
   - Keadaan awal memuat **Sampel 7 dari 7 (08.30)**: Suhu `28,4 °C`, Kelembapan `67%`.
   - Tombol **Ganti sampel** memutar sampel berikutnya: dari 7 kembali ke 1 (08.00 — `27,8 °C`, `68%`), lalu 2, 3, dan seterusnya.
   - Grafik SVG inline memetakan ketujuh titik pengukuran dengan sumbu waktu (08.00, 08.15, 08.30) dan sumbu suhu (°C). Titik koordinat aktif berpindah secara sinkron bersama nilai metrik, label waktu, dan ringkasan teks pembaca layar (`aria-live="polite"`).

3. **Kartu Konsep Proyek:**
   - 3 kartu konsep awal:
     1. *Monitoring Suhu dan Kelembapan*
     2. *Monitoring Konsumsi Energi*
     3. *Monitoring Kualitas Jaringan*
   - Dilengkapi badge **Konsep** dan kontrol akordeon **Lihat konsep** (`<details>` / `<summary>`) yang menyajikan rincian *Masalah*, *Rencana Solusi*, dan *Langkah Awal* langsung di dalam kartu.

4. **Navigasi & Menu Mobile:**
   - Menu desktop: Beranda, Tentang, Proyek, Kontak.
   - Menu mobile dengan tombol *Menu* (hamburger/terminal), atribut `aria-expanded`, serta fitur penutupan via tombol `Escape` dengan pemindahan fokus otomatis kembali ke tombol.
   - Jarak *scroll-margin-top* memastikan judul bagian tidak tertutup bilah navigasi yang menempel di atas (*sticky header*).

5. **Kontak Langsung:**
   - Tautan `mailto:owenrezasyaputra@gmail.com` yang valid untuk mengirim pesan langsung.
   - Tombol interaktif untuk menyalin alamat email ke papan klip (*clipboard*) disertai umpan balik *toast notification*.
   - Akun LinkedIn dan GitHub disembunyikan dengan rapi karena belum diberikan (mencegah tautan rusak / *broken placeholder*).

---

## 🛠️ Panduan Kustomisasi Konten (Untuk Pemula)

Semua konten dapat diperbarui dengan membuka berkas di teks editor (seperti Antigravity, VS Code, atau Notepad):

### 1. Mengubah Data Profil & Identitas
Buka [`index.html`](file:///c:/Users/ADVAN/Documents/nyoba-vc/test-lp/index.html) dan cari bagian:
- **Nama & Kampus:** Cari teks `Owen Reza` dan `Universitas Musamus Merauke`.
- **Bio Tentang:** Cari elemen `<div class="about-bio-box">` untuk memperbarui pengantar diri Anda.
- **Email:** Cari teks `owenrezasyaputra@gmail.com` dan atribut `href="mailto:owenrezasyaputra@gmail.com"`.
- Buka juga [`script.js`](file:///c:/Users/ADVAN/Documents/nyoba-vc/test-lp/script.js) pada objek `profile` di baris teratas:
  ```javascript
  const profile = {
    name: "Owen Reza",
    campus: "Universitas Musamus Merauke",
    email: "owenrezasyaputra@gmail.com",
    // Isi URL jika sudah memiliki profil:
    githubUrl: "",
    linkedinUrl: ""
  };
  ```

### 2. Menyesuaikan Konsep Proyek
Buka [`index.html`](file:///c:/Users/ADVAN/Documents/nyoba-vc/test-lp/index.html), cari bagian `<section id="proyek">`:
- Anda dapat mengubah judul `<h3 class="project-card-title">`, deskripsi singkat, tag teknologi `<span class="project-tech-tag">`, serta rincian `<div class="disclosure-content">` (*Masalah*, *Rencana Solusi*, *Langkah Awal*).

### 3. Mengubah Palet Warna & Desain
Buka [`styles.css`](file:///c:/Users/ADVAN/Documents/nyoba-vc/test-lp/styles.css) pada bagian `:root` di baris teratas:
```css
:root {
  --color-bg: #0B1220;      /* Latar belakang utama (Abyss Navy) */
  --color-surface: #111C2E; /* Warna kartu / panel (Substrate Navy) */
  --color-primary: #22D3EE; /* Warna aksen utama (Signal Cyan) */
  --color-secondary: #93CCFF; /* Aksen sekunder (Data Blue) */
  --color-tertiary: #10B981;  /* Indikator sinyal hijau */
  --color-text-main: #F3F7FC; /* Warna teks utama */
  --color-text-muted: #B9C7D9; /* Warna teks sekunder */
}
```

### 4. Menyesuaikan Sampel Data Simulasi
Buka [`script.js`](file:///c:/Users/ADVAN/Documents/nyoba-vc/test-lp/script.js) pada array `samples`:
- Setiap baris memiliki `time`, `tempStr`, `humidity`, serta koordinat `chartX` dan `chartY` pada grafik SVG.
- Anda dapat menambah atau memperbarui nilai titik sampel sesuai kebutuhan pengamatan Anda.

---

## 📋 Catatan Hasil Pemeriksaan & Status Lingkungan

- **Pemeriksaan Server & Endpoint HTTP:**
  - Status: **Lulus (200 OK)**.
  - Server `serve.ps1` berhasil berjalan pada `http://127.0.0.1:8080/`.
  - Berkas `styles.css` (`text/css`), `script.js` (`application/javascript`), dan `assets/favicon.svg` (`image/svg+xml`) terkirim dengan tipe MIME yang benar.
- **Pemeriksaan Struktur & Konten:**
  - Status: **Lulus**.
  - Identitas bersih tanpa tanda kurung siku placeholder.
  - 1 judul H1 semantik.
  - Tautan kontak mailto terpasang valid.
  - Tombol aksi memenuhi target ukuran sentuh minimal 44 px.
- **Catatan Keterbatasan Fasilitas Uji Otomatis:**
  - Uji peramban terotomatisasi (*Playwright browser subagent*) tidak dapat diaktifkan pada sesi ini karena ketiadaan berkas *driver binary* Playwright di lingkungan *sandbox* terisolasi. Seluruh verifikasi tampilan dan interaksi telah diuji secara statis, fungsional, dan melalui permintaan HTTP lokal. Anda dapat langsung membuka `http://127.0.0.1:8080/` atau `index.html` di browser laptop Anda untuk memeriksa tampilan interaktifnya.
