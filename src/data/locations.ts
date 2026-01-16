
// ===== src/data/locations.ts =====
import { Location } from './types';

export const serviceLocations: Location[] = [
  {
    id: 'loc-1',
    city: 'İstanbul',
    districts: ['Beylikdüzü', 'Esenyurt', 'Avcılar', 'Küçükçekmece', 'Bağcılar', 'Başakşehir'],
    coordinates: [41.0082, 28.9784],
    isActive: true,
    phone: '+905441702540',
    address: 'Beylikdüzü Merkez',
  },
  {
    id: 'loc-2',
    city: 'İstanbul',
    districts: ['Sultangazi', 'Eyüpsultan', 'Gaziosmanpaşa', 'Arnavutköy'],
    coordinates: [41.1044, 28.8819],
    isActive: true,
  },
  {
    id: 'loc-3',
    city: 'İstanbul',
    districts: ['Şişli', 'Beşiktaş', 'Sarıyer', 'Kağıthane'],
    coordinates: [41.0602, 28.9855],
    isActive: true,
  },
  {
    id: 'loc-4',
    city: 'İstanbul',
    districts: ['Kadıköy', 'Ümraniye', 'Ataşehir', 'Maltepe', 'Pendik'],
    coordinates: [40.9929, 29.0265],
    isActive: true,
  },
];