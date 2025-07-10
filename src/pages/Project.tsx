import ProjectItem from "@/components/project/ProjectCard";

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-32 bg-white text-[#1f2937]">
      <section className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <h1 className="text-4xl font-bold text-[#06202B]">Projects</h1>
      </section>

      <section className="mt-12 max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <ProjectItem
          imageUrl="/porto-launderly.png"
          title="Launderly Application"
          description="An online laundry service application with pickup and delivery features. Users can place orders, schedule pickups, and make secure payments through Midtrans integration."
          links={[
            {
              href: "https://frontend-launderly.vercel.app/",
              label: "Website",
            },
          ]}
        />

        <ProjectItem
          imageUrl="/porto-mister-bear.png"
          title="Cashier Application"
          description="A web-based cashier system where admin can manage (CRUD) products, and cashier can handle customer transactions. Admin can also view product sales reports in real-time."
          links={[
            {
              href: "https://mister-bear-cashier-app.vercel.app/",
              label: "Website",
            },
            {
              href: "https://github.com/muunoooo/cashier-FE",
              label: "GitHub",
            },
          ]}
        />
        <ProjectItem
          imageUrl="/porto-catch.png"
          title="Catch the Moment"
          description="A dynamic event platform that enables users to purchase event tickets or create and manage their own events easily."
          links={[
            { href: "https://catch-the-moment.vercel.app/", label: "Website" },
            {
              href: "https://github.com/muunoooo/catch-FE",
              label: "GitHub",
            },
          ]}
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
