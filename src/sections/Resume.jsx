import { motion } from "framer-motion";
import { Calendar, BookOpen, Briefcase } from "lucide-react";import SectionWrapper from "../components/SectionWrapper";
import GlassCard from "../components/GlassCard";
import { experience, education } from "../content";

function ExperienceCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard className="p-6 min-h-[200px] flex flex-col">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-5">
          {job.logo ? (
            <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden
              border border-white/[0.07] bg-[#1a1a1f] flex items-center justify-center">
              <img src={job.logo} alt={job.company} className="w-11 h-11 object-contain" />
            </div>
          ) : (
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20
              flex items-center justify-center">
              <Briefcase size={22} className="text-teal-400" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-white text-base leading-tight">{job.role}</h3>
            <p className="text-teal-400 text-sm font-semibold mt-0.5">{job.company}</p>
            <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-1.5">
              <Calendar size={12} />
              {job.dates}
            </p>
          </div>
        </div>

        {/* Bullets */}
        {job.bullets?.length > 0 && (
          <ul className="space-y-2.5 pl-1 flex-1">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </motion.div>
  );
}

function EducationCard({ edu }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard className="p-6 min-h-[200px] flex flex-col">
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20
            flex items-center justify-center">
            <BookOpen size={22} className="text-teal-400" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-white text-base leading-tight">{edu.school}</h3>
            <p className="text-teal-400 text-sm font-semibold mt-0.5">{edu.degree}</p>
            <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-1.5">
              <Calendar size={12} /> {edu.dates}
            </p>
          </div>
        </div>

        {edu.paragraph && (
          <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{edu.paragraph}</p>
        )}

        {edu.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {edu.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
}

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="section-resume">
      <div className="text-center mb-14">
        <span className="section-label">Background</span>
        <h2 className="section-title">Experience &amp; Education</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT — Experience */}
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <Briefcase size={20} className="text-teal-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">Work Experience</h3>
          </div>
          <div className="space-y-5">
            {experience.map((job) => <ExperienceCard key={job.id} job={job} />)}
          </div>
        </div>

        {/* RIGHT — Education */}
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <BookOpen size={20} className="text-teal-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">Education</h3>
          </div>
          <div className="space-y-5">
            {education.map((edu) => <EducationCard key={edu.id} edu={edu} />)}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
