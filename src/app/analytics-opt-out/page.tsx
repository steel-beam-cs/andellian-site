import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AnalyticsOptOutControl } from "./analytics-opt-out-control";

export const metadata: Metadata = {
  title: "Analytics Opt-Out | Andellian",
  description: "Private browser controls for Andellian website analytics.",
  alternates: {
    canonical: "/analytics-opt-out",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AnalyticsOptOutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="section" aria-labelledby="analytics-opt-out-heading">
          <div className="site-shell narrow-copy">
            <p className="eyebrow">Private browser setting</p>
            <h1
              className="m-0 max-w-4xl font-serif text-5xl leading-none tracking-tight md:text-7xl"
              id="analytics-opt-out-heading"
            >
              Exclude this browser from analytics
            </h1>
            <div className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d2c7]">
              <p>
                Opening this page automatically excludes future visits from this
                browser profile from Vercel Web Analytics.
              </p>
              <p className="mt-4">
                Existing analytics records are unchanged. Use the controls below
                to confirm the setting or re-enable analytics.
              </p>
            </div>
            <AnalyticsOptOutControl />
            <p className="mt-8">
              <Link className="text-link" href="/">
                Return to Andellian
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
