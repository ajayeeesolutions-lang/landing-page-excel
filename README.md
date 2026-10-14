# Landing Page E-Book Digital Excel Tutorial & Rumus

Landing page siap pakai berkonversi tinggi untuk menjual E-Book Digital Excel seharga **Rp 30.000 satuannya**. Siap di-deploy langsung ke **Vercel**.

---

## 🚀 Fitur Utama Sesuai Kebutuhan

1. **Harga Rp 30.000 Satuannya & Opsi Paket Komplit**:
   - Pilihan beli satuan Rp 30.000 (bebas pilih judul).
   - Paket Komplit Hemat Rp 69.000 untuk meningkatkan nilai transaksi.
2. **Preview PDF yang Terkunci (Locked Preview Mode)**:
   - Pengunjung dapat membaca 3 halaman pertama setiap e-book secara gratis & jernih.
   - Halaman ke-4 otomatis **buram & terkunci (Paywall)** dengan pesan konversi dan tombol bayar langsung.
   - Tab switch antar 3 e-book (Belajar Excel dari Nol, 72 Rumus Penting, 100 Shortcut Windows).
3. **Latihan Soal Ujian Kerja & Tes Perangkat Desa**:
   - **Kuis Interaktif 5 Soal Ujian Kerja**: Penilaian skor real-time, pembahasan benar/salah mendalam, dan efek confetti.
   - **Download File Latihan Excel (.xlsx)**: Template latihan nyata (Latihan Ujian Tipe 1, Tipe 2, Laporan Kas Masuk Keluar, dan VLOOKUP Ekspedisi).
4. **Gambar Cover 3D Visual per PDF**:
   - Tampilan cover resmi beresolusi tajam dengan efek hover 3D tilt.
   - Dilengkapi badge halaman (147 Hal, 179 Hal, 20 Hal).
5. **Checkout Terintegrasi WhatsApp & QRIS**:
   - Form pemesanan nama, WhatsApp, dan pilihan metode bayar.
   - Generate link WhatsApp otomatis dengan template pesan terformat rapi.
6. **Desain Modern, Responsif & Cepat**:
   - Dibangun dengan Vite + React + Tailwind CSS + Lucide Icons.
   - Nilai PageSpeed tinggi, waktu loading instan di mobile maupun desktop.

---

## 🛠️ Cara Menjalankan di Komputer Lokal

1. Buka terminal di folder ini:
   ```bash
   npm run dev
   ```
2. Buka link yang muncul di browser (biasanya `http://localhost:3000`).

---

## 🌐 Cara Deploy ke Vercel

### Opsi 1: Lewat Dashboard Vercel (Direkomendasikan)
1. Push folder project ini ke repository GitHub Anda (`git init`, `git add .`, `git commit -m "Initial commit"`, `git push`).
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New..."** -> **"Project"**.
4. Import repository GitHub Anda.
5. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **"Deploy"**! Dalam 1 menit website Anda sudah online dengan domain gratis `.vercel.app`.

### Opsi 2: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```
Ikuti instruksi di terminal (pilih yes/default) dan landing page akan langsung aktif.

---

## ⚙️ Cara Mengubah Nomor WhatsApp Admin

Buka file [`src/components/CheckoutModal.jsx`](file:///d:/PROJECT%20TEMPLATE%20JUAL/Landing%20Page%20Excel%20Tutorial%20Rumus/src/components/CheckoutModal.jsx#L13):
Ubah baris ke-13:
```javascript
const ADMIN_WA = '6281234567890'; // Ganti dengan nomor WhatsApp kamu (awali dengan 62)
```

---

## 📁 Struktur Folder

```
Landing Page Excel Tutorial Rumus/
├── public/
│   ├── covers/         # Gambar cover resmi 3D per e-book
│   ├── previews/       # Halaman preview beresolusi tinggi (Hal 1-3 & Hal 4 terkunci)
│   ├── exercises/      # File spreadsheet latihan .xlsx siap download
│   └── lp/             # Grafis kurikulum & silabus materi
├── src/
│   ├── components/     # Navbar, Hero, BookShowcase, PdfPreviewModal, ExerciseSection, PricingSection, CheckoutModal, dll.
│   ├── data/           # Metadata e-book & bank soal kuis
│   ├── App.jsx         # Komponen utama
│   └── main.jsx        # Entry point React
├── vercel.json         # Konfigurasi routing untuk Vercel
└── package.json
```
