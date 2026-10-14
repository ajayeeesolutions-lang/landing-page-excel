export const EBOOKS = [
  {
    id: 'excel-nol',
    title: 'Belajar Excel Dari Nol',
    subtitle: 'Panduan Praktis Pemula Sampai Mahir Otodidak',
    badge: 'Best Seller Pemula',
    badgeColor: 'emerald',
    price: 30000,
    originalPrice: 75000,
    pages: 147,
    rating: 4.9,
    reviewsCount: 842,
    cover: '/covers/excel-nol-cover.png',
    pdfFileName: 'E-Book Belajar Excel dari Nol.pdf',
    description: 'Buku panduan terlengkap dari cara membuka lembar kerja, memahami sel, baris, kolom, hingga mahir membuat tabel rapi dan laporan otomatis.',
    previewPages: [
      { page: 1, img: '/previews/excel-nol-page-1.jpg', title: 'Halaman 1: Cover E-Book' },
      { page: 2, img: '/previews/excel-nol-page-2.jpg', title: 'Halaman 2: Daftar Isi (Overview & File)' },
      { page: 3, img: '/previews/excel-nol-page-3.jpg', title: 'Halaman 3: Daftar Isi (Mengenal Rumus)' },
      { page: 4, img: '/previews/excel-nol-page-4-locked.jpg', isLocked: true, title: 'Halaman 4: Bab Utama (Terkunci)' }
    ],
    highlights: [
      '147 Halaman full ilustrasi screenshot langkah-demi-langkah',
      'Mengenal Ribbon, Worksheet, Cell Referencing ($A$1)',
      'Format Data Otomatis: Tanggal, Persentase, Mata Uang (Rp)',
      'Dasar Operasi Matematika & Trik Logika Mengetik Rumus',
      'Freeze Panes, Sort Data Bertingkat, dan Filter Cepat'
    ],
    targetUsers: 'Mahasiswa, Fresh Graduate, Staf Administrasi, Calon Pegawai Desa/BUMN'
  },
  {
    id: '72-rumus',
    title: '72 Rumus Penting Excel',
    subtitle: 'Katalog Rumus Nyata Dunia Kerja & Pembahasan Tuntas',
    badge: 'Paling Dicari di Kantor',
    badgeColor: 'blue',
    price: 30000,
    originalPrice: 85000,
    pages: 179,
    rating: 4.95,
    reviewsCount: 1250,
    cover: '/covers/72-rumus-cover.png',
    pdfFileName: 'E-Book 72 Rumus Excel.pdf',
    description: 'Koleksi 72 formula yang terbukti paling sering diujikan pada tes masuk kerja dan pekerjaan sehari-hari. Disertai contoh studi kasus nyata.',
    previewPages: [
      { page: 1, img: '/previews/72-rumus-page-1.jpg', title: 'Halaman 1: Cover Modul Rumus' },
      { page: 2, img: '/previews/72-rumus-page-2.jpg', title: 'Halaman 2: Rangkuman 72 Rumus (Bagian 1)' },
      { page: 3, img: '/previews/72-rumus-page-3.jpg', title: 'Halaman 3: Rangkuman 72 Rumus (Bagian 2)' },
      { page: 4, img: '/previews/72-rumus-page-4-locked.jpg', isLocked: true, title: 'Halaman 4: Studi Kasus Praktik (Terkunci)' }
    ],
    highlights: [
      '179 Halaman materi mendalam 72 rumus favorit HRD & Supervisor',
      'Pencarian Data Tingkat Lanjut: VLOOKUP, HLOOKUP, INDEX-MATCH, XLOOKUP',
      'Logika Kondisional: IF Tunggal, IF Bertingkat, AND, OR, IFERROR',
      'Kalkulasi Multi Kriteria: SUMIF, SUMIFS, COUNTIF, COUNTIFS, AVERAGEIFS',
      'Manipulasi Teks & Waktu: CONCATENATE, LEFT, RIGHT, MID, DATEDIF'
    ],
    targetUsers: 'Admin Gudang, Finance & Accounting, HRD, Data Entry, Pelamar Kerja'
  },
  {
    id: '100-shortcut',
    title: '100 Shortcut Excel Windows',
    subtitle: 'Kerja Kilat 5x Lebih Cepat Tanpa Sentuh Mouse',
    badge: 'Booster Produktivitas',
    badgeColor: 'amber',
    price: 30000,
    originalPrice: 50000,
    pages: 20,
    rating: 4.88,
    reviewsCount: 512,
    cover: '/covers/100-shortcut-cover.png',
    pdfFileName: '100 SHORTCUT EXCEL UNTUK WINDOWS (Windows).pdf',
    description: 'Kumpulan 100 kombinasi tombol keyboard sakti untuk Windows. Tinggalkan kebiasaan klik mouse berulang-ulang dan selesaikan tugas lebih cepat.',
    previewPages: [
      { page: 1, img: '/previews/100-shortcut-page-1.jpg', title: 'Halaman 1: Cover Shortcut' },
      { page: 2, img: '/previews/100-shortcut-page-2.jpg', title: 'Halaman 2: Daftar Isi & Pengantar' },
      { page: 3, img: '/previews/100-shortcut-page-3.jpg', title: 'Halaman 3: Mengapa Wajib Kuasai Shortcut' },
      { page: 4, img: '/previews/100-shortcut-page-4-locked.jpg', isLocked: true, title: 'Halaman 4: Tabel Shortcut Lengkap (Terkunci)' }
    ],
    highlights: [
      'Tabel praktis 100 shortcut terbagi dalam kategori jelas',
      'Shortcut Navigasi Cepat menembus puluhan ribu baris (Ctrl + Panah)',
      'Shortcut Format Instan: Angka, Mata Uang, Persen, Tanggal',
      'Shortcut AutoSum Instan (Alt + =) & Insert Row/Col kilat',
      'Cheat-Sheet mudah dihafal & siap cetak untuk ditaruh di meja kerja'
    ],
    targetUsers: 'Pengguna Harian Excel, Karyawan Kantor, Freelancer, Akuntan'
  }
];

export const BUNDLE_PACKAGE = {
  id: 'bundle-all',
  title: 'Paket Komplit Super Hemat (Semua 3 E-Book)',
  price: 69000,
  originalPrice: 210000,
  discountPercent: '67%',
  badge: 'Paling Banyak Dipilih (Hemat Rp 141.000)',
  includes: [
    'Semua 3 E-Book Digital (Belajar dari Nol, 72 Rumus, 100 Shortcut)',
    'Total 346 Halaman PDF kualitas tinggi original (bisa di HP & Laptop)',
    'FREE 4 File Excel Latihan Soal Ujian Kerja & Perangkat Desa (.xlsx)',
    'FREE Template Laporan Kas Masuk & Keluar Kasbon Siap Pakai',
    'Akses seumur hidup (Lifetime) & bebas print kapan saja',
    'Konsultasi tanya admin jika bingung rumus'
  ]
};

export const EXERCISE_FILES = [
  {
    title: 'Latihan Ujian Masuk Kerja & Tes Desa (Tipe 1)',
    filename: 'Latihan-Ujian-Kerja-Tipe-1.xlsx',
    downloadUrl: '/exercises/Latihan-Ujian-Kerja-Tipe-1.xlsx',
    size: '11 KB',
    description: 'Simulasi ujian perhitungan dasar matematika, diskon bertingkat, dan persentase yang sering keluar di seleksi masuk kerja.',
    topic: 'Operasi Dasar & Persentase',
    difficulty: 'Mudah'
  },
  {
    title: 'Latihan Ujian Masuk Kerja & Tes Desa (Tipe 2)',
    filename: 'Latihan-Ujian-Kerja-Tipe-2.xlsx',
    downloadUrl: '/exercises/Latihan-Ujian-Kerja-Tipe-2.xlsx',
    size: '13 KB',
    description: 'Studi kasus tiket penumpang: penentuan kelas, jenis tiket, dan perhitungan diskon otomatis menggunakan kode.',
    topic: 'Logika IF & Kode Transaksi',
    difficulty: 'Menengah'
  },
  {
    title: 'Studi Kasus Laporan Kas Masuk & Kas Keluar',
    filename: 'Laporan-Kas-Masuk-Keluar-Latihan.xlsx',
    downloadUrl: '/exercises/Laporan-Kas-Masuk-Keluar-Latihan.xlsx',
    size: '10 KB',
    description: 'Format pembukuan kas bulanan nyata dengan saldo berjalan otomatis, cocok untuk administrasi kantor atau kas RT/UMKM.',
    topic: 'Laporan Keuangan & Saldo Berjalan',
    difficulty: 'Menengah'
  },
  {
    title: 'Studi Kasus VLOOKUP & HLOOKUP Ekspedisi',
    filename: 'Latihan-VLOOKUP-HLOOKUP.xlsx',
    downloadUrl: '/exercises/Latihan-VLOOKUP-HLOOKUP.xlsx',
    size: '12 KB',
    description: 'Praktek mengambil data customer, domisili pengiriman, dan estimasi lama sampai barang dari tabel master referensi.',
    topic: 'Pencarian Data (Lookup Functions)',
    difficulty: 'Wajib Dikuasai'
  }
];
