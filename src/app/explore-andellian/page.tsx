import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TALES_HREF } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Explore Andellian | The World of Forge and Shadow",
  description:
    "Begin at River’s Crest and explore the spoiler-safe world of Andellian—its roads, realms, gods, Graces, creatures, histories, and rumors.",
  alternates: {
    canonical: "/explore-andellian",
  },
  openGraph: {
    title: "Explore Andellian | The World of Forge and Shadow",
    description:
      "Begin at River’s Crest and explore the spoiler-safe world of Andellian—its roads, realms, gods, Graces, creatures, histories, and rumors.",
    url: "/explore-andellian",
    images: ["/images/rivers-crest-before-the-dead-came.png"],
  },
};

const beyondBlocks = [
  {
    title: "Realms and Roads",
    copy: "Kingdoms, villages, mountain crossings, old ruins, and the long distances between safety. Andellian is discovered by traveling through it, not by reading a perfect map.",
  },
  {
    title: "Gods and Graces",
    copy: "Faith can grant power, but Grace is neither simple reward nor proof of goodness. The gods act through limits, bargains, institutions, and people who rarely understand the whole design.",
  },
  {
    title: "Creatures, Tales, and Rumors",
    copy: "Some monsters are known. Others survive only in tavern accounts, caravan gossip, temple warnings, and Tales of the Stranger whose accuracy remains open to argument.",
  },
];

export default function ExploreAndellianPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main className="explore-page" id="main-content">
        <section className="section explore-hero" aria-labelledby="explore-heading">
          <div className="site-shell reading-column">
            <p className="eyebrow">A spoiler-safe path into the world</p>
            <h1 id="explore-heading">Explore Andellian</h1>
            <p>
              Andellian is a world of old gods, dangerous Graces, broken
              histories, working roads, stubborn people, and truths that depend
              greatly upon who survived to record them.
            </p>
            <p>
              Begin at River&apos;s Crest, where <em>Forge and Shadow</em> opens,
              then look beyond the village toward the wider world waiting on the
              road ahead.
            </p>
          </div>
        </section>

        <section
          className="section explore-rivers-crest"
          aria-labelledby="rivers-crest-heading"
        >
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
              <figcaption>River&apos;s Crest, before the dead came.</figcaption>
            </div>
          </figure>
          <div className="site-shell reading-column">
            <h2 id="rivers-crest-heading">Begin at River&apos;s Crest</h2>
            <p>
              A forge, a tavern, a bridge, a river, and the ordinary lives that
              existed before the dead arrived.
            </p>
            <p>
              River&apos;s Crest is only one small place in Andellian, but it is
              where the first road begins.
            </p>
          </div>
        </section>

        <section
          className="section explore-beyond"
          aria-labelledby="beyond-heading"
        >
          <div className="site-shell">
            <h2 id="beyond-heading">What Lies Beyond the Road</h2>
            <div className="explore-block-grid">
              {beyondBlocks.map((block) => (
                <div className="explore-block" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="faith-gateway"
          aria-labelledby="faith-gateway-heading"
        >
          <div className="faith-gateway-mobile-emblems" aria-hidden="true">
            <Image
              alt=""
              className="faith-gateway-mobile-emblem faith-gateway-mobile-emblem-light"
              height={720}
              sizes="34vw"
              src="/images/temple-of-light-emblem.webp"
              width={720}
            />
            <Image
              alt=""
              className="faith-gateway-mobile-emblem faith-gateway-mobile-emblem-dark"
              height={720}
              sizes="34vw"
              src="/images/temple-of-darkness-emblem.webp"
              width={720}
            />
          </div>
          <div className="site-shell faith-gateway-content">
            <p className="eyebrow">Faith and the Divine</p>
            <h2 id="faith-gateway-heading">
              <span>Two Histories.</span>
              <span>One World.</span>
            </h2>
            <p className="faith-gateway-intro">
              The Temple of Light teaches that truth must be brought into the
              open before it can be trusted.
            </p>
            <p>
              The Temple of Darkness preserves another teaching: that some
              truths cannot be understood through exposure alone.
            </p>
            <div className="faith-gateway-cadence">
              <p>
                One looks outward.
                <br />
                One looks within.
              </p>
              <p>
                Both teach history.
                <br />
                Both teach theology.
              </p>
            </div>
            <p>
              Both claim to preserve what the other has forgotten—or chosen to
              conceal.
            </p>
            <p>
              These are mortal accounts, preserved by mortal institutions.
              <br />
              Whether the gods themselves would recognize every word is a
              question no priest has answered.
            </p>
            <p className="faith-gateway-invitation">
              Read both accounts. Decide what you believe.
            </p>
            <div className="faith-gateway-actions">
              <Link className="faith-choice faith-choice-light" href="/faith/light">
                <strong>
                  Enter the Light
                  <ArrowIcon />
                </strong>
              </Link>
              <Link
                className="faith-choice faith-choice-dark"
                href="/faith/darkness"
              >
                <strong>
                  Hear the Other History
                  <ArrowIcon />
                </strong>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section explore-closing"
          aria-labelledby="explore-closing-heading"
        >
          <div className="site-shell reading-column book-cta-inner">
            <h2 id="explore-closing-heading">Choose the next road</h2>
            <div className="button-row">
              <Link className="button" href="/forge-and-shadow">
                Discover Forge and Shadow
                <ArrowIcon />
              </Link>
              <a className="button button-ghost" href={TALES_HREF}>
                Read the Tales
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
