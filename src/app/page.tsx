import Image from "next/image";
import { NewsletterForm } from "@/components/newsletter-form";

const navItems = [
  { label: "Forge and Shadow", href: "#forge-and-shadow" },
  { label: "Explore Andellian", href: "#world" },
  { label: "Tales of the Stranger", href: "#enter-andellian" },
  { label: "About Alexander", href: "#about" },
  { label: "Behind the Forge", href: "#behind-the-forge" },
];

const footerLinks = [
  { label: "Forge and Shadow", href: "#forge-and-shadow" },
  { label: "The World of Andellian", href: "#world" },
  { label: "Tales of the Stranger", href: "#enter-andellian" },
  { label: "About Alexander Dean", href: "#about" },
  { label: "Behind the Forge", href: "#behind-the-forge" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-label="Andellian Press">
      <span aria-hidden="true" className="brand-rune">
        <span>A</span>
      </span>
      {!compact && (
        <span className="brand-words">
          <strong>Andellian</strong>
          <small>Press</small>
        </span>
      )}
    </span>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        name: "Forge and Shadow",
        author: { "@type": "Person", name: "Alexander Dean" },
        bookEdition: "Book One of The Scar of Andellian",
        datePublished: "2026-11-17",
        image: "/images/forge-and-shadow-approved-front-cover.png",
      },
      {
        "@type": "Person",
        name: "Alexander Dean",
        jobTitle: "Author",
        image: "/images/alexander-dean-author-clean.jpg",
      },
      {
        "@type": "Organization",
        name: "Andellian Press",
        email: "contact@andellian.com",
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand-link" href="#" aria-label="Andellian Press home">
            <BrandMark />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-small header-cta" href="#enter-andellian">
            Receive a Free Tale
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#">Home</a>
              {navItems.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-glow" aria-hidden="true" />
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A novel of The Scar of Andellian</p>
              <h1 id="hero-heading">
                Grace doesn’t come from faith in the Light.
                <span>It comes from the Light’s faith in you.</span>
              </h1>
              <div className="hero-lockup">
                <p className="book-title">Forge and Shadow</p>
                <p>
                  Book One of <em>The Scar of Andellian</em>
                </p>
                <p className="release-date">Coming November 17, 2026</p>
              </div>
              <div className="button-row">
                <a className="button" href="#forge-and-shadow">
                  Discover Forge and Shadow
                  <ArrowIcon />
                </a>
                <a className="button button-ghost" href="#enter-andellian">
                  Receive a Free Tale
                </a>
              </div>
            </div>

            <div className="cover-stage">
              <div className="cover-aura" aria-hidden="true" />
              <Image
                alt="Forge and Shadow by Alexander Dean book cover"
                className="book-cover"
                height={1586}
                priority
                sizes="(max-width: 767px) 72vw, 420px"
                src="/images/forge-and-shadow-approved-front-cover.png"
                width={992}
              />
              <span className="cover-rule" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section
          className="section book-intro"
          id="forge-and-shadow"
          aria-labelledby="book-heading"
        >
          <div className="site-shell narrow-copy">
            <p className="eyebrow">Book One of The Scar of Andellian</p>
            <h2 id="book-heading">Forge and Shadow</h2>
            <blockquote>
              They were days from all their dreams coming true when the dead
              came to River’s Crest.
            </blockquote>
            <div className="prose">
              <p>
                Arden has spent years building a future with Keera. Then an
                undead assault destroys their home and leaves each believing
                the other lost.
              </p>
              <p>
                As Arden discovers a dangerous Grace tied to the gods and their
                paladins, Keera begins uncovering powers—and truths about her
                past—that the Temple of Light would rather keep buried. Their
                paths will draw Light, Darkness, and Forge toward a reckoning
                that began long before either of them understood what they
                carried.
              </p>
            </div>
            <p className="book-meta">
              <em>Book One of The Scar of Andellian</em>
              <span>Coming November 17, 2026</span>
            </p>
            <a className="text-link" href="#hero-heading">
              Discover Forge and Shadow
              <ArrowIcon />
            </a>
          </div>
        </section>

        <figure className="landscape">
          <div className="site-shell">
            <div className="landscape-frame">
              <Image
                alt="River’s Crest before the dead came, with Artur’s Span crossing the river, Fenn fishing, Arden at the forge, and Nelly nearby"
                height={1024}
                sizes="(max-width: 1280px) 100vw, 1240px"
                src="/images/rivers-crest-before-the-dead-came.png"
                width={1536}
              />
            </div>
            <figcaption>River’s Crest, before the dead came.</figcaption>
          </div>
        </figure>

        <section
          className="section signup-section"
          id="enter-andellian"
          aria-labelledby="signup-heading"
        >
          <div className="site-shell signup-grid">
            <div>
              <p className="eyebrow">A Tale of the Stranger awaits</p>
              <h2 id="signup-heading">Enter Andellian</h2>
              <p className="signup-lede">
                Join Alexander Dean’s mailing list and receive{" "}
                <em>The Eighth Morning of Bellweather</em>, a free{" "}
                <em>Tale of the Stranger</em>.
              </p>
              <p>
                You’ll also receive new stories, lore, maps, excerpts, and
                behind-the-scenes news from <em>The Scar of Andellian</em>
                —including <em>The Troll of Tarken</em> four weeks after you
                join.
              </p>
            </div>

            <div className="signup-card">
              <NewsletterForm />
              <p className="small-print">
                No guarantee the stories are true. No endless tavern notices.
                Unsubscribe anytime.
              </p>
              <ol className="delivery-list" aria-label="Tale delivery sequence">
                <li>
                  <span>Immediately</span>
                  <em>The Eighth Morning of Bellweather</em>
                </li>
                <li>
                  <span>About four weeks later</span>
                  <em>The Troll of Tarken</em>
                </li>
                <li>
                  <span>Post-launch reward</span>
                  <em>The Lantern in Blackwater</em>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section
          className="section world-section"
          id="world"
          aria-labelledby="world-heading"
        >
          <div className="world-ornament" aria-hidden="true">
            <span />
          </div>
          <div className="site-shell world-inner">
            <p className="eyebrow">Old gods. Dangerous Graces. Forgotten oaths.</p>
            <h2 id="world-heading">The World of Andellian</h2>
            <p>
              Beyond River’s Crest lies a world shaped by old gods, dangerous
              Graces, forgotten oaths, and histories that change depending on
              who tells them.
            </p>
            <p>
              Explore its realms, faiths, creatures, maps, and Tales of the
              Stranger—without spoiling the journey ahead.
            </p>
            <a className="button button-teal" href="#enter-andellian">
              Explore Andellian
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section
          className="section story-section"
          id="behind-the-forge"
          aria-labelledby="forge-heading"
        >
          <div className="site-shell editorial-grid">
            <div className="portrait-frame portrait-forge">
              <Image
                alt="Alexander Dean standing in warm forge light"
                fill
                sizes="(max-width: 767px) 100vw, 45vw"
                src="/images/alexander-dean-forge-lit.jpg"
              />
            </div>
            <div className="editorial-copy">
              <p className="eyebrow">The story behind the story</p>
              <h2 id="forge-heading">Behind the Forge</h2>
              <p>
                The Scar of Andellian began as a world Alexander Dean carried
                in his imagination for fifteen years.
              </p>
              <p>
                When the time came to turn that world into finished novels, he
                chose a transparent human–AI collaboration—using ChatGPT as a
                developmental partner, continuity editor, brainstorming tool,
                and production assistant while retaining full creative
                authority over the story, characters, and final manuscript.
              </p>
              <p>
                The result is a fantasy series forged through imagination,
                revision, and an unusual kind of collaboration.
              </p>
              <p className="tagline">
                Fifteen years imagined. Forged through human–AI collaboration.
              </p>
              <a className="text-link" href="#about">
                See How It Was Forged
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="site-shell editorial-grid editorial-grid-reverse">
            <div className="portrait-frame portrait-clean">
              <Image
                alt="Clean portrait of author Alexander Dean"
                fill
                sizes="(max-width: 767px) 100vw, 38vw"
                src="/images/alexander-dean-author-clean.jpg"
              />
            </div>
            <div className="editorial-copy">
              <p className="eyebrow">Author of Forge and Shadow</p>
              <h2 id="about-heading">About Alexander Dean</h2>
              <p>
                Alexander Dean is a lifelong fantasy reader, habitual
                worldbuilder, and jack of several trades who finally decided
                that carrying an entire world in his head was becoming
                impractical.
              </p>
              <p>
                After fifteen years of imagining Andellian—its gods, histories,
                heroes, monsters, and increasingly questionable taverns—he
                began turning that world into <em>The Scar of Andellian</em>.
              </p>
              <p>
                <em>Forge and Shadow</em> is his debut novel.
              </p>
              <a className="button button-ghost" href="mailto:contact@andellian.com">
                Meet Alexander Dean
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div className="footer-brand">
            <BrandMark />
            <p>
              Fantasy, folklore, and stories from the world of{" "}
              <em>The Scar of Andellian</em>.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-newsletter">
            <h2>A free tale awaits</h2>
            <p>
              Receive <em>The Eighth Morning of Bellweather</em>, a free{" "}
              <em>Tale of the Stranger</em>.
            </p>
            <a className="button button-small" href="#enter-andellian">
              Receive the Free Tale
            </a>
          </div>
        </div>
        <div className="site-shell footer-base">
          <p>© 2026 Alexander Dean and Andellian Press. All rights reserved.</p>
          <a href="mailto:contact@andellian.com">contact@andellian.com</a>
          <span title="Privacy policy content is pending">Privacy Policy</span>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
