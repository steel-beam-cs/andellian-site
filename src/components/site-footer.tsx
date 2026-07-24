import Image from "next/image";
import Link from "next/link";
import { FREE_TALE_HREF, footerLinks } from "@/components/site-data";

function FooterAnchor({
  fullDocument,
  href,
  children,
}: {
  fullDocument?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  if (fullDocument) {
    return <a href={href}>{children}</a>;
  }

  return <Link href={href}>{children}</Link>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Image
            alt=""
            className="footer-logo"
            height={120}
            src="/images/andellian-press-logo-full.jpg"
            width={280}
          />
          <p>
            Fantasy, folklore, and stories from the world of{" "}
            <em>The Scar of Andellian</em>.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <nav aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <FooterAnchor
                fullDocument={item.fullDocument}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </FooterAnchor>
            ))}
          </nav>
        </div>
        <div className="footer-newsletter">
          <h2>A free tale awaits</h2>
          <p>
            Receive <em>The Eighth Morning of Bellweather</em>, a free{" "}
            <em>Tale of the Stranger</em>.
          </p>
          <a className="button button-small" href={FREE_TALE_HREF}>
            Receive the Free Tale
          </a>
        </div>
      </div>
      <div className="site-shell footer-base">
        <p>© 2026 Alexander Dean and Andellian Press. All rights reserved.</p>
        <a href="mailto:contact@andellian.com">contact@andellian.com</a>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
