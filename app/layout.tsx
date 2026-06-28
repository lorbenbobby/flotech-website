import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE = "FloTech | Blockchain Infrastructure and Software Consulting";
const DESCRIPTION =
  "FloTech by Florian Technologies is a Canadian blockchain technology and software consulting company based in Ontario, helping businesses build smart contracts, tokenization systems, Web3 platforms, and secure blockchain integrations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "FloTech",
  authors: [{ name: "Florian Technologies" }],
  creator: "Florian Technologies",
  publisher: "Florian Technologies",
  keywords: [
    "blockchain consulting",
    "smart contract development",
    "tokenization infrastructure",
    "Web3 platform development",
    "blockchain integration",
    "blockchain Canada",
    "Ontario blockchain company",
    "software consulting",
    "digital trust infrastructure",
    "FloTech",
    "Florian Technologies",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "FloTech",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_CA",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FloTech. Blockchain infrastructure built for real business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#060912",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
