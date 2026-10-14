import React from 'react';
import { Eye, ShoppingBag, Star, CheckCircle, ShieldCheck, Zap, Download, Sparkles } from 'lucide-react';
import { EBOOKS } from '../data/ebooksData';

export default function Hero({ onOpenPreview, onOpenCheckout }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Koleksi E-Book Excel Praktis Terlengkap — Edisi Update Kerja</span>
            <span className="bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full">Rp 30rb</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Kuasai Rumus Excel Dari Nol Sampai Mahir,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Lolos Tes Kerja & Bebas Lembur!
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Gak perlu bingung rumus atau kursus mahal jutaan rupiah. Pelajari panduan visual langkah-demi-langkah, 
            <strong className="text-emerald-400 font-semibold"> 72 rumus kantor esensial</strong>, 
            <strong className="text-emerald-400 font-semibold"> 100 shortcut Windows</strong>, serta 
            <strong className="text-emerald-400 font-semibold"> file latihan soal ujian kerja riil</strong>.
          </p>

          {/* Price Callout Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-slate-900/90 border border-emerald-500/30 px-5 py-2.5 rounded-2xl shadow-lg">
            <span className="text-slate-400 text-sm line-through">Harga Normal Rp 75.000</span>
            <span className="text-2xl font-black text-emerald-400">Cuma Rp 30.000</span>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
              Satuan / Modul
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">• Bebas Pilih Buku</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenCheckout()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
              <span>Beli Sekarang — Rp 30.000</span>
            </button>

            <button
              onClick={() => onOpenPreview()}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 shadow-lg transition-all flex items-center justify-center gap-2.5 group"
            >
              <Eye className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Lihat Preview PDF (Ada Kunci)</span>
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-200">4.9/5.0</span>
              <span>(2.600+ Pembeli)</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Langsung Dikirim via WhatsApp / Email</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Akses Seumur Hidup & Printable</span>
            </div>
          </div>
        </div>

        {/* 3D Visual Book Mockup Showcase */}
        <div className="mt-12 lg:mt-16 relative">
          <div className="text-center mb-6">
            <p className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-1">
              Pilihan E-Book Tersedia — Rp 30.000 Satuannya
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Klik Cover Untuk Buka Preview PDF</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {EBOOKS.map((book, idx) => (
              <div 
                key={book.id}
                className="group relative bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/50 flex flex-col justify-between"
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    book.badgeColor === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    book.badgeColor === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {book.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{book.pages} Halaman</span>
                </div>

                {/* Cover Image Container */}
                <div 
                  onClick={() => onOpenPreview(book.id)}
                  className="relative aspect-[3/4] w-full max-w-[260px] mx-auto rounded-xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-2xl cursor-pointer group-hover:border-emerald-500/60 transition-all"
                >
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay with Preview CTA */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mb-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-white">Buka Preview PDF</span>
                    <span className="text-[11px] text-emerald-300 mt-1">Halaman 1-3 Terbuka, Hal 4 Terkunci</span>
                  </div>

                  {/* Corner Preview Tag */}
                  <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-semibold text-emerald-400 border border-emerald-500/40">
                    👁️ Preview Aktif
                  </div>
                </div>

                {/* Book Info */}
                <div className="mt-4 text-center">
                  <h4 className="font-extrabold text-white text-lg group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {book.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {book.subtitle}
                  </p>

                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="text-xs text-slate-500 line-through">Rp {book.originalPrice.toLocaleString('id-ID')}</span>
                    <span className="text-xl font-black text-emerald-400">Rp {book.price.toLocaleString('id-ID')}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenPreview(book.id)}
                      className="py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      Preview
                    </button>
                    <button
                      onClick={() => onOpenCheckout(book)}
                      className="py-2 px-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Beli Rp 30rb
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
