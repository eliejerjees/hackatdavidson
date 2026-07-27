import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";

// Section headings — heavy grotesque, can go expanded/bold
const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
});

// Clean body / UI type
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack@Davidson — Around the World",
  description:
    "Davidson's student-run hackathon. Build Locally. Think Globally. One weekend, a whole world of ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${geist.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
