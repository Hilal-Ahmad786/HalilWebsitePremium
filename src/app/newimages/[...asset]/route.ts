import { NextResponse } from 'next/server';

// The supplied source folder is named `Newimages` (capital N).  This route keeps
// the design's stable `/newimages/...` URLs while mapping planned slots to assets
// already supplied by the client, until the final optimised asset pack is added.
const files: Record<string, string> = {
  'damaged-car.webp': 'hasarli.jpeg', 'kazali.webp': 'kazali.jpeg', 'hasarli.webp': 'hasarli.jpeg',
  'pert.webp': 'c%CC%A7ekmeblegeli.jpeg', 'hurda.webp': 'c%CC%A7ekmeblegeli.jpeg', 'cekici.webp': 'c%CC%A7ekmeblegeli.jpeg',
  'car-headlight.webp': 'OIP%20(1).jpeg', 'istanbul.webp': 'OIP.jpeg', 'ankara.webp': 'edirne.jpg',
  'izmir.webp': 'izmir.jpeg', 'bursa.webp': 'bursa.jpg', 'antalya.webp': 'OIP%20(1).jpeg',
  'adana.webp': 'OIP%20(2).jpeg', 'konya.webp': 'konya.jpg', 'gaziantep.webp': 'OIP.jpeg',
};
export function GET(request: Request, { params }: { params: Promise<{ asset: string[] }> }) {
  return params.then(({ asset }) => NextResponse.redirect(new URL(`/Newimages/${files[asset.at(-1) ?? ''] ?? 'OIP.jpeg'}`, request.url)));
}
