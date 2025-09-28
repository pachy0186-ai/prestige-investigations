# Prestige Executive Investigations LLC - Website

A modern, professional website for Prestige Executive Investigations LLC built with Next.js 15, Tailwind CSS, and TypeScript. Features authentic black and gold branding, responsive design, and comprehensive investigative services showcase.

## 🚀 Live Website

**Production URL:** [https://prestige-investigations.vercel.app](https://prestige-investigations.vercel.app)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Fonts:** Playfair Display (headings), Inter (body)
- **Deployment:** Vercel
- **Version Control:** GitHub

## 🎨 Brand Identity

### Color Palette
```css
/* Prestige Executive Investigations Brand Colors */
prestige-black: #0A0A0A    /* Primary dark background */
prestige-gold: #F5C518     /* Primary accent color */
prestige-gray: #6B7280     /* Text and support elements */
prestige-white: #FFFFFF    /* Clean sections and text */
prestige-paper: #111111    /* Dark section backgrounds */
```

### Typography
- **Headings:** Playfair Display (serif) - Authoritative and professional
- **Body Text:** Inter (sans-serif) - Clean and readable
- **UI Elements:** Inter (sans-serif) - Consistent interface

### Design Principles
- **Professional Authority:** Black and gold convey trust and expertise
- **Clean Hierarchy:** Clear information architecture
- **Mobile-First:** Responsive design for all devices
- **Accessibility:** WCAG AA compliant color contrast and navigation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── contact/           # Contact form page
│   ├── faq/               # FAQ accordion page
│   ├── services/          # Services grid page
│   ├── globals.css        # Global styles and brand CSS
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Button.tsx         # Branded button component
│   ├── Footer.tsx         # Site footer with contact info
│   ├── Navigation.tsx     # Header navigation with mobile menu
│   └── TopBar.tsx         # Contact strip with phone/email/license
└── public/
    └── images/            # Static assets (logo, banner, etc.)
```

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/pachy0186-ai/prestige-investigations.git
cd prestige-investigations

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## ✏️ Content Management

### Updating Text Content

#### Company Information
Edit contact details in multiple locations:
- `src/components/TopBar.tsx` - Header contact strip
- `src/components/Footer.tsx` - Footer contact section
- `src/app/contact/page.tsx` - Contact page details

#### Services
Update services in `src/app/services/page.tsx`:
```typescript
const services = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Service Name",
    description: "Service description...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    id: "service-slug"
  }
  // Add more services...
];
```

#### Testimonials
Update testimonials in `src/app/page.tsx`:
```typescript
const testimonials = [
  {
    content: "Testimonial text...",
    name: "Client Name",
    role: "Client Role",
    rating: 5
  }
  // Add more testimonials...
];
```

### Adding Images

1. **Add images to:** `public/images/`
2. **Use Next.js Image component:**
```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

3. **Optimize images:** Use WebP format when possible for better performance

### Blog Posts

#### Adding a New Blog Post
1. Create new file: `src/app/blog/[slug]/page.tsx`
2. Add metadata and content:
```tsx
export const metadata = {
  title: 'Post Title | Prestige Executive Investigations',
  description: 'Post description...'
};

export default function BlogPost() {
  return (
    <article>
      <h1>Post Title</h1>
      <p>Post content...</p>
    </article>
  );
}
```

3. Update blog listing in `src/app/blog/page.tsx`

## 🎨 Customizing Brand Colors

### Method 1: Tailwind Config
Edit `tailwind.config.ts`:
```typescript
colors: {
  prestige: {
    black: "#0A0A0A",    // Change primary dark color
    gold: "#F5C518",     // Change accent color
    gray: "#6B7280",     // Change text color
    white: "#FFFFFF",    // Change light color
    paper: "#111111"     // Change dark section color
  }
}
```

### Method 2: CSS Variables
Edit `src/app/globals.css`:
```css
:root {
  --prestige-black: #0A0A0A;
  --prestige-gold: #F5C518;
  --prestige-gray: #6B7280;
  /* Update other colors... */
}
```

### After Color Changes
1. Restart development server: `npm run dev`
2. Test all pages for proper color application
3. Verify accessibility contrast ratios

## 🚀 Deployment

### Automatic Deployment (Recommended)
The site automatically deploys to Vercel when changes are pushed to the `main` branch.

### Manual Deployment Steps
1. **Commit changes:**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. **Vercel will automatically:**
   - Build the project
   - Run tests and linting
   - Deploy to production
   - Update the live URL

### Custom Domain Setup
1. Go to Vercel dashboard
2. Select the project
3. Go to Settings > Domains
4. Add your custom domain
5. Update DNS records as instructed

## 📊 Performance & SEO

### Lighthouse Targets
- **Performance:** ≥ 90
- **Accessibility:** ≥ 90  
- **Best Practices:** ≥ 90
- **SEO:** ≥ 90

### SEO Features
- **Meta tags:** Unique title/description per page
- **Open Graph:** Social media sharing optimization
- **Structured data:** Business information markup
- **Sitemap:** Automatic generation
- **Mobile-friendly:** Responsive design

### Performance Optimizations
- **Next.js Image:** Automatic image optimization
- **Static generation:** Pre-rendered pages
- **Code splitting:** Automatic bundle optimization
- **Font optimization:** Google Fonts with display swap

## 🔒 Security & Privacy

### Contact Form Security
- **Client-side validation:** Input sanitization
- **Rate limiting:** Prevent spam submissions
- **HTTPS only:** Secure data transmission
- **No data storage:** Forms can integrate with secure services

### Privacy Compliance
- **No tracking:** No analytics by default
- **Secure forms:** Ready for GDPR compliance
- **Contact data:** Handled securely

## 🛠️ Maintenance

### Regular Updates
1. **Dependencies:** Update monthly
```bash
npm update
npm audit fix
```

2. **Content:** Review and update quarterly
   - Services descriptions
   - Contact information
   - Testimonials
   - Blog posts

3. **Performance:** Monitor monthly
   - Lighthouse scores
   - Page load times
   - Mobile usability

### Troubleshooting

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

#### ESLint Errors
```bash
# Fix auto-fixable issues
npm run lint -- --fix

# Check specific files
npx eslint src/app/page.tsx
```

## 📞 Support

### Technical Issues
- **Repository:** [GitHub Issues](https://github.com/pachy0186-ai/prestige-investigations/issues)
- **Documentation:** This README file
- **Framework:** [Next.js Documentation](https://nextjs.org/docs)

### Content Updates
- **Contact:** Prestigeinvestigations@outlook.com
- **Phone:** 786-556-3313
- **License:** Florida PI License #A1700257

## 📄 License

This website is proprietary to Prestige Executive Investigations LLC. All rights reserved.

---

**Last Updated:** September 2025  
**Version:** 2.0.0  
**Maintained by:** Prestige Executive Investigations LLC
