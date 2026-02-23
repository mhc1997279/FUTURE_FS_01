import Container from "./Container";
import { profile } from "../content";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0c0e] py-10">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-sm text-gray-500">
          © 2026{" "}
          <span className="text-gray-300 font-medium">{profile.name}</span>.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github,   href: profile.github.url,       label: "GitHub"   },
            { icon: Linkedin, href: profile.linkedin.url,     label: "LinkedIn" },
            { icon: Mail,     href: `mailto:${profile.email}`, label: "Email"   },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-teal-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
