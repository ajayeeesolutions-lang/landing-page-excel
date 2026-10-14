import React, { useState, useEffect } from 'react';
import { ShoppingBag, Eye, Lock, Sparkles } from 'lucide-react';

export default function FloatingCta({ onOpenPreview, onOpenCheckout }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md border-t border-emerald-500/30 shadow-2xl transition-all animate-fadeIn">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-white">E-Book Digital Excel Praktis</span>
              <span className="text-[10px] bg-emerald-500 text-slate-950 font-bold px-1.5 rounded">Promo Rp 30rb</span>
            </div>
            <p className="text-xs text-slate-400">Tersedia preview PDF terkunci &amp; file latihan ujian kerja</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => onOpenPreview()}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>Lihat Preview</span>
          </button>

          <button
            onClick={() => onOpenCheckout()}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span>Beli Sekarang — Rp 30rb</span>
          </button>
        </div>

      </div>
    </div>
  );
}
