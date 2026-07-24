import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { FREE_TALE_HREF, TALES_HREF } from "@/components/site-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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

      <SiteHeader />

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
                <Link className="button" href="/forge-and-shadow">
                  Discover Forge and Shadow
                  <ArrowIcon />
                </Link>
                <a className="button button-ghost" href={FREE_TALE_HREF}>
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
            <Link className="text-link" href="/forge-and-shadow">
              Discover Forge and Shadow
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section
          className="section world-section"
          aria-labelledby="world-heading"
        >
          <div className="world-ornament" aria-hidden="true">
            <span />
          </div>
          <div className="site-shell world-inner">
            <p className="eyebrow">Old gods. Dangerous Graces. Forgotten oaths.</p>
            <h2 id="world-heading">Explore Andellian</h2>
            <p>
              Beyond River’s Crest lies a world shaped by old gods, dangerous
              Graces, forgotten oaths, and histories that change depending on
              who tells them.
            </p>
            <p>
              Begin with a spoiler-safe look at its roads, realms, creatures,
              rumors, and the places waiting beyond the first novel.
            </p>
            <Link className="button button-teal" href="/explore-andellian">
              Explore Andellian
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section
          className="section tales-preview-section"
          aria-labelledby="tales-preview-heading"
        >
          <div className="site-shell reading-column">
            <p className="eyebrow">Stories from beyond the main road</p>
            <h2 id="tales-preview-heading">Tales of the Stranger</h2>
            <p>
              Not every story belongs to the history books.
            </p>
            <p>
              Discover standalone tales, doubtful accounts, old rumors, and small
              corners of Andellian—including <em>The Eighth Morning of Bellweather</em>,
              available free to new readers.
            </p>
            <div className="button-row">
              <a className="button" href={FREE_TALE_HREF}>
                Receive the Free Tale
                <ArrowIcon />
              </a>
              <a className="text-link" href={TALES_HREF}>
                Explore the Tales
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section story-section"
          aria-labelledby="forge-heading"
        >
          <div className="site-shell editorial-grid">
            <div className="forge-illustration-frame">
              <Image
                alt="A quiet hand-drawn forge with an anvil, resting hammer, workbench, and hanging tools"
                className="forge-illustration"
                height={900}
                sizes="(max-width: 767px) 100vw, 45vw"
                src="/images/behind-the-forge-anvil.jpg"
                width={1200}
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
              <Link className="text-link" href="/behind-the-forge">
                Go Behind the Forge
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="site-shell about-inner">
            <div className="editorial-copy about-copy">
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
              <p>
                Alexander lives in Rockwall, Texas, with his loving wife and his
                trusty steed, Princess Penelope Pennyworth the Third—eight
                pounds of Yorkshire terror.
              </p>
              <Link className="button button-ghost" href="/about">
                Meet Alexander Dean
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
