import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/components/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand-link" href="/" aria-label="Andellian Press home">
          <Image
            alt="Andellian Press"
            className="brand-mark-image"
            height={36}
            priority
            src="/images/andellian-press-mark.png"
            width={36}
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small header-cta" href="/#enter-andellian">
          Receive a Free Tale
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {navItems.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
