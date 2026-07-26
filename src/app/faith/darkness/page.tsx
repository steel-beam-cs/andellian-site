import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Hear the Other History | Faith and the Divine",
  description:
    "Hear the Temple of Darkness account of rest, mystery, mercy, and the history the Light records differently.",
  alternates: {
    canonical: "/faith/darkness",
  },
};

export default function TempleOfDarknessPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main className="faith-page faith-page-dark" id="main-content">
        <header className="faith-hero">
          <div className="site-shell faith-hero-grid">
            <div className="faith-hero-copy">
              <p className="eyebrow">Faith and the Divine</p>
              <h1>Hear the Other History</h1>
              <p className="faith-lede">
                The Temple of Darkness teaches that what is hidden is not
                therefore wicked, and what shines is not therefore good.
              </p>
            </div>
            <Image
              alt="Temple of Darkness emblem: a closed eye held within a dark silver crescent"
              className="faith-emblem"
              height={720}
              priority
              sizes="(max-width: 767px) 58vw, 360px"
              src="/images/temple-of-darkness-emblem.webp"
              width={720}
            />
          </div>
        </header>

        <article className="section faith-account">
          <div className="site-shell reading-column">
            <p className="faith-account-kicker">The Temple&apos;s Account</p>
            <h2>Darkness is not evil.</h2>
            <p>
              Nuatiri, Goddess of Darkness, governs what Light has too often
              taught mortals to fear: night, mystery, rest, grief, and the
              unknown passage beyond life. Darkness is the quiet that lets the
              exhausted sleep and the mercy that permits the dying to let go.
            </p>
            <p>
              Its Temple keeps the dead, tends the sick, guards knowledge others
              would destroy, and studies powers that cannot be made harmless by
              refusing to name them. Its healers have been welcomed during
              plague and driven out when the graves were filled. Persecution
              taught the Church endurance. It also taught resentment.
            </p>
            <p>
              The Temple remembers the old wars differently. It remembers
              Darkness answering suffering while Light demanded obedience. It
              remembers sacred work interrupted, servants struck down, relics
              taken, and the victors naming their violence salvation.
            </p>
            <p>
              Darkness does not claim that every hidden act is innocent. It
              claims that truth cannot belong only to those powerful enough to
              build monuments, keep archives, and call their enemies monsters.
              A history written in sunlight can still cast a shadow.
            </p>
          </div>
        </article>

        <aside className="section faith-between" aria-labelledby="between-heading">
          <div className="site-shell reading-column">
            <p className="eyebrow">Between the Accounts</p>
            <h2 id="between-heading">
              What has the other account chosen not to tell you?
            </h2>
            <Link className="button faith-switch-light" href="/faith/light">
              Enter the Light
              <ArrowIcon />
            </Link>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </>
  );
}
