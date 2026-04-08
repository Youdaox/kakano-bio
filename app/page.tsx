import Hero from "@/components/sections/homepage/hero";
import About from "@/components/sections/homepage/about";
import Team from "@/components/sections/homepage/team";
import BackToTop from "@/components/ui/buttons/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <About/>
      <Team />
      <BackToTop />
    </div>
  );
}
