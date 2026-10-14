import React from 'react';
import { Layers, CheckCircle2, Sparkles, TrendingUp, Cpu, Table } from 'lucide-react';

export default function CurriculumGraphics() {
  const graphics = [
    {
      title: 'Rumus Penting Yang Kepake di Pekerjaan',
      desc: 'Bukan sekadar rumus teoritis, tapi formula harian yang dipakai divisi Keuangan, Admin, HRD, dan Logistik.',
      img: '/lp/rumus_penting_yang_kepake_dikerjaan.png',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      title: 'Pivot Table & Olah Data Ribuan Baris',
      desc: 'Ubah ribuan data mentah menjadi laporan ringkas dan dashboard interaktif hanya dalam hitungan detik.',
      img: '/lp/pivot_table.png',
      icon: Table,
      color: 'blue'
    },
    {
      title: 'Otomatisasi Pekerjaan dengan Macro VBA',
      desc: 'Trik mengotomatiskan rutinitas pekerjaan berulang agar selesai dalam 1 klik tanpa lelah lembur.',
      img: '/lp/macro_vba.png',
      icon: Cpu,
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Materi Terstruktur &amp; Berbobot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Saja yang Akan Kamu Kuasai?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Materi disusun bertahap mulai dari pemahaman logika dasar, teknik olah data, hingga trik automasi kerja nyata.
          </p>
        </div>

        {/* Big Infographic Highlight */}
        <div className="mb-16 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Silabus Lengkap</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Jago Olah Data di Excel Maupun Google Spreadsheet
              </h3>
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                Seluruh materi di dalam E-Book ini kompatibel 100% untuk digunakan baik di 
                <strong> Microsoft Excel versi 2013, 2016, 2019, 2021, Office 365</strong> maupun 
                <strong> Google Sheets gratis di browser</strong>.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Bahasa santai, mudah dicerna, tanpa istilah teknis yang memusingkan</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Dilengkapi gambar panah dan kotak penunjuk rumus</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Studi kasus realita dunia kerja Indonesia (Kas, Slip Gaji, Inventaris, Nilai)</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
              <img 
                src="/lp/e-book_jago_data_dengan_excel_maupun_spreadsheet.png" 
                alt="E-Book Jago Data" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 3 Modular Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {graphics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-emerald-500/40 p-5 flex flex-col justify-between transition-all group overflow-hidden"
              >
                <div>
                  <div className="rounded-xl overflow-hidden border border-slate-700/60 mb-4 bg-slate-950 aspect-[16/10]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <h4 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
