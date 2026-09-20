# KULACHI WEAR — SECURITY AND ACCESS

## Public vs admin

Public users:
- storefront
- product pages
- collections
- contact
- policies
- cart/order flow if enabled

Admin users:
- CMS
- products
- collections
- sections
- sales
- settings
- orders if enabled

## Required protections

- Server-side authorization where applicable
- Passwords never stored in plaintext
- Secrets only in environment variables
- Secure session/cookie configuration
- CSRF protection where applicable
- Input validation
- File upload validation
- Rate limiting on login where practical
- No admin credentials in frontend bundles
- No hidden frontend-only security

## Media uploads

Validate:
- file type
- file size
- safe filename/path
- image dimensions where practical

## Public API

Never expose:
- password hashes
- private admin data
- internal secrets
- private customer information

Return only the fields required by the public storefront.

## Demo environment

Any demo admin credentials must be clearly marked as development-only and must not be shipped as real production credentials.
