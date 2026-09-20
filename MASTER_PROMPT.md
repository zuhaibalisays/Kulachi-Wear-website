# MASTER PROMPT — KULACHI WEAR LUXURY WOMEN'S CLOTHING WEBSITE

You are Qwen Coder acting as a senior product designer, UX architect, frontend engineer, backend engineer, accessibility specialist, and QA engineer.

Build a complete production-ready e-commerce website for the women's clothing brand **KULACHI WEAR**.

The website must feel like a real premium fashion brand, not a generic template, not a dashboard disguised as a store, and not an AI-generated demo.

---

# 1. BRAND REFERENCE

Brand name:

**KULACHI WEAR**

Tagline:

**WEAR YOUR CONFIDENCE**

WhatsApp number shown in the supplied logo:

**03462216367**

Owner-supplied TikTok reference:

`https://www.tiktok.com/@kulachi.wear`

A logo image was supplied to ChatGPT as a visual reference. You do not need to reproduce the image inside this prompt. Use the following extracted visual direction:

- Primary brand color: deep raspberry/magenta, approximately `#C3265B`
- Secondary accent: warm golden yellow, approximately `#F2C230`
- Background: warm ivory/off-white rather than sterile pure white
- Supporting text: muted plum/rose-gray
- Logo icon: stylized feminine high-heel silhouette using magenta and gold
- Brand mood: feminine, elegant, confident, refined, modern, fashion-forward
- Avoid neon pink.
- Avoid excessive gold.
- Avoid childish/pastel styling.
- Avoid overly decorative Islamic/ethnic motifs unless the actual product imagery/content supports them.

The logo's exact artwork and Urdu/other text, if later supplied, must never be rewritten or hallucinated.

If you can access the TikTok profile in the development environment, use it to understand the brand's real visual mood. Do NOT invent facts or product details from an inaccessible profile.

---

# 2. PRIMARY OBJECTIVE

Create a modern luxury women's clothing storefront that makes browsing easy.

The visitor must NOT have to endlessly scroll through one huge product feed.

The store must use:

- Collections
- Product categories
- Item subsections
- Search
- Filters
- Sort
- Product detail pages
- Featured sections
- New arrivals
- Sale
- Best sellers / featured products
- Seasonal edits
- Clear navigation

The owner must be able to create, edit, reorder, hide, and delete these sections without touching code.

---

# 3. CRITICAL BUSINESS REQUIREMENT: NON-PROGRAMMER ADMIN

The owner is a non-programmer.

Build a private admin/CMS area where the owner can manage the storefront visually.

The admin must be completely separate from the public customer experience.

Visitors must never see:

- Admin buttons
- Edit controls
- CMS controls
- Product-management controls
- Sales-management controls
- Admin navigation
- Internal database information
- Draft content
- Hidden products
- Admin routes in normal storefront navigation

The public website may have a normal footer link such as "Staff Login" only if the owner wants one, but do not make the admin entry visually prominent.

---

# 4. ADMIN MUST SUPPORT INDIVIDUAL SECTION MANAGEMENT

The owner must be able to create sections individually.

Examples:

- New Arrivals
- Summer Edit
- Luxury Pret
- Casual Wear
- Festive Collection
- Eid Edit
- Sale
- Under PKR 5,000
- Best Sellers
- Limited Edition
- Accessories
- Any custom section

Each section needs:

- Section name
- Optional subtitle
- Description
- Image/banner
- Product selection
- Display order
- Active/inactive toggle
- Start date/time
- End date/time (optional)
- Featured toggle
- SEO title
- SEO description
- URL slug
- Reorder control

The owner should be able to drag sections into a different order.

---

# 5. SALES AND DISCOUNTS

Build a simple visual discount manager.

Owner can create:

- Percentage discount
- Fixed amount discount
- Sale price
- Collection-level discount
- Product-level discount
- Scheduled sale
- Limited-time sale
- Optional coupon code

Each sale should support:

- Name
- Type
- Value
- Applicable products
- Applicable collections
- Start date
- End date
- Active/inactive
- Optional banner
- Optional announcement text

Do not apply overlapping discounts in an ambiguous way.

Implement one clearly documented discount precedence rule.

Example precedence:

1. Product-specific sale price
2. Collection discount
3. Storewide discount

If multiple rules conflict, show the effective price clearly in admin.

---

# 6. PRODUCT MANAGEMENT

Admin can add a product without coding.

Fields:

- Product name
- SKU
- Short description
- Full description
- Price
- Sale price
- Category
- Collection(s)
- Tags
- Main image
- Gallery images
- Size options
- Color options
- Fabric
- Care instructions
- Availability
- Stock quantity
- Featured toggle
- New arrival toggle
- Sale toggle
- Bestseller toggle
- Sort/order value
- SEO title
- SEO description
- URL slug

Admin must be able to:

- Add
- Edit
- Duplicate
- Archive
- Restore
- Hide/show
- Reorder
- Change price
- Apply/remove sale
- Manage stock

---

# 7. PRODUCT DISCOVERY

Do not make users doomscroll.

Implement:

## Search

Search by:

- Product name
- SKU
- Category
- Collection
- Tags

## Filters

At minimum:

- Category
- Collection
- Price
- Size
- Color
- Availability
- Sale
- New arrivals

## Sort

At minimum:

- Featured
- Newest
- Price low to high
- Price high to low
- Name A-Z

## Breadcrumbs

Example:

Home → Collections → Festive Edit → Product

---

# 8. REQUIRED PUBLIC PAGES

Create at minimum:

1. Home
2. Collections
3. Collection detail
4. Shop / All Products
5. Product detail
6. Sale
7. Search results
8. About / Our Story
9. Contact
10. Shipping & Delivery
11. Returns / Exchange
12. Privacy Policy
13. Terms & Conditions
14. 404 page

If the architecture benefits from additional pages, add them.

Do not add unnecessary pages just to increase page count.

---

# 9. HOME PAGE STRUCTURE

Create a refined luxury-fashion homepage.

Suggested structure:

1. Announcement bar
2. Elegant navigation
3. Hero section
4. Primary CTA
5. Shop by category
6. New arrivals
7. Featured collection
8. Editorial/lifestyle section
9. Best sellers / curated products
10. Sale or seasonal campaign
11. Brand statement
12. Social/TikTok-inspired section if real content is available
13. WhatsApp contact CTA
14. Newsletter/signup only if the implementation genuinely supports it
15. Footer

Do not overcrowd the page.

Use whitespace as a luxury design element.

---

# 10. HERO

The hero should communicate fashion and confidence immediately.

Do NOT use random stock imagery if no authentic brand photography is available.

Create a graceful image-first structure that allows the owner to upload:

- Desktop hero image
- Mobile hero image
- Overlay title
- Subtitle
- CTA
- Optional secondary CTA

Fallback state must still look intentional if no image is uploaded.

Suggested copy direction:

"WEAR YOUR CONFIDENCE"

Do not invent exaggerated claims such as "Pakistan's #1 brand" or "trusted by thousands."

---

# 11. COLLECTIONS EXPERIENCE

Collections should feel editorial.

Use visual collection cards.

Example:

- New In
- Everyday Edit
- Festive
- Luxury
- Sale

But make these editable from admin.

Collection page:

- Hero/banner
- Title
- Description
- Filters
- Sort
- Product grid
- Pagination or progressive loading
- Empty state

---

# 12. PRODUCT DETAIL PAGE

Make product pages feel premium.

Include:

- Large image gallery
- Zoom
- Product title
- Price
- Sale price when applicable
- Discount display
- Availability
- Size selector
- Color selector
- Quantity
- Add to cart
- Buy/order CTA
- WhatsApp inquiry CTA
- Product description
- Fabric
- Care
- Delivery information
- Exchange information
- Related products

The product page should remain usable on mobile.

---

# 13. ORDERING ARCHITECTURE

Design the system so it can support e-commerce ordering.

Prefer an architecture where the owner can configure the order method.

Support:

- Add to cart
- Cart
- Checkout/order form

If full online payment is not configured, allow a WhatsApp/manual-order flow.

The admin should be able to configure:

- WhatsApp number
- COD availability
- Delivery information
- Order instructions

Do not hard-code assumptions about payment providers.

---

# 14. WHATSAPP

Use WhatsApp prominently but elegantly.

Brand WhatsApp:

**03462216367**

Use click-to-chat links for:

- Product inquiry
- Order inquiry
- General contact

Pre-fill useful messages such as:

"Hello Kulachi Wear, I would like to inquire about [Product Name]."

Do not expose internal admin data through WhatsApp messages.

---

# 15. VISUAL DESIGN DIRECTION

The visual language must be:

- Modern
- Elegant
- Luxury
- Feminine
- Confident
- Editorial
- Spacious
- Sophisticated

Think:

"quiet luxury fashion storefront"

rather than:

"bright online clothing marketplace"

Use:

- Large typography
- Editorial layouts
- Strong photography
- Generous whitespace
- Fine borders
- Subtle shadows
- Soft rounded corners where appropriate
- Refined hover effects
- Elegant transitions
- Clear hierarchy

Avoid:

- Neon gradients
- Excessive glassmorphism
- Huge glowing buttons
- Excessive rounded cards
- Emoji-heavy UI
- Cartoon visuals
- Cheap-looking badges everywhere
- Excessive animations
- Random decorative shapes
- Generic SaaS dashboard styling
- Overly dark black luxury styling that conflicts with the logo

---

# 16. COLOR SYSTEM

Base palette:

Primary Raspberry:
`#C3265B`

Deep Raspberry:
`#8E163F`

Warm Gold:
`#F2C230`

Deep Gold:
`#C99A12`

Warm Ivory:
`#FCF9F5`

Soft Blush:
`#F7E8EE`

Text:
`#241D21`

Muted Text:
`#75686E`

Border:
`#E9DDE2`

White:
`#FFFFFF`

Use gold as an accent, not the dominant color.

The primary UI identity should remain raspberry + ivory with restrained gold.

---

# 17. TYPOGRAPHY

Use a premium serif/sans pairing.

Recommended:

Display serif:
- Playfair Display
- Cormorant Garamond
- DM Serif Display

Sans:
- Inter
- Manrope
- Plus Jakarta Sans

Choose one serif and one sans.

Do not use more than two primary font families.

Typography must be responsive.

Use uppercase sparingly for labels and navigation.

---

# 18. LOGO

The logo must be treated as a brand asset.

Support:

- Header logo
- Footer logo
- Mobile logo
- Favicon where technically appropriate

Do not redraw or alter the logo.

Create an `/assets/brand/` location for:

- logo
- favicon
- brand imagery

If the actual logo file is unavailable to Qwen, create a placeholder reference such as:

`/assets/brand/kulachi-wear-logo.png`

Do not invent a replacement logo.

---

# 19. RESPONSIVE DESIGN

Design mobile-first.

Test at:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Mobile must not simply be a shrunk desktop layout.

Use:

- Mobile menu
- Sticky/floating cart where appropriate
- Touch-friendly controls
- Mobile filter drawer
- Optimized product grid
- Mobile-specific hero image

---

# 20. ACCESSIBILITY

Follow practical WCAG-oriented principles:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text
- Labels for forms
- Accessible dialogs
- Accessible dropdowns
- Reduced motion support
- No interaction dependent only on hover

Do not sacrifice readability for visual style.

---

# 21. PERFORMANCE

Optimize for normal Pakistani mobile connections and low/mid-range devices.

Requirements:

- Lazy-load non-critical images
- Responsive images
- Avoid massive JavaScript bundles
- Avoid unnecessary animation libraries
- Use optimized image formats
- Avoid loading every product image at once
- Paginate/progressively load products
- Cache static assets where appropriate

The site should feel fast.

---

# 22. SEO

Implement:

- Page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Product structured data where appropriate
- Breadcrumb structured data where appropriate
- Semantic headings
- SEO-friendly slugs
- Sitemap support
- robots.txt

Do not generate fake reviews or fake ratings.

---

# 23. ADMIN AUTHENTICATION

Admin area must require authentication.

Do not rely on:

- hidden buttons
- hidden URLs
- frontend-only role checks
- localStorage as the sole security mechanism

Authorization must be enforced server-side/backend-side wherever the architecture supports a backend.

Admin pages must redirect unauthorized visitors.

Use secure password handling and session management.

Never expose admin credentials in frontend code.

---

# 24. ADMIN UI

The admin UI should be simpler than the public storefront.

Create sections:

Dashboard
Products
Collections
Categories
Storefront Sections
Sales & Discounts
Orders
Customers (only if actually implemented)
Media
Settings
Policies
Admin Account

Dashboard should show useful information without becoming a complicated analytics system.

---

# 25. ADMIN HOME DASHBOARD

Show:

- Products count
- Active collections
- Active sales
- Draft sections
- Recent orders if ordering is implemented
- Low-stock products if stock tracking is implemented

Use clear cards and tables.

Do not overwhelm a non-programmer.

---

# 26. VISUAL SECTION BUILDER

Create a simple "Storefront Sections" interface.

Each section has:

- Name
- Visibility
- Content
- Product selection
- Image
- CTA
- Order

Allow:

- Add section
- Edit section
- Duplicate section
- Reorder
- Hide/show
- Delete/archive

Provide previews where practical.

---

# 27. CONTENT SAFETY / DATA INTEGRITY

Never fabricate:

- Product prices
- Product availability
- Customer reviews
- Shipping promises
- Return policies
- Business claims
- Certifications
- Social metrics

Use placeholders where the owner has not provided data.

Clearly mark demo content as demo content during development.

---

# 28. DEMO DATA

Create realistic but clearly fictional sample products so the UI can be demonstrated.

Example names can be elegant and generic:

- Noor Edit
- Gulzar Set
- Mahveen
- Rosé Evening
- Ivory Muse
- Zari Bloom

Do not imply these are real Kulachi Wear products.

The admin must be able to delete demo content.

---

# 29. ARCHITECTURE

Choose a maintainable architecture.

Preferred qualities:

- Component-based
- Type-safe where practical
- Reusable UI components
- Centralized design tokens
- Clear data layer
- Clear authentication layer
- Clear admin/public separation
- Environment variables for secrets
- Easy deployment
- Easy local development

Do not over-engineer.

If a database is needed, choose a practical solution appropriate for the chosen stack.

---

# 30. FILE STRUCTURE

Create a clean project structure similar to:

/app or /src
/components
/components/ui
/components/storefront
/components/admin
/lib
/lib/auth
/lib/data
/lib/discounts
/lib/seo
/public
/public/assets
/public/assets/brand
/public/assets/products
/styles
/types
/docs

Use the actual conventions of the selected framework.

---

# 31. DOCUMENTATION

Create and maintain:

- README.md
- DESIGN_SYSTEM.md
- ADMIN_CMS_SPEC.md
- DATA_MODEL.md
- SECURITY_AND_ACCESS.md
- DEPLOYMENT.md
- CONTENT_TEMPLATE.md

Explain setup in beginner-friendly language.

The owner is a non-programmer, so provide a simple admin guide.

---

# 32. ADMIN GUIDE

Create an in-app help area or documentation explaining:

How to add a product
How to upload product images
How to create a collection
How to create a homepage section
How to run a sale
How to change sale dates
How to hide a product
How to reorder sections
How to update WhatsApp
How to edit store policies
How to manage orders if ordering is enabled

Use plain language.

---

# 33. DO NOT DO THESE THINGS

Do not:

- Build only a static landing page
- Build only a frontend mockup
- Put admin editing controls on the public page
- Make the owner edit JSON manually
- Require coding to add a sale
- Require coding to add a collection
- Require coding to add a product
- Hard-code product cards into components
- Hard-code sales into components
- Invent brand claims
- Invent TikTok content
- Invent customer reviews
- Use random stock photography as if it belongs to the brand
- Make the page excessively animated
- Make every element rounded
- Use excessive gradients
- Use a generic ecommerce template without customization

---

# 34. QA REQUIREMENT

Before declaring the build complete, test:

Public pages
Admin authentication
Unauthorized admin access
Product creation
Product editing
Product hiding
Collection creation
Section creation
Section reordering
Discount creation
Discount expiration
Search
Filters
Sort
Product detail
Cart
Checkout/order flow if implemented
WhatsApp links
Responsive layout
Keyboard navigation
Image loading
Empty states
404 page

Fix obvious errors before finishing.

---

# 35. FINAL OUTPUT

Deliver:

1. Complete source code
2. Working public storefront
3. Working admin area
4. Database/schema if applicable
5. Seed/demo data
6. All required Markdown documentation
7. Environment variable example
8. Setup instructions
9. Deployment instructions
10. Admin user guide
11. Security notes

The result should be a maintainable, real-world website that a non-programmer fashion-brand owner can operate without opening the code.

Most importantly:

**Make the storefront feel like KULACHI WEAR — modern, elegant, feminine, confident, and premium — while keeping the owner experience extremely simple.**
