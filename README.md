# QuickBite Static Website

## Project overview
This repository contains a static, content-driven website for **QuickBite** (Fast Casual burger restaurant in Brugg, Switzerland). The implementation follows the provided context rules: no invented menu pricing, no invented history, no external image usage, and no unsupported business claims.

## Tech stack
- **React + Vite** for frontend app structure and build.
- **Tailwind CSS** for mobile-first styling.
- **React Router** for route-based pages.
- **react-helmet-async** for per-page SEO metadata (title, description, OG basics).

### Key implementation decisions
- All restaurant data is centralized in `src/content/restaurant.json`.
- UI labels are translated with a lightweight local i18n layer (`src/i18n/*`).
- Language defaults to German (`de`) and falls back to German for missing UI keys.
- Pages are created from available content only (no Gallery page, no Reservations page, no contact form without email).

## Run locally
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Folder structure
```text
public/
  images/
    dishes/
    logo/
    venue/
src/
  components/
  content/
    restaurant.json
  i18n/
  layout/
  pages/
  seo/
  styles/
```

## Content customization (`restaurant.json`)
Edit `src/content/restaurant.json` to customize:
- business identity
- address and contact
- opening hours
- service options
- external links
- image paths
- highlights/about notes
- menu placeholders/photo-based entries

### Rules when editing content
- Keep image paths local and under `/public/images/*`.
- Do not add invented prices or unsupported claims.
- If a section has no trustworthy data, keep it as a marked placeholder or remove it.

## Replacing images
1. Add image files under existing folders:
   - `public/images/dishes/`
   - `public/images/logo/`
   - `public/images/venue/`
2. Update path strings in `restaurant.json`.
3. Prefer compressed assets and keep dimensions reasonable.

## Add/remove pages depending on content
Routing is defined in `src/App.jsx`.

Suggested logic:
- Keep `Home`, `Location & Hours`, `Contact` always.
- Keep `Menu` only if enough dish photos exist.
- Add `Gallery` only if enough total visual assets exist.
- Avoid empty pages that only duplicate placeholders.

## Accessibility notes
- Visible focus states for links/buttons/select.
- Keyboard reachable navigation and language selector.
- Alt text on all image components.
- Mobile-first responsive breakpoints (`sm`, `md`, `lg`) used across layout and sections.

## SEO notes
- Each page sets title and description with `react-helmet-async`.
- Basic OpenGraph fields are included through shared `Seo` component.
- Semantic sections and readable headings are used per view.

## Placeholder checklist to complete later
- Official structured menu and confirmed item names.
- Confirmed prices.
- Official brand colors and typography.
- Official logo asset.
- Higher-quality hero photography.
- Email contact (required before enabling contact form).
- Any official certifications/claims (if publicly confirmed).

## Fields/assets pending confirmation
- Real menu categories and dish metadata.
- Price list.
- Founding story / brand narrative.
- Official halal statement (currently not asserted as official claim).
- Additional high-quality interior/exterior images.

## i18n (minimal)
- Language options come from `restaurant.json` (`languages.disponibles`).
- UI translations are in `src/i18n/translations.js`.
- Provider and fallback logic are in `src/i18n/I18nProvider.jsx`.
- Missing UI keys fallback to German.
- Restaurant-specific long copy can remain in German when translation is not available.
