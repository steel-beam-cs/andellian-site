# Andellian

The Andellian.com site for *Forge and Shadow* and the world of *The Scar of
Andellian*, built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

## Production integrations

- **MailerLite** is connected via the universal script in `src/app/layout.tsx`
  (account `2530319`, embedded form `PvXVdW`).
- **Andellian Readers** uses double opt-in.
- The active automation delivers *The Eighth Morning of Bellweather*.
- MailerLite signup is centralized on `/tales-of-the-stranger#free-tale`.
- **Vercel Web Analytics** is enabled through `@vercel/analytics`.
- **Vercel Speed Insights** is enabled through `@vercel/speed-insights`.
- Private owner analytics opt-out controls remain in place.
- Advertising remains disabled unless separately approved.
- **`/privacy`** contains the approved privacy policy.
- **`/forge-and-shadow`** contains the approved blurb, rabbit engraving vignette,
  complete Chapter Fifteen excerpt, release date, and paperback ISBN.
- **`/about`** is implemented with the clean portrait and author story.
- **`/behind-the-forge`** contains the approved collaboration, continuity,
  production, and transparency narrative.
- The River's Crest landscape belongs to `/explore-andellian`.
- Princess Penelope belongs to `/about`.
- The Hammer of Continuity image is featured on Behind the Forge.
- Behind the Forge is linked from primary, mobile, and footer navigation.
- The homepage author portraits have been intentionally removed.
- The Behind the Forge section uses the approved quiet forge illustration.
- Approved Andellian Press mark, full logo, and favicon assets are installed
  under `public/images/` and `src/app/icon.png`.

## Routes

- `/` — homepage
- `/forge-and-shadow` — book page with approved excerpt
- `/about` — author page with origin stories
- `/explore-andellian` — spoiler-safe world introduction
- `/tales-of-the-stranger` — Tales of the Stranger and free-tale signup
- `/privacy` — privacy policy

See [`OPERATIONS.md`](./OPERATIONS.md) for the canon-aware branch, Vercel preview,
pull-request, and production-verification workflow.
