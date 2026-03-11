# Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Run Locally

```bash
git clone https://github.com/maurigalvez/portafolio.git
cd portafolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your `portafolio` repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Add any environment variables under Project Settings > Environment Variables

Every push to `main` will trigger an automatic deployment.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)
