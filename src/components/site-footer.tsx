import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/components/site-data";

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
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-newsletter">
          <h2>A free tale awaits</h2>
          <p>
            Receive <em>The Eighth Morning of Bellweather</em>, a free{" "}
            <em>Tale of the Stranger</em>.
          </p>
          <Link className="button button-small" href="/#enter-andellian">
            Receive the Free Tale
          </Link>
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
