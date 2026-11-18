import usePageTitle from "@/hooks/usePageTitle";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import Skills from "@/sections/Skills";
import AboutTeaser from "@/sections/AboutTeaser";
import ContactCard from "@/sections/ContactCard";

export default function Home() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <AboutTeaser />
      <section id="contact" className="container-page pb-20 sm:pb-28">
        <ContactCard />
      </section>
    </>
  );
}
