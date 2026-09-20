# KULACHI WEAR — DATA MODEL

The exact database technology may vary by implementation. Keep the conceptual model stable.

## AdminUser

- id
- name
- email/username
- password_hash or external auth reference
- role
- created_at
- updated_at

## Product

- id
- name
- slug
- sku
- short_description
- description
- price
- sale_price
- category_id
- status
- stock_quantity
- featured
- new_arrival
- bestseller
- created_at
- updated_at

## ProductImage

- id
- product_id
- url/path
- alt_text
- sort_order

## Category

- id
- name
- slug
- description
- image
- status
- sort_order

## Collection

- id
- name
- slug
- description
- image
- status
- sort_order
- seo_title
- seo_description

## ProductCollection

- product_id
- collection_id

## ProductVariant

- id
- product_id
- size
- color
- sku
- stock_quantity

## StorefrontSection

- id
- name
- slug
- subtitle
- description
- image
- cta_label
- cta_url
- status
- start_at
- end_at
- sort_order

## SectionProduct

- section_id
- product_id
- sort_order

## Discount

- id
- name
- type
- value
- scope
- status
- starts_at
- ends_at
- coupon_code

## DiscountProduct

- discount_id
- product_id

## DiscountCollection

- discount_id
- collection_id

## SiteSettings

Examples:
- brand name
- tagline
- WhatsApp
- logo
- favicon
- announcement
- social links
- shipping policy
- return policy

## Order

Only if ordering is implemented:
- id
- customer name
- phone
- email
- address
- items
- subtotal
- discount
- delivery_fee
- total
- payment method
- status
- created_at

Do not store unnecessary customer data.
