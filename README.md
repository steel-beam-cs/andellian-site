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
- **`/privacy`** contains the approved privacy policy.
- **`/forge-and-shadow`** contains the approved blurb, rabbit engraving vignette,
  and complete Chapter Fifteen excerpt.
- The homepage author portraits have been intentionally removed.
- The Behind the Forge section uses the approved quiet forge illustration.
- Approved Andellian Press mark, full logo, and favicon assets are installed
  under `public/images/` and `src/app/icon.png`.
- Analytics and advertising remain intentionally disabled unless separately
  approved.

## Routes

- `/` — homepage
- `/forge-and-shadow` — book page with approved excerpt
- `/privacy` — privacy policy
