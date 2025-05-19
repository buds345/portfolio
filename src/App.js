import React, { useState } from "react";
import "./App.css";
import emailjs from "emailjs-com";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt,
  FaJs, FaGithub
} from "react-icons/fa";
import { SiFirebase, SiMysql } from "react-icons/si";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const toggleCertificates = () => setShowAllCertificates(!showAllCertificates);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7dzaajo',
      'template_njfe2a9',
      e.target,
      'UNJuky8z2tgIwOW77'
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Oops! Something went wrong. Please try again.");
      }
    );

    e.target.reset();
  };

  const allSkills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Firebase", icon: <SiFirebase color="#FFA611" /> },
    { name: "SQL", icon: <SiMysql color="#00758F" /> },
  ];

  const visibleSkills = showAllSkills ? allSkills : allSkills.slice(0, 3);

  const allCertificates = [
    { src: "/certificates/ubbt.pdf", label: "Emotional Intelligence" },
    { src: "/certificates/react-cert.pdf", label: "React" },
    { src: "/certificates/ibm-skillsbuild.pdf", label: "Python For Data Science" },
    { src: "/certificates/gig-cert.pdf", label: "HTML CSS & Java" },
    { src: "/certificates/digital-cert.pdf", label: "Digital Skills" },
    { src: "/certificates/coursera.pdf", label: "Interpersonal Skills" },
    { src: "/certificates/att.pdf", label: "HTML CSS & JavaScript" },
    { src: "/certificates/alttt.pdf", label: "Intro to Python" },
    { src: "/certificates/altt.pdf", label: "Professional Emails" },
    { src: "/certificates/alt.pdf", label: "Verbal & Presentation Skills" },
    { src: "/certificates/aiw.pdf", label: "Node.js & Express" }
  ];

  const visibleCertificates = showAllCertificates
    ? allCertificates
    : allCertificates.slice(0, 3);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="/images/profile.png.jpg"
            alt="Profile"
            className="navbar-profile-pic"
            onClick={toggleModal}
          />
          <span className="nav-name">Banele Xhamlashe</span>
        </div>
        <div className="navbar-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#experience">Work Experience</a>
          <a href="/resume.pdf" download className="download-link">
            Download Resume
          </a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={toggleModal}>
          <img
            src="/images/profile.png.jpg"
            alt="Full Profile"
            className="modal-content"
          />
        </div>
      )}

      {/* Header */}
      <header className="header">
        <h1>Welcome!</h1>
        <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
      </header>

      {/* About */}
      <section id="home" className="about-section">
        <h2>👋 About Me</h2>
        <div className="about-card">
          <p>
            Hello! I'm <strong>Banele Xhamlashe</strong>, a passionate and driven Full-Stack Developer based in the Eastern Cape. I specialize in building modern, interactive, and responsive web applications that solve real-world problems.
          </p>
          <p>
            🎓 I recently completed my <strong>Diploma in Information and Communication Technology</strong> specializing in <strong>Applications Development</strong> at <strong>Walter Sisulu University</strong> in 2024.
          </p>
          <p>
            🚀 I'm constantly expanding my knowledge in areas like AI, cloud technologies, and system design. Whether working solo or in a team, I thrive in fast-paced environments where creative problem-solving is key.
          </p>
        </div>
      </section>



      {/* Work Experience */}
      <section id="experience" className="experience-section">
        <h2>💼 Work Experience</h2>
        <div className="experience-grid">
          <div className="experience-card exp1">
            <h3>Samsung Training Programme</h3>
            <p><strong>Duration:</strong> 8 Months</p>
            <p>
              Completed an intensive program focusing on <strong>software development</strong>, <strong>machine learning</strong>, and practical industry-ready coding skills. Built multiple real-world projects in a team-based setting.
            </p>
          </div>
          <div className="experience-card exp2">
            <h3>Software Development Training – CAPACITI</h3>
            <p><strong>Duration:</strong> 1 Year (Ongoing)</p>
            <p>
              Gained hands-on full-stack development experience working with modern tech stacks. Contributed to live projects using React, Node.js, and SQL, while refining project planning and agile methodology skills.
            </p>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="projects-section">
        <h2>💼 Featured Projects</h2>
        <div className="project-card">
          <h3>Developer Chatroom</h3>
          <img src="/images/chatroom.PNG" alt="Chatroom Screenshot" className="project-screenshot" />
          <p>Real-time collaboration platform for developers.</p>
          <a href="https://zippy-gelato-c01893.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
        <div className="project-card">
          <h3>Jewellery Website</h3>
          <img src="/images/jewellery website.PNG" alt="Jewellery Website Screenshot" className="project-screenshot" />
          <p>Responsive  website for jewellery watches.</p>
          <a href="https://buds345.github.io/Home-Page/" target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <h2>🛠️ Tech Stack</h2>
        <div className="skills-list">
          {visibleSkills.map((skill, idx) => (
            <div className="skill-item" key={idx}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <button className="toggle-skills-btn" onClick={() => setShowAllSkills(!showAllSkills)}>
          {showAllSkills ? "Show Less" : "View More Skills"}
        </button>
      </section>

      {/* Certificates */}
      <section id="certificates" className="certificates-section">
        <h2>📜 Certificates</h2>
        <div className="certificate-grid">
          {visibleCertificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <iframe src={cert.src} className="certificate-pdf" title={cert.label}></iframe>
              <p>{cert.label}</p>
            </div>
          ))}
        </div>
        <button onClick={toggleCertificates} className="toggle-certificates-btn">
          {showAllCertificates ? "See Less" : "See More Certificates"}
        </button>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <h2>📬 Contact</h2>
        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://github.com/buds345" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/banele-xhamlashe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} Banele Xhamlashe. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
