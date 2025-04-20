'use client'
import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PremiumRotatingElement from "@/components/PremiumRotatingElement";


export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <CoreValues />
      <PremiumRotatingElement />
    </div>
  );
}
