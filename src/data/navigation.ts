// src/data/navigation.ts
import { NavigationItem } from './types';

export const mainNavigation: NavigationItem[] = [
  {
    id: 'anasayfa',
    label: 'Ana Sayfa',
    href: '/',
  },
  {
    id: 'hizmetler',
    label: 'Hizmetlerimiz',
    href: '/hizmetler',
    children: [
      {
        id: 'arac-alim',
        label: 'Araç Alım',
        href: '/hizmetler/arac-alim',
      },
      {
        id: 'ekspertiz',
        label: 'Ekspertiz Hizmeti',
        href: '/hizmetler/ekspertiz',
      },
      {
        id: 'trafige-cikis',
        label: 'Trafiğe Çıkış',
        href: '/hizmetler/trafige-cikis',
      },
      {
        id: 'arac-degisim',
        label: 'Araç Değişim',
        href: '/hizmetler/arac-degisim',
      },
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
  },
  {
    id: 'hakkimizda',
    label: 'Hakkımızda',
    href: '/hakkimizda',
  },
  {
    id: 'iletisim',
    label: 'İletişim',
    href: '/iletisim',
  },
];

export const footerNavigation = {
  company: {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Blog', href: '/blog' },
      { label: 'İletişim', href: '/iletisim' },
      { label: 'Kariyer', href: '/kariyer' },
    ],
  },
  services: {
    title: 'Hizmetlerimiz',
    links: [
      { label: 'Araç Alım', href: '/hizmetler/arac-alim' },
      { label: 'Ekspertiz', href: '/hizmetler/ekspertiz' },
      { label: 'Trafiğe Çıkış', href: '/hizmetler/trafige-cikis' },
      { label: 'Araç Değişim', href: '/hizmetler/arac-degisim' },
    ],
  },
  legal: {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
      { label: 'Kullanım Şartları', href: '/kullanim-sartlari' },
      { label: 'KVKK', href: '/kvkk' },
      { label: 'Çerez Politikası', href: '/cerez-politikasi' },
    ],
  },
};