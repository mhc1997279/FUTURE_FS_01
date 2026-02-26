import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { profile } from "../content";

const NAV_LINKS = [
  { id: "about",          label: "About"          },
  { id: "projects",       label: "Projects"        },
  { id: "resume",         label: "Resume"          },
  { id: "awards",         label: "Awards"          },
  { id: "certifications", label: "Certifications"  },
  { id: "contact",        label: "Contact"         },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* Highlight the link of whichever section is most visible — no animation, just state. */
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top - 100 <= 0) {
          current = link.id;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Jump to section — NO smooth scroll */
  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "instant" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0c0c0e]/90 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="container-xl flex items-center justify-between h-16">

        {/* Full name — no logo, no MHC mark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="text-white font-bold text-base sm:text-lg tracking-tight hover:text-teal-400 transition-colors"
        >
          MOHAMMED HUSENI CALCUTTAWALA
        </button>

        {/* Desktop nav links + social icons */}
        <div className="hidden md:flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => jumpTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150
                  ${active === link.id
                    ? "text-teal-400"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-teal-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Social icons — right of nav links */}
          <div className="flex items-center gap-0.5 ml-2 pl-3 border-l border-white/10">
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-gray-500 hover:text-teal-400 hover:bg-teal-500/[0.08] transition-all duration-150"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-gray-500 hover:text-teal-400 hover:bg-teal-500/[0.08] transition-all duration-150"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown — simple, no animation */}
      {open && (
        <div className="md:hidden bg-[#0f0f12] border-t border-white/[0.06] px-4 py-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => jumpTo(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                ${active === link.id
                  ? "text-teal-400 bg-teal-500/10"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
