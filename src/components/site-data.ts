export type SiteLink = {
  label: string;
  href: string;
  fullDocument?: boolean;
};

export const FREE_TALE_HREF = "/tales-of-the-stranger#free-tale";
export const TALES_HREF = "/tales-of-the-stranger";

export const navItems: SiteLink[] = [
  { label: "Forge and Shadow", href: "/forge-and-shadow" },
  { label: "Explore Andellian", href: "/explore-andellian" },
  {
    label: "Tales of the Stranger",
    href: TALES_HREF,
    fullDocument: true,
  },
  { label: "About Alexander", href: "/about" },
];

export const footerLinks: SiteLink[] = [
  { label: "Forge and Shadow", href: "/forge-and-shadow" },
  { label: "The World of Andellian", href: "/explore-andellian" },
  {
    label: "Tales of the Stranger",
    href: TALES_HREF,
    fullDocument: true,
  },
  { label: "About Alexander Dean", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
];
