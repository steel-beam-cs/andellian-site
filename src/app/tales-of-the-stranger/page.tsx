import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { NewsletterForm } from "@/components/newsletter-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Tales of the Stranger | Free Stories from Andellian",
  description:
    "Discover Tales of the Stranger and receive The Eighth Morning of Bellweather, a free story from the world of The Scar of Andellian.",
  alternates: {
    canonical: "/tales-of-the-stranger",
  },
  openGraph: {
    title: "Tales of the Stranger | Free Stories from Andellian",
    description:
      "Discover Tales of the Stranger and receive The Eighth Morning of Bellweather, a free story from the world of The Scar of Andellian.",
    url: "/tales-of-the-stranger",
  },
};

export default function TalesOfTheStrangerPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main className="tales-page" id="main-content">
        <section className="section tales-hero" aria-labelledby="tales-heading">
          <div className="site-shell reading-column">
            <p className="eyebrow">Stories from the world of The Scar of Andellian</p>
            <h1 id="tales-heading">Tales of the Stranger</h1>
            <p>
              The histories of Andellian are not always written by scholars.
            </p>
            <p>
              Some survive as tavern stories, courtroom accounts, roadside
              warnings, village legends, and reports gathered by a traveler
              known only as the Stranger. Their truth is rarely guaranteed.
            </p>
          </div>
        </section>

        <section
          className="section signup-section"
          id="free-tale"
          aria-labelledby="free-tale-heading"
        >
          <div className="site-shell signup-grid">
            <div>
              <p className="eyebrow">A free Tale of the Stranger</p>
              <h2 id="free-tale-heading">The Eighth Morning of Bellweather</h2>
              <p className="signup-lede">
                Join Andellian Readers and receive{" "}
                <em>The Eighth Morning of Bellweather</em>, a free Tale of the
                Stranger.
              </p>
              <p>
                You will also receive new stories, lore, maps, excerpts, and
                publication news from Alexander Dean and Andellian Press.
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
          className="section tales-about"
          aria-labelledby="tales-about-heading"
        >
          <div className="site-shell reading-column">
            <h2 id="tales-about-heading">Stories beyond the main series</h2>
            <p>
              Tales of the Stranger explore the people, creatures, arguments,
              disasters, and improbable events that exist beyond the central road
              of <em>The Scar of Andellian</em>.
            </p>
            <p>
              Some may illuminate the world. Some may contradict what respectable
              authorities claim to know. All are best approached with a reasonable
              distrust of the person telling them.
            </p>
          </div>
        </section>

        <section
          className="section signup-section tales-closing"
          aria-labelledby="tales-closing-heading"
        >
          <div className="site-shell reading-column book-cta-inner">
            <h2 id="tales-closing-heading">Prefer to begin with the novel?</h2>
            <Link className="text-link" href="/forge-and-shadow">
              Discover Forge and Shadow
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
