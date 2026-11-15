import "#styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "#components/footer";
import { Header } from "#components/header";
import { siteBaseUrl } from "#lib/metadata";

export const metadata: Metadata = {
  title: {
    template: "%s | Fullchee Zhang",
    default: "Fullstack Developer | Fullchee Zhang",
  },
  description:
    "Fullchee Zhang is a full-stack developer who makes teams faster with docs, tooling and teaching.",
  metadataBase: new URL(siteBaseUrl),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/favicon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/favicon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/favicon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/favicon/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/favicon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/favicon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicon/apple-touch-icon-152x152.png"
        />
        <link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />
      </head>
      <body className="bg-white">
        <Header />
        <div className="mx-auto min-h-screen max-w-6xl px-6 pt-8 md:px-24">
          <main>{children}</main>
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
