import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rian Pratama',
      role: 'Lolos Tes Kerja Staf Administrasi',
      city: 'Jakarta Selatan',
      rating: 5,
      comment: 'Beneran penyelamat! Waktu tes Excel masuk kerja ada soal VLOOKUP bertingkat sama SUMIFS, persis banget sama latihan soal di modul 72 Rumus. Alhamdulillah keterima kerja!',
      date: '2 hari yang lalu'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Sekretaris Desa (Perangkat Desa)',
      city: 'Banyumas',
      rating: 5,
      comment: 'E-book Belajar dari Nol ini bahasanya gampang banget dipahami orang awam. Dulu bingung rumus $ di sel, sekarang udah bisa bikin rekap anggaran desa rapi tanpa salah.',
      date: '1 minggu yang lalu'
    },
    {
      name: 'Dimas Anggoro',
      role: 'Staff Gudang & Logistik',
      city: 'Surabaya',
      rating: 5,
      comment: 'Harga 30 ribu tapi isinya 170-an halaman gila sih, murah banget! Shortcut Windows-nya juga ngebantu banget biar gak bolak-balik pegang mouse waktu input ribuan resi.',
      date: '5 hari yang lalu'
    },
    {
      name: 'Anita Kusuma',
      role: 'Fresh Graduate Akuntansi',
      city: 'Bandung',
      rating: 5,
      comment: 'Suka banget ada preview PDF-nya dulu sebelum beli, jadi bisa liat daftar isinya. Begitu beli full, langsung dapet file latihan Excel-nya juga. Sangat recommended!',
      date: '3 hari yang lalu'
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Kisah Sukses Nyata Pembeli</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Mereka yang Sudah Mencobanya?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Lebih dari 2.600+ pembeli dari berbagai kalangan telah membuktikan mudahnya belajar Excel dengan modul ini.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-lg relative group hover:border-emerald-500/40 transition-colors"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {r.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1">
                      <span>{r.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h5>
                    <p className="text-[11px] text-slate-400">{r.role}</p>
                    <p className="text-[10px] text-slate-500">{r.city} • {r.date}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
