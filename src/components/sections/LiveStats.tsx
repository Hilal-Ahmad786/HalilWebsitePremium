
// src/components/sections/LiveStats.tsx
'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaUsers, FaMoneyBillWave, FaClock } from 'react-icons/fa';

export default function LiveStats() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    {
      icon: <FaCar />,
      value: 15000,
      suffix: '+',
      label: 'Araç Aldık',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <FaUsers />,
      value: 50000,
      suffix: '+',
      label: 'Mutlu Müşteri',
      color: 'from-navy-800 to-navy-900',
    },
    {
      icon: <FaMoneyBillWave />,
      value: 500,
      prefix: '₺',
      suffix: 'M+',
      label: 'Ödeme Yaptık',
      color: 'from-accent-teal to-emerald-600',
    },
    {
      icon: <FaClock />,
      value: 24,
      suffix: '/7',
      label: 'Hizmet Veriyoruz',
      color: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230891B2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold gradient-text mb-4">
            Rakamlarla Biz
          </h2>
          <p className="text-gray-600 text-lg">
            Güvenilirliğimizi rakamlar konuşsun
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} text-white text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                
                <div className="text-4xl font-bold text-navy-900 mb-2">
                  {isClient && inView ? (
                    <>
                      {stat.prefix}
                      <CountUp end={stat.value} duration={2} />
                      {stat.suffix}
                    </>
                  ) : (
                    `${stat.prefix || ''}0${stat.suffix}`
                  )}
                </div>
                
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}