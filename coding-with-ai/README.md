# Coding With AI — Full Stack Platform

A futuristic AI-powered learning platform for students built with Next.js 15, MongoDB, and NextAuth.

## 🚀 Tech Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Next.js API Routes + Server Actions
- **Database:** MongoDB + Mongoose
- **Auth:** NextAuth.js (Google + Credentials)
- **Payments:** Razorpay + Stripe
- **State:** Zustand
- **Forms:** React Hook Form + Zod

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── (auth)/                 # Login, Register (no layout)
│   ├── (dashboard)/            # Student & Admin dashboards
│   ├── api/                    # API routes
│   ├── about/                  # About page
│   ├── memberships/            # Memberships page
│   ├── projects/               # Projects showcase
│   ├── ai-tools/               # AI tools page
│   ├── blog/                   # Blog listing
│   ├── contact/                # Contact form
│   ├── community/              # Community page
│   ├── privacy/                # Privacy policy
│   ├── terms/                  # Terms & conditions
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # SEO robots
├── components/
│   ├── layout/                 # Navbar, Footer, Providers
│   ├── sections/               # Homepage sections
│   ├── dashboard/              # Student & Admin dashboards
│   ├── ui/                     # Reusable UI components
│   └── auth/                   # Auth components
├── lib/
│   ├── mongodb.ts              # DB connection singleton
│   ├── auth.ts                 # NextAuth config
│   └── utils.ts                # Utility functions
├── models/                     # Mongoose schemas
│   ├── User.ts
│   ├── Membership.ts
│   ├── Course.ts
│   ├── Project.ts
│   ├── Certificate.ts
│   └── Payment.ts
├── hooks/
│   └── usePayment.ts           # Razorpay/Stripe hook
├── store/
│   └── useStore.ts             # Zustand global state
├── types/
│   └── index.ts                # TypeScript types
└── middleware.ts               # Route protection
```

## ⚙️ Setup

### 1. Clone & Install

```bash
cd coding-with-ai
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Fill in:
- `MONGODB_URI` — MongoDB Atlas connection string
- `NEXTAUTH_SECRET` — Random secret (run `openssl rand -base64 32`)
- `NEXTAUTH_URL` — `http://localhost:3000`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — From Google Cloud Console
- `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` — From Razorpay Dashboard
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` — From Stripe Dashboard

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project → APIs & Services → Credentials
3. Create OAuth 2.0 Client ID (Web application)
4. Add `http://localhost:3000/api/auth/callback/google` to Authorized redirect URIs

### 4. Create Admin User

After running the app, register normally, then update your user role in MongoDB:

```javascript
// In MongoDB Compass or Atlas
db.users.updateOne({ email: "your@email.com" }, { $set: { role: "admin" } })
```

### 5. Run Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📄 Pages

| Page | Route |
|------|-------|
| Homepage | `/` |
| Login | `/login` |
| Register | `/register` |
| Student Dashboard | `/student` |
| Admin Dashboard | `/admin` |
| Memberships | `/memberships` |
| Projects | `/projects` |
| AI Tools | `/ai-tools` |
| Blog | `/blog` |
| Community | `/community` |
| About | `/about` |
| Contact | `/contact` |
| Privacy | `/privacy` |
| Terms | `/terms` |

## 🔐 Auth Roles

- **student** — Default role on registration
- **admin** — Must be manually assigned in DB

## 💳 Payments

- **Razorpay** — Indian UPI + cards (primary)
- **Stripe** — International cards

## 🚀 Deploy to Vercel

```bash
npm run build   # Test build locally
```

Then push to GitHub and connect to Vercel. Add all env vars in Vercel dashboard.

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` 15 | Framework |
| `next-auth` | Authentication |
| `mongoose` | MongoDB ODM |
| `framer-motion` | Animations |
| `zustand` | State management |
| `react-hook-form` | Forms |
| `zod` | Validation |
| `razorpay` | Indian payments |
| `stripe` | International payments |
| `bcryptjs` | Password hashing |
| `lucide-react` | Icons |
