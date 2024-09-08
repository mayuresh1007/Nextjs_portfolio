import { Cards } from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    // <h1 className="text-center mt-40">Home page from main root page Mayuresh learning Next.js</h1>
    <main className="min-h-screen ☐bg-black/[0.96] antialiased bg-grid-white/[0.02] md:mt-0 ">
      <div className="mt-0 ">
        <HeroSection />
        <Cards/>
      </div>
    </main>
  );
}
