# TaskFlow Frontend

Next.js 16 frontend for TaskFlow - an async team coordination hub.

## Tech Stack

- **Next.js 16** - App Router with Server Components
- **TypeScript** - Type safety
- **Supabase** - Auth, Database (PostgreSQL), Realtime
- **Prisma** - Database ORM
- **TanStack Query v5** - Server state management, caching, optimistic updates
- **TailwindCSS v4** - Styling
- **Zod** - Validation

## Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
DATABASE_URL=postgresql://...pooler.supabase.com:6543/postgres
DIRECT_URL=postgresql://...supabase.co:5432/postgres
```

### 3. Push Database Schema

```bash
npx prisma db push
npx prisma generate
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
frontend/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout with QueryProvider
│   ├── page.tsx              # Root page (redirects)
│   ├── dashboard/            # Dashboard page
│   ├── login/                # Login page
│   ├── register/             # Register page
│   ├── tasks/                # Task pages
│   ├── api/                  # API routes
│   ├── providers.tsx         # TanStack Query provider
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── layout/               # Layout components
│   └── ui/                   # Reusable UI components
├── lib/                      # Utilities & configs
│   ├── supabase/             # Supabase clients
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript types
│   ├── utils/                # Utility functions
│   └── prisma.ts             # Prisma singleton
├── prisma/                   # Prisma files
│   └── schema.prisma         # Database schema
├── middleware.ts             # Next.js middleware (auth)
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Patterns

### Server Components
- Used for pages and data fetching
- Direct Prisma access
- Zero client JavaScript

### Client Components
- Interactive UI (forms, status dropdowns)
- TanStack Query for state management
- Supabase realtime subscriptions

### Fetch-on-Event Pattern
Realtime updates invalidate queries rather than pushing payloads directly,
ensuring complete joined data is fetched.

### Optimistic Updates
TanStack Query `onMutate` updates cache instantly, with automatic rollback on error.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema to database |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:studio` | Open Prisma Studio |

## Self-Hosting with Docker

TaskFlow can be self-hosted using Docker. The Dockerfile uses Next.js standalone mode for optimal image size.

### Build

```bash
docker build -t taskflow .
```

### Run

```bash
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://postgres.PROJECT_ID:PASSWORD@aws-0-REGION.pooler.supabase.com:6543/postgres" \
  -e DIRECT_URL="postgresql://postgres:PASSWORD@db.REF.supabase.co:5432/postgres" \
  -e NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co" \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key" \
  taskflow
```

### Using Docker Compose

Create a `docker-compose.yml`:

```yaml
services:
  taskflow:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - DIRECT_URL=${DIRECT_URL}
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
    restart: unless-stopped
```

Then run: `docker-compose up -d`
