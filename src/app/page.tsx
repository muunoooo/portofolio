import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import HeroPage from "@/pages/Hero";
import ProjectPage from "@/pages/Project";
import SkillsPage from "@/pages/Skill";

export default function Home() {
  return (
    <section className="relative h-screen bg-black">
      <HeroPage />
      <AboutPage />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
    </section>
  );
}
