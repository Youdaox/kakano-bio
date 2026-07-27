import type { Metadata } from "next";
import Hero from "@/components/sections/homepage/hero";
import About from "@/components/sections/homepage/about";
import Team from "@/components/sections/homepage/team";
import AdvisoryBoard from "@/components/sections/homepage/advisory-board";
import Projects from "@/components/sections/homepage/projects";
import Contact from "@/components/sections/homepage/contact";
import BackToTop from "@/components/ui/buttons/BackToTop";

export const metadata: Metadata = {
  title: "Kakano Biosciences",
  description:"Kakano Biosciences",
};
export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <About/>
      <Team />
      <AdvisoryBoard />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
}
