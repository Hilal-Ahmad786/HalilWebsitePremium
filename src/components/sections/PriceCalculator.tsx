
// src/components/sections/PriceCalculator.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { trackCalculatorUse } from '@/lib/analytics';

export default function PriceCalculator() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    damage: '',
    mileage: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    // Simplified price calculation logic
    const basePrice = 100000;
    const yearFactor = (2024 - parseInt(formData.year)) * 5000;
    const damageFactor = formData.damage === 'heavy' ? 50000 : formData.damage === 'medium' ? 30000 : 10000;
    const mileageFactor = parseInt(formData.mileage) * 0.1;
    
    const price = Math.max(basePrice - yearFactor - damageFactor - mileageFactor, 20000);
    setEstimatedPrice(price);
    trackCalculatorUse(price);
  };

  return (
    <section id="fiyat-hesapla" className="py-20 bg-gradient-to-r from-primary-50 to-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-center gradient-text mb-4">
            Aracınızın Değerini Öğrenin
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Hemen birkaç bilgi girerek tahmini fiyat alabilirsiniz
          </p>

          <div className="glass-card rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Marka"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:border-primary-500 focus:outline-none transition-all"
              />
              
              <input
                type="text"
                placeholder="Model"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:border-primary-500 focus:outline-none transition-all"
              />
              
              <input
                type="number"
                placeholder="Yıl"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:border-primary-500 focus:outline-none transition-all"
              />
              
              <input
                type="number"
                placeholder="Kilometre"
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:border-primary-500 focus:outline-none transition-all"
              />
              
              <select
                value={formData.damage}
                onChange={(e) => setFormData({ ...formData, damage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 focus:border-primary-500 focus:outline-none transition-all md:col-span-2"
              >
                <option value="">Hasar Durumu Seçiniz</option>
                <option value="light">Hafif Hasar</option>
                <option value="medium">Orta Hasar</option>
                <option value="heavy">Ağır Hasar</option>
                <option value="pert">Pert</option>
              </select>
            </div>

            <div className="mt-6">
              <AnimatedButton
                variant="gradient"
                size="full"
                onClick={calculatePrice}
              >
                Fiyat Hesapla
              </AnimatedButton>
            </div>

            {estimatedPrice && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-navy-900 rounded-2xl text-white text-center"
              >
                <p className="text-sm mb-2">Tahmini Değer</p>
                <p className="text-4xl font-bold">
                  ₺{estimatedPrice.toLocaleString('tr-TR')}
                </p>
                <p className="text-sm mt-4">
                  Kesin fiyat için ücretsiz ekspertiz hizmemizden yararlanın
                </p>
                <div className="mt-4">
                  <AnimatedButton
                    variant="glass"
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  >
                    Hemen Ara
                  </AnimatedButton>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}