import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Andellian | Forge and Shadow by Alexander Dean",
  description:
    "Enter the world of Andellian. Discover Forge and Shadow, receive a free Tale of the Stranger, and explore fantasy lore, maps, and the story behind the human–AI collaboration.",
  applicationName: "Andellian",
  authors: [{ name: "Alexander Dean" }],
  creator: "Alexander Dean",
  publisher: "Andellian Press",
  openGraph: {
    type: "website",
    title: "Andellian | Forge and Shadow by Alexander Dean",
    description:
      "Discover Forge and Shadow and enter a world shaped by old gods, dangerous Graces, and forgotten oaths.",
    siteName: "Andellian",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andellian | Forge and Shadow by Alexander Dean",
    description:
      "Discover Forge and Shadow and enter the world of Andellian.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
