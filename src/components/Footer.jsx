import React from 'react';
import { FileSpreadsheet, ShieldCheck, Heart, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenPreview, onOpenCheckout }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-28 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white">ExcelMastery ID</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Platform penyedia e-book edukasi digital dan template rumus Microsoft Excel praktis untuk meningkatkan produktivitas kerja, 
              persiapan tes masuk kerja, dan efisiensi olah data.
            </p>
            <div className="mt-4 flex items-center gap-2 text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>File PDF Original &amp; Lisensi Belajar Pribadi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Daftar Modul</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenPreview('excel-nol')} className="hover:text-emerald-400 transition-colors">
                  Belajar Excel Dari Nol (147 Hal)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPreview('72-rumus')} className="hover:text-emerald-400 transition-colors">
                  72 Rumus Penting Excel (179 Hal)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPreview('100-shortcut')} className="hover:text-emerald-400 transition-colors">
                  100 Shortcut Windows (20 Hal)
                </button>
              </li>
              <li>
                <a href="#latihan-soal" className="hover:text-emerald-400 transition-colors">
                  File Latihan Soal Ujian Kerja
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Bantuan &amp; Pemesanan</h4>
            <p className="mb-3 text-slate-400">
              Butuh bantuan pemesanan atau tanya seputar modul? Hubungi admin kami:
            </p>
            <button
              onClick={() => onOpenCheckout()}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-emerald-400 font-bold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Customer Support</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <p>© {new Date().getFullYear()} ExcelMastery ID. Seluruh hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center gap-1 justify-center">
            Dibuat untuk mempermudah belajar Excel di Indonesia <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
