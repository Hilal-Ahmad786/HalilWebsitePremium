
// ===== src/data/stats.ts =====
import { Statistic } from './types';

export const statistics: Statistic[] = [
  {
    id: 'stat-1',
    value: '5000',
    label: 'Satın Alınan Araç',
    icon: 'FaCar',
    suffix: '+',
  },
  {
    id: 'stat-2',
    value: '98',
    label: 'Müşteri Memnuniyeti',
    icon: 'FaSmile',
    suffix: '%',
  },
  {
    id: 'stat-3',
    value: '15',
    label: 'Dakikada Yanıt',
    icon: 'FaClock',
  },
  {
    id: 'stat-4',
    value: '6',
    label: 'Yıllık Tecrübe',
    icon: 'FaAward',
  },
];
