import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sahayi",
    template: "%s | Sahayi",
  },
  description:
    "Sahayi is your one-stop platform for healthcare, education, home services, travel, events, and more.",
  keywords: [
    "Sahayi",
    "home services",
    "healthcare services",
    "education platform",
    "travel services",
    "event management",
    "daily essentials",
  ],
  authors: [{ name: "Sahayi" }],
  creator: "Sahayi",

  openGraph: {
    title: "Sahayi",
    description:
      "Sahayi connects you with trusted professionals across healthcare, education, home services, travel, and more.",
    url: "https://sahayi-six.vercel.app/", 
    siteName: "Sahayi",
    images: [
      {
        url: "https://res.cloudinary.com/dlttm7i3r/image/upload/v1767508313/WhatsApp_Image_2026-01-04_at_11.41.46_AM-removebg-preview_zdr0pf.png",
        width: 1200,
        height: 630,
        alt: "Sahayi - One Trusted Destination",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sahayi",
    description:
      "Trusted platform for healthcare, education, home services, travel, and events.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
