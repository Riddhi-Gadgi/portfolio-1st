import usePageTitle from "@/hooks/usePageTitle";
import PageHeader from "@/components/ui/PageHeader";
import BookGraphic from "@/components/graphics/BookGraphic";
import ProjectShowcase from "@/sections/work/ProjectShowcase";
import ContactCard from "@/sections/ContactCard";

export default function ProjectsPage() {
  usePageTitle("Projects");

  return (
    <>
      <PageHeader
        eyebrow="The thesis"
        title="Experiments"
        titleMuted="& builds."
        description="Selected projects, experiments and digital products, written up like chapters of a thesis."
        graphic={<BookGraphic className="w-full" />}
      />

      <section className="container-page py-14 sm:py-20">
        <ProjectShowcase />
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <ContactCard />
      </section>
    </>
  );
}
