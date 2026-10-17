# PRD Landing Page Portofolio IoT

Versi 1.0 • 17 Oktober 2026 • Status rancangan untuk implementasi

Dokumen ini menetapkan kebutuhan landing page portofolio satu halaman untuk mahasiswa Teknik Elektro konsentrasi Teknik Komputer dan Telekomunikasi yang tertarik pada IoT dan dashboard monitoring. Versi pertama menggabungkan profil singkat, tiga konsep proyek, mini dashboard simulasi, dan kontak. Lingkup dibuat agar pemula bisa membangun, memahami, dan memperbaruinya secara bertahap.

Pemilik produk dan penanggung jawab konten adalah [NAMA_ANDA]. Pelaksana desain menggunakan Google Stitch; pelaksana kode adalah pemilik dengan bantuan asisten coding. Semua keputusan visual dan target di bawah merupakan usulan produk, bukan fakta tentang kemampuan atau pengalaman pemilik.

## 1 Tujuan dan pengguna

Masalah yang ingin diselesaikan adalah belum adanya satu tautan sederhana yang menjelaskan siapa pemilik, bidang yang diminati, dan arah proyek yang ingin dipelajari. Pengunjung perlu memahami profil tanpa membaca CV panjang. Pemilik perlu tempat yang mudah diperbarui saat proyek nyata mulai tersedia.

Tujuan utama adalah memperkenalkan profil dalam sekitar 10 detik, membuat pengunjung menemukan satu konsep proyek yang relevan, dan menyediakan jalur kontak yang jelas. Tujuan belajar adalah memahami struktur halaman, desain responsif, dan interaksi data sederhana.

| Pengguna | Kebutuhan utama | Tindakan yang diharapkan |
| --- | --- | --- |
| Dosen atau pembimbing | Mengetahui fokus akademik dan arah eksplorasi | Membaca konsep dan menghubungi pemilik |
| Teman atau komunitas | Menemukan minat yang sama | Membuka detail konsep dan berdiskusi |
| Perekrut atau calon mitra | Memahami profil serta kemajuan yang benar-benar ada | Meninjau konsep atau tautan proyek yang kelak tersedia |
| Pemilik | Mengganti konten tanpa mengubah banyak berkas | Memperbarui profil, status, dan tautan |

### Ukuran keberhasilan

Target berikut digunakan untuk evaluasi awal dan belum merupakan hasil pengujian. Libatkan lima orang untuk tes sederhana. Minimal empat orang dapat menyebut profil dan minat utama setelah melihat hero selama 10 detik. Minimal empat orang dapat membuka satu detail konsep dan menemukan email dalam 30 detik tanpa arahan. Seluruh kontrol utama harus dapat digunakan dengan keyboard.

Analitik pihak ketiga tidak diperlukan untuk versi pertama. Catat hasil tes secara manual: tugas, berhasil atau gagal, waktu, dan bagian yang membingungkan. Jumlah klik email bukan bukti bahwa pesan benar-benar dikirim.

## 2 Asumsi dan batas produk

Nama, kampus, email, akun sosial, foto, dan proyek nyata belum diberikan. Gunakan placeholder untuk identitas dan tiga proyek berstatus Konsep. Teknologi seperti ESP32 dan MQTT diperlakukan sebagai contoh arah eksplorasi. Jangan menyatakan pemilik sudah menguasai teknologi tersebut.

Versi pertama adalah situs publik statis berbahasa Indonesia, satu tema gelap, satu halaman, dan satu URL. Mini dashboard menampilkan data tetap yang disimulasikan di browser. Koneksi sensor nyata memerlukan pekerjaan terpisah pada versi berikutnya.

<!-- PAGEBREAK -->

## 3 Lingkup dan arsitektur informasi

P0 berarti wajib tersedia agar versi pertama dapat dirilis. P1 berarti peningkatan sesudah rilis. Seluruh fitur yang belum disebut P0 dapat ditunda.

| Prioritas | Cakupan | Keputusan |
| --- | --- | --- |
| P0 | Profil dan navigasi | Navbar, hero, tentang, fokus eksplorasi |
| P0 | Portofolio awal | Tiga konsep dengan detail di dalam kartu |
| P0 | Mini monitoring | Tujuh sampel tetap, grafik suhu, tombol Ganti sampel |
| P0 | Kontak | Email aktif yang valid, sosial opsional |
| P0 | Mutu dasar | Responsif, akses keyboard, metadata, konten jujur |
| P1 | Bukti proyek | Foto, repositori, atau demo setelah benar-benar tersedia |
| P1 | Materi tambahan | CV, catatan belajar, atau bahasa kedua bila dibutuhkan |
| Ditunda | Aplikasi monitoring nyata | Login, database, API, MQTT, kontrol perangkat, notifikasi |

Formulir kontak, blog, pencarian, filter proyek, pembayaran, tema berganda, dan panel admin tidak masuk versi pertama. Email langsung cukup untuk kebutuhan kontak awal.

### Urutan halaman

1. Header berisi nama dan navigasi Beranda, Tentang, Proyek, Kontak.
2. Hero #beranda berisi identitas, pesan utama, dua CTA, dan mini dashboard.
3. Tentang #tentang berisi profil, tiga fokus eksplorasi, dan minat teknologi.
4. Proyek #proyek berisi tiga kartu Konsep dan disclosure detail.
5. Kontak #kontak berisi ajakan diskusi, email, serta sosial opsional.
6. Footer berisi nama, tahun berjalan, dan Kembali ke atas.

### Alur pengunjung

Pengunjung membuka halaman, memahami profil dari hero, lalu memilih Lihat Konsep Proyek. Anchor membawa pengunjung ke judul Proyek. Pengunjung membuka Lihat konsep pada satu kartu dan membaca masalah, rencana solusi, serta langkah awal. Ia kemudian memilih menu Kontak atau CTA Hubungi Saya dan menemukan email.

Pengunjung juga dapat menekan Ganti sampel pada hero untuk mencoba perubahan angka simulasi. Interaksi itu tetap berada pada halaman yang sama dan tidak memerlukan registrasi. Tidak ada proses pengiriman atau penyimpanan data pengunjung di aplikasi.

### Perilaku tautan

CTA utama menuju #proyek; CTA kedua menuju #kontak. Nama di navbar dan Kembali ke atas menuju #beranda. Gunakan scroll-margin-top agar judul tidak tertutup navbar sticky. Tautan eksternal valid boleh membuka tab baru dengan rel="noopener noreferrer" dan penanda yang jelas. Tautan sosial yang kosong disembunyikan. Placeholder tidak boleh menjadi href aktif.

<!-- PAGEBREAK -->

## 4 Kebutuhan fungsional

Semua kebutuhan F01 sampai F08 berprioritas P0. Kriteria berikut menjadi dasar pemeriksaan sebelum publikasi.

| ID | Kebutuhan | Kriteria penerimaan |
| --- | --- | --- |
| F01 | Identitas dan hero | Nama, konsentrasi, minat, satu H1, dan dua CTA terlihat. Tidak ada klaim prestasi yang belum diberikan. |
| F02 | Navigasi responsif | Empat anchor menuju bagian yang tepat. Pada mobile, Menu membuka daftar dan menutupnya setelah tautan dipilih atau Escape ditekan. Fokus kembali ke Menu saat ditutup lewat Escape. |
| F03 | Tentang dan fokus | Profil singkat dan tiga fokus tampil. Teknologi diberi label Teknologi yang ingin dieksplorasi, tanpa skor kemampuan. |
| F04 | Kartu konsep | Tepat tiga kartu awal berbadge Konsep. Lihat konsep membuka detail dalam kartu melalui details/summary dan bisa dioperasikan keyboard. |
| F05 | Panel simulasi | Label Data simulasi selalu tampil. Awal menunjukkan sampel 7, 28,4 °C, 67%, dan 08.30. Tombol memutar 7 ke 1 lalu 2 sampai 7. |
| F06 | Grafik dan sinkronisasi | Grafik tetap memiliki tujuh titik suhu. Nilai angka, label sampel, penanda aktif, dan ringkasan tekstual merujuk sampel yang sama. Sumbu menampilkan waktu dan °C. |
| F07 | Kontak | Email valid membuka mailto. GitHub dan LinkedIn hanya aktif jika URL valid diisi. Sosial kosong tersembunyi; placeholder diberi keterangan selama mockup. |
| F08 | Tampilan cadangan | Konten, anchor, email, dan detail konsep tetap tersedia tanpa JavaScript. Sampel awal statis tetap terbaca; tombol simulasi dinonaktifkan dengan penjelasan. |

### Keadaan dan umpan balik

Pada desktop, navbar menampilkan seluruh tautan. Pada mobile dengan JavaScript aktif, tombol Menu memakai aria-expanded dan aria-controls serta mengendalikan dropdown yang tetap berada dalam alur dokumen. Dropdown ini bukan dialog modal. Setelah pengguna memilih tautan, tutup dropdown dan pindahkan fokus ke judul bagian tujuan yang dapat difokuskan secara programatis. Pada tampilan tanpa JavaScript, semua tautan tetap terlihat.

Setiap kartu konsep memiliki keadaan tertutup dan terbuka. Beberapa kartu boleh terbuka bersamaan. Area summary harus jelas sebagai kontrol dan memiliki indikator arah yang berubah. Hindari modal agar alur lebih mudah dibangun dan diakses.

Simulasi tidak membutuhkan spinner, karena data lokal tersedia langsung. Perbarui ringkasan aktif dengan aria-live="polite" setelah tombol dipilih. Pertahankan ukuran panel agar perubahan angka tidak menggeser tata letak.

Jika data simulasi tidak valid, tampilkan Data simulasi belum tersedia, sembunyikan angka dan grafik yang tidak valid, serta nonaktifkan tombol. Jangan menggantinya dengan nol atau status perangkat offline. Jika JavaScript mati, gunakan panel statis awal dengan keterangan Interaksi simulasi memerlukan JavaScript.

<!-- PAGEBREAK -->

## 5 Konten siap pakai

### Hero dan profil

Label hero adalah “Mahasiswa Teknik Elektro”. Judul utama adalah “Mengeksplorasi IoT dan Dashboard Monitoring”. Teks pengantar adalah “Halo, saya [NAMA_ANDA], mahasiswa Teknik Elektro dengan konsentrasi Teknik Komputer dan Telekomunikasi. Saya tertarik menghubungkan perangkat, jaringan, dan data melalui proyek sederhana.”

CTA utama berbunyi “Lihat Konsep Proyek”; CTA kedua “Hubungi Saya”. Mini dashboard berjudul “Monitoring Ruangan” dan menampilkan “Data simulasi” secara permanen.

Teks Tentang adalah “Saya mahasiswa Teknik Elektro di [NAMA_KAMPUS] dengan konsentrasi Teknik Komputer dan Telekomunikasi. Saya tertarik pada cara sensor membaca kondisi sekitar, perangkat saling terhubung, dan data ditampilkan melalui dashboard yang mudah dipahami. Portofolio ini menjadi tempat saya menyusun ide dan mendokumentasikan proses belajar.”

Tiga fokus eksplorasi adalah Perangkat dan Sensor, Jaringan dan Telekomunikasi, serta Visualisasi Data. Di bawahnya tampilkan “Teknologi yang ingin dieksplorasi” dengan ESP32, MQTT, HTML, CSS, dan JavaScript. Daftar ini dapat diubah pemilik sebelum publikasi.

### Konsep Monitoring Suhu dan Kelembapan

Deskripsi kartu adalah “Konsep pemantauan kondisi ruangan melalui sensor dan tampilan data yang mudah dibaca.” Status Konsep. Masalahnya, perubahan kondisi ruangan sulit diketahui tanpa pencatatan. Rencana solusinya membaca suhu dan kelembapan lalu menyajikan nilai terkini beserta riwayat. Langkah awal adalah membuat simulasi antarmuka, lalu mencoba sensor jika perangkat tersedia.

Rencana teknologi adalah ESP32, sensor suhu dan kelembapan, serta HTML, CSS, dan JavaScript. Data contoh menggunakan °C dan %. Repositori serta demo eksternal belum ditampilkan.

### Konsep Monitoring Konsumsi Energi

Deskripsi kartu adalah “Konsep dashboard untuk memahami daya dan akumulasi penggunaan energi.” Status Konsep. Masalahnya, pola konsumsi sulit dipahami jika hanya melihat angka terpisah. Rencana solusi menampilkan daya dalam watt dan energi dalam kWh. Langkah awal adalah membuat dataset simulasi dan visualisasi sebelum menentukan perangkat pengukuran.

Rencana teknologi adalah data simulasi, JavaScript, dan perangkat pengukuran yang akan ditentukan. MVP landing page tidak mengukur listrik dan tidak mengendalikan peralatan.

### Konsep Monitoring Kualitas Jaringan

Deskripsi kartu adalah “Konsep visualisasi latensi dan packet loss untuk membaca perubahan kualitas koneksi.” Status Konsep. Masalahnya, perubahan kualitas jaringan sulit diikuti tanpa riwayat. Rencana solusi menampilkan latensi dalam ms dan packet loss dalam %. Langkah awal adalah membuat data simulasi dan merancang grafik yang mudah dibaca.

Rencana teknologi adalah data simulasi, JavaScript, dan pengumpul data yang kelak ditentukan. Jangan mengklaim halaman browser melakukan ping jaringan nyata.

### Kontak dan footer

Judul kontak adalah “Mari Belajar dan Berkolaborasi”. Teksnya “Punya ide proyek IoT, monitoring, atau ingin belajar bersama? Hubungi saya melalui email.” Footer memuat “[NAMA_ANDA] • [TAHUN_BERJALAN]” dan “Kembali ke atas”. Semua placeholder harus diselesaikan sebelum rilis.

<!-- PAGEBREAK -->

## 6 Sistem visual dan tampilan responsif

Arah visual memakai navy dan cyan untuk menghubungkan profil teknik dengan visualisasi data. Struktur tetap sederhana agar perhatian tertuju pada profil dan proyek. Gunakan ilustrasi garis sensor atau rangkaian yang ringan; foto pribadi bersifat opsional jika nanti tersedia.

| Elemen | Nilai rancangan | Penggunaan |
| --- | --- | --- |
| Latar | #0B1220 | Latar halaman |
| Permukaan | #111C2E | Panel dan kartu |
| Teks utama | #F3F7FC | Judul dan isi utama |
| Teks sekunder | #B9C7D9 | Deskripsi dan metadata |
| Aksen | #22D3EE | CTA, fokus, dan garis grafik |
| Garis | #334155 | Pemisah dekoratif dan batas kartu |
| Huruf | Inter atau sans-serif sistem | Isi 16 px dengan tinggi baris 1,6 |
| Judul | H1 48 px desktop dan 34 px mobile | Satu H1; H2 sekitar 30 dan 26 px |
| Lebar konten | Maksimum 1120 px | Margin otomatis |
| Radius dan jarak | Radius 16 px; skala jarak kelipatan 4 px | Jarak antarbagian 80 dan 48 px |

Gunakan teks navy pada tombol cyan. Warna garis dekoratif tidak boleh menjadi satu-satunya penanda kontrol. Untuk batas kontrol dan indikator penting, pilih warna yang memenuhi target kontras. Kontras wajib diverifikasi saat implementasi, termasuk keadaan fokus, terbuka, dan nonaktif.

### Aturan berdasarkan lebar layar

Pada lebar kurang dari 768 px, gunakan satu kolom, padding samping 20 px, navbar Menu, teks hero di atas mini dashboard, dan kartu proyek satu kolom. Di lebar 360 px tidak boleh ada luapan horizontal. Dua metrik dalam panel boleh berdampingan selama label dan angka tetap terbaca; grafik mengambil lebar penuh panel.

Pada 768 sampai 1023 px, gunakan padding 24 px, hero satu kolom, navbar tautan penuh, dan proyek dua kolom dengan kartu ketiga pada baris berikutnya. Pada 1024 px ke atas, gunakan hero dua kolom dan proyek tiga kolom. Di 1440 px, konten tetap dibatasi 1120 px.

Tinggi area sentuh minimal 44 px dan jarak antar kontrol cukup untuk menghindari salah tekan. Gunakan fokus keyboard yang jelas. Animasi bersifat opsional, singkat, dan menghormati prefers-reduced-motion. Smooth scroll harus mati saat reduced motion aktif.

### Komponen yang perlu dirancang

Hasil Stitch mencakup desktop 1440 px dan mobile 390 px untuk halaman yang sama. Siapkan variasi menu mobile terbuka, satu konsep terbuka, tombol fokus, dan sampel simulasi alternatif. Desain hanya perlu satu tema. Jika Stitch menghasilkan tampilan statis, perilaku interaksi ditulis sebagai anotasi untuk implementasi.

<!-- PAGEBREAK -->

## 7 Data simulasi dan struktur teknis

Data monitoring adalah contoh tetap, bukan hasil sensor. Tabel ini menjadi sumber tunggal bagi angka dan grafik. Awal halaman memilih baris 7. Format angka antarmuka mengikuti Bahasa Indonesia; nilai dalam kode tetap bertipe number.

| Sampel | Waktu simulasi | Suhu dalam °C | Kelembapan dalam % |
| --- | --- | --- | --- |
| 1 | 08.00 | 27,8 | 68 |
| 2 | 08.05 | 28,0 | 67 |
| 3 | 08.10 | 28,1 | 67 |
| 4 | 08.15 | 28,4 | 66 |
| 5 | 08.20 | 28,2 | 67 |
| 6 | 08.25 | 28,3 | 66 |
| 7 | 08.30 | 28,4 | 67 |

Setiap sampel memiliki id, timeLabel, temperatureC, dan humidityPct. Tombol Ganti sampel mengubah indeks aktif dengan rumus (indeks + 1) modulo 7. Grafik menampilkan seluruh tujuh titik dan hanya memindahkan penanda aktif. Jangan menambahkan sampel acak, polling, interval pembaruan otomatis, atau waktu browser seolah-olah waktu sensor.

Label lengkap awal adalah “Sampel 7 dari 7 · 08.30 (simulasi)”. Ringkasan aksesibel menyebut “Data simulasi pukul 08.30. Suhu 28,4 derajat Celsius dan kelembapan 67 persen.” Setelah klik pertama, seluruh tampilan aktif berubah ke sampel 1 dengan suhu 27,8 °C, kelembapan 68%, dan waktu 08.00.

### Pilihan implementasi

Gunakan HTML, CSS, dan JavaScript biasa sebagai pilihan awal. Halaman dapat dijalankan tanpa build system dan tidak membutuhkan framework. Jika kode hasil desain memakai framework, gunakan desainnya sebagai acuan dan pilih satu pendekatan implementasi yang paling mudah dipahami pemilik.

Struktur yang disarankan adalah index.html untuk konten semantik, styles.css untuk visual dan breakpoint, script.js untuk konfigurasi dan interaksi, assets untuk gambar lokal, serta README.md untuk petunjuk. Ini merupakan struktur yang akan dibuat saat implementasi, bukan berkas situs yang sudah tersedia dalam paket PRD.

Simpan objek profile berisi name, campus, email, githubUrl, dan linkedinUrl. Simpan array projects berisi id, title, status, summary, problem, plannedSolution, firstStep, plannedStack, repositoryUrl, dan demoUrl. Nilai awal repositoryUrl serta demoUrl kosong. Simpan samples sebagai array terpisah dan activeSampleIndex bernilai 6.

Gunakan SVG inline untuk grafik ringan, details/summary untuk konsep, serta HTML statis sebagai tampilan cadangan. Tidak ada endpoint API, akun pengguna, database, atau penyimpanan browser yang wajib. Tautan kontak menggunakan email langsung.

Saat integrasi IoT nyata dibangun nanti, kontrak data, autentikasi perangkat, waktu pengukuran, kehilangan koneksi, dan keamanan kredensial harus ditentukan dalam PRD terpisah. Kunci layanan dan kredensial broker tidak diletakkan dalam frontend.

<!-- PAGEBREAK -->

## 8 Kebutuhan mutu dan pengukuran

Target berikut adalah persyaratan implementasi yang perlu diuji setelah situs dibangun. Dokumen ini tidak menyatakan situs sudah memenuhi target.

| ID | Area | Target dan cara memeriksa |
| --- | --- | --- |
| N01 | Responsif | Tidak ada scroll horizontal pada 360, 390, 768, dan 1440 px. Teks tidak terpotong pada zoom 200%. |
| N02 | Aksesibilitas | Target WCAG 2.2 AA yang relevan. Teks biasa minimal 4,5 banding 1; teks besar serta indikator penting minimal 3 banding 1. Periksa kontras dan keyboard. |
| N03 | Struktur | lang="id", satu H1, urutan heading logis, landmark, skip link, nama kontrol jelas, dan ringkasan grafik. |
| N04 | Performa | Target Lighthouse mobile Performance minimal 90 pada halaman produksi. Catat versi alat dan kondisi uji; gunakan median tiga pengukuran. |
| N05 | Pemuatan | Target lab LCP maksimal 2,5 detik dan CLS maksimal 0,1 pada profil mobile yang sama. Total transfer awal disarankan maksimal 1 MB. |
| N06 | SEO dasar | Title, meta description, favicon, dan pratinjau sosial sesuai identitas aktual. Canonical hanya setelah URL publik diketahui. |
| N07 | Keandalan | Tidak ada error console atau aset hilang. Konten inti tersedia ketika JavaScript mati. |
| N08 | Privasi | Tidak ada formulir, pelacak, atau penyimpanan data pengunjung secara sengaja oleh aplikasi. Layanan hosting dapat memiliki log operasional. |
| N09 | Pemeliharaan | Profil, konsep, dan data contoh berada dalam struktur yang jelas. README menjelaskan penggantian konten dan publikasi ulang. |

Nilai performa merupakan target lab awal. Hasil satu audit tidak menjamin pengalaman semua pengunjung. Jika nanti tersedia data lapangan yang memadai, evaluasi metrik pengalaman pengguna berdasarkan data tersebut. Skor aksesibilitas otomatis perlu dilengkapi pemeriksaan manual.

### Metadata awal

Title disarankan “[NAMA_ANDA] | Portofolio IoT dan Monitoring”. Meta description disarankan “Portofolio [NAMA_ANDA], mahasiswa Teknik Elektro dengan minat pada IoT, teknik komputer, telekomunikasi, dan dashboard monitoring.” Sesuaikan nama dan kampus sebelum publikasi. Preview sosial tidak boleh mengklaim proyek selesai.

### Ketergantungan dan aset

Gunakan font sistem sebagai fallback. Jika memakai Inter, hindari memuat banyak bobot dan utamakan aset lokal jika tersedia. Ikon dekoratif memiliki aria-hidden; ikon informatif mempunyai label. Ilustrasi sederhana dapat berupa SVG lokal. Tidak diperlukan foto stok atau aset berbayar untuk rilis pertama.

Pemeriksaan browser mencakup Chrome, Firefox, dan Safari versi stabil yang tersedia saat implementasi, serta satu perangkat mobile bila tersedia. Catat keterbatasan alat atau perangkat yang tidak diuji.

<!-- PAGEBREAK -->

## 9 Skenario penerimaan

Jalankan pemeriksaan setelah konten final dimasukkan. Simpan hasil aktual sebagai lulus, gagal, atau belum diuji; jangan menandai lulus berdasarkan desain saja.

| Tes | Tindakan | Hasil yang diharapkan |
| --- | --- | --- |
| T01 | Buka halaman baru | Sampel 7, 28,4 °C, 67%, badge Data simulasi, dan tiga badge Konsep tampil. |
| T02 | Klik CTA utama dan sekunder | Masing-masing menuju Proyek dan Kontak; judul tidak tertutup navbar. |
| T03 | Buka Menu pada mobile | Daftar terlihat, aria-expanded berubah, dan keyboard dapat mencapai semua tautan. |
| T04 | Tekan Escape pada Menu | Dropdown tertutup dan fokus kembali ke tombol Menu. |
| T05 | Pilih tautan Menu | Menu tertutup; bagian tujuan terlihat dan judul mendapat fokus programatis. |
| T06 | Buka Lihat konsep dengan Enter | Detail masalah, solusi, dan langkah awal terbuka; kontrol tetap bisa ditutup. |
| T07 | Klik Ganti sampel satu kali | Aktif menjadi sampel 1, 27,8 °C, 68%, 08.00; grafik dan ringkasan cocok. |
| T08 | Klik tujuh kali dari awal | Aktif kembali ke sampel 7; tidak ada nilai kosong atau duplikasi titik. |
| T09 | Kosongkan URL sosial | Tautan terkait tersembunyi; tidak ada href placeholder atau tautan kosong. |
| T10 | Isi email valid dan pilih email | Aplikasi email menerima alamat tujuan yang benar melalui mailto. |
| T11 | Matikan JavaScript | Profil, anchor, kontak, detail konsep, dan sampel statis tetap terbaca. Tombol simulasi nonaktif dan ada penjelasan. |
| T12 | Uji data kosong atau tidak valid | Panel menjelaskan data belum tersedia; tidak menampilkan angka nol palsu. |
| T13 | Uji empat lebar dan zoom 200% | Konten tidak terpotong; tidak ada scroll horizontal; kontrol tetap dapat digunakan. |
| T14 | Gunakan Tab dan pembaca layar | Fokus terlihat, urutan logis, kontrol berlabel, ringkasan sampel diumumkan secukupnya. |
| T15 | Aktifkan reduced motion | Gerakan dan smooth scroll dinonaktifkan; seluruh fungsi tetap tersedia. |
| T16 | Periksa tautan dan audit mutu | Tidak ada link palsu, aset rusak, atau error console; hasil audit dicatat. |

### Gerbang rilis

Rilis pertama siap ketika semua kebutuhan P0 serta tes terkait lulus, identitas dan kontak sudah valid, dan minimal satu audit responsif, keyboard, serta performa telah dicatat. Seluruh target mutu yang belum tercapai harus diperbaiki atau dicatat bersama keputusan pemilik. Jangan mempublikasikan placeholder identitas.

Pengujian lima pengguna dilakukan sebelum atau segera sesudah rilis awal. Jika tugas profil atau kontak tidak mencapai target, perbaiki teks hero, hierarki CTA, atau label navigasi berdasarkan kebingungan yang diamati.

<!-- PAGEBREAK -->

## 10 Rencana pengerjaan dan serah terima

Urutan berikut adalah saran sesi belajar, bukan janji waktu. Selesaikan satu keluaran sebelum menambah kompleksitas. Pemilik boleh mengulang sesi sesuai kebutuhan.

| Tahap | Pekerjaan | Keluaran selesai |
| --- | --- | --- |
| 1 Konten | Isi identitas dan tinjau konsep | Profil, email, serta pilihan sosial yang benar |
| 2 Desain | Gunakan prompt Stitch dan revisi satu arah | Desktop dan mobile konsisten beserta keadaan terbuka |
| 3 Struktur | Buat HTML dan CSS dasar | Seluruh bagian terbaca dan responsif |
| 4 Interaksi | Tambah Menu serta Ganti sampel | Kebutuhan F02, F05, dan F06 berfungsi |
| 5 Verifikasi | Jalankan T01 sampai T16 | Daftar hasil aktual dan perbaikan |
| 6 Publikasi | Pilih hosting statis dan tinjau URL | Situs publik yang sudah diperiksa serta README |

Google Stitch dapat digunakan untuk merancang UI dari instruksi bahasa alami dan merevisi hasilnya. Gunakan hasil visual sebagai acuan; validasi perilaku implementasi secara terpisah. Ketersediaan ekspor mengikuti antarmuka akun saat digunakan. Prompt dalam paket meminta dua ukuran layar dan anotasi jika suatu interaksi belum dijalankan dalam desain.

### Risiko dan penanganan

| Risiko | Dampak | Penanganan |
| --- | --- | --- |
| Desain berkembang menjadi aplikasi besar | Sulit diselesaikan pemula | Pertahankan P0, tunda backend dan halaman tambahan |
| Simulasi dianggap perangkat nyata | Pengunjung salah memahami | Badge permanen dan waktu berlabel simulasi |
| Ide dianggap proyek selesai | Profil menyampaikan klaim yang keliru | Badge Konsep dan kata rencana pada detail |
| Hasil Stitch tidak sama di mobile | Konten sulit dibaca | Uji 360 px dan revisi layout sebelum coding lanjut |
| Tautan dan identitas belum diisi | Kontak gagal dan halaman tampak belum selesai | Sembunyikan sosial kosong dan periksa placeholder sebelum rilis |

### Daftar isi yang perlu dipersonalisasi

Ganti [NAMA_ANDA], [NAMA_KAMPUS], dan [EMAIL_ANDA]. Tentukan apakah GitHub serta LinkedIn ditampilkan; ganti [URL_GITHUB] dan [URL_LINKEDIN] atau hapus opsi tersebut. Tinjau daftar teknologi dan tiga ide agar sesuai minat aktual. Foto, CV, lokasi, nomor telepon, dan semester tidak wajib untuk versi pertama.

Ketika proyek nyata tersedia, perbarui status dengan bukti, tambahkan foto atau screenshot, repositori, dan catatan peran. Rilis berikutnya dapat menghubungkan satu sensor nyata dengan kontrak data yang jelas. Hal itu merupakan cakupan baru, sehingga tidak menahan rilis portofolio statis.

### Dokumen pendamping dan referensi

Prompt_Google_Stitch_Portofolio_IoT.txt memuat prompt utama, prompt revisi, dan prompt handoff untuk asisten coding. Versi Markdown PRD ini dapat dipakai sebagai konteks implementasi; versi Word memuat isi yang sama agar mudah ditinjau.

Referensi resmi diperiksa pada 17 Oktober 2026. Google Stitch tersedia di https://stitch.withgoogle.com/. Penjelasan awal UI dari prompt terdapat pada https://developers.googleblog.com/en/stitch-a-new-way-to-design-uis/. Pembaruan alur desain tanggal 19 Mei 2026 terdapat pada https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/.
