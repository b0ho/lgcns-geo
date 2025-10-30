import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "API Documentation - LG CNS API",
  description: "Complete reference documentation for LG CNS REST API endpoints. Access detailed information about employee directory, project management, and organizational structure APIs.",
  keywords: ["API documentation", "REST API reference", "LG CNS API", "employee API", "project API", "API endpoints"],
  openGraph: {
    title: "API Documentation - LG CNS API",
    description: "Complete reference documentation for LG CNS REST API endpoints. Access detailed information about employee directory, project management, and organizational structure APIs.",
    url: "https://lgcns-geo.vercel.app/documentation",
  },
  twitter: {
    title: "API Documentation - LG CNS API",
    description: "Complete reference documentation for LG CNS REST API endpoints.",
  },
  alternates: {
    canonical: "https://lgcns-geo.vercel.app/documentation",
  },
}

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
