export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Rumus manakah yang paling tepat untuk mencari 'Harga Barang' dari tabel referensi vertikal berdasarkan Kode Produk di sel A2?",
    options: [
      { text: "=HLOOKUP(A2; Table_Barang; 2; FALSE)", isCorrect: false, explanation: "HLOOKUP digunakan untuk tabel horizontal (mendatar), bukan vertikal." },
      { text: "=VLOOKUP(A2; Table_Barang; 2; FALSE)", isCorrect: true, explanation: "Benar! VLOOKUP (Vertical Lookup) mencari data di kolom pertama secara vertikal lalu mengambil nilai kolom ke-2 dengan FALSE (exact match)." },
      { text: "=LOOKUP(A2; Table_Barang; 2)", isCorrect: false, explanation: "LOOKUP standar memerlukan tabel terurut dan tidak seakurat VLOOKUP dengan exact match." },
      { text: "=SEARCH(A2; Table_Barang)", isCorrect: false, explanation: "SEARCH adalah fungsi untuk mencari posisi teks di dalam string, bukan tabel data." }
    ],
    hint: "Perhatikan arah orientasi tabel (vertikal vs horizontal) dan pastikan pencarian exact match."
  },
  {
    id: 2,
    question: "Shortcut Windows tercepat di Excel untuk menjumlahkan baris atau kolom angka secara instan (AutoSum) adalah...",
    options: [
      { text: "Ctrl + Shift + S", isCorrect: false, explanation: "Shortcut ini tidak menjalankan fungsi AutoSum di Excel." },
      { text: "Alt + =", isCorrect: true, explanation: "Tepat sekali! Menekan kombinasi Alt dan tanda '=' akan langsung menuliskan formula =SUM(...) secara otomatis." },
      { text: "Ctrl + =", isCorrect: false, explanation: "Ctrl + = biasanya digunakan untuk subscript pada beberapa aplikasi." },
      { text: "Shift + F3", isCorrect: false, explanation: "Shift + F3 adalah shortcut untuk membuka kotak dialog Insert Function." }
    ],
    hint: "Kombinasi tombol Alt dan satu simbol matematika dasar di baris atas keyboard."
  },
  {
    id: 3,
    question: "Jika kamu ingin menjumlahkan 'Total Penjualan' hanya untuk produk yang berkategori 'Elektronik' dan berada di kota 'Jakarta', fungsi apa yang digunakan?",
    options: [
      { text: "=SUMIF(...)", isCorrect: false, explanation: "SUMIF hanya dapat menampung 1 kriteria tunggal." },
      { text: "=SUMIFS(...)", isCorrect: true, explanation: "Tepat! SUMIFS (dengan huruf 'S' di akhir) dirancang khusus untuk kalkulasi dengan 2 kriteria atau lebih (multi-kondisi)." },
      { text: "=COUNTIFS(...)", isCorrect: false, explanation: "COUNTIFS menghitung banyak data (frekuensi), bukan menjumlahkan nominal nilai." },
      { text: "=TOTALIF(...)", isCorrect: false, explanation: "Fungsi TOTALIF tidak ada di dalam Microsoft Excel." }
    ],
    hint: "Fungsi SUM dengan akhiran 'S' untuk kriteria jamak (multi-criteria)."
  },
  {
    id: 4,
    question: "Ketika rumus VLOOKUP tidak menemukan data yang dicari, Excel menampilkan pesan error '#N/A'. Bagaimana cara menyamarkannya menjadi teks 'Data Tidak Ada'?",
    options: [
      { text: "=IFERROR(VLOOKUP(...); \"Data Tidak Ada\")", isCorrect: true, explanation: "Hebat! IFERROR akan mengeksekusi rumus pertama, dan bila terjadi error tipe apapun (termasuk #N/A), Excel akan menampilkan nilai pengganti yang ditentukan." },
      { text: "=IF(VLOOKUP(...) = ERROR; \"Data Tidak Ada\")", isCorrect: false, explanation: "Syntax ini salah karena Excel tidak memiliki konstanta bernama 'ERROR'." },
      { text: "=HIDEERROR(VLOOKUP(...); \"Data Tidak Ada\")", isCorrect: false, explanation: "Tidak ada fungsi bawaan HIDEERROR di Excel." },
      { text: "=CLEAN(VLOOKUP(...))", isCorrect: false, explanation: "CLEAN berfungsi membuang karakter non-printable dari teks." }
    ],
    hint: "Gunakan fungsi pencegah error 'IF' + 'ERROR'."
  },
  {
    id: 5,
    question: "Simbol '$' pada penulisan rumus Excel seperti '$A$1' memiliki fungsi utama untuk...",
    options: [
      { text: "Mengubah format sel otomatis menjadi mata uang Dollar", isCorrect: false, explanation: "Simbol $ di dalam formula bukan pemformatan tampilan mata uang." },
      { text: "Mengunci sel (Absolute Reference) agar alamat baris dan kolom tidak bergeser saat rumus di-copy", isCorrect: true, explanation: "Tepat! Tanda dollar ($) bertindak sebagai jangkar (Absolute Reference) agar referensi sel tetap terkunci saat formula ditarik (fill handle)." },
      { text: "Menandai bahwa rumus tersebut berbayar", isCorrect: false, explanation: "Excel tidak memiliki fitur rumus berbayar di sel." },
      { text: "Menjalankan macro otomatis", isCorrect: false, explanation: "Macro menggunakan VBA, bukan tanda $ di formula." }
    ],
    hint: "Fungsi ini disebut 'Absolute Reference' yang bisa diaktifkan cepat dengan tombol F4."
  }
];
