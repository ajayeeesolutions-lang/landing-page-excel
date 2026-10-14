import React from 'react';
import { Check, Sparkles, ShoppingBag, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { EBOOKS, BUNDLE_PACKAGE } from '../data/ebooksData';

export default function PricingSection({ onOpenCheckout, onOpenPreview }) {
  return (
    <section id="harga" className="py-20 bg-slate-900/80 relative border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investasi Leher Ke Atas Paling Terjangkau</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pilihan Paket Pembelian
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Beli satuan hanya <strong className="text-emerald-400 font-bold">Rp 30.000 per e-book</strong>, 
            atau ambil paket hemat komplit untuk kuasai semuanya sekaligus!
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1 & 2: Satuan (E-Book Nol & 72 Rumus) */}
          {EBOOKS.slice(0, 2).map((book) => (
            <div 
              key={book.id}
              className="bg-slate-950 rounded-3xl border border-slate-800 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Modul Satuan
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-mono">
                    {book.pages} Hal
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2">{book.title}</h3>
                <p className="text-xs text-slate-400 min-h-[36px]">{book.subtitle}</p>

                {/* Price */}
                <div className="mt-6 mb-6 pb-6 border-b border-slate-800">
                  <div className="text-xs text-slate-500 line-through">Rp {book.originalPrice.toLocaleString('id-ID')}</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-black text-white">Rp 30.000</span>
                    <span className="text-xs text-slate-400">/ satuan</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 mt-2 font-medium">
                    ⚡ Akses instan selamanya (Lifetime)
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>File E-Book PDF Asli (High Resolution)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Bebas dibaca di HP, Tablet, &amp; Laptop</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Bebas print / cetak kapan saja</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Bonus 1 File Latihan Kasus Terkait</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenCheckout(book)}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>Beli E-Book Ini (Rp 30rb)</span>
                </button>
              </div>
            </div>
          ))}

          {/* Card 3: SUPER BUNDLE (Best Value & Highlighted) */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border-2 border-emerald-500 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-500/20 relative lg:-translate-y-3">
            
            {/* Best Value Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
              🔥 Paket Super Hemat (Paling Laris)
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Paket Komplit All-in-One
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                  Hemat Rp 141.000
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Semua 3 E-Book + Bonus</h3>
              <p className="text-xs text-slate-300">
                Dapatkan Belajar dari Nol + 72 Rumus + 100 Shortcut + Semua File Latihan Excel.
              </p>

              {/* Price */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-800">
                <div className="text-xs text-slate-500 line-through">Rp 210.000</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-5xl font-black text-emerald-400">Rp 69.000</span>
                  <span className="text-xs text-slate-400">/ all pack</span>
                </div>
                <p className="text-[11px] text-teal-300 mt-2 font-medium">
                  🎉 Dapat 3 buku hanya selisih 9 ribu dari 2 buku!
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {BUNDLE_PACKAGE.includes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenCheckout(BUNDLE_PACKAGE)}
                className="w-full py-4 px-4 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-slate-950" />
                <span>Ambil Paket Lengkap — Rp 69.000</span>
              </button>
            </div>
          </div>

        </div>

        {/* Guarantees */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-slate-400">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
            <Zap className="w-6 h-6 text-emerald-400 mb-2" />
            <strong className="text-white text-sm">Pengiriman Instan</strong>
            <span className="mt-1">Link download langsung dikirim ke WhatsApp kamu setelah bayar.</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
            <strong className="text-white text-sm">Pembayaran Aman</strong>
            <span className="mt-1">Mendukung QRIS semua bank, BCA, Mandiri, BRI, &amp; E-Wallet.</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
            <HelpCircle className="w-6 h-6 text-emerald-400 mb-2" />
            <strong className="text-white text-sm">Garansi File Buka</strong>
            <span className="mt-1">Bila file rusak atau tidak bisa dibuka, admin kirim ulang gratis.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
