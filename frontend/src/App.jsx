export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ margin: 0 }}>Mohammed</h1>
        <p style={{ marginTop: "8px", color: "#555" }}>
          Full Stack Web Development Intern • Portfolio
        </p>

        <div style={{ marginTop: "16px" }}>
          <a href="#projects" style={{ marginRight: "12px" }}>Projects</a>
          <a href="#skills" style={{ marginRight: "12px" }}>Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <section id="projects" style={{ marginBottom: "40px" }}>
        <h2>Projects</h2>
        <ul>
          <li><b>Task 1:</b> Personal Portfolio Website (this site)</li>
          <li><b>Task 2:</b> Mini CRM System (coming soon)</li>
          <li><b>Task 3:</b> Local Business Website (coming soon)</li>
        </ul>
      </section>

      <section id="skills" style={{ marginBottom: "40px" }}>
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS</li>
          <li>JavaScript (learning)</li>
          <li>React (learning)</li>
          <li>Node.js + Express (learning)</li>
          <li>MySQL (learning)</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Next we will build a real contact form here that saves messages and emails you.</p>
      </section>
    </div>
  );
}
