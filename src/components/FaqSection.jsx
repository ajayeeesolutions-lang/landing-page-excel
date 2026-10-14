import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Apakah pemula yang belum pernah buka Excel sama sekali bisa ikut belajar?',
      a: 'Bisa banget! Di modul "Belajar Excel Dari Nol", kami mulai dari cara membuka aplikasi, mengenal fungsi ribbon, klik mouse, format sel, hingga cara mengetik tanda sama dengan (=) untuk memulai rumus. Semuanya full screenshot bergambar warna.'
    },
    {
      q: 'Berapa harga e-book ini dan format filenya apa?',
      a: 'Harganya Rp 30.000 satuannya (per judul e-book). Format berupa PDF asli beresolusi tinggi (bukan scan buram), bisa dibuka di Android, iPhone, iPad, laptop Windows, maupun Mac. Bisa juga di-print/dicetak sendiri.'
    },
    {
      q: 'Bagaimana cara mengakses preview PDF yang dikunci?',
      a: 'Kamu bisa mengintip 3 halaman pertama setiap e-book secara gratis melalui tombol "Preview PDF" di atas. Halaman ke-4 dan seterusnya akan terkunci, dan bisa kamu buka seutuhnya dengan melakukan pemesanan seharga Rp 30.000.'
    },
    {
      q: 'Apakah disediakan file latihan soal Excel (.xlsx)?',
      a: 'Ya, tentu! Ada 4 file spreadsheet latihan soal (.xlsx) seperti simulasi ujian masuk kerja, soal tes perangkat desa, laporan kas masuk keluar, dan studi kasus VLOOKUP yang bisa kamu download langsung di bagian Latihan Soal.'
    },
    {
      q: 'Setelah bayar, bagaimana proses pengiriman file e-booknya?',
      a: 'Pengiriman dilakukan secara instan lewat WhatsApp atau email dalam bentuk Google Drive link / file attachment langsung. Sekali beli bisa disimpan selamanya (akses seumur hidup) tanpa biaya langganan bulanan.'
    },
    {
      q: 'Metode pembayaran apa saja yang diterima?',
      a: 'Kami menerima QRIS otomatis (bisa dari BCA, BRI, BNI, Mandiri, Jenius, GoPay, OVO, Dana, ShopeePay) serta Transfer Rekening Bank langsung.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Masih ada yang ingin ditanyakan sebelum membeli? Cek jawabannya di sini.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
