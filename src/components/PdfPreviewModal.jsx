import React, { useState, useEffect } from 'react';
import { X, Lock, Unlock, ChevronLeft, ChevronRight, Eye, ShoppingBag, CheckCircle, ZoomIn, ZoomOut, RotateCcw, AlertTriangle, FileSpreadsheet } from 'lucide-react';
import { EBOOKS } from '../data/ebooksData';

export default function PdfPreviewModal({ isOpen, onClose, initialBookId = 'excel-nol', onSelectBookToBuy }) {
  const [selectedBookId, setSelectedBookId] = useState(initialBookId);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (initialBookId) {
      setSelectedBookId(initialBookId);
      setCurrentPageIndex(0);
    }
  }, [initialBookId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex, selectedBookId]);

  if (!isOpen) return null;

  const currentBook = EBOOKS.find(b => b.id === selectedBookId) || EBOOKS[0];
  const pages = currentBook.previewPages;
  const currentPage = pages[currentPageIndex] || pages[0];
  const isLocked = Boolean(currentPage.isLocked);

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  const handleSelectBook = (bookId) => {
    setSelectedBookId(bookId);
    setCurrentPageIndex(0);
    setZoomLevel(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Top Header */}
        <div className="p-3 sm:p-4 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          {/* Title & Ebook Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">Preview PDF E-Book</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                  {currentBook.pages} Hal Total
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">{currentBook.title}</h3>
            </div>
          </div>

          {/* Book Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            {EBOOKS.map(b => (
              <button
                key={b.id}
                onClick={() => handleSelectBook(b.id)}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  selectedBookId === b.id 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="hidden sm:inline">{b.title.split(' ')[0]}</span>
                <span>{b.title.includes('72') ? '72 Rumus' : b.title.includes('100') ? '100 Shortcut' : 'Dari Nol'}</span>
              </button>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Tutup (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & Page Status */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">
              Preview Halaman {currentPageIndex + 1} dari {pages.length}
            </span>
            {isLocked ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                <Lock className="w-3 h-3" /> Halaman Terkunci
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                <Eye className="w-3 h-3" /> Terbuka Gratis
              </span>
            )}
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.25))}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
              title="Perkecil"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="font-mono text-slate-400 text-[11px]">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.5, prev + 0.25))}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
              title="Perbesar"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Reader Body / Viewer Area */}
        <div className="relative flex-1 overflow-auto bg-slate-950 p-4 sm:p-6 flex items-center justify-center min-h-[360px] sm:min-h-[500px]">
          
          {/* Navigation Arrow Left */}
          <button
            onClick={handlePrev}
            disabled={currentPageIndex === 0}
            className={`absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-white shadow-xl transition-all ${
              currentPageIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-emerald-500 hover:text-slate-950 hover:scale-110'
            }`}
            title="Halaman Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={handleNext}
            disabled={currentPageIndex === pages.length - 1}
            className={`absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-white shadow-xl transition-all ${
              currentPageIndex === pages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-emerald-500 hover:text-slate-950 hover:scale-110'
            }`}
            title="Halaman Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Page Document Container */}
          <div 
            className="relative transition-transform duration-200 shadow-2xl rounded-lg overflow-hidden border border-slate-700/70 bg-white"
            style={{ 
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
              maxWidth: '680px',
              width: '100%'
            }}
          >
            <img 
              src={currentPage.img} 
              alt={currentPage.title}
              className={`w-full h-auto object-contain select-none transition-all duration-300 ${
                isLocked ? 'blur-[8px] opacity-40 scale-105' : ''
              }`}
            />

            {/* LOCKED SCREEN OVERLAY */}
            {isLocked && (
              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-10 text-white">
                
                {/* Lock Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center mb-4 shadow-xl shadow-amber-500/30 animate-bounce">
                  <Lock className="w-8 h-8" />
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                  Preview Gratis Telah Selesai
                </span>
                
                <h4 className="text-xl sm:text-2xl font-black text-white max-w-md">
                  Halaman Ini &amp; {currentBook.pages - 3}+ Halaman Lainnya Masih Terkunci!
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg leading-relaxed">
                  Ingin membaca seluruh isi buku <strong>"{currentBook.title}"</strong> ({currentBook.pages} halaman lengkap), 
                  beserta kunci jawaban dan latihan soal?
                </p>

                {/* Price Tag Callout */}
                <div className="mt-4 bg-slate-900 border border-emerald-500/40 px-5 py-2 rounded-xl flex items-center gap-3">
                  <span className="text-xs text-slate-400 line-through">Rp {currentBook.originalPrice.toLocaleString('id-ID')}</span>
                  <span className="text-2xl font-black text-emerald-400">Rp {currentBook.price.toLocaleString('id-ID')}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold uppercase">Sekali Bayar</span>
                </div>

                {/* Benefits Pill */}
                <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Full PDF {currentBook.pages} Hal
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Bebas Print / Cetak
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Akses Selamanya
                  </span>
                </div>

                {/* Unlock CTA Button */}
                <button
                  onClick={() => {
                    onClose();
                    onSelectBookToBuy(currentBook);
                  }}
                  className="mt-5 px-7 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <Unlock className="w-5 h-5 text-slate-950" />
                  <span>Buka Semua Halaman Sekarang — Rp 30.000</span>
                </button>

                <p className="text-[11px] text-slate-400 mt-2">
                  ⚡ File PDF langsung terkirim otomatis setelah pembayaran via QRIS / Bank / E-Wallet.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Preview Bar at Bottom */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-center gap-3 overflow-x-auto">
          {pages.map((p, idx) => (
            <button
              key={p.page}
              onClick={() => setCurrentPageIndex(idx)}
              className={`relative rounded-md overflow-hidden border-2 transition-all flex-shrink-0 w-14 sm:w-16 aspect-[3/4] bg-slate-800 ${
                currentPageIndex === idx 
                  ? 'border-emerald-400 ring-2 ring-emerald-500/40 scale-105' 
                  : 'border-slate-700 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={p.img} alt={`Thumbnail ${p.page}`} className="w-full h-full object-cover" />
              {p.isLocked && (
                <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-amber-400" />
                </div>
              )}
              <span className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[9px] text-slate-200 font-bold py-0.5 text-center">
                Hal {p.page}
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
