# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # static export to dist/
npm run lint      # ESLint
```

There are no tests. Build errors from TypeScript and ESLint are intentionally ignored in `next.config.mjs`.

## Architecture

Next.js 15 app router, statically exported (`output: 'export'`, output dir `dist/`). Deployed to `conmusicaenvivo.org` via GitHub Pages with a custom domain (CNAME). No base path is needed — `getAssetUrl()` in `lib/utils.ts` is a no-op wrapper kept for historical reasons.

**Navigation** lives in two places that must be kept in sync:
- `app/page.tsx` — homepage has its own inline `<nav>` (hash links like `#events`, `#about`)
- `components/page-header.tsx` — used by all other pages; includes the logo and a sticky nav bar with the same items

**Time-gated content** is a recurring pattern in `app/page.tsx`: banners and hero layouts are shown/hidden based on `new Date()` comparisons against named constants at the top of the file. Expiry times are stored as UTC with a comment noting the PT equivalent.

**Events** are driven by `data/events.json`. `lib/events.ts` exports `getUpcomingEvents()` and `getPastEvents()`, which split on today's date (parsed as local time to avoid timezone shifts).

**Pages** follow a simple pattern: `<PageHeader title="…" />`, a content `<section>`, `<PageFooter />`. The homepage (`app/page.tsx`) is a `"use client"` component because of dismissible banners; other pages are server components.

**Styling** uses Tailwind v4 with shadcn/ui components (`components/ui/`). Brand colors: teal `#3e7a7a` (nav), lighter teal `#4a8b8b` (hero/accents), dark teal background `#b0c4c4`. Kaushan Script is loaded via Google Fonts and used for the logo.

## Instructions

- After every change, read the relevant files fresh — do not rely on cached content from earlier in the conversation.
