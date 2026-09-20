# KULACHI WEAR — DEPLOYMENT

## Before deployment

1. Configure production environment variables.
2. Configure the database if used.
3. Create the production admin account.
4. Remove or clearly archive demo products.
5. Upload the real logo.
6. Upload real product photography.
7. Verify WhatsApp number.
8. Configure shipping and exchange policies.
9. Test mobile layouts.
10. Test admin authentication.
11. Test product and collection management.
12. Test sales and discount dates.
13. Test contact/WhatsApp links.
14. Verify SEO metadata.

## Owner handoff

Give the owner:

- Website URL
- Admin URL
- Admin login setup instructions
- Short CMS guide
- Backup/export instructions if supported
- Contact for technical maintenance

## Important

Do not place production passwords in Git.

Use environment variables for:
- database credentials
- auth secrets
- API keys
- storage credentials
- payment credentials

## Recommended owner workflow

Add product → upload images → choose collection → set price → publish.

For a campaign:

Create sale → choose products/collection → set dates → create homepage section → publish.

The owner should not need developer assistance for routine merchandising.
