import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./src/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LG CNS API - Enterprise Data Platform",
  description: "Access LG CNS company information including employee directory, project data, and organizational structure. Comprehensive REST API for enterprise integration.",
  keywords: ["LG CNS", "API", "REST API", "enterprise data", "employee directory", "project management", "organizational structure", "company information"],
  authors: [{ name: "LG CNS" }],
  creator: "LG CNS",
  publisher: "LG CNS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lgcns-geo.vercel.app",
    title: "LG CNS API - Enterprise Data Platform",
    description: "Access LG CNS company information including employee directory, project data, and organizational structure. Comprehensive REST API for enterprise integration.",
    siteName: "LG CNS API",
  },
  twitter: {
    card: "summary_large_image",
    title: "LG CNS API - Enterprise Data Platform",
    description: "Access LG CNS company information including employee directory, project data, and organizational structure. Comprehensive REST API for enterprise integration.",
  },
  alternates: {
    canonical: "https://lgcns-geo.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
