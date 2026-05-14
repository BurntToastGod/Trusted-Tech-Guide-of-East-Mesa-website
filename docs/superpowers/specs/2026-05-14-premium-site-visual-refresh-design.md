# Premium Visual Refresh (Direction B) — Design Spec

Date: 2026-05-14  
Project: Trusted Tech Of East Mesa website (`site/`)

## Goal
Make the current site feel significantly less “plain/boring” while staying **very readable for older adults**. The chosen direction is:

**B) Premium + modern “trusted pro”**

Success means the site looks more polished at first glance (better hierarchy, contrast, depth, and “finish”) without reducing clarity, accessibility, or loading speed.

## Non-goals
- No full rewrite, no framework migration, no complex JavaScript.
- No dark-pattern motion, no tiny text, no low-contrast “trendy” styling.
- No changes to pricing/phone number/content unless needed for layout.

## Audience + constraints
- Primary: older adults and family members seeking patient tech help.
- Constraints: **high legibility**, large type, clear buttons, obvious sections, mobile-first touch targets.
- Performance: remain lightweight; avoid heavy third-party dependencies.

## Visual direction (what “Premium + modern” means here)
1. **Stronger hierarchy:** clearer hero headline/lead separation, consistent spacing scale, more deliberate section rhythm.
2. **Crisp surfaces:** cards with subtle border + shadow tuning, tighter radius, more refined dividers.
3. **Premium depth:** soft gradient + subtle noise texture, optional glassy highlights (very subtle) without harming contrast.
4. **Refined color system:** keep trust-blue as primary, introduce a neutral ink scale and a warm accent used sparingly.
5. **Micro-interactions:** small hover/press states and focus rings that feel intentional (keyboard-visible).

## Proposed changes (by area)
### Global (CSS tokens)
- Define a clearer neutral scale (ink / muted / border / surface).
- Add background gradient + optional subtle noise (CSS-only).
- Tune shadows to feel less “default” and more premium.
- Introduce a consistent spacing scale and tighter radii where appropriate.

### Header + navigation
- Slightly increase header polish: better alignment, improved sticky background/blur, clearer button hierarchy.
- Ensure primary CTA (“Call/Text …”) is unmistakable and remains prominent on mobile.

### Hero
- Add premium hero backdrop (gradient + faint highlight shape).
- Increase hero typographic contrast (headline weight/letter-spacing) without shrinking text.
- Keep the current right-side “Quick pricing” card, but refine it: more consistent list styling, clearer dividers, improved “card” presence.

### Sections + cards
- Upgrade card visuals: crisp borders, refined shadows, consistent icon treatment (simple inline SVGs if needed).
- Improve section separators and spacing so content breathes more.

### Buttons + interactive states
- Premium button styling: subtle sheen/gradient for primary, sharper border for secondary/ghost.
- Visible focus styles (WCAG-friendly) and reduced-motion support.

## Accessibility requirements
- Maintain strong contrast for all text and CTAs.
- Minimum comfortable body size (no “tiny” microcopy).
- Keyboard focus rings visible; no focus removal.
- Respect `prefers-reduced-motion`.

## Implementation scope
- Primary files: `site/styles.css` (most changes), small markup tweaks in `site/index.html` only if needed for layout hooks.
- Optional (not required for this spec): add a “hero video slot” that can be enabled later (self-hosted or embed).

## Rollout plan
1. Implement “B” styling updates behind existing markup as much as possible.
2. Quick cross-check on mobile widths and common desktop widths.
3. Validate readability: headings, lead paragraph, pricing panel, buttons.

