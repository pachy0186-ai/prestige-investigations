# Prestige Executive Investigations LLC - Website

A modern, mobile-responsive website for Prestige Executive Investigations LLC built with Next.js, Tailwind CSS, and TypeScript.

## 🌐 Live Website

The website is deployed and accessible at: [Your Deployment URL]

## 📋 Project Overview

This website showcases the professional investigative services offered by Prestige Executive Investigations LLC, a licensed private investigation firm based in South Florida (License #A1700257).

### Key Features

- **Modern Design**: Clean, professional design with responsive layout
- **Complete Service Portfolio**: 13 comprehensive investigative services
- **Contact Integration**: Direct phone and email contact with functional contact form
- **SEO Optimized**: Proper meta tags and structured content for search engines
- **Mobile Responsive**: Optimized for all device sizes
- **Professional Branding**: Company colors (Dark Blue #0B2A6F, Yellow #FACC15)

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Static Export for universal hosting

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About page
│   ├── blog/page.tsx           # Blog/Resources page
│   ├── contact/page.tsx        # Contact page with form
│   ├── faq/page.tsx            # FAQ page
│   ├── services/page.tsx       # Services overview
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── Navigation.tsx          # Main navigation component
│   └── Footer.tsx              # Footer component
public/
├── images/
│   └── prestige_banner.webp    # Company banner/logo
└── [other static assets]
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[username]/prestige-investigations.git
cd prestige-investigations
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Editing Text Content

Most text content can be found in the respective page files:

- **Home Page**: `src/app/page.tsx`
- **About Page**: `src/app/about/page.tsx`
- **Services**: `src/app/services/page.tsx`
- **Contact Info**: `src/components/Navigation.tsx` and `src/components/Footer.tsx`

### Adding Blog Posts

To add new blog posts, edit the `blogPosts` array in `src/app/blog/page.tsx`:

```typescript
const blogPosts = [
  {
    title: "Your Blog Post Title",
    excerpt: "Brief description of the post...",
    date: "2024-01-15",
    author: "Author Name",
    category: "Category",
    slug: "url-friendly-slug"
  },
  // ... other posts
];
```

### Updating Services

Services are defined in the `services` array in `src/app/services/page.tsx`. Each service includes:

- Icon (from Lucide React)
- Title
- Description
- Features list

### Modifying Contact Information

Update contact details in:
- `src/components/Navigation.tsx` (top bar)
- `src/components/Footer.tsx` (footer section)
- `src/app/contact/page.tsx` (contact page)

## 🎨 Styling and Branding

### Color Scheme

The website uses a professional color palette:

- **Primary Blue**: `#0b2a6f`
- **Secondary Yellow**: `#facc15`
- **Text Gray**: `#1f2937`
- **Background**: `#ffffff`

### Fonts

- **Primary Font**: Inter (Google Fonts)
- **Fallback**: System fonts (system-ui, sans-serif)

### Customizing Styles

Global styles are in `src/app/globals.css`. Component-specific styles use Tailwind CSS classes.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Build and Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Deployment Options

The website is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. The site will be available at `https://[project-name].vercel.app`

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `out/` directory to your hosting provider
3. Configure your domain to point to the uploaded files

## 📊 SEO and Performance

### SEO Features

- Semantic HTML structure
- Meta tags for each page
- Proper heading hierarchy
- Alt text for images
- Structured data ready

### Performance Optimizations

- Static site generation
- Optimized images
- Minimal JavaScript bundle
- CSS optimization
- Fast loading times

## 🔒 Security and Privacy

- No sensitive data stored in the repository
- Contact form data handling (implement server-side processing as needed)
- HTTPS ready
- No tracking scripts (add as needed)

## 📞 Support and Maintenance

### Regular Updates

1. **Content Updates**: Edit page files and redeploy
2. **Security Updates**: Keep dependencies updated with `npm update`
3. **Feature Additions**: Follow the existing code structure

### Troubleshooting

**Build Errors**: Check the console output and ensure all dependencies are installed.

**Styling Issues**: Verify Tailwind classes and check for conflicts in `globals.css`.

**Deployment Issues**: Ensure the `out/` directory is properly generated and uploaded.

## 📄 License Information

This website is built for Prestige Executive Investigations LLC.

**Company Details:**
- Licensed Private Investigator
- Florida License #A1700257
- Phone: 786-556-3313
- Email: Prestigeinvestigations@outlook.com
- Service Area: South Florida

## 🤝 Contributing

For updates or modifications:

1. Create a new branch for your changes
2. Test thoroughly in development
3. Submit changes for review
4. Deploy to production after approval

## 📞 Contact

For technical support or questions about this website:

**Prestige Executive Investigations LLC**
- Phone: 786-556-3313
- Email: Prestigeinvestigations@outlook.com

---

*Built with ❤️ using Next.js and Tailwind CSS*
