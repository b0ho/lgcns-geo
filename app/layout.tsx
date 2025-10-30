import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./src/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LG CNS API - Enterprise Data Platform",
  description: "Access LG CNS company information including employee directory, project data, and organizational structure. Comprehensive REST API for enterprise integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
