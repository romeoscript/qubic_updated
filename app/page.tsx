'use client'
import AboutUs from "@/components/AboutUs";
import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import PremiumRotatingElement from "@/components/PremiumRotatingElement";


export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <CoreValues />
      <OurWork />
      <AboutUs />
      <PremiumRotatingElement />
    </div>
  );
}
