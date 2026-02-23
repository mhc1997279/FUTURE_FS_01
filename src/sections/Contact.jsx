import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { contact, profile } from "../content";

const INFO_ITEMS = [
  { icon: Mail,     label: "Email",    value: profile.email,        href: `mailto:${profile.email}`    },
  { icon: Phone,    label: "Phone",    value: profile.phone,        href: `tel:${profile.phone}`       },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin?.text ?? "LinkedIn", href: profile.linkedin?.url ?? "#" },
  { icon: Github,   label: "GitHub",   value: profile.github?.text ?? "GitHub",    href: profile.github?.url   ?? "#" },
];

const INIT = { name: "", email: "", subject: "", message: "" };
const STATUS = { idle: "idle", loading: "loading", success: "success", error: "error" };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [status, setStatus] = useState(STATUS.idle);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.loading);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? STATUS.success : STATUS.error);
      if (res.ok) setForm(INIT);
    } catch {
      setStatus(STATUS.error);
    }
    setTimeout(() => setStatus(STATUS.idle), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <span className="section-label">{contact.title}</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="body-lg text-gray-400 max-w-xl mx-auto mt-3">{contact.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* LEFT — Contact info */}
        <div className="flex flex-col justify-center gap-6">
          {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ x: 4 }}
              className="group flex items-center gap-4 p-4 rounded-xl
                border border-white/[0.07] bg-[#141418] hover:border-teal-500/30 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/20
                flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <Icon size={20} className="text-teal-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 leading-none mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* RIGHT — Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange}
                required placeholder="Your name"
                className="form-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                required placeholder="your@email.com"
                className="form-input" />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Subject</label>
            <input id="subject" name="subject" value={form.subject} onChange={handleChange}
              required placeholder="What's this about?"
              className="form-input" />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange}
              required placeholder="Tell me about your project or opportunity…"
              rows={5}
              className="form-input resize-none" />
          </div>

          {/* Status feedback */}
          {status === STATUS.success && (
            <p className="flex items-center gap-2 text-sm text-green-400 font-medium">
              <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
            </p>
          )}
          {status === STATUS.error && (
            <p className="flex items-center gap-2 text-sm text-red-400 font-medium">
              <AlertCircle size={16} /> Something went wrong. Please try again.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === STATUS.loading}
            whileHover={status !== STATUS.loading ? { scale: 1.03, y: -2 } : {}}
            whileTap={status !== STATUS.loading ? { scale: 0.97 } : {}}
            className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === STATUS.loading
              ? <><Loader2 size={17} className="animate-spin" /> Sending…</>
              : <><Send size={17} /> Send Message</>
            }
          </motion.button>
        </form>

      </div>
    </SectionWrapper>
  );
}
