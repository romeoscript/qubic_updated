import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qubic | Digital Solutions & Web Development",
  description: "Qubic delivers innovative digital solutions and web development services. We specialize in creating custom software, web applications, and digital experiences that drive business growth.",
  keywords: "Qubic, digital services, web development, software development, custom software, web applications, digital solutions, Qubic studio, Qubic web, Nigeria",
  openGraph: {
    title: "Qubic | Digital Solutions & Web Development",
    description: "Transform your ideas into powerful digital solutions with Qubic. Expert web development and custom software services in Nigeria.",
    url: "https://qubic.com.ng",
    siteName: "Qubic",
    images: [
      {
        url: "/assets/images/file.svg",
        width: 1200,
        height: 630,
        alt: "Qubic Digital Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubic | Digital Solutions & Web Development",
    description: "Transform your ideas into powerful digital solutions with Qubic. Expert web development and custom software services in Nigeria.",
    images: ["/assets/images/file.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://qubic.com.ng" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}