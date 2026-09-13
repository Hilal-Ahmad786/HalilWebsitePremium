'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { trackFormSubmit, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function ContactPageContent() {
  const [data, setData] = useState({ name: '', phone: '', email: '', carInfo: '', message: '' });
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    trackFormSubmit('contact_page_form');
    const text = `Merhaba, iletişim formundan yazıyorum.\n\nAd Soyad: ${data.name}\nTelefon: ${data.phone}\nE-posta: ${data.email}\nAraç Bilgisi: ${data.carInfo}\nMesaj: ${data.message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setData({ name: '', phone: '', email: '', carInfo: '', message: '' });
  };
  const field = (name: keyof typeof data, label: string, type = 'text') => <label className="block text-sm font-bold text-ink">{label}<input required={name === 'name' || name === 'phone'} type={type} value={data[name]} onChange={(event) => setData({ ...data, [name]: event.target.value })} className="mt-2 w-full rounded-[10px] border border-line bg-bg px-3 py-3 text-ink" /></label>;
  return <><section className="border-b border-line bg-surface"><div className="site-container py-16 sm:py-24"><p className="eyebrow">BİZE ULAŞIN</p><h1 className="display mt-5 max-w-3xl text-5xl sm:text-7xl">Aracınızı birlikte değerlendirelim.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Teklif, süreç veya aracınızla ilgili tüm sorularınız için bize ulaşabilirsiniz.</p></div></section><main className="site-container section-space grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><aside className="space-y-4"><a href={`tel:${siteConfig.phone}`} onClick={trackPhoneClick} className="flex gap-4 border border-line bg-surface p-5"><FaPhoneAlt className="mt-1" /><div><h2 className="display text-xl">Telefon</h2><p className="mt-2 text-muted">{siteConfig.phoneDisplay}</p></div></a><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="flex gap-4 border border-line bg-surface p-5"><FaWhatsapp className="mt-1" /><div><h2 className="display text-xl">WhatsApp</h2><p className="mt-2 text-muted">Mesaj gönderin</p></div></a><a href={`mailto:${siteConfig.email}`} className="flex gap-4 border border-line bg-surface p-5"><FaEnvelope className="mt-1" /><div><h2 className="display text-xl">E-posta</h2><p className="mt-2 text-muted">{siteConfig.email}</p></div></a></aside><form onSubmit={submit} className="border border-line bg-surface p-6 sm:p-8"><p className="eyebrow">HIZLI TEKLİF FORMU</p><h2 className="display mt-4 text-3xl">Bilgilerinizi bırakın.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{field('name', 'Adınız Soyadınız *')}{field('phone', 'Telefon *', 'tel')}{field('email', 'E-posta', 'email')}{field('carInfo', 'Araç Bilgisi')}</div><label className="mt-5 block text-sm font-bold text-ink">Mesajınız<textarea value={data.message} onChange={(event) => setData({ ...data, message: event.target.value })} rows={5} className="mt-2 w-full rounded-[10px] border border-line bg-bg px-3 py-3 text-ink" /></label><button className="button-primary mt-6 w-full">WhatsApp ile Teklif Al</button>{sent && <p role="status" className="mt-4 text-center text-sm text-muted">WhatsApp açıldı. Mesajınızı göndererek teklif talebinizi tamamlayabilirsiniz.</p>}</form></main></>;
}
