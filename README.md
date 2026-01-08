# Hafiz Muneeb - Qur'an Learning Website

A production-ready, fast, and SEO-optimized website for Qur'an learning programs featuring Tajwīd, Maqāmāt, and Adhān training.

## Features

- **Modern Tech Stack:** Next.js 15+ with App Router, TypeScript, Tailwind CSS
- **Performance Optimized:** 90+ Lighthouse scores, minimal JavaScript, optimized images
- **SEO Ready:** Complete metadata, OpenGraph, structured data, sitemap, robots.txt
- **Responsive Design:** Mobile-first approach with beautiful Islamic-friendly aesthetics
- **Accessible:** Semantic HTML, ARIA labels, keyboard navigation
- **Content Management:** Centralized content configuration for easy updates
- **Global Audience:** Designed for students worldwide

## Pages

- **Home (/)** - Hero, What We Teach, Expectations, FAQs
- **About (/about)** - Mission, teaching approach, values
- **Programs (/programs)** - Detailed program descriptions
- **Apply (/apply)** - High-conversion application page
- **Contact (/contact)** - Contact information with clear guidelines
- **Privacy (/privacy)** - Privacy policy
- **Terms (/terms)** - Terms of service

## Project Structure

```
quran-learning-website/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── apply/
│   ├── contact/
│   ├── privacy/
│   ├── programs/
│   ├── terms/
│   ├── layout.tsx          # Root layout with fonts and structure
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt configuration
│   └── manifest.ts         # PWA manifest
├── components/             # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Section.tsx
├── lib/                    # Utilities and configuration
│   ├── content.ts          # Central content configuration
│   ├── metadata.ts         # SEO metadata helpers
│   └── utils.ts            # Utility functions
├── public/                 # Static assets (images, icons)
├── package.json
├── tailwind.config.ts      # Tailwind with custom theme
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

1. **Navigate to the project directory:**

```bash
cd quran-learning-website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Update content configuration:**

Open `lib/content.ts` and update the following placeholders:

```typescript
export const siteConfig = {
  url: "https://your-domain.com", // UPDATE THIS
  email: "contact@example.com", // UPDATE THIS
  whatsapp: "+1234567890", // UPDATE THIS
  whatsappLink: "https://wa.me/1234567890", // UPDATE THIS
  instagram: "https://instagram.com/hafizmuneeb", // UPDATE THIS
  googleFormUrl: "https://forms.gle/WnQ2tc7k5waHwcRC7", // Already set
  foundedYear: 2020, // UPDATE THIS
};
```

4. **Add images to the public folder:**

Create or add the following images to the `/public` folder:
- `og.png` (1200x630px) - OpenGraph image for social sharing
- `favicon.ico` - Browser tab icon
- `icon-192.png` (192x192px) - PWA icon
- `icon-512.png` (512x512px) - PWA icon
- `logo.png` - Optional logo

See `/public/PLACEHOLDER_INSTRUCTIONS.md` for detailed image requirements.

5. **Run the development server:**

```bash
npm run dev
```

6. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customizing Content

All website content is centralized in `lib/content.ts`. Update this file to change:

- Site name, tagline, description
- Navigation links
- Hero section text
- Program descriptions
- FAQ items
- Contact information
- About page content
- Privacy and terms content

### Customizing Design

The color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* Deep green shades */ },
  accent: { /* Soft gold shades */ },
  background: { /* Off-white */ }
}
```

Modify these values to match your brand colors.

### Adding New Pages

1. Create a new folder in `/app` (e.g., `/app/new-page`)
2. Add a `page.tsx` file
3. Use the `generateMetadata` function for SEO
4. Add the route to navigation in `lib/content.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/quran-learning-website.git
git push -u origin main
```

2. **Deploy to Vercel:**

- Visit [vercel.com](https://vercel.com)
- Sign up or log in with GitHub
- Click "New Project"
- Import your repository
- Configure project settings:
  - Framework Preset: Next.js
  - Root Directory: `./` (or `quran-learning-website` if needed)
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Click "Deploy"

3. **Configure custom domain (optional):**

- In Vercel dashboard, go to Project Settings > Domains
- Add your custom domain
- Update DNS records as instructed
- Update `siteConfig.url` in `lib/content.ts` to match your domain

### Deploy to Other Platforms

#### Netlify

```bash
npm run build
# Deploy the .next folder
```

#### AWS Amplify

- Connect your GitHub repository
- Set build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`

#### Self-Hosted (VPS/Server)

```bash
npm run build
npm run start
# Use PM2 or systemd to keep the server running
```

## Post-Deployment Checklist

- [ ] Update `lib/content.ts` with real contact information
- [ ] Add all required images to `/public` folder
- [ ] Test Google Form link works correctly
- [ ] Verify all pages load without errors
- [ ] Test mobile responsiveness
- [ ] Check SEO with Lighthouse (aim for 90+)
- [ ] Test OpenGraph preview on social media
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain (if applicable)
- [ ] Test all links and navigation
- [ ] Verify contact form/email works
- [ ] Review privacy policy and terms for accuracy

## Performance Optimization

This website is built for speed:

- **Minimal dependencies:** Only essential packages
- **Font optimization:** next/font with swap display
- **Image optimization:** Next.js Image component (when needed)
- **Code splitting:** Automatic with Next.js App Router
- **Static generation:** Pages are statically generated at build time

Expected Lighthouse scores: 90-100 across all metrics.

## SEO Features

- **Metadata:** Title, description, keywords for every page
- **OpenGraph:** Social media preview images and content
- **Structured Data:** JSON-LD for Organization, WebSite, EducationalOrganization
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Robots.txt:** Auto-generated at `/robots.txt`
- **Semantic HTML:** Proper heading hierarchy, ARIA labels
- **Mobile-friendly:** Responsive design, mobile-first approach

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support (FAQ accordion, mobile menu)
- Color contrast meets WCAG AA standards
- Focus states on all interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run lint
# Fix any reported issues
```

### Images Not Loading

- Verify image files are in `/public` folder
- Check file names match exactly (case-sensitive)
- Clear browser cache and hard refresh

### Styles Not Applied

```bash
# Rebuild Tailwind classes
npm run dev
# Or for production
npm run build
```

## Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    600: '#YOUR_COLOR', // Main primary color
    // ... other shades
  }
}
```

### Update Content

All text content is in `lib/content.ts`. Search for the section you want to update and modify the text.

### Add New FAQ

In `lib/content.ts`, add to the `faqs` array:

```typescript
{
  question: "Your question?",
  answer: "Your answer."
}
```

### Modify Navigation

In `lib/content.ts`, update the `navigation` array:

```typescript
export const navigation = [
  { name: "New Page", href: "/new-page" },
  // ...
];
```

## Tech Stack Details

- **Framework:** Next.js 15.1.4
- **React:** 19.0.0
- **TypeScript:** 5.7.2
- **Styling:** Tailwind CSS 3.4.17
- **Fonts:** Google Fonts (Inter, Lora)
- **Node:** 18+ required

## License

This project is proprietary and created for Hafiz Muneeb. All rights reserved.

## Support

For technical issues or questions about customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Credits

Built with modern web technologies and best practices for performance, SEO, and user experience.

---

**May Allāh accept this effort and make it beneficial for those seeking to learn His Book.**
