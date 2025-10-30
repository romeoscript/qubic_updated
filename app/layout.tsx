import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Qubic | Digital Solutions & Web Development",
  description: "Qubic delivers innovative digital solutions and web development services. We specialize in creating custom software, web applications, and digital experiences that drive business growth.",
  keywords: "Qubic, digital services, web development, software development, custom software, web applications, digital solutions, Qubic studio, Qubic web, Nigeria, Benjamin Peter Ani, Ezeugwu Romanus Chukwuemeka, Peter Ani, Romanus Chukwuemeka, CTO, CEO, technology leadership",
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
        <Script id="sd-website-nav-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify([
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "@id": "https://qubic.com.ng#website",
              "headline": "Qubic",
              "name": "Qubic",
              "description": "Qubic delivers innovative digital solutions and web development services",
              "url": "https://qubic.com.ng",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://qubic.com.ng?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org/",
              "@graph": [
                { "@type": "SiteNavigationElement", "@id": "https://qubic.com.ng#Main Menu", "name": "Home", "url": "https://qubic.com.ng" },
                { "@type": "SiteNavigationElement", "@id": "https://qubic.com.ng#Main Menu", "name": "Who We Are", "url": "https://qubic.com.ng/#about" },
                { "@type": "SiteNavigationElement", "@id": "https://qubic.com.ng#Main Menu", "name": "Our Work", "url": "https://qubic.com.ng/#work" },
                { "@type": "SiteNavigationElement", "@id": "https://qubic.com.ng#Main Menu", "name": "Our Team", "url": "https://qubic.com.ng/#about" },
                { "@type": "SiteNavigationElement", "@id": "https://qubic.com.ng#Main Menu", "name": "Contact Us", "url": "https://qubic.com.ng/contact" }
              ]
            },
            {
              "@context": "https://schema.org/",
              "@type": "Organization",
              "@id": "https://qubic.com.ng#Organization",
              "name": "Qubic",
              "url": "https://qubic.com.ng",
              "sameAs": [
                "https://x.com/romeoscript1",
                "https://www.linkedin.com/in/ezeugwuromanus/"
              ],
              "logo": {
                "@type": "ImageObject",
                "url": "https://qubic.com.ng/assets/home/logo.svg",
                "width": "512",
                "height": "512"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "url": "https://qubic.com.ng/contact"
              }
            }
          ])}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}