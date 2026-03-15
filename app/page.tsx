import Hero from "@/components/sections/homepage/hero";
import About from "@/components/sections/homepage/about";
import Subheading from "@/components/sections/homepage/subHeading";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <About/>

    </div>
  );
}
