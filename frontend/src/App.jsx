import "./App.css";

export default function App() {
  return (
    <div className="page" id="top">
      <nav className="nav">
        <div className="brand">Mohammed Calcuttawala</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a className="pill" href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <p className="kicker">Full Stack Web Development • Portfolio</p>

        <h1 className="title">Building clean, modern web experiences.</h1>

        <p className="subtitle">
          Task 1 portfolio website showcasing skills and projects, with a contact form (email notifications + database).
        </p>

        <div className="btnRow">
          <a className="btn primary" href="#projects">View Projects</a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/mohammedcalcuttawala/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </header>

      <main className="main">
        <section id="about" className="section">
          <h2>About</h2>
          <p>
            I’m Mohammed Calcuttawala. I’m learning full-stack development by building real projects using HTML, CSS, JavaScript, React, Node.js/Express, and MySQL.
          </p>
        </section>

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

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="grid">
            <div className="card">
              <h3>Task 1 — Portfolio Website</h3>
              <p>Professional one-page portfolio with contact form workflow.</p>
              <div className="meta">
                <span>React</span><span>Vite</span>
              </div>
            </div>

            <div className="card">
              <h3>Task 2 — Mini CRM</h3>
              <p>Client lead management system with CRUD and statuses (coming soon).</p>
              <div className="meta">
                <span>React</span><span>Express</span><span>MySQL</span>
              </div>
            </div>

            <div className="card">
              <h3>Task 3 — Local Business Website</h3>
              <p>Professional website for a real local business + pitch (coming soon).</p>
              <div className="meta">
                <span>HTML</span><span>CSS</span><span>JS</span>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          <h2>Resume</h2>
          <p className="muted">Add your resume PDF later and link it here.</p>
          <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
            Download Resume (PDF)
          </a>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="muted">
            Next we’ll connect this form to a Node.js/Express API and send email notifications (and store messages in MySQL).
          </p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <input placeholder="Your name" />
              <input placeholder="Your email" />
            </div>
            <input placeholder="Subject" />
            <textarea rows="5" placeholder="Message" />
            <button className="btn primary" type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mohammed Calcuttawala • FUTURE_FS_01</p>
        <div className="footerLinks">
          <a href="https://www.linkedin.com/in/mohammedcalcuttawala/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
