'use client';

import { useState } from 'react';
import { FaLock, FaArrowRight } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { trackFormSubmit } from '@/lib/analytics';

export function OfferForm({ compact = false, source = 'offer_form' }: { compact?: boolean; source?: string }) {
  const [vehicleType, setVehicleType] = useState('Kazalı Araç');
  const [phone, setPhone] = useState('');
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phone.trim()) return;
    trackFormSubmit(source);
    const text = `Merhaba, ${vehicleType} satmak istiyorum. Telefon numaram: ${phone}. Teklif alabilir miyim?`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };
  return <form onSubmit={submit} className={`border border-line bg-surface ${compact ? 'p-5' : 'p-6 sm:p-7'} rounded-2xl shadow-[0_16px_40px_rgba(22,24,23,.08)]`}>
    <p className="eyebrow mb-3">HIZLI TEKLİF</p>
    <h2 className="display text-2xl text-ink">Aracınızı Değerlendirelim</h2>
    <p className="mt-2 text-sm text-muted">Sadece 30 saniye sürer.</p>
    <div className="mt-6 space-y-4">
      <label className="block text-sm font-semibold text-ink">Araç Tipi
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="mt-2 block w-full rounded-[10px] border border-line bg-bg px-3 py-3 text-ink">
          <option>Kazalı Araç</option><option>Hasarlı Araç</option><option>Pert Araç</option><option>Hurda Araç</option>
        </select>
      </label>
      <label className="block text-sm font-semibold text-ink">Telefon Numaranız
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" inputMode="tel" placeholder="0555 123 45 67" className="mt-2 block w-full rounded-[10px] border border-line bg-bg px-3 py-3 text-ink placeholder:text-muted" />
      </label>
      <button className="button-primary w-full" type="submit">Ücretsiz Teklif Al <FaArrowRight aria-hidden /></button>
    </div>
    <p className="mt-4 flex items-center gap-2 text-xs text-muted"><FaLock aria-hidden className="text-ink" /> Bilgileriniz güvende</p>
  </form>;
}
