import type { Metadata } from "next";
import {
  Archivo,
  Geist_Mono,
  Inter,
  Libre_Caslon_Text,
} from "next/font/google";
import "./globals.css";

// Section headings — heavy grotesque, can go expanded/bold
const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
});

// Drafting-sheet annotations on the umbrella site
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Davidson's official serif — headings on the umbrella site
const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// Davidson's official sans — body copy on the umbrella site
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack@Davidson — Davidson College's student tech community",
  description:
    "Hack@Davidson is a student-run organization at Davidson College building a community of makers across every major. We run Davidson's annual hackathon, workshops, build nights, and tech talks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${caslon.variable} ${inter.variable} ${geistMono.variable} antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (Grammarly, etc.)
          inject attributes onto <body> after the SSR'd HTML is sent —
          harmless, but React would otherwise flag it as a mismatch. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
