# Plan 01-02: Brand & Design System — Summary

## Status: Complete

## What Was Built
- **Tailwind v4 brand tokens** in `globals.css` `@theme` block:
  - `--color-brand-green: #2D8B3A` (primary)
  - `--color-brand-green-light: #5AB645`
  - `--color-brand-green-dark: #1E6B2A`
  - Gray palette, font variable
- **Be Vietnam Pro** Google Font with Vietnamese + Latin subsets, weights 400-800, display: swap
- **CSS custom properties**: `--green-primary`, `--green-light`, `--gray-bg`, `scroll-behavior: smooth`
- **`src/lib/utils.ts`**: `cn()` utility combining clsx + tailwind-merge
- **`Button`** component: primary/secondary/outline/ghost variants, sm/md/lg sizes, href support
- **`SectionTitle`** component: title, subtitle, centered, badge props
- **Barrel exports**: `src/components/ui/index.ts`

## Key Files Created
- `src/app/globals.css` — Tailwind v4 `@theme` with brand colors + smooth scroll
- `src/lib/utils.ts` — cn() utility
- `src/components/ui/Button.tsx` — 4 variants with brand colors
- `src/components/ui/SectionTitle.tsx` — heading component with badge support
- `src/components/ui/index.ts` — barrel export

## Deviations from Plan
- **Tailwind v4 CSS-first config** instead of `tailwind.config.ts` — same result, different syntax; Tailwind v4 classes use `bg-[#2D8B3A]` arbitrary values which work perfectly
- No `tailwind.config.ts` needed — colors configured via `@theme` in CSS

## Verification
- [x] `globals.css` defines brand colors (#2D8B3A, #5AB645, #1E6B2A)
- [x] `scroll-behavior: smooth` in globals.css
- [x] Be Vietnam Pro imported with `vietnamese` subset
- [x] Button component with 4 variants
- [x] SectionTitle with badge support
- [x] `npm run build` passes after changes

## Self-Check: PASSED
