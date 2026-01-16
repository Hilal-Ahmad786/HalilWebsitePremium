# Vehicle Buyer Pro - Data-Driven Website

A professional, SEO-optimized vehicle buying website built with Next.js 16, TypeScript, and Tailwind CSS. Fully data-driven architecture with comprehensive tracking integration.

## 🎨 Design System

### Color Scheme
- **Turuncu (Orange)**: `#FF6B35` - Main action color
- **Lacivert (Navy Blue)**: `#1B2951` - Main brand color

### Design Philosophy
**"Professional Trust with Energy"** - Clean, modern design combining professional navy blue with energetic orange accents.

## ✨ Key Features

### 1. Data-Driven Architecture
- All content managed through TypeScript files in `src/data/`
- Type-safe with comprehensive interfaces
- Easy content management without touching components
- Scalable structure for multiple clients

### 2. Complete Tracking Integration
✅ Google Tag Manager (GTM)  
✅ Google Analytics 4 (GA4)  
✅ Google Ads conversion tracking  
✅ Facebook Pixel  
✅ Custom event tracking for all interactions  

### 3. SEO & LLM Optimization
- Dynamic meta tags and OpenGraph
- Structured data (Schema.org)
- Semantic HTML5 structure
- ARIA labels for accessibility
- Optimized for AI/LLM discovery

### 4. Blog System
- Dynamic blog listing page
- Individual blog post pages
- Categories and tags
- Reading time estimation
- SEO-optimized blog posts

### 5. Service Pages
- Dynamic service pages from data
- Detailed service descriptions
- Features and benefits sections
- Related services recommendations

### 6. Interactive Components
- Service coverage map (placeholder)
- FAQ accordion
- Testimonials carousel
- Statistics counter
- Floating contact buttons (WhatsApp & Phone)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your tracking IDs:

```bash
cp .env.local.example .env.local
```

Required environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Company Name
NEXT_PUBLIC_PHONE=+905551234567
NEXT_PUBLIC_PHONE_DISPLAY=0555 123 45 67
NEXT_PUBLIC_WHATSAPP=905551234567
NEXT_PUBLIC_EMAIL=info@yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vehicle-buyer-pro/
├── public/
│   └── images/              # Static images
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with tracking
│   │   ├── page.tsx         # Homepage
│   │   ├── blog/            # Blog pages
│   │   │   ├── page.tsx     # Blog listing
│   │   │   └── [slug]/      # Individual blog posts
│   │   ├── hizmetler/       # Service pages
│   │   │   └── [slug]/      # Individual services
│   │   ├── hakkimizda/      # About page
│   │   └── iletisim/        # Contact page
│   ├── components/          # React components
│   │   ├── layout/          # Header, Footer, FloatingButtons
│   │   ├── sections/        # Homepage sections
│   │   ├── blog/            # Blog components
│   │   └── tracking/        # Tracking components
│   ├── data/                # 🎯 All content here
│   │   ├── types.ts         # TypeScript interfaces
│   │   ├── site.ts          # Site configuration
│   │   ├── navigation.ts    # Menu structure
│   │   ├── hero.ts          # Hero section content
│   │   ├── services.ts      # Services data
│   │   ├── process.ts       # Process steps
│   │   ├── stats.ts         # Statistics
│   │   ├── testimonials.ts  # Customer reviews
│   │   ├── faq.ts           # FAQ items
│   │   ├── locations.ts     # Service coverage
│   │   ├── blog-posts.ts    # Blog articles
│   │   └── cta.ts           # CTA content
│   ├── lib/                 # Utilities
│   │   ├── utils.ts         # Helper functions
│   │   └── analytics.ts     # Tracking functions
│   └── config/              # Configuration
│       └── tracking.ts      # Tracking config
├── .env.local               # Environment variables (create this)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## 📝 Content Management

### Adding a Blog Post

Edit `src/data/blog-posts.ts`:

```typescript
{
  id: 'unique-id',
  slug: 'url-slug',
  title: 'Post Title',
  excerpt: 'Short description',
  content: '<p>HTML content here</p>',
  author: 'Author Name',
  date: '2024-01-20',
  category: 'Category Name',
  tags: ['tag1', 'tag2'],
  image: '/images/blog/image.jpg',
  readTime: 5,
  published: true
}
```

### Adding a Service

Edit `src/data/services.ts`:

```typescript
{
  id: 'service-id',
  slug: 'url-slug',
  title: 'Service Name',
  shortDescription: 'Brief description',
  fullDescription: '<p>Detailed HTML content</p>',
  icon: 'FaCar',
  features: ['Feature 1', 'Feature 2'],
  benefits: ['Benefit 1', 'Benefit 2'],
  image: '/images/service.jpg',
  order: 1,
  published: true
}
```

### Updating Site Information

Edit `src/data/site.ts`:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  description: 'Your description',
  phone: '+905551234567',
  // ...other settings
};
```

## 📊 Tracking Events

All conversion tracking is automatically implemented:

- **Phone Clicks**: Tracked to Google Ads & Facebook
- **WhatsApp Clicks**: Tracked to Google Ads & Facebook
- **Form Submissions**: Tracked as leads
- **Service Views**: Content engagement
- **Blog Views**: Content engagement
- **CTA Clicks**: User interactions

### Custom Event Tracking

Use the analytics functions from `src/lib/analytics.ts`:

```typescript
import { trackPhoneClick, trackWhatsAppClick, trackFormSubmit } from '@/lib/analytics';

// Track phone click
trackPhoneClick();

// Track WhatsApp click
trackWhatsAppClick();

// Track form submission
trackFormSubmit('contact_form');
```

## 🎨 Customization for New Clients

When creating a website for a new competitor:

### 1. Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  turuncu: {
    // Update with new primary color
    500: '#YOUR_PRIMARY_COLOR',
  },
  lacivert: {
    // Update with new secondary color
    700: '#YOUR_SECONDARY_COLOR',
  }
}
```

### 2. Update Content

Update all files in `src/data/` folder:
- `site.ts` - Company information
- `services.ts` - Service offerings
- `blog-posts.ts` - Blog content
- `testimonials.ts` - Customer reviews
- `faq.ts` - FAQ items
- `locations.ts` - Service areas

### 3. Modify Layout

- **Header**: `src/components/layout/Header.tsx`
- **Footer**: `src/components/layout/Footer.tsx`
- **Sections**: `src/components/sections/`

### 4. Change Typography

Edit `src/app/layout.tsx` to use different fonts:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  display: 'swap',
});
```

### 5. Update Environment Variables

Create a new `.env.local` with the client's tracking IDs.

## 🔍 SEO Best Practices

### Implemented SEO Features

✅ Dynamic meta tags per page  
✅ OpenGraph tags for social sharing  
✅ Structured data (JSON-LD)  
✅ Semantic HTML  
✅ Mobile-responsive design  
✅ Fast page loads  
✅ Optimized images  
✅ Clean URLs with slugs  
✅ Sitemap (add sitemap.xml)  
✅ Robots.txt  

### Adding Structured Data

The website includes structured data for:
- Organization
- LocalBusiness
- WebSite
- BlogPosting
- FAQ

## 🚦 Performance Optimization

- Next.js 16 App Router for optimal performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS for minimal CSS bundle
- TypeScript for type safety
- Edge-ready with Vercel deployment

## 📱 Responsive Design

The website is fully responsive across all devices:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🧪 Testing

Before deploying, test:

1. **All tracking events** fire correctly
2. **Links** work as expected
3. **Forms** submit properly
4. **Mobile** responsiveness
5. **Page speed** with Lighthouse
6. **SEO** with Google Search Console

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables on Vercel

Add all environment variables from `.env.local` to your Vercel project settings.

## 📧 Support

For questions or issues:
- Email: [your-email@example.com]
- Documentation: [link-to-docs]

## 📄 License

Private - All rights reserved

---

**Built with ❤️ using Next.js 16, TypeScript, and Tailwind CSS**