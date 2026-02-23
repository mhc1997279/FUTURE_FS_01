import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { certifications } from "../content";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-14">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-white/[0.07] bg-[#141418] overflow-hidden
              hover:border-teal-500/25 hover:shadow-[0_0_32px_rgba(20,184,166,0.12)]
              transition-all duration-300"
          >
            {/* Certificate image */}
            <div className="h-64 bg-[#0f0f12] border-b border-white/[0.06] flex items-center justify-center p-8">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-8">
              <h3 className="font-bold text-white text-lg mb-3 leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 leading-[1.8]">
                {cert.description}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
