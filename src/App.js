import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import emailjs from "emailjs-com";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt,
  FaJs, FaGithub, FaBars, FaTimes, FaFilePdf, FaExternalLinkAlt
} from "react-icons/fa";
import { SiFirebase, SiMysql } from "react-icons/si";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  const toggleModal = () => setShowModal(!showModal);
  const toggleCertificates = () => setShowAllCertificates(!showAllCertificates);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set up intersection observer for scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    handleResize();
    window.addEventListener("resize", handleResize);

    // Check hash on initial load
    const hash = window.location.hash.substring(1);
    if (hash && sectionRefs.current[hash]) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setActiveSection(id);
    scrollToSection(id);
    if (isMobile) setMenuOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_7dzaajo",
      "template_njfe2a9",
      e.target,
      "UNJuky8z2tgIwOW77"
    )
      .then(
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
    
    { src: "/certificates/react-cert.pdf", label: "React Certification" },
    
    
    { src: "/certificates/digital-cert.pdf", label: "Digital Skills" },
    { src: "/certificates/coursera.pdf", label: "Interpersonal Skills" },
    { src: "/certificates/att.pdf", label: "HTML CSS & JavaScript" },
    { src: "/certificates/alttt.pdf", label: "Intro to Python" },
    { src: "/certificates/altt.pdf", label: "Professional Emails" },
    { src: "/certificates/alt.pdf", label: "Verbal & Presentation Skills" },
    { src: "/certificates/aiw.pdf", label: "Node.js & Express" },
    { src: "/certificates/BaneleGIG.pdf", label: "Intro to Machine Learning on AWS" },
    { src: "/certificates/BaneleGIGG.pdf", label: "Machine Learning with Python" },
    { src: "/certificates/Coursera G8QY2I8RRKJW.pdf", label: "Intro to Responsible Ai" },
    { src: "/certificates/Coursera TQR3WIHKB9AK.pdf", label: "Programming with Java" },
    { src: "/certificates/aiw.pdf", label: "Developing Back-end Apps with Node.js & express" }
  ];

  const visibleCertificates = showAllCertificates
    ? allCertificates
    : allCertificates.slice(0, 3);

  return (
    <div className="app-container">
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

        {isMobile ? (
          <>
            <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {menuOpen && (
              <div className="mobile-menu">
                <a href="#home" onClick={(e) => handleNavClick("home", e)} className={activeSection === "home" ? "active" : ""}>Home</a>
                <a href="#experience" onClick={(e) => handleNavClick("experience", e)} className={activeSection === "experience" ? "active" : ""}>Work Experience</a>
                <a href="#projects" onClick={(e) => handleNavClick("projects", e)} className={activeSection === "projects" ? "active" : ""}>Projects</a>
                <a href="#skills" onClick={(e) => handleNavClick("skills", e)} className={activeSection === "skills" ? "active" : ""}>Skills</a>
                <a href="#certificates" onClick={(e) => handleNavClick("certificates", e)} className={activeSection === "certificates" ? "active" : ""}>Certificates</a>
                <a href="/resume.pdf" download className="download-link" onClick={() => setMenuOpen(false)}>
                  Download Resume
                </a>
                <a href="#contact" onClick={(e) => handleNavClick("contact", e)} className={activeSection === "contact" ? "active" : ""}>Contact</a>
              </div>
            )}
          </>
        ) : (
          <div className="navbar-links">
            <a href="#home" onClick={(e) => handleNavClick("home", e)} className={activeSection === "home" ? "active" : ""}>Home</a>
            <a href="#experience" onClick={(e) => handleNavClick("experience", e)} className={activeSection === "experience" ? "active" : ""}>Work Experience</a>
            <a href="#projects" onClick={(e) => handleNavClick("projects", e)} className={activeSection === "projects" ? "active" : ""}>Projects</a>
            <a href="#skills" onClick={(e) => handleNavClick("skills", e)} className={activeSection === "skills" ? "active" : ""}>Skills</a>
            <a href="#certificates" onClick={(e) => handleNavClick("certificates", e)} className={activeSection === "certificates" ? "active" : ""}>Certificates</a>
            <a href="/resume.pdf" download className="download-link">
              Download Resume
            </a>
            <a href="#contact" onClick={(e) => handleNavClick("contact", e)} className={activeSection === "contact" ? "active" : ""}>Contact</a>
          </div>
        )}
      </nav>

      {showModal && (
        <div className="modal" onClick={toggleModal}>
          <img
            src="/images/profile.png.jpg"
            alt="Full Profile"
            className="modal-content"
          />
        </div>
      )}

      <header className="header">
        <h1>Welcome!</h1>
        <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
      </header>

      <section
        id="home"
        ref={(el) => (sectionRefs.current["home"] = el)}
        className={`about-section ${activeSection === "home" ? "active-section" : ""}`}
      >
        <h2>👋 About Me</h2>
        <div className="about-card">
          <p>
            Hello! I'm <strong>Banele Xhamlashe</strong>, a passionate and driven Full-Stack Developer from Eastern Cape, South Africa. I'm deeply committed to creating digital solutions that solve real-world problems and make a positive impact in people's lives.
          </p>
          <p>
            🎓 I hold a <strong>Diploma in Information and Communication Technology</strong> with a specialization in <strong>Applications Development</strong>, completed at <strong>Walter Sisulu University</strong> in 2024. I've also completed an intensive 8-month <strong>Samsung Advanced Technology Training Program</strong>, which sharpened my skills in software engineering and mobile app development.
          </p>
          <p>
            💻 My technical stack includes <strong>Java, Python, React, HTML CSS & JavaScript, Firebase, SQL, VB.NET</strong>, and even <strong>MIPS Assembly</strong>. I enjoy building everything from clean user interfaces to powerful backend systems.
          </p>
          <p>
            🚀 I have a strong passion for <strong>Artificial Intelligence and system design</strong>. I'm naturally curious and love learning new technologies and frameworks. My goal is to grow as a developer and contribute to projects that make a meaningful difference.
          </p>
          <p>
            🛠️ I've participated in hackathon Telkom learn that took place in 2024 in East London and I'm always seeking opportunities to collaborate, innovate, and elevate my craft.
          </p>
          <p>
            Let's build the future, one line of code at a time. 🌍✨
          </p>
        </div>
      </section>

      <section
        id="experience"
        ref={(el) => (sectionRefs.current["experience"] = el)}
        className={`experience-section ${activeSection === "experience" ? "active-section" : ""}`}
      >
        <h2>💼 Work Experience</h2>
        <div className="experience-grid">
          <div className="experience-card exp1">
            <h3>Samsung Training Programme</h3>
            <p><strong>Duration:</strong> April 2024 - November 2024(8 months)</p>
            <p>
              Completed an intensive, hands-on training program focused on <strong>software development, mobile app creation, Machine Learning</strong>, and <strong>Deep Learning</strong>.
            </p>
            <p>
              Developed multiple real-world applications, learned advanced coding practices, and gained exposure to software integration. The program included team-based projects, daily coding challenges, and soft-skills development.
            </p>
            <p>
              Highlights:
              <ul>
                <li>Built a BCMM APP for BCM Residents to have communication platform with their municipality</li>
                <li>Participated in coding sprints and collaborative debugging sessions</li>
              </ul>
            </p>
          </div>

          <div className="experience-card exp2">
            <h3>Software Development Training – CAPACITI</h3>
            <p><strong>Duration:</strong> January 2025 - December 2025(1 year)</p>
            <p>
              Actively enrolled in a full-time training programme by <strong>CAPACITI</strong>, enhancing my skills in <strong>full-stack web development</strong>, <strong>Agile methodology</strong>, and <strong>project-based learning</strong>.
            </p>
            <p>
              We are developing real-world apps using technologies like React, Node.js, Express, and Firebase.
            </p>
            <p>
              Highlights:
              <ul>
                <li>Collaborated on a task management system with real-time updates</li>
                <li>Engaged in group projects simulating real client scenarios</li>
                <li>Learned effective debugging, testing, and deployment strategies</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className={`projects-section ${activeSection === "projects" ? "active-section" : ""}`}
      >
        <h2>💼 Featured Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Digital Help Desk</h3>
            <img src="/images/MARKETING GENERATOR.JPG" alt="Digital Help Desk" className="project-screenshot" />
            <p>Digital Help Desk</p>
            <a href="https://smsolutionspe.co.za/app/client-login" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
          <div className="project-card">
            <h3>Developer Chatroom</h3>
            <img src="/images/chatroom.PNG" alt="Chatroom Screenshot" className="project-screenshot" />
            <p>Real-time collaboration platform for developers.</p>
            <a href="https://zippy-gelato-c01893.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
          <div className="project-card">
            <h3>Jewellery Website</h3>
            <img src="/images/jewellery website.PNG" alt="Jewellery Website Screenshot" className="project-screenshot" />
            <p>Responsive website for jewellery watches.</p>
            <a href="https://buds345.github.io/Home-Page/" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        ref={(el) => (sectionRefs.current["skills"] = el)}
        className={`skills-section ${activeSection === "skills" ? "active-section" : ""}`}
      >
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

      <section
        id="certificates"
        ref={(el) => (sectionRefs.current["certificates"] = el)}
        className={`certificates-section ${activeSection === "certificates" ? "active-section" : ""}`}
      >
        <h2>📜 Certificates</h2>
        <div className="certificate-grid">
          {visibleCertificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-icon">
                <FaFilePdf size={48} color="#e74c3c" />
              </div>
              <div className="certificate-info">
                <h3>{cert.label}</h3>
                <a 
                  href={cert.src} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-certificate-btn"
                >
                  <FaExternalLinkAlt /> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={toggleCertificates} className="toggle-certificates-btn">
          {showAllCertificates ? "See Less" : "See More Certificates"}
        </button>
      </section>

      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        className={`contact-section ${activeSection === "contact" ? "active-section" : ""}`}
      >
        <h2>📬 Contact</h2>
        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://github.com/buds345" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/banele-xhamlashe-888316331" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} Banele Xhamlashe. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
