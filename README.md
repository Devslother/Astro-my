# Tetrate Marketing Site (Astro)

Tetrate is a high‑performance, content‑driven marketing website built with Astro.
The frontend for the portfolio version was implemented independently from Figma design layouts, with a strong focus on responsive sections, performance, and accessibility.

## Preview

Live demo: https://astro-my.netlify.app/

- Responsive layout (desktop & mobile)
- Resources and Learn content collections
- HubSpot-powered Request a Demo flow
- Optimized media and LCP behavior
- Product pages (Agent Operations Director, Tetrate Application Gateway, Tetrate Istio Subscription)
- Solutions pages (Financial Services)

## My Role

Frontend Developer (Junior-level)

- Independently implemented the frontend for the portfolio version (only completed pages)
- Translated Figma UI designs into responsive Astro components
- Implemented content collections with `astro:content`
- Integrated HubSpot submission via Netlify Functions + reCAPTCHA
- Focused on performance (WebP, `srcset`, lazy JS) and accessibility

## Key Engineering Challenges

### Performance & LCP Optimization

- Converted heavy media to WebP + responsive `srcset`
- Ensured LCP elements are eager and discoverable
- Deferred non‑critical JS to reduce blocking time
- Font preloading for Poppins (Regular, Medium, SemiBold)

### Content Architecture

- Structured learn/resources content collections
- Implemented reusable layout + section system
- Ensured SEO‑friendly rendering
- Dynamic routing for content pages

### Accessible UI System

- Added semantic landmarks and labeled controls
- Improved heading order and navigation structure
- Ensured keyboard‑friendly interactions

## Features

- **Modern Tech Stack**: Astro 5 + TypeScript
- **Content Collections**: Resources, Learn via `astro:content`
- **HubSpot Forms**: Request a Demo via Netlify Functions with reCAPTCHA validation
- **Responsive Design**: Mobile‑first layout patterns
- **Performance**: WebP, WOFF2, lazy JS, optimized LCP
- **Modal System**: Global modal component for forms and content
- **Search Functionality**: Dynamic search for resources and learn content

## Tech Stack

- **Framework**: Astro 5
- **Language**: TypeScript
- **Styling**: CSS Modules + global tokens (color, typography, utility)
- **Content**: `astro:content` for learn and resources collections
- **Forms**: HubSpot Forms API + Netlify Functions
- **Validation**: Yup schema validation
- **Deployment**: Netlify (with Vercel support)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Astro-my
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:

```env
PUBLIC_RECAPTCHA_SITE_KEY="your-recaptcha-site-key"
RECAPTCHA_SECRET="your-recaptcha-secret"
```

4. Run the development server:

```bash
npm run dev
```

For Netlify development:

```bash
npm run dev:netlify
```

Open http://localhost:4321 in your browser.

## Project Structure

```
Astro-my/
├── public/                 # Static assets
│   ├── fonts/             # Poppins font files (WOFF2, TTF)
│   ├── images/            # Images (learn, resources)
│   └── scripts/           # Client-side scripts
├── src/
│   ├── assets/            # Source assets organized by section
│   │   ├── agent/        # Agent Operations Director assets
│   │   ├── app/          # Application Gateway assets
│   │   ├── financial/   # Financial Services assets
│   │   ├── home/         # Homepage assets
│   │   ├── istio/        # Istio Subscription assets
│   │   └── learn/        # Learning Center assets
│   ├── components/        # Reusable UI components
│   │   ├── Button/       # Button variants (Button, GlowButton, BackButton)
│   │   ├── content/      # Content components (admonition, code, figure, quote, toc)
│   │   ├── forms/        # Form components (request-form, subscribe-form, hubspot-form)
│   │   ├── header/       # Header navigation
│   │   ├── modal/        # Modal component
│   │   └── ...
│   ├── constants/         # Constants (formField.ts)
│   ├── content/           # Content collections
│   │   ├── learn/        # Learning articles
│   │   ├── resources/    # Resource articles
│   │   └── config.ts     # Collection schemas
│   ├── layouts/           # Global layout
│   │   └── Layout.astro  # Main layout with global modal
│   ├── pages/             # Route pages
│   │   ├── learn/        # Learning center pages
│   │   ├── resources/    # Resources pages
│   │   ├── products/     # Product pages
│   │   ├── solutions/    # Solutions pages
│   │   └── posts/        # News posts
│   ├── parts/             # Section-level components
│   │   ├── agent/        # Agent Operations Director sections
│   │   ├── app/          # Application Gateway sections
│   │   ├── financial/    # Financial Services sections
│   │   ├── home/         # Homepage sections
│   │   ├── istio/        # Istio Subscription sections
│   │   ├── learn/        # Learning Center sections
│   │   └── resources/    # Resources sections
│   ├── styles/            # Global styles
│   │   ├── color.css     # Color palette
│   │   ├── typography.css # Typography + @font-face definitions
│   │   ├── global.css    # Global layout and resets
│   │   └── utility.css   # Utility classes
│   └── utils/             # Client utilities
│       ├── requestForm.client.ts    # Form submission logic
│       ├── hubspotForm.client.ts    # HubSpot form integration
│       ├── modal.client.ts          # Modal functionality
│       └── subscribeForm.client.ts  # Subscribe form logic
├── netlify/
│   └── functions/         # Serverless functions
│       └── requestForm.ts # HubSpot form submission handler
├── bloggypants/           # Content migration scripts
│   └── scripts/          # HTML to MDX conversion scripts
├── astro.config.mjs      # Astro configuration (Netlify)
├── astro.config.dev.mjs  # Development configuration
└── package.json
```

## Styling

The project uses CSS Modules with global design tokens.

Key files:
- `src/styles/color.css` — color palette and CSS variables
- `src/styles/typography.css` — typography system, @font-face definitions for Poppins
- `src/styles/global.css` — global layout, resets, and imports
- `src/styles/utility.css` — utility classes

Fonts are preloaded in `Layout.astro` for optimal performance.

## Scripts

- `npm run dev` — Start development server (with dev config)
- `npm run dev:netlify` — Start development server (Netlify config)
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run snarf` — Run content migration script
- `npm run snarf-learn` — Migrate learn content
- `npm run snarf-resources` — Migrate resources content
- `npm run snarf-blog` — Migrate blog content

## Content Management

### Learn & Resources Collections

Content is stored in `src/content/learn/` and `src/content/resources/` and rendered with `astro:content`.
Collections are defined in `src/content/config.ts`.

- **Learn Collection**: Educational articles with categories, featured images, and dates
- **Resources Collection**: Resource articles with HubSpot form integration, download links, and categories

### News Posts

News posts are stored in `src/pages/posts/` as Markdown files with frontmatter.

## Forms & HubSpot Integration

### Request a Demo Form

- Global modal form accessible via `data-modal-open="demo-request-modal"` attribute
- Integrated with HubSpot Forms API via Netlify Functions
- reCAPTCHA v3 validation
- Form validation using Yup schemas

### Resource Download Forms

Resources can include HubSpot forms for gated content downloads.
Forms are triggered via `ModalTrigger` component.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Push the repository to GitHub
2. Connect the repo in Netlify
3. Add environment variables:
   - `PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET`
4. Deploy

The project is configured for Netlify with server-side rendering (SSR) enabled.

## Learn More

- Astro Documentation: https://docs.astro.build
- Netlify Functions: https://docs.netlify.com/functions/overview/
- HubSpot Forms API: https://developers.hubspot.com/docs/api/marketing/forms

## License

This repository is provided for demonstration and portfolio purposes.

---

Built as a personal portfolio project.
