import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

import { documentMetadataFromIntro, resume } from "@/content/resume";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["600"],
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
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
