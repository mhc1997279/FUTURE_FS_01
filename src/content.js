// Asset imports
import heroImage from "./assets/hero.jpg";
import img1 from "./assets/img1.png";
import bookmyeventLogo from "./assets/bookmyevent_logo.png";
import guiStart from "./assets/gui_start.png";
import f1Preview from "./assets/f1_preview.png";
import ps6Preview from "./assets/ps6_preview.png";
import deansList2024 from "./assets/dean's_list_2024.jpg";
import deansList2025 from "./assets/dean's_list_2025.jpg";
import deansListFall2025 from "./assets/dean's_list_fall_2025.png";
import certificateAws from "./assets/certificate_aws.png";
import certificateOneMillion from "./assets/certificate_one_million.png";
import logo1 from "./assets/logo1.jpg";
import logo2 from "./assets/logo2.png";
import cvPdf from "./assets/Mohammed_Huseni_Calcuttawala_CV.pdf";

// Profile Data
export const profile = {
  name: "Mohammed Huseni Calcuttawala",
  role: "Aspiring Software Engineer",
  email: "mohdcalcuttawala1101@gmail.com",
  phone: "+971 50 785 5601",
  github: {
    url: "https://github.com/mhc1997279",
    text: "github.com/mhc1997279",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/mohammedcalcuttawala/",
    text: "linkedin.com/in/mohammedcalcuttawala",
  },
  cvPdf,
};

// Hero Section
export const hero = {
  image: img1,
  headline: "I turn ideas into working systems.",
  paragraphs: [
    "From frontend UI to backend logic and databases — I build clean, structured projects that feel production-ready.",
    "I focus on readable code, practical engineering decisions, and creating smooth user experiences.",
  ],
};

// About Section
export const about = {
  title: "About Me",
  paragraphs: [
    "I'm currently studying computing while actively building software projects beyond coursework. I'm interested in understanding how systems work end-to-end — from user interfaces to backend logic and data processing.",
    "My experience includes backend services, frontend applications, and AI/ML-based projects. I enjoy structuring APIs, designing clean interfaces, and exploring how machine learning can be applied to practical problems.",
    "I focus on writing readable code, organizing projects clearly, and solving problems thoughtfully rather than rushing quick fixes. My goal is to continue growing across AI, backend, and frontend engineering while building systems that are dependable and well-designed.",
  ],
};

// Experience Section
export const experience = [
  {
    id: 1,
    logo: logo1,
    role: "Full Stack Web Development Intern",
    company: "Future Interns • Remote",
    dates: "Jan 2026 – Present",
    bullets: [
      "Built portfolio website, Mini CRM, and a local business website as deliverables.",
      "Worked across frontend, backend, and database layers for functional applications.",
      "Used GitHub workflows for version control, review, and submissions.",
    ],
  },
  {
    id: 2,
    logo: logo2,
    role: "Artificial Intelligence Intern",
    company: "Corizo Edutech Pvt Ltd • Remote",
    dates: "Jan 2026 – Present",
    bullets: [
      "Learning applied AI/ML concepts through structured modules and tasks.",
      "Building project work with focus on practical outcomes and reporting.",
      "Improving technical communication and delivery cadence.",
    ],
  },
];

// Projects Section
export const projects = [
  {
    id: 1,
    title: "BookMyEvent — Event Booking Web Application",
    image: bookmyeventLogo,
    meta: "Jan 2026 – Present • Associated with RIT Dubai",
    description:
      "Developing a full-stack event booking web application designed to simulate a real-world event management and booking platform. The system supports event listings, user interactions, and booking workflows. It integrates backend APIs with database functionality and a structured front-end interface to manage event data and user actions.",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "Quiz GUI Application (Java)",
    image: guiStart,
    meta: "Jan 2025 – May 2025 • Associated with RIT Dubai",
    description:
      "Developed a Java-based Quiz GUI application designed to simulate a timed, competitive quiz environment. The app presents randomly selected questions, enforces time limits, and evaluates responses automatically.",
    tags: ["Java", "JavaFX", "OOP", "GUI"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Formula 1 Team Website",
    image: f1Preview,
    meta: "Nov 2025 – Dec 2025 • Associated with RIT Dubai",
    description:
      "Designed and developed a front-end website themed around a Formula 1 racing team, with a strong focus on layout, branding, and modern UI structure. I worked on creating consistent spacing, typography, and visual hierarchy so that the site looks clean and professional. I also focused on responsive design, ensuring the layout adapts well across different screen sizes. This project improved my understanding of web structure, CSS styling, and how to design pages that feel cohesive instead of \"random sections.\"",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "PS6 Promotional Website",
    image: ps6Preview,
    meta: "Oct 2025 – Nov 2025 • Associated with RIT Dubai",
    description:
      "Built a promotional landing page concept for a fictional PlayStation 6 launch, designed to look like a real product marketing page. The goal was to create a modern UI/UX feel using strong hero design, product-focused sections, and a layout that guides the viewer smoothly down the page. I focused on clean styling, section organization, and creating a strong \"product identity\" using typography, spacing, and consistent visuals. This project helped me improve my ability to design landing pages that look polished, not just functional.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    github: "",
    demo: "",
  },
];

// Skills Section
export const skills = {
  programming: ["Java", "Python"],
  web: ["HTML", "CSS", "JavaScript", "React (Beginner)"],
  backend: ["SQL", "REST APIs", "Node.js (Beginner)", "Spring Boot (Beginner)"],
  tools: ["Git", "GitHub", "VS Code"],
  soft: [
    "Problem Solving",
    "Debugging",
    "Team Collaboration",
    "Leadership",
    "Attention to Detail",
  ],
};

// Education Section
export const education = [
  {
    id: 1,
    school: "Rochester Institute of Technology, Dubai (RIT Dubai)",
    degree: "Bachelor of Computational and Informational Technology (CIT)",
    dates: "2024 – 2028",
    paragraph:
      "At RIT Dubai, I'm building strong foundations in software engineering, databases, web development, and system design. My coursework and projects have helped me strengthen problem-solving, programming fundamentals, and practical development skills — especially through assignments that involve building complete applications.",
    tags: ["CGPA: 3.83", "Dean's List"],
  },
  {
    id: 2,
    school: "Delhi Private School, Sharjah",
    degree: "High School Diploma",
    dates: "2010 – 2024",
    paragraph:
      "During high school at Delhi Private School, I developed consistent academic habits, communication skills, and discipline — which became the foundation for my current growth in technology and engineering. My interest in problem-solving and computers continued to grow over time, and I began moving toward software development as a serious career path.",
    tags: [],
  },
];

// Awards Section
export const awards = [
  {
    id: 1,
    image: deansList2024,
    caption: "Dean's List — Fall 2024",
  },
  {
    id: 2,
    image: deansList2025,
    caption: "Dean's List — Spring 2025",
  },
  {
    id: 3,
    image: deansListFall2025,
    caption: "Dean's List — Fall 2025",
  },
];

// Certifications Section
export const certifications = [
  {
    id: 1,
    image: certificateAws,
    title: "AWS Solutions Architecture — Forage",
    description:
      "Completed the AWS APAC Solutions Architecture program on Forage, where I learned how to think about cloud systems from an architectural perspective. The experience focused on designing scalable and reliable solutions, considering factors like availability, security, and performance. Through the program, I practiced designing a hosting architecture that supports growth, handles traffic efficiently, and follows good cloud practices. It helped me build a stronger understanding of how modern applications are deployed and what decisions matter when building cloud-ready systems.",
  },
  {
    id: 2,
    image: certificateOneMillion,
    title: "One Million Prompters — Dubai Future Foundation",
    description:
      "Completed the One Million Prompters initiative, where I gained hands-on experience with structured prompting and practical AI usage. The program helped me understand how to write better prompts, iterate efficiently, and get consistent results — which is becoming an important skill in modern development workflows. I focused on learning how to communicate clearly with AI tools, how to break down problems, and how to apply prompting to real tasks like writing, brainstorming, and problem-solving. This certification improved my ability to use AI productively while staying intentional about the output quality.",
  },
];

// Contact Section
export const contact = {
  title: "Let's Connect",
  description:
    "Open to internship opportunities, collaborations, or a quick chat about tech and projects.",
};

// Navigation Links
export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// Export background image
export { heroImage };
