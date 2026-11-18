import SectionHeading from "@/components/ui/SectionHeading";
import ProjectShowcase from "./work/ProjectShowcase";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="Products shaped by code and creativity, from enterprise platforms to small, focused tools."
          action={{ to: "/projects", label: "All projects" }}
        />
        <div className="mt-12">
          <ProjectShowcase />
        </div>
      </div>
    </section>
  );
}
