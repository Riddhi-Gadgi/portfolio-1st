import usePageTitle from "@/hooks/usePageTitle";
import PageHeader from "@/components/ui/PageHeader";
import PaperPlaneGraphic from "@/components/graphics/PaperPlaneGraphic";
import ContactCard from "@/sections/ContactCard";

export default function ContactPage() {
  usePageTitle("Contact");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        // titleMuted="I reply fast."
        description="Open to projects, internships and full-time roles. I usually reply within a day or two."
        graphic={<PaperPlaneGraphic className="w-full" />}
      />
      <section className="container-page py-14 pb-20 sm:py-20 sm:pb-28">
        <ContactCard />
      </section>
    </>
  );
}
