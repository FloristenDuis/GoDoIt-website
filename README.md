# GoDoIt.community

**Stop Thinking. Start Living.** — the website for GoDoIt, a community for ambitious people who want more adventure, deeper connections and a life they don't need a vacation from.

Built in Dublin, Ireland 🇮🇪 · active in the Netherlands, Ireland, Portugal & Austria.

## What's inside

A static website — plain HTML, CSS and a little JavaScript. No build step, no framework.

| Page | File | What it's for |
|------|------|----------------|
| Home | `index.html` | Hero, what we do, coaching & community teasers, stories, partner |
| Coaching | `coaching.html` | "Find Clarity In Motion" — a full-day 1-on-1 in the Irish mountains |
| Community | `community.html` | The hiking community + the annual health Events |
| Partners | `partners.html` | Curated partners ("People I Trust") |
| Inspiration | `inspiration.html` | Stories & videos worth sharing |
| About | `about.html` | About Floris + what GoDoIt stands for |

- `styles.css` — all styling (palette: forest / sage / clay / sand; fonts: Fraunces, Inter, JetBrains Mono)
- `app.js` — scroll reveals, mobile nav, copy-code buttons
- `images/` — photos used across the site
- `downloads/` — the AI training program PDF (partner)

## Run it locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html> in your browser.

## Going live

This repo can be deployed as-is (no build needed):

- **Netlify / Vercel** — connect this repository and deploy (works with private repos).
- **GitHub Pages** — enable Pages on the `main` branch.

> **Before launch:** the contact links use `floris@godoit.community`. Make sure that mailbox (or a forwarding address) is created at the domain host, otherwise those emails will bounce.

## Contact

- Instagram: [@floristenduis](https://www.instagram.com/floristenduis)
- WhatsApp community & coaching enquiries via the site
