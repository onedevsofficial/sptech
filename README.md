# SPTech — Landing site

Production-ready Next.js 14 landing page for **SPTech** (sptechweb.site) — affordable website design, web/app development and free website audits for Indian businesses.

## Stack

- **Next.js 14** (App Router, RSC, Route Handlers)
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Inter** + **Bricolage Grotesque** via `next/font`
- **Nodemailer** for contact form delivery (SMTP)
- **Zod** for input validation
- **HMAC-signed math captcha** (no third-party dep)
- Deployed to **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

See `.env.example`. Minimum required for production:

| Variable | Why |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical, sitemap, OG tags |
| `CAPTCHA_SECRET` | HMAC secret for math captcha tokens |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Contact form delivery |
| `CONTACT_TO`, `CONTACT_FROM` | Inbox + sender address |

If SMTP isn't configured, form submissions are validated and logged to the console — handy in development.

## Deploying to Vercel

1. Push the project to a GitHub repo.
2. In Vercel: **New Project → Import** the repo.
3. Add the environment variables from `.env.example` to **Project Settings → Environment Variables** (see "Email delivery" below).
4. Set the production domain to `sptechweb.site` (and `www.sptechweb.site` redirect).
5. Deploy.

The build runs `next build`. Output is fully ISR/edge-friendly. Security headers (CSP, HSTS, X-Frame-Options, etc.) are set in `next.config.mjs` and apply on Vercel automatically.

## Email delivery — how the contact form works

Vercel functions are stateless — they cannot run their own SMTP server, so the form has to hand the email off to a provider. We support two:

### Option A — Resend (recommended)

This is the cleanest path on Vercel and what we use by default.

1. Sign up at <https://resend.com> (free tier: 3,000 emails/month).
2. **Domains → Add domain** `sptechweb.site`. Resend gives you 3–4 DNS records (TXT for SPF + DKIM, optional MX for return-path). Add them at your domain registrar / DNS host. Verification is usually live within 10 minutes.
3. **API Keys → Create API Key** (`Sending access` is enough). Copy the `re_xxx…` value.
4. In Vercel **Project Settings → Environment Variables**, set:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
   CONTACT_TO=info@sptechweb.site
   CONTACT_FROM="SPTech Website <info@sptechweb.site>"
   CAPTCHA_SECRET=<openssl rand -hex 32>
   NEXT_PUBLIC_SITE_URL=https://sptechweb.site
   ```
5. Redeploy. Submit a test enquiry — the email arrives at `info@sptechweb.site` within seconds. Reply directly to it; the customer's address is set as the `Reply-To`.

### Option B — SMTP (Brevo, Hostinger, Zoho, Gmail App Password, etc.)

Used as a fallback when `RESEND_API_KEY` is empty. Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` along with `CONTACT_TO` / `CONTACT_FROM`. The mailer in `lib/mailer.ts` will pick it up automatically.

Common pitfalls:
- **Gmail SMTP** needs a 16-digit App Password (not your account password) and 2FA on.
- **Port 465** is implicit SSL (`secure: true`); **587** is STARTTLS.
- The `from` address must be on a domain you've authenticated, otherwise it goes to spam or bounces.

### What if no provider is configured?

The contact API still validates and accepts the form (returns `{ ok: true }`), but the payload is logged to the Vercel function log instead of being emailed. Useful for development; **not** what you want in production.

### How the captcha works

- `GET /api/captcha` returns `{ question: "7 × 4", token: "<answer>.<issuedAt>.<nonce>.<hmac-sha256-sig>" }`. The token is signed with `CAPTCHA_SECRET` and has a 10-minute TTL.
- The client renders the question and includes both the typed answer and the original token in the POST.
- `POST /api/contact` recomputes the HMAC, constant-time compares it, checks the TTL, then compares the answer.
- No third-party (reCAPTCHA / hCaptcha) script — keeps the page light and CSP simple.

If you want to verify locally:

```bash
npm run dev
curl http://localhost:3000/api/captcha    # grab the question + token
# solve the math, then:
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{
  "name":"Test","email":"t@t.com","phone":"9999999999",
  "captchaAnswer":"<your answer>","captchaToken":"<token from above>",
  "elapsedMs":5000,"consent":true,"website":""
}'
```

## Security

- **CSP / HSTS / X-Frame-Options / X-Content-Type-Options / Referrer-Policy / Permissions-Policy** in `next.config.mjs`.
- Contact form has:
  - Server-side **Zod** validation
  - **HMAC-signed math captcha** with a 10-min TTL and constant-time comparison
  - Hidden **honeypot** field
  - **Time-trap** rejecting sub-1.5s submissions
  - **Rate limit** of 5 requests / minute / IP
  - Strict input sanitisation and HTML-escaped email body
- `poweredByHeader: false` to hide the Next.js fingerprint.

## Running ads to this page

The page is built to convert paid traffic from Meta and Google:

- Single primary CTA — **Get free audit / quote** — repeated through the page.
- Secondary CTAs — call, WhatsApp, pricing — for warmer leads.
- Fast LCP (preloaded fonts, optimised images, no client JS on Hero).
- Indexable: `robots.ts`, `sitemap.ts`, JSON-LD Organization + Service schema in the layout.
- For Meta Pixel / Google Analytics: drop the snippet into `app/layout.tsx` (CSP already whitelists `googletagmanager`, `google-analytics`, `connect.facebook.net`).

## Project layout

```
app/
  api/
    captcha/route.ts    GET — issues an HMAC-signed math question
    contact/route.ts    POST — validates + sends email
  globals.css
  layout.tsx            fonts, metadata, JSON-LD
  manifest.ts
  page.tsx              composes all sections
  robots.ts
  sitemap.ts
components/
  Audit.tsx
  Contact.tsx           client form with math captcha
  CTA.tsx
  FAQ.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Pricing.tsx
  Process.tsx
  Services.tsx
  StickyCTA.tsx         mobile sticky bar
  Testimonials.tsx
  TrustBar.tsx
  WhyUs.tsx
lib/
  captcha.ts            HMAC sign + verify
  mailer.ts             nodemailer transport
  rateLimit.ts          in-memory token bucket
public/
  sptech.png            logo
```
