import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMastodon,
  FaXing,
} from "react-icons/fa";
import {
  SiProducthunt,
  SiFlickr,
  SiUnsplash,
  SiPixelfed,
} from "react-icons/si";
import { TbAt } from "react-icons/tb";
import { RiBlueskyLine } from "react-icons/ri";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-32 bg-gradient-to-br from-[#077A7D] to-[#7AE2CF] text-black">
      <h1 className="text-4xl font-bold mb-12">Get in touch!</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 px-4 py-2 rounded-md">
          <TbAt className="text-xl" />
          <span>mail@woblick.dev</span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Coding & Social Media
        </h2>
        <div className="flex flex-wrap gap-4">
          <ContactButton
            icon={<FaGithub />}
            label="Github"
            href="https://github.com"
          />
          <ContactButton
            icon={<FaMastodon />}
            label="Mastodon"
            href="https://mastodon.social"
          />
          <ContactButton icon={<RiBlueskyLine />} label="Bluesky" href="#" />
          <ContactButton
            icon={<FaTwitter />}
            label="Twitter"
            href="https://twitter.com"
          />
          <ContactButton
            icon={<SiProducthunt />}
            label="Producthunt"
            href="https://www.producthunt.com"
          />
          <ContactButton
            icon={<FaLinkedin />}
            label="LinkedIn"
            href="https://linkedin.com"
          />
          <ContactButton
            icon={<FaXing />}
            label="Xing"
            href="https://xing.com"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">My Photos</h2>
        <div className="flex flex-wrap gap-4">
          <ContactButton icon={<SiFlickr />} label="Flickr" href="#" />
          <ContactButton icon={<SiUnsplash />} label="Unsplash" href="#" />
          <ContactButton icon={<SiPixelfed />} label="Pixelfed" href="#" />
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
