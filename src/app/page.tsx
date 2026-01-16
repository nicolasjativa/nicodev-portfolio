//Page Sections
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Summary from "@/components/sections/Summary";

//Landing Page
export default function Landing() {
  return (
    <div className="flex flex-col gap-16 lg:gap-28 pt-12">
      <Hero />
      <Summary />
      <Experience />
      <Education />
      <Projects />
      <Stack />
      <Contact />
      <About />
      </div>
  );
}
