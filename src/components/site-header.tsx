import Image from "next/image";
import Link from "next/link";
import { FREE_TALE_HREF, navItems } from "@/components/site-data";

function NavAnchor({
  className,
  fullDocument,
  href,
  children,
}: {
  className?: string;
  fullDocument?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  if (fullDocument) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

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
            <NavAnchor
              fullDocument={item.fullDocument}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </NavAnchor>
          ))}
        </nav>

        <a className="button button-small header-cta" href={FREE_TALE_HREF}>
          Receive a Free Tale
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {navItems.map((item) => (
              <NavAnchor
                fullDocument={item.fullDocument}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </NavAnchor>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
