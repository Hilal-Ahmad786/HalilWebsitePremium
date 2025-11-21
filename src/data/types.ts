// src/data/types.ts
// Core TypeScript interfaces for the entire project

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  social: SocialLinks;
  metaTitle?: string;
  metaDescription?: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
  order: number;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
  location?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface Location {
  id: string;
  city: string;
  districts: string[];
  coordinates: [number, number];
  isActive: boolean;
  phone?: string;
  address?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  image: string;
  badges?: string[];
}

export interface CTAContent {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant: 'primary' | 'secondary' | 'dark';
}