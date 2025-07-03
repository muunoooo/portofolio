import Hero3D from "@/components/Hero3D";
import HeroOverlay from "@/components/HeroOverlay";

export default function Home() {
  return (
    <section className="relative h-screen bg-black">
      <Hero3D />
      <HeroOverlay />
    </section>
  );
}
