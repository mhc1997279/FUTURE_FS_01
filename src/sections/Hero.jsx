import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Copy, Check } from "lucide-react";
import { profile, hero } from "../content";

import heroBg   from "../assets/hero.jpg";
import portrait from "../assets/img1.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
<section className="relative min-h-[85vh] flex items-center overflow-hidden">

        {/* ── Background: hero.avif ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 hero-bg-img"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark overlay gradient — top-left darker, readability */}
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0c0c0e]/95 via-[#0c0c0e]/80 to-[#0c0c0e]/60" />

        {/* Subtle dot-grid texture */}
        <div aria-hidden="true" className="hero-dot-grid absolute inset-0 -z-20 pointer-events-none" />

        {/* Cinematic vignette */}
        <div aria-hidden="true" className="hero-vignette absolute inset-0 -z-20 pointer-events-none" />

        {/* Top + bottom gradient fade into body bg */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0c0c0e] to-transparent -z-10" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0c0c0e] to-transparent -z-10" />

        {/* Teal ambient glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px] -z-10" />

        {/* ── Content ── */}
        <div className="container-xl w-full pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT — Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-start order-first"
            >
              <div className="relative w-full max-w-[15rem] sm:max-w-xs md:max-w-sm">
                {/* Static teal ambient blob — no animation */}
                <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-teal-500/10 blur-3xl" />
                <div aria-hidden="true" className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal-500/15 to-cyan-500/5 blur-xl" />

                {/* Portrait frame */}
                <div className="relative rounded-[1.5rem] overflow-hidden border border-teal-500/20
                  shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(20,184,166,0.15)]
                  aspect-[3/4] bg-[#0f0f12]">
                  <img
                    src={portrait}
                    alt={`Portrait of ${profile.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-xl
                    border border-teal-500/30 bg-[#141418]/90 px-3.5 py-2.5
                    text-xs font-semibold text-teal-300 backdrop-blur-md shadow-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Open to Opportunities
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT — Text */}
            <div className="flex flex-col items-start text-left max-w-xl space-y-5">

              {/* Role badge */}
              <motion.span {...fadeUp(0.05)} className="inline-flex items-center gap-2.5 rounded-full
                  border border-teal-500/30 bg-teal-500/[0.07] px-4 py-1.5
                  text-xs font-bold tracking-widest uppercase text-teal-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                {profile.role}
              </motion.span>

              {/* Name */}
              <motion.h1 {...fadeUp(0.12)}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold
                  tracking-tight text-white leading-tight"
              >
                Hi, I&#39;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                  Mohammed.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p {...fadeUp(0.18)}
                className="text-base font-semibold text-gray-400 leading-relaxed tracking-wide">
                AI &bull; Machine Learning &bull; Backend &bull; Frontend Engineering
              </motion.p>

              {/* Paragraph 1 */}
              <motion.p {...fadeUp(0.24)}
                className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-[600px]">
                I build real, working software — from backend systems and APIs to clean frontend interfaces and AI-based features.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p {...fadeUp(0.30)}
                className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-[600px]">
                I care about writing clear code, structuring projects properly, and building applications that are reliable and easy to maintain.
              </motion.p>

              {/* Closing */}
              <motion.p {...fadeUp(0.35)}
                className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-[600px]">
                I&#39;m especially interested in how AI can be integrated into practical, real-world systems.
              </motion.p>

              {/* Buttons */}
              <motion.div {...fadeUp(0.42)}
                className="flex flex-wrap items-center gap-3 pt-1">
                <motion.a
                  href={profile.cvPdf}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  <Download size={16} /> View CV
                </motion.a>

                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  {copied ? <><Check size={16} className="text-green-400" /> Copied!</> : <><Copy size={16} /> Copy Email</>}
                </motion.button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
  );
}
