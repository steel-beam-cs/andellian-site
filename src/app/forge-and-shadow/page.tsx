import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Forge and Shadow | The Scar of Andellian",
  description:
    "Discover Forge and Shadow, Book One of The Scar of Andellian by Alexander Dean, and read a spoiler-safe excerpt from Chapter Fifteen.",
  alternates: {
    canonical: "/forge-and-shadow",
  },
  openGraph: {
    title: "Forge and Shadow | The Scar of Andellian",
    description:
      "Discover Forge and Shadow, Book One of The Scar of Andellian by Alexander Dean, and read a spoiler-safe excerpt from Chapter Fifteen.",
    url: "/forge-and-shadow",
    images: [
      {
        url: "/images/forge-and-shadow-approved-front-cover.png",
        alt: "Forge and Shadow by Alexander Dean book cover",
      },
    ],
  },
};

const bookStructuredData = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Forge and Shadow",
  author: {
    "@type": "Person",
    name: "Alexander Dean",
  },
  publisher: {
    "@type": "Organization",
    name: "Andellian Press",
  },
  datePublished: "2026-11-17",
  isbn: "979-8-9971642-0-1",
  isPartOf: "The Scar of Andellian",
  url: "https://andellian.com/forge-and-shadow",
  image: "https://andellian.com/images/forge-and-shadow-approved-front-cover.png",
};

export default function ForgeAndShadowPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="book-hero section" aria-labelledby="book-page-heading">
          <div className="site-shell book-hero-grid">
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

            <div className="book-hero-copy">
              <p className="eyebrow">Book One of <em>The Scar of Andellian</em></p>
              <h1 id="book-page-heading">Forge and Shadow</h1>
              <blockquote className="book-hero-quote">
                Grace doesn’t come from faith in the Light. It comes from the
                Light’s faith in you.
              </blockquote>
              <p className="release-date">Coming November 17, 2026</p>
              <div className="button-row">
                <a className="button" href="#chapter-fifteen">
                  Read the Chapter Fifteen Excerpt
                  <ArrowIcon />
                </a>
                <a className="button button-ghost" href="/tales-of-the-stranger#free-tale">
                  Receive a Free Tale
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section book-intro" aria-labelledby="blurb-heading">
          <div className="site-shell reading-column">
            <h2 id="blurb-heading" className="visually-hidden">
              Book introduction
            </h2>
            <blockquote>
              Every light casts a shadow.
              <br />
              <br />
              They had built a nearly perfect life together. Then the dead came to
              River’s Crest.
            </blockquote>
            <div className="prose prose-single">
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
          </div>
        </section>

        <section
          className="section craft-vignette"
          aria-labelledby="chapter-five-heading"
        >
          <div className="site-shell craft-grid">
            <div className="craft-image-frame">
              <Image
                alt="Arden’s awkward dragon engraving on a steel plate, looking suspiciously like a rabbit"
                className="craft-image"
                height={900}
                sizes="(max-width: 767px) 100vw, 480px"
                src="/images/arden-awkward-dragon-engraving.jpg"
                width={1200}
              />
            </div>
            <div className="craft-copy">
              <p className="eyebrow">From Chapter Five</p>
              <h2 id="chapter-five-heading">A dragon, according to Arden</h2>
              <blockquote className="dialogue-callout">
                <p>“What are you working on?”</p>
                <p>“A dragon.”</p>
                <p>“That is an ugly rabbit.”</p>
                <p>“It is not a rabbit.”</p>
                <p>Michel pointed at the metal. “Those are clearly ears.”</p>
                <p>“They are feet.”</p>
                <p>“Have you ever seen a dragon?”</p>
                <p>“Have you?”</p>
                <p>“No, but I have seen rabbits.”</p>
              </blockquote>
              <p className="craft-caption">
                Arden is considerably better with steel than he is with drawing.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section excerpt-section"
          id="chapter-fifteen"
          aria-labelledby="chapter-fifteen-heading"
        >
          <div className="site-shell">
            <p className="eyebrow">A glimpse from the novel</p>
            <h2 id="chapter-fifteen-heading">From Chapter Fifteen</h2>
            <p className="excerpt-intro">
              On a dark road far from home, Arden discovers that Andellian still
              holds room for wonder.
            </p>

            <figure className="excerpt-image-frame">
              <Image
                alt="Two small fairies dancing across a moonlit pond while Arden and Magnus watch from the trees"
                className="excerpt-image"
                height={900}
                sizes="(max-width: 1280px) 100vw, 900px"
                src="/images/chapter-fifteen-fairies.jpg"
                width={1400}
              />
            </figure>

            <div className="reading-column excerpt-prose">
              <p>Sometime before dawn, bells woke him.</p>
              <p>
                The sound was soft and quick, like the chime above the door of
                Artur’s Rest caught in a playful wind. Arden sat up. Magnus slept
                on the opposite side of the fire, snoring beneath his cloak.
              </p>
              <p>The bells came again from deeper among the trees.</p>
              <p>
                Arden pulled on his boots and followed them to a small pond.
                Thorn bushes crowded its bank. Beyond them, Caelumara cast a
                pale golden reflection across the still water.
              </p>
              <p>Two lights danced above the pond.</p>
              <p>
                They were shaped like tiny people, no more than nine inches
                tall, each surrounded by a dim gold radiance. Translucent wings
                folded along their backs while they spun and stepped upon the
                air without disturbing the water. Every movement released
                another peal of tiny bells.
              </p>
              <p>Arden forgot his fear for one breath.</p>
              <p>
                A branch shifted behind him. Magnus eased through the thorns and
                crouched at his side, watching with the same quiet wonder.
              </p>
              <p>
                One of the creatures noticed them. She hovered above the pond
                in a shimmering dress, covered her mouth as she laughed, and
                waved. Then she flew close enough to land upon Magnus’s shoulder.
              </p>
              <p>
                Her tiny fingers slipped toward the pouch at his belt.
              </p>
              <p>Magnus caught her wrist without looking. “Lililil.”</p>
              <p>
                The fairy stuck out her tongue, twisted free, and flipped
                backward into the air.
              </p>
              <p>Arden looked at him. “You know her?”</p>
              <p>“I have been robbed by professionals.”</p>
              <p>
                Lililil laughed hard enough to lose several inches of height
                before returning to her companion.
              </p>
              <p>“What are they?” Arden whispered.</p>
              <p>Magnus looked at him. “You have never seen a fairy?”</p>
              <p>Arden gave him a flat stare.</p>
              <p>
                “Right. River’s Crest.” Magnus turned back to the pond. “The
                more you open yourself to magic, the more of it you will notice.
                They were always here, boy. You simply could not see them.”
              </p>
              <p>“They are beautiful.”</p>
              <p>
                “They are thieving little menaces.” Magnus lowered his voice
                further. “Ever set down a hammer and find it somewhere
                impossible?”
              </p>
              <p>“Frequently.”</p>
              <p>“Fairies.”</p>
              <p>“I assumed I was forgetful.”</p>
              <p>“That is what they want.”</p>
              <p>
                The dancers circled each other one final time, then waved and
                vanished among the trees. Their bells faded until the pond held
                only moonlight.
              </p>
              <p>
                “Come on, boy,” Magnus said. “We have a long road tomorrow.”
              </p>
              <p>
                Arden returned to the clearing. Sleep did not come easily. He
                thought of the home he and Keera had planned, the children they
                had imagined, and the fair-haired boy who sometimes appeared so
                clearly in those dreams that Arden almost believed he had met
                him.
              </p>
              <p>He reached for Keera one last time.</p>
              <p>Nothing.</p>
            </div>
          </div>
        </section>

        <section
          className="section signup-section book-cta"
          aria-labelledby="book-cta-heading"
        >
          <div className="site-shell reading-column book-cta-inner">
            <h2 id="book-cta-heading">Enter Andellian before the dead arrive</h2>
            <p>
              Receive <em>The Eighth Morning of Bellweather</em>, a free{" "}
              <em>Tale of the Stranger</em>, and occasional stories, lore,
              excerpts, maps, and publication news.
            </p>
            <div className="button-row">
              <a className="button" href="/tales-of-the-stranger#free-tale">
                Receive the Free Tale
                <ArrowIcon />
              </a>
            </div>
            <p className="book-cta-return">
              <Link className="text-link" href="/">
                Return to Andellian
                <ArrowIcon />
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStructuredData) }}
      />
    </>
  );
}
