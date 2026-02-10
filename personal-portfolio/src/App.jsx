import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

// Assets
import profile from "./assets/profile.jpg";
import heroBg from "./assets/hero.avif";

// ✅ Fixed background image that starts from About section
import siteBg from "./assets/sitebg.png";

import bookMyEventLogo from "./assets/bookmyevent_logo.png";
import guiStart from "./assets/gui_start.png";
import f1Preview from "./assets/f1_preview.png";
import ps6Preview from "./assets/ps6_preview.png";

import deanFall2024 from "./assets/dean's_list_2024.jpg";
import deanSpring2025 from "./assets/dean's_list_2025.jpg";
import deanFall2025 from "./assets/dean's_list_fall_2025.png";

import certAws from "./assets/certificate_aws.png";
import certOneMillion from "./assets/certificate_one_million.png";

// Experience logos
import futureInternsLogo from "./assets/logo1.jpg";
import corizoLogo from "./assets/logo2.png";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // ✅ Contact form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ✅ Contact form status (loading/success/error)
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const navLinks = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
      { id: "awards", label: "Awards" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" },
      { href: "https://github.com/mhc1997279", label: "GitHub", external: true },
      { href: "https://www.linkedin.com/", label: "LinkedIn", external: true },
    ],
    []
  );

  // Smooth scroll
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[data-scroll]");
      if (!a) return;
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Submit handler (calls Vercel serverless API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation (fast + clean)
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormStatus({
        loading: false,
        success: "",
        error: "Please fill Name, Email, and Message.",
      });
      return;
    }

    setFormStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setFormStatus({ loading: false, success: "Message sent successfully!", error: "" });

      // clear fields
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setFormStatus({
        loading: false,
        success: "",
        error: err.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="app" style={{ "--heroBg": `url(${heroBg})` }}>
      {/* NAV */}
      <header className={`navWrap ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav">
          <div className="brand">
            <div className="brandMark">MHC</div>
            <div className="brandText">
              <div className="brandName">Mohammed Huseni Calcuttawala</div>
              <div className="brandRole">Aspiring Software Engineer</div>
            </div>
          </div>

          <div className="navLinks">
            {navLinks.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  className="navLink"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  title={l.label}
                >
                  {l.label}
                </a>
              ) : (
                <a key={l.id} className="navLink" href={`#${l.id}`} data-scroll="1">
                  {l.label}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="heroKicker">Hi, I’m Mohammed Huseni Calcuttawala</div>

            <h1 className="heroTitle heroTitleAlt">I turn ideas into working systems.</h1>

            <p className="heroSub heroSubBig">
              From frontend UI to backend logic and databases — I build clean, structured projects that feel
              production-ready.
            </p>

            <p className="heroSub heroSubSame">
              I focus on readable code, practical engineering decisions, and creating smooth user experiences.
            </p>
          </div>

          <div className="heroRightOnly">
            <div className="heroFrame">
              <img className="heroPortraitPlain" src={profile} alt="Mohammed Huseni Calcuttawala" />
            </div>
          </div>
        </div>
      </section>

      {/* SITE BACKGROUND STARTS HERE */}
      <div className="siteBgWrap" style={{ "--siteBg": `url(${siteBg})` }}>
        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <h2 className="sectionTitle">About Me</h2>
            <div className="panel">
              <p className="text">
                I’m a software engineering student who enjoys turning ideas into real, working systems — not just demos.
                I like building projects where the UI, backend logic, and database all connect properly, because that’s
                where software starts feeling “real.” I care about structure, readability, and the small details that
                make an app smooth to use.
              </p>
              <p className="text">
                I’m especially interested in full-stack development and backend engineering. I enjoy designing REST APIs,
                organizing clean folder structures, and building features step-by-step so the codebase stays easy to
                maintain. I also like debugging and performance tuning — when something breaks, I want to understand why,
                not just patch it.
              </p>
              <p className="text">
                Outside of coursework, I spend time sharpening my skills by building portfolio projects, reviewing best
                practices, and learning how real development teams work (version control, clean commits, documentation,
                and incremental improvements). My goal is to keep building stronger end-to-end projects that feel
                production-ready and reflect real-world development standards.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="container">
            <h2 className="sectionTitle">Experience</h2>

            <div className="grid2">
              <div className="card experienceCard">
                <div className="expTop">
                  <img className="expLogo" src={futureInternsLogo} alt="Future Interns logo" />
                  <div>
                    <div className="cardTitle">Full Stack Web Development Intern</div>
                    <div className="meta">Future Interns • Remote • Jan 2026 – Present</div>
                  </div>
                </div>

                <p className="text">
                  Working on task-based full stack web development projects with a focus on practical implementation,
                  GitHub-based workflows, and building real-world web applications.
                </p>

                <ul className="list">
                  <li>Built portfolio website, Mini CRM, and a local business website as deliverables.</li>
                  <li>Worked across frontend, backend, and database layers for functional applications.</li>
                  <li>Used GitHub workflows for version control, review, and submissions.</li>
                </ul>
              </div>

              <div className="card experienceCard">
                <div className="expTop">
                  <img className="expLogo" src={corizoLogo} alt="Corizo logo" />
                  <div>
                    <div className="cardTitle">Artificial Intelligence Intern</div>
                    <div className="meta">Corizo Edutech Pvt Ltd • Remote • Jan 2026 – Present</div>
                  </div>
                </div>

                <p className="text">
                  Part of a structured internship involving training and project-based work across AI/ML, cloud
                  computing, and data science — focused on consistent progress and clear deliverables.
                </p>

                <ul className="list">
                  <li>Learning applied AI/ML concepts through structured modules and tasks.</li>
                  <li>Building project work with focus on practical outcomes and reporting.</li>
                  <li>Improving technical communication and delivery cadence.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="container wide">
            <h2 className="sectionTitle">Projects</h2>

            <div className="grid2">
              <div className="card projectCard">
                <div className="projectMedia">
                  <img src={bookMyEventLogo} alt="BookMyEvent" />
                </div>
                <div className="cardBody">
                  <div className="cardTitle">BookMyEvent — Event Booking Web Application</div>
                  <div className="meta">Jan 2026 – Present • Associated with RIT Dubai</div>
                  <p className="text">
                    Developing a full-stack event booking web application designed to simulate a real-world event
                    management and booking platform. The system supports event listings, user interactions, and booking
                    workflows.
                  </p>
                  <p className="text">
                    It integrates backend APIs with database functionality and a structured front-end interface to manage
                    event data and user actions.
                  </p>

                  <div className="tagRow">
                    <span className="tag">Java</span>
                    <span className="tag">Spring Boot</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">REST APIs</span>
                  </div>
                </div>
              </div>

              <div className="card projectCard">
                <div className="projectMedia">
                  <img src={guiStart} alt="Quiz GUI App" />
                </div>
                <div className="cardBody">
                  <div className="cardTitle">Quiz GUI Application (Java)</div>
                  <div className="meta">Jan 2025 – May 2025 • Associated with RIT Dubai</div>
                  <p className="text">
                    Developed a Java-based Quiz GUI application designed to simulate a timed, competitive quiz
                    environment. The app presents randomly selected questions, enforces time limits, and evaluates
                    responses automatically.
                  </p>

                  <div className="tagRow">
                    <span className="tag">Java</span>
                    <span className="tag">JavaFX</span>
                    <span className="tag">OOP</span>
                    <span className="tag">GUI</span>
                  </div>
                </div>
              </div>

              <div className="card projectCard">
                <div className="projectMedia">
                  <img src={f1Preview} alt="Formula 1 Team Website" />
                </div>
                <div className="cardBody">
                  <div className="cardTitle">Formula 1 Team Website</div>
                  <div className="meta">Nov 2025 – Dec 2025 • Associated with RIT Dubai</div>
                  <p className="text">
                    Designed and developed a front-end website themed around a Formula 1 racing team, with a strong focus
                    on layout, branding, and modern UI structure. This project helped me practice building a multi-section
                    website that feels like a real team landing page — including a home section, team information,
                    media-style content, and navigation that connects everything smoothly.
                  </p>
                  <p className="text">
                    I worked on creating consistent spacing, typography, and visual hierarchy so that the site looks
                    clean and professional. I also focused on responsive design, ensuring the layout adapts well across
                    different screen sizes. This project improved my understanding of web structure, CSS styling, and how
                    to design pages that feel cohesive instead of “random sections.”
                  </p>
                  <div className="tagRow">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Responsive</span>
                  </div>
                </div>
              </div>

              <div className="card projectCard">
                <div className="projectMedia">
                  <img src={ps6Preview} alt="PS6 Promotional Website" />
                </div>
                <div className="cardBody">
                  <div className="cardTitle">PS6 Promotional Website</div>
                  <div className="meta">Oct 2025 – Nov 2025 • Associated with RIT Dubai</div>
                  <p className="text">
                    Built a promotional landing page concept for a fictional PlayStation 6 launch, designed to look like
                    a real product marketing page. The goal was to create a modern UI/UX feel using strong hero design,
                    product-focused sections, and a layout that guides the viewer smoothly down the page.
                  </p>
                  <p className="text">
                    I focused on clean styling, section organization, and creating a strong “product identity” using
                    typography, spacing, and consistent visuals. This project helped me improve my ability to design
                    landing pages that look polished, not just functional. It also strengthened my front-end fundamentals
                    and improved how I approach UI decisions (readability, spacing, and user flow).
                  </p>
                  <div className="tagRow">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="container">
            <h2 className="sectionTitle">Skills & Technologies</h2>

            <div className="grid3 skillsGrid">
              <div className="card compact">
                <div className="cardTitle centerTitle">Programming</div>
                <div className="tagGrid">
                  <span className="tag sq">Java</span>
                  <span className="tag sq">Python</span>
                </div>
              </div>

              <div className="card compact">
                <div className="cardTitle centerTitle">Web</div>
                <div className="tagGrid">
                  <span className="tag sq">HTML</span>
                  <span className="tag sq">CSS</span>
                  <span className="tag sq">JavaScript</span>
                  <span className="tag sq">React (Beginner)</span>
                </div>
              </div>

              <div className="card compact">
                <div className="cardTitle centerTitle">Backend</div>
                <div className="tagGrid">
                  <span className="tag sq">SQL</span>
                  <span className="tag sq">REST APIs</span>
                  <span className="tag sq">Node.js (Beginner)</span>
                  <span className="tag sq">Spring Boot (Beginner)</span>
                </div>
              </div>

              <div className="card compact">
                <div className="cardTitle centerTitle">Tools</div>
                <div className="tagGrid">
                  <span className="tag sq">Git</span>
                  <span className="tag sq">GitHub</span>
                  <span className="tag sq">VS Code</span>
                </div>
              </div>

              <div className="card compact span2">
                <div className="cardTitle centerTitle">Soft Skills</div>
                <div className="tagGrid">
                  <span className="tag sq">Problem Solving</span>
                  <span className="tag sq">Debugging</span>
                  <span className="tag sq">Team Collaboration</span>
                  <span className="tag sq">Leadership</span>
                  <span className="tag sq">Attention to Detail</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="container">
            <h2 className="sectionTitle">Education</h2>

            <div className="grid2">
              <div className="card eduCard">
                <div className="cardTitle">Rochester Institute of Technology, Dubai (RIT Dubai)</div>
                <div className="meta">Bachelor of Computational and Informational Technology (CIT) • 2024 – 2028</div>
                <p className="text">
                  At RIT Dubai, I’m building strong foundations in software engineering, databases, web development, and
                  system design. My coursework and projects have helped me strengthen problem-solving, programming
                  fundamentals, and practical development skills — especially through assignments that involve building
                  complete applications.
                </p>

                <p className="text">
                  I’m also learning how to approach engineering work with structure: planning before coding, keeping code
                  readable, and improving designs through iteration. Alongside academics, I actively build portfolio
                  projects to apply what I learn in a more realistic way.
                </p>
                <div className="tagRow">
                  <span className="tag">CGPA: 3.83</span>
                  <span className="tag">Dean’s List</span>
                  <span className="tag">Computing Tech</span>
                </div>
              </div>

              <div className="card eduCard">
                <div className="cardTitle">Delhi Private School, Sharjah</div>
                <div className="meta">High School Diploma • 2010 – 2024</div>
                <p className="text">
                  During high school at Delhi Private School, I developed consistent academic habits, communication
                  skills, and discipline — which became the foundation for my current growth in technology and
                  engineering. My interest in problem-solving and computers continued to grow over time, and I began
                  moving toward software development as a serious career path.
                </p>
                <p className="text">
                  This period helped me strengthen my ability to learn consistently, manage deadlines, and communicate
                  clearly — skills that now support my university projects and internship work.
                </p>
                <div className="tagRow">
                  <span className="tag">Creative Writing</span>
                  <span className="tag">Communication</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className="section" id="awards">
          <div className="container wide">
            <h2 className="sectionTitle">Honors & Awards</h2>

            <div className="grid3">
              <div className="mediaCard">
                <img src={deanFall2024} alt="Dean’s List Fall 2024" />
                <div className="mediaCaption">
                  <div className="mediaTitle">Dean’s List — Fall 2024</div>
                  <div className="mediaText">Recognized for strong academic performance and consistent effort.</div>
                </div>
              </div>

              <div className="mediaCard">
                <img src={deanSpring2025} alt="Dean’s List Spring 2025" />
                <div className="mediaCaption">
                  <div className="mediaTitle">Dean’s List — Spring 2025</div>
                  <div className="mediaText">Continued academic excellence with strong results and consistency.</div>
                </div>
              </div>

              <div className="mediaCard">
                <img src={deanFall2025} alt="Dean’s List Fall 2025" />
                <div className="mediaCaption">
                  <div className="mediaTitle">Dean’s List — Fall 2025</div>
                  <div className="mediaText">Maintained performance while balancing projects and internship prep.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section" id="certifications">
          <div className="container wide">
            <h2 className="sectionTitle">Certifications</h2>

            <div className="grid2">
              <div className="mediaCard tallMedia">
                <img src={certAws} alt="AWS Solutions Architecture — Forage" />
                <div className="mediaCaption">
                  <div className="mediaTitle">AWS Solutions Architecture — Forage</div>
                  <div className="mediaText">
                    Completed the AWS APAC Solutions Architecture program on Forage, where I learned how to think about
                    cloud systems from an architectural perspective. The experience focused on designing scalable and
                    reliable solutions, considering factors like availability, security, and performance.
                  </div>

                  <div className="mediaText">
                    Through the program, I practiced designing a hosting architecture that supports growth, handles
                    traffic efficiently, and follows good cloud practices. It helped me build a stronger understanding
                    of how modern applications are deployed and what decisions matter when building cloud-ready systems.
                  </div>
                </div>
              </div>

              <div className="mediaCard tallMedia">
                <img src={certOneMillion} alt="One Million Prompters — Dubai Future Foundation" />
                <div className="mediaCaption">
                  <div className="mediaTitle">One Million Prompters — Dubai Future Foundation</div>
                  <div className="mediaText">
                    Completed the One Million Prompters initiative, where I gained hands-on experience with structured
                    prompting and practical AI usage. The program helped me understand how to write better prompts,
                    iterate efficiently, and get consistent results — which is becoming an important skill in modern
                    development workflows.
                  </div>

                  <div className="mediaText">
                    I focused on learning how to communicate clearly with AI tools, how to break down problems, and how
                    to apply prompting to real tasks like writing, brainstorming, and problem-solving. This certification
                    improved my ability to use AI productively while staying intentional about the output quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container">
            <h2 className="sectionTitle">Let’s Connect</h2>

            <div className="grid2 contactGrid">
              <div className="contactInfo">
                <h3 className="contactTitle">Get in Touch</h3>
                <p className="text">Open to internship opportunities, collaborations, or a quick chat about tech and projects.</p>

                <div className="contactRow">
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">mohdcalcuttawala1101@gmail.com</div>
                </div>

                <div className="contactRow">
                  <div className="contactLabel">Phone</div>
                  <div className="contactValue">+971 50 785 5601</div>
                </div>

                <div className="contactRow">
                  <div className="contactLabel">LinkedIn</div>
                  <div className="contactValue">linkedin.com/in/mohammedcalcuttawala</div>
                </div>

                <div className="contactRow">
                  <div className="contactLabel">GitHub</div>
                  <div className="contactValue">github.com/mhc1997279</div>
                </div>
              </div>

              <div className="formCard">
                <h3 className="contactTitle">Send a Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="formGrid">
                    <input
                      className="input"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      className="input"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <input
                    className="input"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />

                  <textarea
                    className="textarea"
                    placeholder="Your Message"
                    rows={7}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <button className="btn" type="submit" disabled={formStatus.loading}>
                    {formStatus.loading ? "Sending..." : "Send Message"}
                  </button>

                  {formStatus.success && (
                    <p className="text" style={{ marginTop: 12 }}>
                      {formStatus.success}
                    </p>
                  )}

                  {formStatus.error && (
                    <p className="text" style={{ marginTop: 12 }}>
                      {formStatus.error}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="siteFooter">
        <div className="footerInner">
          <div>© 2026 Mohammed Huseni Calcuttawala</div>
          <a className="backTop" href="#top" data-scroll="1">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
