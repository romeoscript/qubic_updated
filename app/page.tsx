'use client'
import AboutUs from "@/components/AboutUs";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import PremiumRotatingElement from "@/components/PremiumRotatingElement";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <div >
      <Analytics />
      <Navbar />
      <Hero />
     <div className="bg-black">
     <CoreValues />
     </div>
      <OurWork />
      <AboutUs />
      <Footer />
      <PremiumRotatingElement />
    </div>
  );
}
