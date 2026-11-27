import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sethapiseth.vercel.app"),
  title: {
    default: "Khoun Sethapiseth — Frontend Developer",
    template: "%s — Khoun Sethapiseth",
  },
  description:
    "Portfolio of Khoun Sethapiseth, Junior Frontend Developer specializing in React, Next.js, TypeScript, and responsive web development.",
  openGraph: {
    title: "Khoun Sethapiseth — Creative Frontend Developer",
    description: "Explore my projects, skills, services, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
