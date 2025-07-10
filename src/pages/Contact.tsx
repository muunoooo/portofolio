import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbAt } from "react-icons/tb";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="block w-full"
      >
        <path
          fill="#077A7D"
          fillOpacity="1"
          d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <section className="px-6 py-16 md:px-32 bg-[#077A7D] text-white -mt-px md:mt-[-100px]">
        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
          <h1 className="text-4xl font-bold mb-12">Get in touch!</h1>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <Link href="mailto:mnaufal12321@gmail.com">
              <div className="inline-flex items-center gap-3 text-black bg-white bg-opacity-10 px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-20 transition">
                <TbAt className="text-xl" />
                <span>mnaufal12321@gmail.com</span>
              </div>
            </Link>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Coding & Social Media
            </h2>
            <div className="flex flex-wrap gap-4">
              <ContactButton
                icon={<FaGithub />}
                label="Github"
                href="https://github.com/muunoooo"
              />

              <ContactButton
                icon={<FaInstagram />}
                label="Instagram"
                href="https://www.instagram.com/muunoooo/"
              />

              <ContactButton
                icon={<FaLinkedin />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/muhammad-naufal04/"
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

type ContactButtonProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

function ContactButton({ icon, label, href }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition px-4 py-2 rounded-md text-black font-medium"
    >
      {icon}
      {label}
    </a>
  );
}
