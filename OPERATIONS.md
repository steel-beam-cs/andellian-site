# Andellian Website Operations

This repository powers Andellian.com, the official site for Alexander Dean, *Forge and Shadow*, *Tales of the Stranger*, and *The Scar of Andellian*.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel hosting
- MailerLite signup and delivery workflow

## Production

- `https://andellian.com`
- `https://www.andellian.com`

The `main` branch deploys to the Vercel production project `andellian-site`.

## Source authority

Website copy and world information must follow this order when sources conflict:

1. Approved manuscripts
2. Locked canon decisions
3. `Map Constraints.md`
4. Existing Series Bible entries
5. Current world map

Do not add future-series material, unpublished plans, development notes, speculative geography, or unapproved canon to public pages.

## Important integrations

- MailerLite is connected through `src/app/layout.tsx`.
- Signup is centralized on `/tales-of-the-stranger#free-tale`.
- The active reader automation delivers *The Eighth Morning of Bellweather*.
- `/privacy` contains the approved privacy policy.

## Validation

Before merging:

```bash
npm install
npm run lint
npm run build
```

Review the Vercel preview at desktop and mobile widths. Test affected navigation, MailerLite signup paths, links, metadata, image crops, and spoiler boundaries.

## Content rules

- Preserve approved book titles, descriptions, excerpts, author transparency language, and Andellian Press branding.
- Keep public worldbuilding spoiler-safe.
- Do not silently reconcile canon conflicts in website copy; resolve them through the Series Bible first.
- Treat changes to launch dates, retailer information, ISBNs, book files, signup forms, privacy language, or approved excerpts as high-impact changes requiring review.

## Change workflow

1. Record nontrivial work in a GitHub issue.
2. Create a focused branch.
3. Verify copy against approved Drive and Airtable sources.
4. Make the smallest complete change.
5. Run lint and build.
6. Review the Vercel preview.
7. Merge through a pull request.
8. Confirm the production deployment is ready and error-free.

Do not edit production blindly.
