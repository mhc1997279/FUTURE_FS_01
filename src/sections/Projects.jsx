import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import GlassCard from "../components/GlassCard";
import { projects } from "../content";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard className="flex flex-col h-full overflow-hidden p-0">

      {/* Project image — object-contain with dark bg so nothing is cropped */}
      <div className="aspect-video overflow-hidden bg-[#0a0a0d] flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-3.5">

        <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>

        {project.meta && (
          <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-400/80">
            {project.meta}
          </p>
        )}

        <p className={`text-sm text-gray-400 leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>

        {project.description?.length > 160 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="self-start flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors"
          >
            {expanded ? <><ChevronUp size={14} /> Less</> : <><ChevronDown size={14} /> More</>}
          </button>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {(project.tags ?? []).map((tag) => (
            <span key={tag} className="chip text-[11px] py-0.5 px-2.5">{tag}</span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="flex gap-2 pt-1">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="btn-ghost text-xs !px-3 !py-1.5">
                <Github size={14} /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="btn-primary text-xs !px-3 !py-1.5">
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        )}

      </div>
    </GlassCard>
  );
}

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const cardW = scrollRef.current.firstElementChild?.offsetWidth ?? 460;
    scrollRef.current.scrollBy({ left: dir * (cardW + 28), behavior: "smooth" });
  };

  return (
    <SectionWrapper id="projects">

      {/* Header row with arrows */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="section-label">What I&#39;ve Built</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous projects"
            className="w-10 h-10 rounded-xl border border-white/10 bg-[#141418] flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-150"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next projects"
            className="w-10 h-10 rounded-xl border border-white/10 bg-[#141418] flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-150"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-4 w-10 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-[#0c0c0e] to-transparent z-10" />
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto pb-4
            snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p) => (
            <div key={p.id} className="flex-shrink-0 snap-start w-[85vw] sm:w-[440px] lg:w-[calc(50%-0.875rem)]">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

    </SectionWrapper>
  );
}
