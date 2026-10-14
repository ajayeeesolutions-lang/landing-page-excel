import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ShieldCheck, Check, QrCode, CreditCard, MessageSquare, ArrowRight, Sparkles, Copy, CheckCheck } from 'lucide-react';
import { EBOOKS, BUNDLE_PACKAGE } from '../data/ebooksData';

export default function CheckoutModal({ isOpen, onClose, selectedItem }) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('bundle-all');
  const [paymentMethod, setPaymentMethod] = useState('qris');
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Payment confirmation

  // Admin WhatsApp Number (Nomor Asli)
  const ADMIN_WA = '628895672935';

  useEffect(() => {
    if (selectedItem?.id) {
      setSelectedProduct(selectedItem.id);
    }
  }, [selectedItem]);

  if (!isOpen) return null;

  const allProducts = [
    ...EBOOKS.map(b => ({
      id: b.id,
      title: b.title,
      price: b.price,
      desc: `${b.pages} Hal PDF • Rp ${b.price.toLocaleString('id-ID')}`
    })),
    {
      id: BUNDLE_PACKAGE.id,
      title: BUNDLE_PACKAGE.title,
      price: BUNDLE_PACKAGE.price,
      desc: `Semua 3 E-Book + 4 File Latihan • Rp ${BUNDLE_PACKAGE.price.toLocaleString('id-ID')} (Hemat Rp 141rb)`
    }
  ];

  const currentProd = allProducts.find(p => p.id === selectedProduct) || allProducts[allProducts.length - 1];

  const handleCopyAccount = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProceedToWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      alert('Mohon isi Nama dan Nomor WhatsApp terlebih dahulu ya!');
      return;
    }

    const message = `Halo Admin ExcelMastery! Saya ingin pesan E-Book:%0A%0A` +
      `📌 *Produk:* ${encodeURIComponent(currentProd.title)}%0A` +
      `💰 *Total:* Rp ${currentProd.price.toLocaleString('id-ID')}%0A` +
      `💳 *Metode Bayar:* ${encodeURIComponent(paymentMethod.toUpperCase())}%0A%0A` +
      `👤 *Nama Pembeli:* ${encodeURIComponent(name)}%0A` +
      `📱 *No. WhatsApp:* ${encodeURIComponent(whatsapp)}%0A%0A` +
      `Mohon dibantu nomor rekening / QRIS dan pengiriman file e-book nya ya. Terima kasih!`;

    const waUrl = `https://wa.me/${ADMIN_WA}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-3 sm:p-6 flex items-start sm:items-center justify-center animate-fadeIn">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 p-5 sm:p-7 text-slate-100 my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors z-10"
          title="Tutup (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-8">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-inner flex-shrink-0">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">Form Pemesanan E-Book Excel</h3>
            <p className="text-xs text-slate-400">File digital langsung dikirimkan ke WhatsApp kamu</p>
          </div>
        </div>

        <form onSubmit={handleProceedToWhatsApp} className="space-y-4">
          
          {/* Product Picker */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
              Pilih E-Book yang Ingin Dipesan:
            </label>
            <div className="space-y-2">
              {allProducts.map(p => {
                const isSelected = selectedProduct === p.id;
                const isBundle = p.id === 'bundle-all';
                return (
                  <label
                    key={p.id}
                    onClick={() => setSelectedProduct(p.id)}
                    className={`block p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-emerald-950/40 border-emerald-500 text-white ring-1 ring-emerald-500/50' 
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <input
                          type="radio"
                          name="product"
                          checked={isSelected}
                          onChange={() => setSelectedProduct(p.id)}
                          className="accent-emerald-500 w-4 h-4 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold flex flex-wrap items-center gap-1.5">
                            <span className="truncate">{p.title}</span>
                            {isBundle && (
                              <span className="text-[9px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-black whitespace-nowrap">
                                SUPER HEMAT
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400 line-clamp-1">{p.desc}</span>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-400 flex-shrink-0">
                        Rp {p.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Buyer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Nomor WhatsApp Aktif
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Contoh: 08123456789"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Pilihan Metode Pembayaran:
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'qris', label: 'QRIS (Semua Bank & E-Wallet)' },
                { id: 'bca', label: 'Bank BCA' },
                { id: 'mandiri', label: 'Bank Mandiri' }
              ].map(m => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    paymentMethod === m.id
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Total Summary */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400">Total Tagihan:</span>
              <div className="text-2xl font-black text-emerald-400">
                Rp {currentProd.price.toLocaleString('id-ID')}
              </div>
            </div>
            <div className="text-right text-xs text-slate-400">
              <span className="block font-semibold text-slate-300">Pengiriman Instan</span>
              <span>via WhatsApp</span>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-extrabold text-slate-950 text-base bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-slate-950" />
            <span>Kirim Pesanan ke WhatsApp Admin</span>
          </button>

          <p className="text-[11px] text-center text-slate-500">
            🔒 Transaksi aman 100%. Pesanan kamu langsung direspons oleh customer service dalam waktu kurang dari 5 menit.
          </p>

        </form>

      </div>
    </div>
  );
}
