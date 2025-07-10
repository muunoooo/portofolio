import {
  SiReact,
  SiNextdotjs,
  SiNuxtdotjs,
  SiAngular,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiFigma,
} from "react-icons/si";

import { FaLink } from "react-icons/fa";
import SkillCard from "@/components/skills/SkillCard";

export default function SkillsSection() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-32 bg-white text-black">
      <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Tech Stack</h2>

        <div className="space-y-8">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Frontend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard
                name="ReactJS"
                level={8}
                icon={<SiReact className="text-xl text-sky-500" />}
              />
              <SkillCard
                name="Next.js"
                level={8}
                icon={<SiNextdotjs className="text-xl" />}
              />
              {/* <SkillCard
              name="Vue.js"
              level={6}
              icon={<SiVuejs className="text-xl text-green-500" />}
            /> */}
              <SkillCard
                name="Nuxt.js"
                level={6}
                icon={<SiNuxtdotjs className="text-xl text-emerald-500" />}
              />
              <SkillCard
                name="Angular"
                level={3}
                icon={<SiAngular className="text-xl text-red-600" />}
              />
              <SkillCard
                name="TailwindCSS"
                level={9}
                icon={<SiTailwindcss className="text-xl text-cyan-500" />}
              />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* <SkillCard
              name="Node.js"
              level={8}
              icon={<SiNodeDotJs className="text-xl text-green-600" />}
            /> */}
              <SkillCard
                name="NestJS"
                level={4}
                icon={<SiNestjs className="text-xl text-red-500" />}
              />
              <SkillCard
                name="Express"
                level={7}
                icon={<SiExpress className="text-xl" />}
              />
              <SkillCard
                name="REST API"
                level={9}
                icon={<FaLink className="text-xl text-gray-500" />}
              />
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Database
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard
                name="PostgreSQL"
                level={7}
                icon={<SiPostgresql className="text-xl text-blue-700" />}
              />
              <SkillCard
                name="Prisma"
                level={6}
                icon={<SiPrisma className="text-xl text-indigo-500" />}
              />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard
                name="Git"
                level={8}
                icon={<SiGit className="text-xl text-orange-500" />}
              />
              {/* <SkillCard
              name="VS Code"
              level={9}
              icon={<SiVisualstudiocode className="text-xl text-blue-500" />}
            /> */}
              <SkillCard
                name="Figma"
                level={5}
                icon={<SiFigma className="text-xl text-pink-500" />}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
