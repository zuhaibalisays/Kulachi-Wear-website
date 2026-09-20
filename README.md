# Kulachi Wear — Qwen Coder Website Build Pack

This folder contains the master build prompt and supporting Markdown specifications for building the Kulachi Wear women's clothing website.

## Brand reference

- Brand: **KULACHI WEAR**
- Tagline: **WEAR YOUR CONFIDENCE**
- WhatsApp shown in the supplied logo: **03462216367**
- TikTok reference supplied by the owner: `https://www.tiktok.com/@kulachi.wear`
- Supplied logo image is the primary visual reference for the logo, typography treatment, magenta/yellow palette, and shoe icon.

## Important source limitation

The TikTok profile could not be reliably inspected by the research browser because TikTok blocks automated access. Therefore:
1. Do not invent specific TikTok content, products, prices, policies, or brand claims.
2. If the development environment can access the TikTok profile normally, use it only to refine visual direction and brand mood.
3. Treat the supplied logo as the authoritative source for the core brand identity.
4. Product content, prices, stock, shipping rules, and contact details must be editable from the admin area.

## Files

- `MASTER_PROMPT.md` — paste this into Qwen Coder first.
- `DESIGN_SYSTEM.md` — visual system, palette, typography, spacing, components.
- `ADMIN_CMS_SPEC.md` — non-programmer-friendly admin/CMS requirements.
- `DATA_MODEL.md` — recommended entities and fields.
- `CONTENT_TEMPLATE.md` — content structure for products, collections, sales, and sections.
- `SECURITY_AND_ACCESS.md` — admin-only access and basic security requirements.
- `DEPLOYMENT.md` — deployment and handoff guidance.

## Core product principle

The owner should be able to run the storefront without editing code.

Visitors see the public storefront. Admin editing controls are never exposed in the public UI.
