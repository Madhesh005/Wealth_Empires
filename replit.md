# Overview

Wealth Empires is a comprehensive business services platform designed for the Indian market. The application provides end-to-end business solutions including incorporation, accounting, GST compliance, and trademark services. Built as a full-stack web application, it serves as a "Business-in-a-Box" solution that simplifies complex business setup and compliance processes for entrepreneurs and small businesses in India.

The platform features a modern, responsive frontend showcasing services, client testimonials, and company information, with backend infrastructure supporting contact forms and newsletter subscriptions. The application is designed to convert visitors into clients through clear calls-to-action and WhatsApp integration for immediate consultation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring Wealth Empires branding colors
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for contact forms and newsletter subscriptions
- **Validation**: Zod schemas for request validation and type inference

## Data Storage Solutions
- **Current**: In-memory storage using Maps for development and testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Schema**: Predefined tables for users, contacts, and newsletter subscriptions
- **Migration**: Drizzle Kit for database schema management and migrations

## Component Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Color Palette**: Custom Wealth Empires brand colors (gold, blue, amber variations)
- **Typography**: Inter font family for modern, readable text
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI ensures ARIA compliance and keyboard navigation

## Development Infrastructure
- **Development Server**: Vite with HMR and React Fast Refresh
- **Production Build**: ESBuild for server bundling, Vite for client optimization
- **Type Checking**: TypeScript with strict configuration
- **Path Mapping**: Absolute imports using @ prefix for clean imports
- **Environment**: Development/production environment detection

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Drizzle ORM**: Type-safe database operations and schema management

## UI Component Libraries
- **Radix UI**: Headless UI primitives for accessibility and behavior
- **shadcn/ui**: Pre-built component library built on Radix primitives
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling

## Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler for production
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation

## Communication Services
- **WhatsApp Business API**: Direct customer communication via floating WhatsApp button
- **Phone Integration**: Click-to-call functionality for immediate contact

## Form Handling
- **Contact Forms**: Structured contact form with validation
- **Newsletter Subscriptions**: Email collection for marketing communications
- **Validation**: Zod schemas for consistent data validation across frontend and backend

## Asset Management
- **Attached Assets**: Static content files for marketing materials
- **Image Optimization**: External image services (Unsplash) for high-quality visuals
- **Font Loading**: Google Fonts integration for custom typography