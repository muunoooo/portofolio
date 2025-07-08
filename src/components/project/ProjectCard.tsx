import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

type ProjectItemProps = {
  imageUrl: string;
  title: string;
  description: string;
  links: { href: string; label: string }[];
};

export default function ProjectItem({
  imageUrl,
  title,
  description,
  links,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <img
        src={imageUrl}
        alt={title}
        className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-[#06202B]">{title}</h2>
        <p className="mt-2 text-lg">{description}</p>
        <div className="mt-4 flex gap-4 flex-wrap">
          {links.map((link, idx) => {
            const Icon = getIconForLabel(link.label);
            return (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <Icon className="text-xl" /> {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getIconForLabel(label: string): IconType {
  const lower = label.toLowerCase();
  if (lower.includes("github")) return FaGithub;
  return FiExternalLink;
}
