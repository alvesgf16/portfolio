import type { Metadata } from "next";
import localFont from "next/font/local";

import { documentMetadataFromIntro, resume } from "@/content/resume";

import "./globals.css";

const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin-wght-normal.woff2",
  variable: "--font-source-sans",
  weight: "200 900",
});

const sourceSerif = localFont({
  src: "./fonts/source-serif-4-latin-wght-normal.woff2",
  variable: "--font-source-serif",
  weight: "200 900",
});

const documentMetadata = documentMetadataFromIntro(resume.intro);

export const metadata: Metadata = {
  title: documentMetadata.title,
  description: documentMetadata.description,
  openGraph: {
    title: documentMetadata.title,
    description: documentMetadata.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
