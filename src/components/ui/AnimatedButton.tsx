// src/components/ui/AnimatedButton.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient' | 'glass' | 'whatsapp';
  size?: 'small' | 'medium' | 'large' | 'full';
  icon?: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function AnimatedButton({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-primary-500/50',
    secondary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-lg hover:shadow-navy-900/50',
    gradient: 'bg-gradient-to-r from-primary-500 to-navy-900 text-white hover:from-primary-600 hover:to-navy-800 shadow-lg',
    glass: 'glass-card text-navy-900 hover:bg-white/90',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-green-500/50',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    full: 'w-full px-6 py-3 text-base',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  const content = (
    <>
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
      <motion.div
        className="absolute inset-0 bg-white opacity-0 hover:opacity-20"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}