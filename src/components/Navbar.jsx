import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, ShoppingBag, Eye, Menu, X, FileSpreadsheet } from 'lucide-react';

export default function Navbar({ onOpenPreview, onOpenCheckout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-white tracking-tight">ExcelMastery</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ID</span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">E-Book Digital & Latihan Soal</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#katalog" className="hover:text-emerald-400 transition-colors">Daftar E-Book</a>
            <button 
              onClick={() => onOpenPreview()} 
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Preview PDF</span>
            </button>
            <a href="#latihan-soal" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Latihan Soal</span>
              <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full border border-blue-500/30">Kuis & File</span>
            </a>
            <a href="#harga" className="hover:text-emerald-400 transition-colors">Harga (Rp 30rb)</a>
            <a href="#testimoni" className="hover:text-emerald-400 transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenPreview()}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              Coba Baca
            </button>
            <button
              onClick={() => onOpenCheckout()}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-lg shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Beli Sekarang — Rp 30rb</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenCheckout()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg"
            >
              Beli Rp 30rb
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-3">
            <a 
              href="#katalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              📚 Katalog E-Book
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenPreview(); }}
              className="w-full text-left py-2 text-slate-200 font-medium hover:text-emerald-400 flex items-center justify-between"
            >
              <span>👁️ Preview PDF (Terkunci)</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Coba Baca</span>
            </button>
            <a 
              href="#latihan-soal" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              ✍️ Latihan Soal & Download File .xlsx
            </a>
            <a 
              href="#harga" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              🏷️ Paket Harga (Rp 30.000)
            </a>
            <a 
              href="#testimoni" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              ⭐ Testimoni Pembeli
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 font-medium hover:text-emerald-400"
            >
              ❓ Tanya Jawab (FAQ)
            </a>
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCheckout(); }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl shadow-lg"
              >
                Pesan Sekarang — Rp 30.000
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
