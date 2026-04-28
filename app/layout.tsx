import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import Clarity from "@/components/Clarity";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sptechweb.site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SPTech — Affordable Website Design & App Development in India | ₹999/month",
    template: "%s · SPTech",
  },
  description:
    "Professional website design, development and mobile app services from Mumbai. Fully managed business websites at just ₹999/month. No commitment, no upfront cost. Free website audit included.",
  keywords: [
    "website design India",
    "affordable web development",
    "₹999 website",
    "monthly website plan",
    "website design Mumbai",
    "small business website India",
    "app development company India",
    "free website audit",
    "managed website service",
    "ecommerce website India",
    "responsive website design",
    "SEO website development",
  ],
  applicationName: "SPTech",
  authors: [{ name: "SPTech", url: SITE_URL }],
  creator: "SPTech",
  publisher: "SPTech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "SPTech — Affordable Websites & Apps for Indian Businesses",
    description:
      "Get a fully-managed business website at ₹999/month. App development on demand. Free website audit. Mumbai-based, serving all of India.",
    siteName: "SPTech",
    images: [
      {
        url: "/sptech.png",
        width: 1200,
        height: 630,
        alt: "SPTech — Web Design, Development & App Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPTech — Websites at ₹999/month, Apps on Demand",
    description:
      "Fully-managed business websites from ₹999/month. App development on demand. Free website audit for every customer.",
    images: ["/sptech.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/sptech.png", type: "image/png" }],
    apple: [{ url: "/sptech.png" }],
    shortcut: ["/sptech.png"],
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1A4A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SPTech",
  url: SITE_URL,
  logo: `${SITE_URL}/sptech.png`,
  email: "info@sptechweb.site",
  telephone: "+91 7003391355",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design and Development",
  provider: { "@type": "Organization", name: "SPTech" },
  areaServed: { "@type": "Country", name: "India" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "999",
      priceCurrency: "INR",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        {children}
        <MetaPixel />
        <Clarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </body>
    </html>
  );
}
