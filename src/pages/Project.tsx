import ProjectItem from "@/components/project/ProjectCard";

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-32 bg-white text-[#1f2937]">
      <section className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <h1 className="text-4xl font-bold text-[#06202B]">Projects</h1>
      </section>

      <section className="mt-12 max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <ProjectItem
          imageUrl="/cloudhiker-preview.png"
          title="Cloudhiker"
          description="Discover the most interesting, weird or awesome websites of the Internet."
          links={[{ href: "https://cloudhiker.app", label: "Website" }]}
        />
        <ProjectItem
          imageUrl="/porto-geovasi.png"
          title="Company Profile"
          description="A responsive and modern company profile website built to showcase business identity, services, and contact information."
          links={[
            { href: "https://geovasi.vercel.app/", label: "Website" },
            {
              href: "https://github.com/muunoooo/FrontEnd/tree/main/company-profile",
              label: "GitHub",
            },
          ]}
        />
      </section>
    </main>
  );
}
