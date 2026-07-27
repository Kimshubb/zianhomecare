import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsapp";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

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
        <Analytics/>
        <SpeedInsights/>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xt0ct1z8x5");
          `}
        </Script>
      </body>
    </html>
  );
}