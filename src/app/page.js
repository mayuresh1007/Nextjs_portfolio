"use client";
import Hero from "@/components/Hero";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  
  return (
    <div className="container mx-auto mt-4">
      <div className="justify-center items-center text-center">
        <ThemeToggle />
        <Hero/>
        
      </div>
    </div>
  );
}
