# Deployment Guide

## Vercel Deployment

### 1. Prerequisites

- Node.js 22 (recommended for Vercel compatibility)
- Vercel account
- GitHub repository connected to Vercel

### 2. Environment Variables

Set these in Vercel dashboard under Project Settings > Environment Variables:

```
RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

### 3. Build Configuration

- Build Command: `npm run build`
- Output Directory: `.vercel/output`
- Install Command: `npm install`

### 4. Deployment

The project is configured with:

- `@astrojs/vercel` adapter
- Server-side rendering for dynamic pages
- Static generation for content pages
- API routes for form handling

### 5. Fixed Issues

**Resources Categories & Learn Search Fixed:**

- Added `getStaticPaths` to all dynamic pages
- Improved error handling for invalid parameters
- Added proper pagination validation
- Fixed catch-all routes for search pages

**Key Changes:**

- `resources/category/[slug]/[page].astro` - Added getStaticPaths
- `learn/search/[...page].astro` - Added getStaticPaths
- Added parameter validation and error handling
- Added URL rewrites in vercel.json

### 6. Troubleshooting

If deployment fails:

1. Check Node.js version (use 22.x)
2. Verify environment variables are set
3. Check build logs for specific errors
4. Ensure all dependencies are in package.json
5. Verify all dynamic pages have getStaticPaths

### 7. File Structure

- Static pages: prerendered at build time
- Dynamic pages: server-rendered with `export const prerender = false`
- API routes: `/api/requestForm.ts` for form submissions
- All dynamic routes now have proper getStaticPaths functions
