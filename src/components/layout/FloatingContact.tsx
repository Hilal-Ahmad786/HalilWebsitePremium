
// src/components/layout/FloatingContact.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { trackPhoneCall, trackWhatsApp } from '@/lib/analytics';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneCall();
    window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE}`;
  };

  const handleWhatsAppClick = () => {
    trackWhatsApp();
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`, '_blank');
  };

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-2 gap-0">
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold"
          >
            <FaPhone />
            <span>Hemen Ara</span>
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <AnimatePresence>
        {showButtons && (
          <>
            {/* Main Action Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="hidden lg:flex fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary-500 to-navy-900 text-white rounded-full items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <FaTimes size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="phone"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                  >
                    <FaPhone size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Floating Menu */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Phone Button */}
                  <motion.button
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{ scale: 1, x: -80, y: 0 }}
                    exit={{ scale: 0, x: 0, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="hidden lg:flex fixed bottom-6 right-6 w-14 h-14 bg-primary-500 text-white rounded-full items-center justify-center shadow-xl z-40 hover:scale-110"
                    onClick={handlePhoneClick}
                  >
                    <FaPhone size={20} />
                  </motion.button>

                  {/* WhatsApp Button */}
                  <motion.button
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{ scale: 1, x: -60, y: -60 }}
                    exit={{ scale: 0, x: 0, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden lg:flex fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full items-center justify-center shadow-xl z-40 hover:scale-110"
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp size={20} />
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
