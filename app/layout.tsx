import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsapp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Zian SafeHarbour Care",
    template: "%s | Zian SafeHarbour Care",
  },
  description:
    "Compassionate home care that feels like family.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-background font-sans text-text antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}