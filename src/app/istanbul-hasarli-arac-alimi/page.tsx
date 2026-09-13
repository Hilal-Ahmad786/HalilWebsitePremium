import type { Metadata } from 'next';
import CityPage from '@/app/[citySlug]/page';
export const metadata: Metadata = { title: { absolute: 'İstanbul Hasarlı Araç Alımı | Araban Nakit' }, description: 'İstanbul’da hasarlı, kazalı, pert ve hurda araç alımı. Ücretsiz ekspertiz ve aynı gün ödeme.', alternates: { canonical: '/istanbul-hasarli-arac-alimi' } };
export default function IstanbulPage(){ return <CityPage params={Promise.resolve({ citySlug: 'istanbul-hasarli-arac-alimi' })} />; }
