import "./App.css";
import profileImg from "./assets/profile.jpg";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#certs", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript (learning)", "React (learning)"],
  Backend: ["Node.js (learning)", "Express (learning)", "REST APIs (learning)"],
  Database: ["MySQL (learning)"],
  Tools: ["Git & GitHub", "VS Code", "Vite", "Figma (basic)"],
};

const projects = [
  {
    title: "PlayStation 6 (PS6) Marketing Website — Web Dev",
    subtitle: "Educational parody website showcasing a next-gen console concept.",
    highlights: [
      "Modern marketing layout: removed sidebar for minimal, premium feel",
      "High-contrast + accessibility-minded styling",
      "Used AI-generated visuals to speed up design work",
    ],
    tech: ["HTML", "CSS", "Design System"],
    linkLabel: "Project reference",
    linkUrl:
      "https://people.rit.edu/ps7850/Project_1_Prasanth_Team_8/",
  },
  {
    title: "Falcon Racing — Racing Team Website (Group Project)",
    subtitle: "Modern UI/UX with responsive layout and interactive sections.",
    highlights: [
      "Clean, modern UI with strong alignment + spacing",
      "Responsive design + reusable CSS variables",
      "Interactive elements to keep users engaged",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Quizzo — JavaFX Quiz Platform (Networking + Leaderboard)",
    subtitle:
      "Multi-threaded TCP/IP quiz platform with leaderboard and timed assessments.",
    highlights: [
      "Timed quizzes + auto-submit workflow",
      "Server-based leaderboard (thread-safe writes)",
      "Real-time result/ranking feedback loop",
    ],
    tech: ["Java", "JavaFX", "TCP/IP", "Multithreading"],
  },
];

export default function App() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page" id="top">
      {/* NAV */}
      <header className="topbar">
        <div className="container navInner">
          <button className="brand" onClick={() => scrollTo("#top")}>
            Mohammed Calcuttawala
          </button>

          <nav className="navLinks" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a
              className="pill"
              href="https://www.linkedin.com/in/mohammedcalcuttawala/"
              target="_blank"
              rel="noreferrer"
              title="Open LinkedIn"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroText">
            <p className="kicker">
              Aspiring Software Developer • Full-Stack (Learning) • RIT Dubai
            </p>

            <h1 className="title">
              I build clean, modern web experiences — and I’m learning fast by
              shipping real projects.
            </h1>

            <p className="subtitle">
              B.Sc. Computing &amp; IT student. Interested in full-stack
              development, cloud, and practical systems. This portfolio is built
              for my internship Task 1, but it’s designed to grow into my
              long-term professional portfolio.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn" href="#contact">
                Contact
              </a>
              <a
                className="btn ghost"
                href="https://www.linkedin.com/in/mohammedcalcuttawala/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="heroBadges">
              <span className="badge">React + Vite</span>
              <span className="badge">Node/Express (next)</span>
              <span className="badge">MySQL (next)</span>
              <span className="badge">GitHub workflow</span>
            </div>
          </div>

          <aside className="heroCard" aria-label="Profile">
            <div className="avatarWrap">
              <img
                className="avatar"
                src={profileImg}
                alt="Mohammed Calcuttawala profile"
              />
            </div>

            <div className="heroCardBody">
              <h2 className="heroName">Mohammed Calcuttawala</h2>
              <p className="heroMeta">
                Dubai, UAE • Open to opportunities • Internship projects in
                progress
              </p>

              <div className="miniGrid">
                <div className="mini">
                  <div className="miniLabel">Focus</div>
                  <div className="miniValue">Full-Stack + Cloud</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Currently</div>
                  <div className="miniValue">Building portfolio + API</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Strength</div>
                  <div className="miniValue">Consistency + learning</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Tools</div>
                  <div className="miniValue">Git, VS Code, Vite</div>
                </div>
              </div>

              <div className="heroCardBtns">
                <a className="btn small" href="#projects">
                  Projects
                </a>
                <a className="btn small ghost" href="#skills">
                  Skills
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <main>
        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>About</h2>
              <p className="muted">
                A short, professional summary (we can refine wording anytime).
              </p>
            </div>

            <div className="card wide">
              <p>
                Hi! I’m Mohammed Calcuttawala — an undergraduate pursuing a
                B.Sc. in Computing &amp; IT at RIT Dubai. I’m passionate about
                solving real-world problems using technology, and I’m building my
                full-stack skills by creating projects end-to-end (frontend →
                backend → database).
              </p>
              <p className="muted">
                I care about clean UI, clear structure, and practical engineering.
                My current plan is to complete this portfolio with a real backend
                contact workflow (email + MySQL), then move on to a Mini CRM and
                a real local business website.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>Skills</h2>
              <p className="muted">
                What I use today + what I’m actively learning.
              </p>
            </div>

            <div className="grid">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="card">
                  <h3>{group}</h3>
                  <ul className="list">
                    {items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Projects</h2>
              <p className="muted">
                Selected work — I’ll keep adding more projects as you share them.
              </p>
            </div>

            <div className="grid">
              {projects.map((p) => (
                <article key={p.title} className="card project">
                  <div className="projectTop">
                    <h3>{p.title}</h3>
                    <p className="muted">{p.subtitle}</p>
                  </div>

                  <ul className="list">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="chips">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.linkUrl ? (
                    <a
                      className="btn small"
                      href={p.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.linkLabel || "View"}
                    </a>
                  ) : (
                    <span className="muted smallText">
                      Link can be added (GitHub/demo) when ready.
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>Experience</h2>
              <p className="muted">What I’m doing currently.</p>
            </div>

            <div className="grid">
              <div className="card">
                <h3>Full Stack Web Development Intern</h3>
                <p className="muted">Future Interns • Jan 2026 – Present • Remote</p>
                <ul className="list">
                  <li>
                    Building task-based full-stack projects with GitHub workflow
                    and real-world deliverables.
                  </li>
                  <li>
                    Focus on practical implementation, clean UI, and learning by shipping.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>Artificial Intelligence Intern</h3>
                <p className="muted">
                  Corizo Edutech Pvt. Ltd • Jan 2026 – Present • Remote
                </p>
                <ul className="list">
                  <li>
                    Participating in a structured internship program across AI/ML,
                    cloud, and data science concepts.
                  </li>
                  <li>Applying learning through hands-on tasks and projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Education</h2>
              <p className="muted">Academic background.</p>
            </div>

            <div className="grid">
              <div className="card">
                <h3>Rochester Institute of Technology, Dubai (RIT Dubai)</h3>
                <p className="muted">
                  Bachelor of Computational &amp; Informational Technology • 2024 – 2028
                </p>
                <ul className="list">
                  <li>Focus: Computing, Information &amp; Communications Technology (ICT)</li>
                </ul>
              </div>

              <div className="card">
                <h3>Delhi Private School, Sharjah</h3>
                <p className="muted">High School Diploma • 2010 – 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section id="awards" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>Honors &amp; Awards</h2>
              <p className="muted">Highlights from academic performance.</p>
            </div>

            <div className="grid">
              <div className="card">
                <h3>Dean’s List — Spring 2025</h3>
                <p className="muted">RIT Dubai • Issued Jun 2025</p>
                <p className="muted">
                  Recognized for outstanding scholastic achievement.
                </p>
              </div>

              <div className="card">
                <h3>Dean’s List — Fall 2024</h3>
                <p className="muted">RIT Dubai • Issued Feb 2025</p>
                <p className="muted">
                  Recognized for scholastic performance during Fall 2024 semester.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certs" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Licenses &amp; Certifications</h2>
              <p className="muted">Credentials that support my learning path.</p>
            </div>

            <div className="grid">
              <div className="card">
                <h3>Solutions Architecture Job Simulation</h3>
                <p className="muted">Forage • Issued Apr 2025</p>
                <p className="muted">
                  Architecture diagram + AWS pricing concepts (job simulation).
                </p>
              </div>

              <div className="card">
                <h3>One Million Prompters</h3>
                <p className="muted">Dubai Future Foundation • Issued Jan 2025</p>
                <p className="muted">Prompt Engineering &amp; Generative AI fundamentals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>Contact</h2>
              <p className="muted">
                Next step: connect this to a Node/Express API + email notification + MySQL storage.
              </p>
            </div>

            <div className="card wide">
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Frontend only for now. Next we will connect to backend (Express + Email + MySQL)."
                  );
                }}
              >
                <div className="row">
                  <label>
                    <span>Name</span>
                    <input name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Subject</span>
                  <input name="subject" placeholder="Subject" required />
                </label>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message…"
                    required
                  />
                </label>

                <div className="formActions">
                  <button className="btn primary" type="submit">
                    Send Message
                  </button>
                  <a
                    className="btn ghost"
                    href="https://www.linkedin.com/in/mohammedcalcuttawala/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message on LinkedIn
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerInner">
          <p>© {year} Mohammed Calcuttawala</p>
          <div className="footerLinks">
            <a href="#top">Back to top</a>
            <a
              href="https://www.linkedin.com/in/mohammedcalcuttawala/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
