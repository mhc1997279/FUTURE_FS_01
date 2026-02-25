# Portfolio — Vite + React + Tailwind

A personal developer portfolio built with **Vite**, **React 19**, **Tailwind CSS**, and **Framer Motion**, deployed on **Vercel** with a working contact-form email backend powered by **Nodemailer** (Gmail).

---

## Tech Stack

| Layer         | Tech                                        |
| ------------- | ------------------------------------------- |
| Frontend      | React 19, Vite, Tailwind CSS, Framer Motion |
| Icons         | Lucide React                                |
| Email backend | Vercel Serverless Function + Nodemailer     |
| Hosting       | Vercel                                      |

---

## Running Locally

```bash
npm install
npm run dev
```

To test the contact form endpoint locally, install and use the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel dev          # serves both the Vite app and api/ functions
```

---

## Contact Form Email Setup

The contact form at `/api/contact` is a **Vercel Serverless Function** that sends an email to you via **Gmail + an App Password**. No third-party form service is required.

### 1 — Create a Gmail App Password

1. Sign in to the Gmail account you want to receive notifications on.
2. Enable **2-Step Verification** at <https://myaccount.google.com/security>.
3. Go to **Google Account → Security → App passwords**.
4. Choose app: **Mail**, device: **Other** (name it "Portfolio").
5. Click **Generate** — copy the 16-character password shown.

> ⚠️ This is **not** your Gmail password. Never commit it to source control.

### 2 — Set Environment Variables on Vercel

In your Vercel project dashboard:

**Project → Settings → Environment Variables**

| Variable             | Value                                          | Required |
| -------------------- | ---------------------------------------------- | -------- |
| `GMAIL_USER`         | `yourgmail@gmail.com`                          | ✅       |
| `GMAIL_APP_PASSWORD` | 16-char app password                           | ✅       |
| `TO_EMAIL`           | email to deliver to (defaults to `GMAIL_USER`) | optional |

Add them for **Production**, **Preview**, and optionally **Development**.

### 3 — How It Works

```
Browser form  →  POST /api/contact  →  Nodemailer  →  Gmail SMTP  →  Your inbox
```

- Required fields: `name`, `email`, `message`
- `subject` is optional
- `replyTo` is set to the sender's email so you can reply directly
- Returns `{ ok: true }` on success or `{ ok: false, error: "…" }` with a meaningful status code (400 / 405 / 500)

### 4 — Testing After Deployment

1. Push to GitHub — Vercel auto-deploys.
2. Open your live portfolio and submit the contact form.
3. Check your inbox (and spam folder on first send).
4. If no email arrives:
   - **Vercel → Deployments → Functions → Logs** — check for errors.
   - Verify env vars are saved under **Production**.
   - Confirm the Gmail App Password is correct and 2-Step Verification is on.

---

## Project Structure

```
├── api/
│   └── contact.js        # Vercel serverless email handler
├── src/
│   ├── components/        # Navbar, Footer, GlassCard, etc.
│   ├── sections/          # Hero, About, Projects, Contact, …
│   ├── hooks/
│   ├── content.js         # All copy / data
│   └── App.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## React + Vite Notes

Two official Vite React plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses SWC for Fast Refresh
