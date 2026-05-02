import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";

const siteUrl = new URL("https://nycolazs.vercel.app");

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Nycolas Rocha | Fullstack Software Developer",
  description:
    "Portfolio profissional de Nycolas Rocha, desenvolvedor fullstack especializado em Node.js, TypeScript, Java, React e Next.js.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nycolas Rocha | Fullstack Software Developer",
    description:
      "Portfolio profissional de Nycolas Rocha, desenvolvedor fullstack especializado em Node.js, TypeScript, Java, React e Next.js.",
    url: siteUrl,
    siteName: "nycolazs.dev",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Nycolas Rocha | Fullstack Software Developer",
    description:
      "Portfolio profissional de Nycolas Rocha, desenvolvedor fullstack especializado em Node.js, TypeScript, Java, React e Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
