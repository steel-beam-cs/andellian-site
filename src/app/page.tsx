import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { NewsletterForm } from "@/components/newsletter-form";
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
                <Link className="button button-ghost" href="#enter-andellian">
                  Receive a Free Tale
                </Link>
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
                Unsubscribe anytime. By subscribing, you agree to receive emails
                from Alexander Dean and Andellian Press. See our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
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
            <Link className="button button-teal" href="#enter-andellian">
              Explore Andellian
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section
          className="section story-section"
          id="behind-the-forge"
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
              <Link className="text-link" href="#about">
                See How It Was Forged
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="site-shell hammer-feature">
            <div className="hammer-grid">
              <div className="hammer-image-frame">
                <Image
                  alt="The Hammer of Continuity, a humorous fantasy artifact surrounded by editorial notes, parchment, and glowing threads of revision"
                  className="hammer-image"
                  height={1024}
                  sizes="(max-width: 767px) 100vw, 360px"
                  src="/images/hammer-of-continuity.png"
                  width={819}
                />
              </div>
              <div className="hammer-copy">
                <p className="eyebrow">A necessary tool of the trade</p>
                <h3>The Hammer of Continuity</h3>
                <p>
                  Every long fantasy project eventually requires a tool for
                  settling questions of memory, cause, consequence, and whether
                  someone was supposed to have lost that locket three chapters
                  ago.
                </p>
                <p>
                  Ours became the Hammer of Continuity—a joking name for the
                  stubborn editorial principle that what is established must be
                  honored, what changes must earn it, and what is promised must
                  eventually be paid.
                </p>
                <p>
                  It began as a bit of humor, then became a genuine working
                  method. When a timeline bent, a motivation drifted, or a
                  callback threatened to go missing, the answer was simple:
                  bring down the Hammer.
                </p>
                <p>
                  In practice, that meant tracing promises, checking
                  consequences, guarding payoff, and making sure the story
                  remembered what it had already said.
                </p>
                <p className="hammer-caption">
                  Forged in the fire of first drafts. Tempered by revision.
                  Blessed by deadlines.
                  <span>Wield with care. It remembers everything.</span>
                </p>
                <p className="hammer-callout">
                  “When the tool disagreed, the canon usually won.”
                </p>
              </div>
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
              <Link className="button button-ghost" href="mailto:contact@andellian.com">
                Meet Alexander Dean
                <ArrowIcon />
              </Link>
            </div>

            <div className="penelope-feature">
              <p className="eyebrow">The trusty steed</p>
              <h3>Princess Penelope Pennyworth the Third</h3>
              <div className="penelope-grid">
                <div className="penelope-image-frame">
                  <Image
                    alt="Princess Penelope Pennyworth the Third, Alexander Dean’s Yorkshire terrier, smiling beside her toy"
                    className="penelope-image"
                    height={800}
                    sizes="(max-width: 767px) 100vw, 360px"
                    src="/images/princess-penelope-feature.jpg"
                    width={640}
                  />
                </div>
                <div className="penelope-copy">
                  <blockquote>Every author needs a trusty steed.</blockquote>
                  <p>
                    Alexander’s is Princess Penelope Pennyworth the Third—eight
                    pounds of Yorkshire terror, loyal companion, household
                    supervisor, and occasional guardian of the forge.
                  </p>
                </div>
              </div>
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
