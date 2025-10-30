# Weather API Documentation Website

## Overview

This is a full-stack weather API documentation website built with React, Express, and TypeScript. The application serves as a developer-focused documentation platform for a weather data API, featuring a clean, scannable interface inspired by modern API documentation sites like Stripe and Tailwind CSS. The project includes a landing page showcasing API features and a comprehensive documentation page detailing API endpoints, parameters, and response formats.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18+ with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack Query (React Query) for server state
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives with shadcn/ui component library

**Design System:**
- Based on shadcn/ui "new-york" style variant
- Custom color system using HSL values with CSS variables for theming
- Typography: Inter for UI text, JetBrains Mono for code
- Component variants using class-variance-authority (CVA)
- Responsive design with mobile-first approach (768px breakpoint)

**Key Architectural Decisions:**
- **Component Library Choice:** Radix UI + shadcn/ui selected for accessibility, customization, and developer experience. Provides unstyled primitives that can be fully themed while maintaining ARIA compliance.
- **Routing Strategy:** Wouter chosen over React Router for minimal bundle size and simpler API, suitable for the limited number of routes (Home, Documentation, 404).
- **Type Safety:** Full TypeScript coverage with strict mode enabled, path aliases configured for clean imports (@/, @shared/).

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Build Tool:** esbuild for production bundling, tsx for development
- **Development Server:** Vite with HMR and middleware mode

**Server Structure:**
- Express application with custom middleware for logging and JSON parsing
- Modular route registration system (currently placeholder)
- Development and production modes with environment-based configuration
- Vite integration for SSR-like development experience

**Key Architectural Decisions:**
- **Storage Abstraction:** IStorage interface pattern implemented for database-agnostic data access. Currently uses in-memory storage (MemStorage) but designed to swap in database implementations without changing application code.
- **Development Experience:** Vite middleware mode provides instant HMR for frontend while Express handles API routes, eliminating proxy configuration complexity.
- **Build Strategy:** Separate frontend (Vite) and backend (esbuild) builds allow independent optimization and deployment strategies.

### Data Layer

**ORM and Schema:**
- **ORM:** Drizzle ORM configured for PostgreSQL
- **Schema Definition:** Type-safe schema using drizzle-orm with Zod validation
- **Migrations:** Drizzle Kit for schema migrations (output to ./migrations)

**Current Schema:**
- Users table with UUID primary keys (auto-generated)
- Username/password authentication structure
- Schema shared between client and server via @shared path alias

**Key Architectural Decisions:**
- **Drizzle ORM Selection:** Chosen for type-safety, lightweight footprint, and SQL-like API. Provides better TypeScript inference than traditional ORMs while maintaining full SQL control.
- **Validation Layer:** drizzle-zod integration generates Zod schemas from database schema, ensuring consistent validation across frontend forms and backend API.
- **Shared Schema Pattern:** Database types exported from shared/schema.ts accessible to both frontend and backend, preventing type drift.

**Database Configuration:**
- PostgreSQL dialect (via @neondatabase/serverless driver)
- Connection string via DATABASE_URL environment variable
- Session storage configured with connect-pg-simple (PostgreSQL session store)

### External Dependencies

**Third-Party Services:**
- **Neon Database:** Serverless PostgreSQL provider (configured via @neondatabase/serverless)
- **Google Fonts CDN:** Inter and JetBrains Mono font families

**Development Tools (Replit-specific):**
- @replit/vite-plugin-runtime-error-modal: Enhanced error overlay
- @replit/vite-plugin-cartographer: Development tooling
- @replit/vite-plugin-dev-banner: Development mode indicator

**Key Libraries:**
- **React Hook Form + Zod:** Form handling with schema validation (@hookform/resolvers)
- **Lucide React:** Icon library with tree-shaking support
- **date-fns:** Date manipulation and formatting
- **cmdk:** Command palette component
- **embla-carousel-react:** Touch-friendly carousel implementation

**API Integration Points:**
- Application currently serves documentation for a weather API (endpoints shown in UI are presentational)
- No external weather API integration in current codebase
- Structure supports future API proxy implementation through Express routes