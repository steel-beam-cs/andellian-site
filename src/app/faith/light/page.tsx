import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Enter the Light | Faith and the Divine",
  description:
    "Enter the Temple of Light and hear its account of faith, order, sacrifice, and the history of Andellian.",
  alternates: {
    canonical: "/faith/light",
  },
};

export default function TempleOfLightPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main className="faith-page faith-page-light" id="main-content">
        <header className="faith-hero">
          <div className="site-shell faith-hero-grid">
            <div className="faith-hero-copy">
              <p className="eyebrow">Faith and the Divine</p>
              <h1>Enter the Light</h1>
              <p className="faith-lede">
                The Temple of Light teaches that civilization endures because
                someone is willing to stand between order and ruin.
              </p>
            </div>
            <Image
              alt="Temple of Light emblem: a radiant gold sunburst"
              className="faith-emblem"
              height={720}
              priority
              sizes="(max-width: 767px) 58vw, 360px"
              src="/images/temple-of-light-emblem.webp"
              width={720}
            />
          </div>
        </header>

        <article className="section faith-account">
          <div className="site-shell reading-column">
            <p className="faith-account-kicker">The Temple&apos;s Account</p>
            <h2>Light is duty made visible.</h2>
            <p>
              Alistair, God of Light, gave mortals more than illumination. He
              gave them a standard by which the strong might be judged: law
              above appetite, service above ambition, and sacrifice in defense
              of those who cannot defend themselves.
            </p>
            <p>
              From that charge rose the Temple and its orders. Judges carry the
              red hammer of Justice. Wardens bear the silver lantern of Truth.
              Practitioners keep the gold sunburst of Faith. Their authorities
              are separate so that no single hand may claim judgment,
              investigation, and divine certainty at once.
            </p>
            <p>
              The Temple remembers the old wars as the cost of resisting powers
              that treated mortal lives as fuel. It remembers the Sundering as
              a warning: compassion without restraint can become catastrophe,
              and forbidden power does not cease to be dangerous because its
              wielder believes the purpose noble.
            </p>
            <p>
              Light does not promise that every servant will be righteous. It
              asks that wrongdoing be brought into view, named, and answered.
              Institutions may fail their vows. The vows remain.
            </p>
          </div>
        </article>

        <aside className="section faith-between" aria-labelledby="between-heading">
          <div className="site-shell reading-column">
            <p className="eyebrow">Between the Accounts</p>
            <h2 id="between-heading">
              What has the other account chosen not to tell you?
            </h2>
            <Link className="button faith-switch-dark" href="/faith/darkness">
              Hear the Other History
              <ArrowIcon />
            </Link>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </>
  );
}
