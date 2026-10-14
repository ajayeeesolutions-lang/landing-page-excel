import React from 'react';
import { Eye, ShoppingBag, CheckCircle, Star, Sparkles, BookOpen, Clock, FileText } from 'lucide-react';
import { EBOOKS } from '../data/ebooksData';

export default function BookShowcase({ onOpenPreview, onOpenCheckout }) {
  return (
    <section id="katalog" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Katalog E-Book Excel Lengkap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilih Modul Sesuai Kebutuhanmu,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Cuma Rp 30.000 / E-Book
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Setiap modul dirancang sistematis, mudah dipahami bahkan untuk yang belum pernah buka Excel sama sekali.
            Bisa diakses di HP (Android/iOS) maupun Laptop.
          </p>
        </div>

        {/* 3 Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EBOOKS.map((book) => (
            <div 
              key={book.id}
              className="bg-slate-900/80 rounded-3xl border border-slate-800 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/40 group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    book.badgeColor === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    book.badgeColor === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {book.badge}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{book.rating}</span>
                    <span className="text-slate-500">({book.reviewsCount})</span>
                  </div>
                </div>

                {/* Cover Image Showcase */}
                <div 
                  onClick={() => onOpenPreview(book.id)}
                  className="relative aspect-[7/10] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-xl cursor-pointer group-hover:border-emerald-500/50 transition-all mb-6 group/cover p-1 flex items-center justify-center"
                >
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-contain rounded-xl group-hover/cover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Locked preview hint overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-slate-900/90 px-3 py-1.5 rounded-full border border-emerald-500/30 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      Coba Baca 3 Hal Pertama
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {book.subtitle}
                </p>

                {/* Meta details */}
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-300 py-2 border-y border-slate-800">
                  <div className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>{book.pages}</strong> Halaman PDF</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Update Terbaru</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Apa yang kamu pelajari:</p>
                  {book.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                <div className="mt-4 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">Cocok Untuk:</strong> {book.targetUsers}
                </div>
              </div>

              {/* Bottom Price & CTAs */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-500 line-through">Rp {book.originalPrice.toLocaleString('id-ID')}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-emerald-400">Rp {book.price.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-slate-400">/ modul</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    Diskon 60%+
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenPreview(book.id)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-emerald-400" />
                    Preview PDF
                  </button>

                  <button
                    onClick={() => onOpenCheckout(book)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Beli Rp 30rb
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
