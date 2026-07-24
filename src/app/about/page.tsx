import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OriginStories } from "./origin-stories";

export const metadata: Metadata = {
  title: "About Alexander Dean | Author of Forge and Shadow",
  description:
    "Meet Alexander Dean, author of Forge and Shadow, and discover the fifteen-year road to Andellian, the stories that started it, and the life behind the forge.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    title: "About Alexander Dean | Author of Forge and Shadow",
    description:
      "The story of how a lifelong fantasy reader, truck driver, tower climber, entrepreneur, and habitual worldbuilder became the author of Forge and Shadow.",
    url: "/about",
    images: ["/images/alexander-dean-author-clean.jpg"],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexander Dean",
  jobTitle: "Author",
  url: "https://andellian.com/about",
  image: "https://andellian.com/images/alexander-dean-author-clean.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Andellian Press",
  },
  knowsAbout: [
    "fantasy fiction",
    "worldbuilding",
    "The Scar of Andellian",
  ],
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main className="about-page" id="main-content">
        <section className="about-hero section" aria-labelledby="about-page-heading">
          <div className="site-shell about-hero-grid">
            <div className="about-portrait-frame">
              <Image
                alt="Clean professional portrait of fantasy author Alexander Dean"
                className="about-portrait"
                height={1200}
                priority
                sizes="(max-width: 767px) 88vw, 420px"
                src="/images/alexander-dean-author-clean.jpg"
                width={960}
              />
            </div>
            <div className="about-hero-copy">
              <p className="eyebrow">
                Author of <em>Forge and Shadow</em>
              </p>
              <h1 id="about-page-heading">About Alexander Dean</h1>
              <div className="about-reading-copy">
                <p>
                  Alexander Dean is a lifelong fantasy reader, habitual
                  worldbuilder, and jack of all trades who finally decided that
                  carrying an entire world in his head was becoming impractical.
                </p>
                <p>
                  After fifteen years of imagining Andellian—its gods, histories,
                  heroes, monsters, and increasingly questionable taverns—he
                  began turning that world into <em>The Scar of Andellian</em>.
                </p>
                <p>
                  <em>Forge and Shadow</em> is his debut novel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-narrative-section section"
          aria-labelledby="fifteen-years-heading"
        >
          <div className="site-shell about-reading-copy">
            <p className="eyebrow">The long road to Andellian</p>
            <h2 id="fifteen-years-heading">Fifteen Years Before the Forge</h2>
            <p>
              Before <em>Forge and Shadow</em> became a finished novel,
              Andellian had already lived in Alexander&apos;s imagination for
              fifteen years.
            </p>
            <p>
              The first complete manuscript ran roughly 114,000 words. Finishing
              it was only the beginning. The story had to be restructured, cut,
              rebuilt, and tested until the world stopped behaving like a
              collection of histories and began moving like a novel.
            </p>
            <p>
              The process became an education in the difference between imagining
              a world and telling a story inside it: what to reveal, what to
              withhold, where a consequence belongs, and when a beloved piece of
              lore is standing in the way of the book.
            </p>
            <p>
              Not every road was mapped. Some corners of Andellian were
              intentionally left undiscovered so the later books could still
              surprise the person writing them.
            </p>
            <blockquote className="about-pull-quote">
              The world came first. Learning how to turn it into a novel took
              considerably longer.
            </blockquote>
          </div>
        </section>

        <section
          className="about-narrative-section section origin-stories-section"
          aria-labelledby="posts-heading"
        >
          <div className="site-shell">
            <p className="eyebrow">Before the first novel</p>
            <h2 id="posts-heading">The Posts That Started It</h2>
            <div className="about-reading-copy">
              <p>
                Before Andellian reached the page, three Facebook posts convinced
                Alexander that people might actually enjoy reading what he wrote.
              </p>
              <p>Friends responded with a simple suggestion:</p>
              <blockquote className="about-inline-quote">
                You should be an author.
              </blockquote>
              <p>
                The posts were small, ridiculous chronicles of ordinary
                life—household quarantine, a Thanksgiving turkey hunt, and one
                terrifying failure of Bluetooth technology. They already
                contained the humor, escalation, and narrative instincts that
                would later find their way into Andellian.
              </p>
              <p className="origin-stories-note">
                Originally shared as Facebook posts and lightly edited for
                spelling, punctuation, and web formatting. The questionable
                judgment remains original.
              </p>
            </div>
            <OriginStories />
          </div>
        </section>

        <section
          className="about-narrative-section section"
          aria-labelledby="trades-heading"
        >
          <div className="site-shell about-reading-copy">
            <p className="eyebrow">A life with several chapters</p>
            <h2 id="trades-heading">A Jack of Several Trades</h2>
            <ul className="trade-list">
              <li>Entrepreneur.</li>
              <li>Over-the-road truck driver.</li>
              <li>Construction worker.</li>
              <li>Cell-tower climber.</li>
            </ul>
            <p>
              Each job offered a different view of people, danger, exhaustion,
              machinery, weather, and the strange things human beings will say
              when left together for too many hours.
            </p>
            <p>
              That experience now finds its way into Andellian&apos;s roads,
              workshops, camps, arguments, and working people.
            </p>
          </div>
        </section>

        <section
          className="about-narrative-section section influence-section"
          aria-labelledby="books-heading"
        >
          <div className="site-shell about-reading-copy">
            <p className="eyebrow">Stories, consequences, and laughter</p>
            <h2 id="books-heading">The Books That Shaped the Author</h2>
            <p>
              Alexander grew up reading fantasy by Robert Jordan, Brandon
              Sanderson, Jim Butcher, and Kevin Hearne. He counts Matt
              Dinniman&apos;s <em>Dungeon Crawler Carl</em> among his favorite
              examples of how humor can sharpen rather than weaken a story.
            </p>
            <p>
              He believes fantasy has room for grave consequences, flawed
              heroes, dangerous gods—and considerably more laughter.
            </p>
          </div>
        </section>

        <section
          className="about-narrative-section section about-penelope"
          aria-labelledby="penelope-heading"
        >
          <div className="site-shell about-penelope-grid">
            <div className="about-penelope-image-frame">
              <Image
                alt="Princess Penelope Pennyworth the Third resting beside Alexander Dean"
                className="about-penelope-image"
                height={800}
                sizes="(max-width: 767px) 100vw, 360px"
                src="/images/princess-penelope-resting.jpg"
                width={640}
              />
            </div>
            <div className="about-reading-copy">
              <p className="eyebrow">The real authority behind Andellian Press</p>
              <h2 id="penelope-heading">Meet the Trusty Steed</h2>
              <p>
                Alexander lives in Rockwall, Texas, with his loving wife and
                Princess Penelope Pennyworth the Third—eight pounds of Yorkshire
                terror and the only member of Andellian Press whose editorial
                decisions cannot be appealed.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-narrative-section section about-collaboration"
          id="collaboration"
          aria-labelledby="collaboration-heading"
        >
          <div className="site-shell about-collaboration-grid">
            <div className="about-reading-copy">
              <p className="eyebrow">An unusual collaboration</p>
              <h2 id="collaboration-heading">Behind the Forge</h2>
              <p>
                <em>Forge and Shadow</em> was developed through a transparent
                human–AI collaboration. Alexander remained the author and final
                creative authority, while ChatGPT helped organize, challenge,
                revise, and preserve the growing continuity of Andellian.
              </p>
            </div>
            <div className="about-forge-portrait-frame">
              <Image
                alt="Alexander Dean standing in warm forge light"
                className="about-forge-portrait"
                height={1200}
                sizes="(max-width: 767px) 100vw, 380px"
                src="/images/alexander-dean-forge-lit.jpg"
                width={960}
              />
            </div>
          </div>
        </section>

        <section
          className="section signup-section about-closing-cta"
          aria-labelledby="about-cta-heading"
        >
          <div className="site-shell reading-column book-cta-inner">
            <p className="eyebrow">Enter Andellian</p>
            <h2 id="about-cta-heading">The road begins with a free tale</h2>
            <p>
              Receive <em>The Eighth Morning of Bellweather</em>, a free{" "}
              <em>Tale of the Stranger</em>, along with new stories, lore, maps,
              excerpts, and publication news.
            </p>
            <div className="button-row">
              <a className="button" href="/tales-of-the-stranger#free-tale">
                Receive the Free Tale
                <ArrowIcon />
              </a>
            </div>
            <p className="book-cta-return">
              <Link className="text-link" href="/forge-and-shadow">
                Discover Forge and Shadow
                <ArrowIcon />
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
    </>
  );
}
