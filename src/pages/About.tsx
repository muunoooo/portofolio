import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-32 bg-white text-[#1f2937]">
      <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <h1 className="text-4xl font-bold text-[#06202B]">
          Hi! I'm Muhammad Naufal.
        </h1>

        <h2 className="text-2xl">Fullstack Developer based in Indonesia.</h2>

        <p>
          I'm a full-stack web developer who made a career transition from
          geological engineering into the tech industry. Since starting my
          coding journey in 2024, I've focused on building responsive,
          user-friendly web applications using modern technologies like{" "}
          <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>Tailwind CSS</strong>, <strong>Supabase</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>

        <p>
          With experience in both frontend and backend development, I enjoy
          crafting clean, efficient, and scalable solutions—whether it's
          designing a dynamic landing page, building a dashboard CMS, or
          integrating APIs. My background in engineering has equipped me with
          strong problem-solving, adaptability, and teamwork skills that I now
          apply in the tech world.
        </p>

        <p>
          I'm currently working as a freelance developer while continuously
          learning and building real-world projects. I’ve contributed to
          applications ranging from sport management platforms to CMS tools and
          geolocation-based services.
        </p>

        <p>
          Outside of development, I enjoy learning about UI/UX trends, startup
          tech stacks, and helping friends turn their ideas into working MVPs.
        </p>

        <p>
          You can explore more of my work and interests on{" "}
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </Link>
          ,
          <Link
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Dribbble
          </Link>
          or
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
