import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="app-container">
      {/* Profile Picture */}
      <div className="profile-pic-wrapper">
        <img
          src="/images/profile.png.jpg"
          alt="Profile"
          className="profile-pic"
          onClick={toggleModal}
        />
      </div>

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
        <h1>Banele Xhamlashe</h1>
        <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" download className="download-link">
          Download Resume
        </a>
      </nav>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="home" className="about-section">
          <h2>👋 About Me</h2>
          <p>
            I'm a passionate full-stack developer with experience in building
            interactive web applications, from front-end interfaces to back-end
            services. I enjoy turning ideas into reality through code.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>💼 Featured Projects</h2>

          {/* Developer Chatroom */}
          <div className="project-card">
            <h3>Developer Chatroom</h3>
            <p>
              A real-time chatroom where software developers can share ideas,
              solve problems, and collaborate.
            </p>
            <iframe
              src="https://zippy-gelato-c01893.netlify.app/"
              title="Developer Chatroom"
              width="100%"
              height="500"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            ></iframe>
            <a
              href="https://zippy-gelato-c01893.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in New Tab
            </a>
          </div>

          {/* Jewellery Website */}
          <div className="project-card">
            <h3>Jewellery & Watches Website</h3>
            <p>
              A stylish, responsive promotional site for showcasing luxury
              jewellery and watch collections.
            </p>
            <iframe
              src="https://buds345.github.io/Home-Page/index.html"
              title="Jewellery & Watches Website"
              width="100%"
              height="500"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            ></iframe>
            <a
              href="https://buds345.github.io/Home-Page/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in New Tab
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2>🛠️ Tech Stack</h2>
          <div className="skills-list">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
            <span>Git & GitHub</span>
            <span>Java</span>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>📬 Contact</h2>
          <p>
            Email: <a href="mailto:banelebanele938@gmail.com">banelebanele938@gmail.com</a>
          </p>

          <p>Phone Number : 0631870585</p>
          <div className="social-links">
            <a
              href="https://github.com/buds345"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/banele-xhamlashe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Banele Xhamlashe. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
