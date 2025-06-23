# Portfolio Application - Moncif CHERRADI

## Overview

This is a professional portfolio website for Moncif CHERRADI, a qualified auxiliary nurse (Infirmier Auxiliaire Diplômé). The application is built as a full-stack web application with a React frontend and Express backend, featuring a multilingual interface (French, Arabic, English) and professional portfolio content.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom medical theme colors
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Internationalization**: react-i18next for multi-language support (French, Arabic, English)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **PDF Generation**: PDFKit for CV generation and download

### Component Structure
The application follows a component-based architecture with:
- Page components (`Home`, `NotFound`)
- Section components (`HeroSection`, `AboutSection`, `ExperienceTimeline`, etc.)
- Reusable UI components from Shadcn/ui
- Custom hooks for mobile detection and toast notifications

## Key Components

### Frontend Components
- **Navigation**: Multi-language navigation with smooth scrolling and CV download
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Professional profile and motivation with visual cards
- **Experience Timeline**: Interactive timeline showing hospital and health center experience
- **Skills Section**: Grid-based skill showcase with icons and descriptions
- **Education Section**: Educational background and language proficiency
- **Contact Section**: Contact form with server integration and toast notifications

### Backend Services
- **Contact Message Storage**: In-memory storage for contact form submissions
- **CV Generation**: Dynamic PDF generation with professional formatting
- **Static File Serving**: Vite integration for development and production builds

### Database Schema
```typescript
contactMessages: {
  id: serial (primary key)
  name: text (required)
  email: text (required)
  subject: text (optional)
  message: text (required)
  createdAt: timestamp (auto-generated)
}
```

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **API Communication**: Frontend communicates with Express backend via REST APIs
3. **Data Processing**: Backend processes requests, validates data with Zod schemas
4. **Storage**: Contact messages stored in memory (configurable for database persistence)
5. **Response**: Structured JSON responses with success/error handling
6. **State Management**: TanStack Query manages server state and caching

### API Endpoints
- `POST /api/contact`: Submit contact form messages
- `GET /api/cv/download`: Generate and download PDF CV

## External Dependencies

### Production Dependencies
- **UI & Styling**: @radix-ui components, tailwindcss, class-variance-authority
- **State Management**: @tanstack/react-query
- **Forms**: @hookform/resolvers, react-hook-form
- **Database**: drizzle-orm, @neondatabase/serverless
- **Internationalization**: react-i18next
- **PDF Generation**: pdfkit
- **Utilities**: date-fns, zod, clsx

### Development Dependencies
- **Build Tools**: vite, esbuild, typescript
- **Replit Integration**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` runs Express server with Vite middleware
- **Hot Reload**: Vite provides instant hot module replacement
- **Database**: PostgreSQL 16 module in Replit environment
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Static Assets**: Express serves built frontend assets

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Commands**: Separate build and start scripts for production deployment
- **Module Type**: ES modules throughout the application

## Recent Changes

```
✓ Configured Vercel deployment with serverless functions
✓ Created API endpoints for contact form and CV download
✓ Added vercel.json configuration for proper routing
✓ Set up build scripts for production deployment
✓ Created deployment documentation and troubleshooting guide
✓ Updated with correct contact information: 06.44.45.21.57, moncifcherradi240@gmail.com
✓ Updated address: 162 Partie 1 Lotissement zaitouna, Khouribga
✓ Replaced female photo with professional male healthcare worker image
✓ Enhanced design with sophisticated glass-morphism effects and animations
✓ Improved professional profile description based on auxiliary nurse role
```

## Changelog

```
Changelog:
- June 23, 2025: Initial portfolio setup with multilingual support
- June 23, 2025: Professional design improvements and navigation enhancement
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```