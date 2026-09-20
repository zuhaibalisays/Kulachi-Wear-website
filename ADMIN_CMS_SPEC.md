# KULACHI WEAR — ADMIN CMS SPECIFICATION

## Goal

A non-programmer must be able to manage the storefront without touching source code.

## Admin areas

### Dashboard
- Product count
- Collection count
- Active sales
- Orders, if enabled
- Low stock, if enabled

### Products
CRUD:
- Create
- Read
- Update
- Archive/delete

### Collections
CRUD plus ordering.

### Categories
CRUD.

### Storefront Sections

A section is an independently manageable block on the public website.

Fields:
- name
- slug
- subtitle
- description
- image
- CTA label
- CTA destination
- selected products
- selected collection
- visibility
- start date
- end date
- display order

Examples:
- New Arrivals
- Festive Edit
- Sale
- Best Sellers
- Everyday
- Custom owner-created section

### Sales & Discounts

Support:
- product sale
- collection sale
- storewide sale
- fixed discount
- percentage discount
- scheduled sale
- optional coupon

Show:
- original price
- effective price
- discount amount/percentage

## Non-programmer UX

Use:
- forms
- dropdowns
- date pickers
- image upload
- drag-and-drop ordering
- toggle switches
- preview
- confirmation dialogs

Avoid:
- JSON editing
- SQL editing
- code snippets
- technical IDs in normal UI

## Draft/publish

Where practical:
- Draft
- Published
- Scheduled

## Media

Allow image upload with:
- preview
- replace
- remove
- alt text

## Important rule

The public site consumes CMS data.

Do not hard-code product lists or homepage sections into frontend components.
