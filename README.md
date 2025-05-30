# BlueCollarCRM

A modern, full-stack CRM solution built specifically for blue-collar service companies (construction, plumbing, electrical, HVAC, landscaping, etc.).

## 🎯 Vision

Existing CRMs are too expensive and too complex for field-service owners. BlueCollarCRM provides enterprise-level functionality with blue-collar simplicity.

## 🚀 Quick Start

```bash
# Clone and install dependencies
git clone <repository-url>
cd bluecollar-crm
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database and API keys

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📋 Current Implementation Status

### ✅ **Completed Features**

#### **Core Pages & Navigation**
- 🏠 **Homepage** - Marketing landing with blue-collar branding
- 🔐 **Authentication** - Login/Register pages with business type selection
- 📊 **Dashboard** - Key metrics, today's schedule, quick actions
- 👥 **Leads Management** - Lead tracking with realistic construction data
- 💰 **Quotes/Estimates** - Quote creation and management
- 📅 **Jobs Scheduling** - Job management with progress tracking
- 📦 **Inventory Management** - Materials and equipment tracking

#### **Technical Foundation**
- 📱 **Responsive Design** - Mobile-first approach with touch optimization
- 🎨 **UI Components** - Consistent design system with blue-collar theming
- 🔧 **TypeScript** - Strict mode enabled with comprehensive type definitions
- 🗄️ **Database Schema** - Complete Prisma schema matching documentation
- 🧭 **Navigation** - Functional routing between all major pages

#### **Code Quality**
- 📝 **Type Safety** - Comprehensive TypeScript interfaces and enums
- 🛠️ **Utility Functions** - Common helpers for formatting, validation, etc.
- 💾 **State Management** - Zustand store for authentication
- 🎯 **Error Handling** - Error boundaries and loading states
- 🎨 **Styling** - TailwindCSS with proper configuration

### 🚧 **In Progress / Missing Components**

#### **Backend Infrastructure**
- ❌ **NestJS API** - Backend application not yet implemented
- ❌ **Authentication System** - NextAuth.js setup needed
- ❌ **Database Connection** - Prisma client configuration required
- ❌ **GraphQL/REST APIs** - API endpoints for all CRUD operations

#### **Advanced Frontend Features**
- ❌ **Form Validation** - Zod schemas for input validation
- ❌ **Data Fetching** - React Query for API state management
- ❌ **Performance Optimization** - React.memo, lazy loading, virtualization
- ❌ **Animations** - Framer Motion micro-interactions
- ❌ **Testing Suite** - Unit, integration, and E2E tests

#### **Production Features**
- ❌ **Security Middleware** - CSRF, rate limiting, input sanitization
- ❌ **File Upload** - Image handling for projects and documents
- ❌ **Real-time Updates** - WebSocket for live notifications
- ❌ **Email System** - Automated notifications and communications
- ❌ **Payment Integration** - Stripe for invoice processing

## 🏗️ Architecture

### Project Structure
```
bluecollar-crm/
├── apps/
│   └── web/                    # Next.js frontend (✅ Implemented)
│       ├── app/               # App Router pages
│       ├── components/        # React components
│       ├── lib/              # Utility functions
│       ├── hooks/            # Custom React hooks
│       ├── stores/           # Zustand state stores
│       └── types/            # TypeScript definitions
│
├── packages/
│   ├── ui/                   # Shared component library (✅ Basic components)
│   └── db/                   # Database package (✅ Prisma schema)
│
└── docs/                     # Documentation (✅ Complete)
    ├── architecture.md
    ├── data-model.md
    ├── flow.md
    └── calculations.md
```

### Technology Stack

#### **Frontend (✅ Implemented)**
- Next.js 15 with App Router
- TypeScript (strict mode)
- TailwindCSS + shadcn/ui
- Zustand for state management
- Lucide React for icons

#### **Backend (❌ Not Yet Implemented)**
- NestJS 10
- GraphQL + REST APIs
- PostgreSQL + Prisma ORM
- Redis for caching
- NextAuth.js for authentication

#### **Development Tools**
- Turborepo monorepo
- ESLint + Prettier
- Playwright for E2E testing
- Docker for containerization

## 🎯 Business Features

### Lead-to-Cash Process
1. **Lead Capture** - Website forms, phone calls, referrals
2. **Lead Qualification** - Scoring and assignment system
3. **Site Assessment** - Scheduling and documentation
4. **Quote Creation** - Detailed estimates with line items
5. **Job Scheduling** - Calendar integration and crew assignment
6. **Work Execution** - Time tracking and progress updates
7. **Invoicing** - Automated billing and payment collection
8. **Follow-up** - Customer satisfaction and retention

### Key Differentiators
- **Blue-Collar Focus** - Purpose-built for service trades
- **Mobile-First** - Field technician optimized interface
- **Affordable** - Alternative to expensive enterprise solutions
- **Easy Setup** - Quick onboarding for small businesses
- **Industry-Specific** - Construction, plumbing, electrical, HVAC workflows

## 🚀 Next Steps

### Phase 1: Core Backend (2-3 weeks)
1. Set up NestJS application structure
2. Implement authentication with NextAuth.js
3. Create GraphQL schema and resolvers
4. Set up database connection and seeding
5. Build core CRUD operations

### Phase 2: Data Integration (1-2 weeks)
1. Connect frontend to backend APIs
2. Implement React Query for data fetching
3. Add form validation with Zod
4. Create loading states and error handling
5. Set up real-time updates

### Phase 3: Production Features (2-3 weeks)
1. File upload and image handling
2. Email notification system
3. Payment integration with Stripe
4. Advanced search and filtering
5. Reporting and analytics

### Phase 4: Testing & Deployment (1-2 weeks)
1. Comprehensive test suite
2. Performance optimization
3. Security hardening
4. CI/CD pipeline setup
5. Production deployment

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm 8+
- PostgreSQL 15+
- Redis 7+

### Environment Variables
```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication  
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# External Services
STRIPE_SECRET_KEY="..."
RESEND_API_KEY="..."
```

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm test         # Run test suite
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript checking
pnpm db:push      # Push schema to database
pnpm db:studio    # Open Prisma Studio
```

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for blue-collar businesses** 