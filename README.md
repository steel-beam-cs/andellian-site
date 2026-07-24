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
- **`/privacy`** contains the approved privacy policy.
- **`/forge-and-shadow`** contains the approved blurb, rabbit engraving vignette,
  and complete Chapter Fifteen excerpt.
- **`/about`** is implemented with the clean portrait at the opening and the
  forge-lit portrait for the collaboration section.
- The River's Crest landscape belongs to `/explore-andellian`.
- Princess Penelope belongs to `/about`.
- The Hammer of Continuity image asset is reserved for a future Behind the
  Forge page.
- Behind the Forge is intentionally absent from navigation until developed.
- The homepage author portraits have been intentionally removed.
- The Behind the Forge section uses the approved quiet forge illustration.
- Approved Andellian Press mark, full logo, and favicon assets are installed
  under `public/images/` and `src/app/icon.png`.
- Analytics and advertising remain intentionally disabled unless separately
  approved.

## Routes

- `/` — homepage
- `/forge-and-shadow` — book page with approved excerpt
- `/about` — author page with origin stories
- `/explore-andellian` — spoiler-safe world introduction
- `/tales-of-the-stranger` — Tales of the Stranger and free-tale signup
- `/privacy` — privacy policy
