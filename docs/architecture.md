# BlueCollarCRM Architecture

## System Overview

BlueCollarCRM is a modern, full-stack CRM solution built specifically for blue-collar service companies. The architecture follows a monorepo pattern with clear separation of concerns and scalable design principles.

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Client    │    │   Mobile App    │    │  Public API     │
│   (Next.js)     │    │   (React Native)│    │  (REST/GraphQL) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
         ┌─────────────────────────────────────────────────┐
         │              Load Balancer                      │
         └─────────────────────────────────────────────────┘
                                 │
         ┌─────────────────────────────────────────────────┐
         │              API Gateway                        │
         │           (Authentication)                      │
         └─────────────────────────────────────────────────┘
                                 │
    ┌────────────────────────────┼────────────────────────────┐
    │                            │                            │
┌───▼────┐              ┌────────▼────────┐              ┌────▼────┐
│ Web    │              │   Core API      │              │ Worker  │
│ Server │              │   (NestJS)      │              │ Service │
│        │              │                 │              │         │
└────────┘              └─────────────────┘              └─────────┘
                                 │
         ┌─────────────────────────────────────────────────┐
         │              Database Layer                     │
         │           (PostgreSQL + Redis)                 │
         └─────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS + shadcn/ui
- **State Management**: Zustand + React Query
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion + GSAP
- **Testing**: Playwright + Jest + React Testing Library

### Backend
- **Framework**: NestJS 10
- **Language**: TypeScript (strict mode)
- **API**: GraphQL + REST endpoints
- **Database**: PostgreSQL 15 with Prisma ORM
- **Cache**: Redis 7
- **Authentication**: NextAuth.js + JWT
- **File Storage**: Local/S3 compatible
- **Email**: Resend/SendGrid

### Infrastructure
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (frontend) + Render (backend)
- **Monitoring**: Sentry + Posthog
- **Database**: Railway/AWS RDS

## Project Structure

```
bluecollar-crm/
├── apps/
│   ├── web/                    # Next.js frontend application
│   │   ├── app/               # App Router pages and layouts
│   │   ├── components/        # React components
│   │   ├── lib/              # Utility functions and configs
│   │   ├── hooks/            # Custom React hooks
│   │   └── stores/           # Zustand state stores
│   │
│   └── api/                   # NestJS backend application
│       ├── src/
│       │   ├── modules/      # Feature modules
│       │   ├── common/       # Shared utilities
│       │   ├── guards/       # Authentication guards
│       │   └── decorators/   # Custom decorators
│       └── test/             # E2E tests
│
├── packages/
│   ├── ui/                   # Shared React component library
│   │   ├── src/components/   # Base UI components
│   │   └── src/hooks/        # Shared hooks
│   │
│   ├── db/                   # Database package
│   │   ├── prisma/          # Schema and migrations
│   │   └── src/             # Database utilities
│   │
│   └── config/              # Shared configurations
│       ├── eslint/          # ESLint configs
│       ├── tailwind/        # Tailwind configs
│       └── typescript/      # TypeScript configs
│
├── docs/                    # Documentation
├── playwright/              # E2E tests
└── .github/                # CI/CD workflows
```

## Data Flow

### 1. User Authentication
```
User → Next.js → NextAuth.js → JWT Token → API Gateway → Protected Routes
```

### 2. Data Fetching
```
Component → React Query → GraphQL/REST API → NestJS → Prisma → PostgreSQL
```

### 3. Real-time Updates
```
Database Change → Webhook → WebSocket → Client Update → UI Refresh
```

## Security Architecture

### Authentication & Authorization
- **JWT Tokens**: Stateless authentication
- **Role-based Access Control**: Admin, Manager, User, Viewer roles
- **API Rate Limiting**: Prevent abuse and DDoS
- **CORS Configuration**: Restrict cross-origin requests
- **Input Validation**: Zod schemas on frontend and backend

### Data Protection
- **Encryption at Rest**: Database encryption
- **Encryption in Transit**: HTTPS/TLS everywhere
- **Environment Variables**: Secure secret management
- **SQL Injection Prevention**: Prisma ORM parameterized queries
- **XSS Protection**: Content Security Policy headers

## Performance Optimizations

### Frontend
- **Code Splitting**: Route-based and component-based
- **Image Optimization**: Next.js Image component
- **Caching**: React Query with stale-while-revalidate
- **Bundle Analysis**: Webpack Bundle Analyzer
- **Lazy Loading**: Dynamic imports for heavy components

### Backend
- **Database Indexing**: Optimized queries with proper indexes
- **Connection Pooling**: Prisma connection pooling
- **Redis Caching**: Frequently accessed data caching
- **Query Optimization**: N+1 query prevention
- **Background Jobs**: Queue system for heavy operations

### Infrastructure
- **CDN**: Static asset delivery via Vercel Edge Network
- **Database Optimization**: Read replicas for scaling
- **Monitoring**: Performance metrics and alerting
- **Auto-scaling**: Horizontal scaling based on load

## Deployment Strategy

### Development Environment
```
Local Development → Docker Compose → PostgreSQL + Redis + MailHog
```

### Staging Environment
```
Feature Branch → GitHub Actions → Preview Deployment → Vercel + Render
```

### Production Environment
```
Main Branch → GitHub Actions → Production Deployment → Vercel + Render + AWS RDS
```

## Environment Variables

### Required Variables
```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="..."
JWT_SECRET="..."

# External Services
STRIPE_SECRET_KEY="..."
RESEND_API_KEY="..."
MAPBOX_ACCESS_TOKEN="..."

# Monitoring
SENTRY_DSN="..."
POSTHOG_KEY="..."
```

## Monitoring & Observability

### Application Monitoring
- **Error Tracking**: Sentry for error monitoring and alerting
- **Performance Monitoring**: Core Web Vitals tracking
- **User Analytics**: Posthog for user behavior analysis
- **Uptime Monitoring**: Pingdom/UptimeRobot

### Infrastructure Monitoring
- **Database Metrics**: Connection pool, query performance
- **API Metrics**: Response times, error rates
- **Resource Usage**: CPU, memory, disk usage
- **Log Aggregation**: Structured logging with correlation IDs

## Scalability Considerations

### Horizontal Scaling
- **Stateless API**: No server-side sessions
- **Database Sharding**: Tenant-based partitioning
- **Microservices**: Future migration path
- **Load Balancing**: Multiple API instances

### Vertical Scaling
- **Database Optimization**: Query optimization and indexing
- **Caching Strategy**: Multi-layer caching
- **Resource Allocation**: Right-sizing instances
- **Performance Profiling**: Regular performance audits

## Security Compliance

### Data Privacy
- **GDPR Compliance**: Data export and deletion
- **Data Retention**: Configurable retention policies
- **Audit Logging**: User action tracking
- **Data Anonymization**: PII protection

### Industry Standards
- **SOC 2 Type II**: Security controls framework
- **ISO 27001**: Information security management
- **OWASP Top 10**: Security vulnerability prevention
- **Regular Security Audits**: Third-party assessments 