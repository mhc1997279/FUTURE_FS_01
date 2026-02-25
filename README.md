# Future Interns FS1 — Portfolio (Vite + React)

Personal portfolio for Mohammed Huseni Calcuttawala built with **Vite**, **React 19**, **Tailwind CSS**, and **Framer Motion**, deployed on **Vercel**. Contact form sends email via **Nodemailer** and optionally stores messages in **Neon/Postgres** (via `@vercel/postgres`).

---

## Features

- Modern single-page portfolio with animated sections.
- Contact form backed by Vercel Serverless Function (email + optional DB storage).
- SEO tags (title, description, Open Graph/Twitter), robots.txt, sitemap.xml.
- Ready for Vercel deploys and GitHub CI/CD.

## Tech Stack

- React 19, Vite, Tailwind CSS, Framer Motion, Lucide React
- Vercel Functions, Nodemailer (Gmail App Password)
- Neon Postgres via `@vercel/postgres`

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values (never commit secrets):

```
GMAIL_USER=your_gmail@example.com
GMAIL_APP_PASSWORD=your_16_char_app_password
TO_EMAIL=recipient@example.com
POSTGRES_URL=postgres://user:pass@host:5432/dbname   # optional; Vercel project env also works
```

Set the same vars in Vercel Project → Settings → Environment Variables for Production (and Preview/Development if needed).

## Local Development

```bash
npm install
npx vercel dev   # runs Vite + serverless functions locally
```

Visit the printed URL, submit the contact form, and check the terminal/logs for function output. Email sending requires valid Gmail/App Password even locally.

## Deployment (Vercel)

1. Push to GitHub (repo: "Future Interns FS1").
2. In Vercel, link the repo and set env vars (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `TO_EMAIL`, `POSTGRES_URL` if used).
3. Vercel builds and deploys automatically (`npm run build`).
4. After deploy, test the live contact form and check Vercel function logs if issues arise.

## Project Structure

```
├── api/
│   └── contact.js          # Vercel serverless handler: validates, stores to Neon, sends email
├── public/                 # robots.txt, sitemap.xml, static assets
├── src/                    # React app
│   ├── components/
│   ├── sections/
│   ├── hooks/
│   └── content.js
├── index.html              # HTML shell + SEO meta tags
├── package.json
└── vite.config.js
```
