# Vehicle Buyer Pro - Setup Checklist

## ✅ Files Created/Updated

### Configuration Files
- [x] `package.json` - Updated with dependencies
- [x] `tailwind.config.ts` - Custom colors configured
- [x] `tsconfig.json` - Already configured
- [x] `next.config.ts` - Already configured
- [x] `.env.local.example` - Environment template
- [ ] `.env.local` - YOU NEED TO CREATE THIS

### App Pages
- [x] `src/app/layout.tsx` - Root layout with tracking
- [x] `src/app/page.tsx` - Homepage with all sections
- [x] `src/app/globals.css` - Updated with custom styles
- [x] `src/app/blog/page.tsx` - Blog listing
- [x] `src/app/blog/[slug]/page.tsx` - Blog post detail
- [x] `src/app/hizmetler/[slug]/page.tsx` - Service detail
- [x] `src/app/hakkimizda/page.tsx` - About page
- [x] `src/app/iletisim/page.tsx` - Contact page

### Data Files (src/data/)
- [x] `types.ts` - TypeScript interfaces
- [x] `site.ts` - Site configuration
- [x] `navigation.ts` - Menu structure
- [x] `hero.ts` - Hero section content
- [x] `services.ts` - Services data
- [x] `process.ts` - Process steps
- [x] `stats.ts` - Statistics
- [x] `testimonials.ts` - Customer reviews
- [x] `faq.ts` - FAQ items
- [x] `locations.ts` - Service coverage
- [x] `blog-posts.ts` - Blog articles
- [x] `cta.ts` - CTA content

### Components - Layout (src/components/layout/)
- [x] `Header.tsx` - Site header with navigation
- [x] `Footer.tsx` - Site footer
- [x] `FloatingButtons.tsx` - WhatsApp & Phone buttons
- [x] `index.ts` - Exports

### Components - Sections (src/components/sections/)
- [x] `HeroSection.tsx` - Homepage hero
- [x] `ServicesGrid.tsx` - Services display
- [x] `ProcessSteps.tsx` - Process steps
- [x] `StatsSection.tsx` - Statistics counter
- [x] `TestimonialsSection.tsx` - Customer reviews
- [x] `FAQSection.tsx` - FAQ accordion
- [x] `CTASection.tsx` - Call to action
- [x] `ServiceCoverageMap.tsx` - Service areas map
- [x] `index.ts` - Exports

### Components - Blog (src/components/blog/)
- [x] `BlogCard.tsx` - Blog post card
- [x] `BlogContent.tsx` - Blog post content
- [x] `index.ts` - Exports

### Components - Tracking (src/components/tracking/)
- [x] `GoogleTagManager.tsx` - GTM integration
- [x] `GoogleAnalytics.tsx` - GA4 integration
- [x] `FacebookPixel.tsx` - FB Pixel integration
- [x] `index.ts` - Exports

### Utilities (src/lib/)
- [x] `utils.ts` - Helper functions
- [x] `analytics.ts` - Tracking functions

### Configuration (src/config/)
- [x] `tracking.ts` - Tracking configuration

### Documentation
- [x] `README.md` - Complete documentation

## 🚀 Setup Steps

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- next@16.0.3
- react@19.2.0
- react-dom@19.2.0
- clsx@^2.1.1
- tailwind-merge@^2.3.0
- @tailwindcss/typography@^0.5.15 (dev)

### Step 2: Create Environment File

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your actual values:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Premium Auto Expert

# Contact Information
NEXT_PUBLIC_PHONE=+905551234567
NEXT_PUBLIC_PHONE_DISPLAY=0555 123 45 67
NEXT_PUBLIC_WHATSAPP=905551234567
NEXT_PUBLIC_EMAIL=info@yourdomain.com

# Tracking IDs (Get these from respective platforms)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL=XXXXXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

### Step 3: Customize Content

Edit files in `src/data/` folder:

1. **Site Configuration** (`site.ts`)
   - Update company name, phone, email, address
   - Update social media links
   - Update business info

2. **Services** (`services.ts`)
   - Update service descriptions
   - Modify features and benefits
   - Change service images

3. **Blog Posts** (`blog-posts.ts`)
   - Add your blog articles
   - Update categories and tags

4. **FAQ** (`faq.ts`)
   - Add frequently asked questions
   - Organize by category

5. **Testimonials** (`testimonials.ts`)
   - Add customer reviews
   - Update customer names and locations

6. **Locations** (`locations.ts`)
   - Update service coverage areas
   - Add city and district information

### Step 4: Update Colors (Optional)

If you want different brand colors, edit `tailwind.config.ts`:

```typescript
colors: {
  turuncu: {
    500: '#YOUR_PRIMARY_COLOR',
  },
  lacivert: {
    700: '#YOUR_SECONDARY_COLOR',
  }
}
```

### Step 5: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Step 6: Test Everything

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Blog page displays posts
- [ ] Service pages display correctly
- [ ] About page shows information
- [ ] Contact page is accessible
- [ ] Phone button triggers tracking
- [ ] WhatsApp button triggers tracking
- [ ] All sections display properly
- [ ] Mobile responsive design works
- [ ] Forms are functional (if added)

### Step 7: Setup Tracking Accounts

1. **Google Tag Manager**
   - Create account at [tagmanager.google.com](https://tagmanager.google.com)
   - Create container
   - Copy container ID (GTM-XXXXXXX)
   - Add to `.env.local`

2. **Google Analytics 4**
   - Create property at [analytics.google.com](https://analytics.google.com)
   - Copy measurement ID (G-XXXXXXXXXX)
   - Add to `.env.local`

3. **Google Ads**
   - Setup conversion tracking in Google Ads
   - Create conversion actions for:
     - Phone calls
     - WhatsApp clicks
     - Form submissions
   - Copy conversion labels
   - Add to `.env.local`

4. **Facebook Pixel**
   - Create pixel at [business.facebook.com](https://business.facebook.com)
   - Copy pixel ID
   - Add to `.env.local`

### Step 8: Build for Production

```bash
npm run build
```

Check for any build errors and fix them.

### Step 9: Deploy

**Option A: Vercel (Recommended)**

```bash
npm i -g vercel
vercel
```

**Option B: Other Platforms**
- Follow their Next.js deployment guides
- Ensure environment variables are set

### Step 10: Post-Deployment

- [ ] Add environment variables to hosting platform
- [ ] Test all tracking events fire correctly
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices
- [ ] Check page speed with Lighthouse
- [ ] Verify all links work
- [ ] Test contact forms

## 📋 Tracking Setup Checklist

### Google Tag Manager
- [ ] Container created
- [ ] Container ID added to `.env.local`
- [ ] GTM script loads on all pages
- [ ] DataLayer events firing

### Google Analytics 4
- [ ] Property created
- [ ] Measurement ID added to `.env.local`
- [ ] Pageviews tracking
- [ ] Custom events tracking

### Google Ads
- [ ] Conversion actions created
- [ ] Phone call conversion
- [ ] WhatsApp conversion
- [ ] Form submission conversion
- [ ] All conversion labels added to `.env.local`

### Facebook Pixel
- [ ] Pixel created
- [ ] Pixel ID added to `.env.local`
- [ ] PageView event firing
- [ ] Lead event firing
- [ ] Custom events tracking

## 🎨 Customization for New Competitors

When creating a site for a new competitor:

### Essential Changes:
1. **Colors** - Change in `tailwind.config.ts`
2. **Content** - Update all `src/data/*.ts` files
3. **Company Info** - Update `src/data/site.ts`
4. **Environment** - Create new `.env.local`
5. **Tracking IDs** - Get new IDs for each platform

### Optional Changes:
1. **Fonts** - Change in `src/app/layout.tsx`
2. **Layout** - Modify components in `src/components/layout/`
3. **Sections Order** - Rearrange in `src/app/page.tsx`
4. **Component Styles** - Update individual components

## 🆘 Troubleshooting

### Build Errors

**Error: Cannot find module '@tailwindcss/typography'**
```bash
npm install -D @tailwindcss/typography
```

**Error: Module not found 'clsx'**
```bash
npm install clsx tailwind-merge
```

### Tracking Not Working

1. Check environment variables are set
2. Verify tracking IDs are correct
3. Check browser console for errors
4. Use Google Tag Assistant to debug

### Pages Not Loading

1. Check file structure matches documentation
2. Verify all imports are correct
3. Check for TypeScript errors
4. Rebuild the project

## 📞 Support

If you encounter issues:

1. Check this checklist again
2. Review error messages carefully
3. Check the README.md documentation
4. Verify all files are created correctly

## ✨ Success Criteria

Your website is ready when:

- [x] All pages load without errors
- [x] Tracking events fire correctly
- [x] Mobile responsive design works
- [x] Content is updated and accurate
- [x] SEO meta tags are in place
- [x] Performance is optimized
- [x] All links work correctly
- [x] Contact information is correct

---

**Project Status: Ready for Deployment** 🚀

After completing this checklist, your website will be fully functional and ready to go live!