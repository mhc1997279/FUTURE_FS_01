import "./App.css";
import {
  profile,
  experience,
  education,
  awards,
  certifications,
} from "./profileData";

export default function App() {
  return (
    <div className="page" id="top">
      <nav className="nav">
        <div className="brand">Mohammed Calcuttawala</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#achievements">Honors</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a className="pill" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <header className="hero">
        <p className="kicker">Full Stack Web Development • Portfolio</p>

        <h1 className="title">Building clean, modern web experiences.</h1>

        <p className="subtitle">
          Task 1 portfolio website showcasing skills and projects, with a
          contact form (email notifications + database).
        </p>

        <div className="btnRow">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a
            className="btn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main className="main">
        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About</h2>

          <div className="profileCard">
            {/* Placeholder avatar (we’ll replace with real photo later) */}
            <div className="avatar" aria-hidden="true" />

            <div>
              <h3 className="profileName">{profile.name}</h3>
              <p className="headline">{profile.headline}</p>

              <div className="btnRow">
                <a
                  className="btn"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="aboutText">
            {profile.about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2>Skills</h2>

          <div className="grid">
            <div className="card">
              <h3>Frontend</h3>
              <ul>
                <li>HTML, CSS</li>
                <li>JavaScript (learning)</li>
                <li>React (learning)</li>
              </ul>
            </div>

            <div className="card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js (learning)</li>
                <li>Express (learning)</li>
              </ul>
            </div>

            <div className="card">
              <h3>Database & Tools</h3>
              <ul>
                <li>MySQL (learning)</li>
                <li>Git & GitHub</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <h2>Experience</h2>

          <div className="stack">
            {experience.map((item, idx) => (
              <div className="card" key={idx}>
                <h3>{item.title}</h3>
                <p className="muted">
                  {item.company} • {item.dates} • {item.location}
                </p>
                <ul className="bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <h2>Education</h2>

          <div className="stack">
            {education.map((ed, idx) => (
              <div className="card" key={idx}>
                <h3>{ed.school}</h3>
                <p className="muted">{ed.program}</p>
                <p className="muted">{ed.dates}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HONORS + CERTIFICATIONS */}
        <section id="achievements" className="section">
          <h2>Honors & Certifications</h2>

          <div className="grid2">
            <div className="card">
              <h3>Honors & Awards</h3>
              <ul className="bullets">
                {awards.map((a, idx) => (
                  <li key={idx}>
                    <b>{a.title}</b>
                    <div className="muted">
                      {a.org} • {a.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Licenses & Certifications</h3>
              <ul className="bullets">
                {certifications.map((c, idx) => (
                  <li key={idx}>
                    <b>{c.title}</b>
                    <div className="muted">
                      {c.org} • {c.date}
                    </div>
                    <div className="meta">
                      {c.tags.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="grid">
            <div className="card">
              <h3>Task 1 — Portfolio Website</h3>
              <p>Professional one-page portfolio with contact form workflow.</p>
              <div className="meta">
                <span>React</span>
                <span>Vite</span>
              </div>
            </div>

            <div className="card">
              <h3>Task 2 — Mini CRM</h3>
              <p>
                Client lead management system with CRUD and statuses (coming
                soon).
              </p>
              <div className="meta">
                <span>React</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="card">
              <h3>Task 3 — Local Business Website</h3>
              <p>
                Professional website for a real local business + pitch (coming
                soon).
              </p>
              <div className="meta">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="section">
          <h2>Resume</h2>
          <p className="muted">Add your resume PDF later and link it here.</p>
          <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
            Download Resume (PDF)
          </a>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="muted">
            Next we’ll connect this form to a Node.js/Express API and send email
            notifications (and store messages in MySQL).
          </p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <input placeholder="Your name" />
              <input placeholder="Your email" />
            </div>
            <input placeholder="Subject" />
            <textarea rows="5" placeholder="Message" />
            <button className="btn primary" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} • FUTURE_FS_01
        </p>
        <div className="footerLinks">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
