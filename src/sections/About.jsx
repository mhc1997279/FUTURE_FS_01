import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { about, skills } from "../content";

const SKILL_GROUPS = [
  { label: "Programming",    items: skills.programming },
  { label: "Web",            items: skills.web         },
  { label: "Backend / DB",   items: skills.backend     },
  { label: "Tools",          items: skills.tools       },
  { label: "Soft Skills",    items: skills.soft        },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "instant" });
};

export default function About() {
  return (
    <SectionWrapper id="about" className="section-about">
      <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-start">

        {/* LEFT — text + CTA */}
        <div>
          <span className="section-label">About Me</span>
          <h2 className="section-title mb-8">Know Who I Am</h2>

          <div className="space-y-5 mb-10">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="body-lg text-gray-400">{p}</p>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="btn-primary"
          >
            <Mail size={17} /> Contact Me
          </motion.button>
        </div>

        {/* RIGHT — Skills card */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#141418] p-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 mb-5">
            Technologies &amp; Skills
          </p>

          <div className="space-y-5">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-2">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
