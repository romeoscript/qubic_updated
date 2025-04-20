import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qubic  | Digital Solutions & Web Development",
  description: "Transforming ideas into innovative digital solutions. We specialize in web development, mobile apps, and creating exceptional digital experiences.",
  keywords: ["web development", "mobile apps", "UI/UX design", "digital solutions", "software development", "Nigeria"],
  authors: [{ name: "Qubic " }],
  creator: "Qubic ",
  publisher: "Qubic ",
  openGraph: {
    title: "Qubic  | Digital Solutions & Web Development",
    description: "Transforming ideas into innovative digital solutions.",
    url: "https://qubic.com.ng",
    siteName: "Qubic ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubic  | Digital Solutions",
    description: "Transforming ideas into innovative digital solutions.",
    creator: "@qubic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}