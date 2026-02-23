import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { awards } from "../content";

export default function Awards() {
  return (
    <SectionWrapper id="awards" className="section-awards">
      <div className="text-center mb-14">
        <span className="section-label">Recognition</span>
        <h2 className="section-title">Awards &amp; Honours</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {awards.map((award, i) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, boxShadow: "0 0 28px rgba(20,184,166,0.12)" }}
            className="group rounded-2xl overflow-hidden bg-[#141418] border border-white/[0.07]
              transition-shadow duration-300"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden bg-[#0f0f12]">
              <img
                src={award.image}
                alt={award.caption}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            {/* Caption */}
            <div className="px-5 py-4 border-t border-white/[0.06]">
              <p className="text-sm font-semibold text-gray-200 text-center leading-snug">
                {award.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
