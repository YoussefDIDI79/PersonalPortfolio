# Vercel Deployment Guide

This guide will help you deploy your Moncif CHERRADI portfolio to Vercel.

## Prerequisites

1. **GitHub Account**: Your code should be pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

## Important Notes

- The configuration uses serverless functions in the `/api` directory
- Frontend is built as a static site with React
- No "functions" property in vercel.json to avoid conflicts with "builds"

## Deployment Steps

### 1. Push Code to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it as a Node.js project

### 3. Configure Environment Variables (Optional)

If you plan to use a database in the future:
- Go to your project settings in Vercel
- Add environment variables in the "Environment Variables" section
- Add `DATABASE_URL` if you set up a database

### 4. Deploy

1. Click "Deploy" - Vercel will automatically:
   - Install dependencies
   - Build the frontend
   - Set up serverless functions for the API
2. Your site will be live at a `.vercel.app` domain

## Project Structure for Vercel

```
├── api/                    # Serverless functions
│   ├── contact.ts         # Contact form endpoint
│   └── cv/
│       └── download.ts    # CV download endpoint
├── client/                # Frontend React app
├── shared/                # Shared schemas (used by API functions)
├── vercel.json           # Vercel configuration
├── build.js              # Custom build script for frontend only
└── package.json          # Dependencies and build scripts
```

## Build Process

The deployment now uses a simplified build process:
- **Frontend**: Built with Vite to `/dist` directory
- **API**: Serverless functions in `/api` directory
- **No Server Build**: The original server code is not built for Vercel

## Features Supported

✅ **Contact Form**: Serverless function handles form submissions
✅ **CV Download**: PDF generation works in serverless environment
✅ **Multilingual Support**: Full i18n support (French, Arabic, English)
✅ **Professional Design**: All animations and styling preserved
✅ **Mobile Responsive**: Optimized for all devices

## Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Environment Variables

Currently, the portfolio works without external dependencies. If you add a database later:

```env
DATABASE_URL=your_database_connection_string
```

## Monitoring

- **Analytics**: Vercel provides built-in analytics
- **Logs**: Check function logs in the Vercel dashboard
- **Performance**: Monitor Core Web Vitals automatically

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- The build only compiles the frontend (client) - server code is not needed for Vercel
- API functions are handled separately as serverless functions

### API Issues
- Verify serverless functions are in the `/api` directory
- Check function logs for errors

### Static Files
- Frontend assets are automatically optimized by Vercel
- Images and fonts are served from CDN

## Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs in dashboard
3. Test API endpoints after deployment

Your portfolio will be accessible at: `https://your-project-name.vercel.app`