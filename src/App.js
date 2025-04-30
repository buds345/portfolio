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
      {/* Navigation */}
<nav className="navbar">
  
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#certificates">Certificates</a>
  
  <a href="#experience">Work Experience</a>

  <a href="/resume.pdf" download className="download-link">Download Resume</a>
  <a href="#contact">Contact</a>

  
</nav>


      {/* Main Content */}
      <main>
        {/* About Section */}
      {/* About Section */}
<section id="home" className="about-section">
  <h2>👋 About Me</h2>
  <p>
    I'm a passionate full-stack developer with experience in building
    interactive web applications, from front-end interfaces to back-end
    services. I enjoy turning ideas into reality through code.
  </p>
  <p>
    📚 I hold a <strong>Diploma in ICT</strong> specializing in <strong>Applications Development</strong>.
  </p>
</section>

{/* Work Experience Section */}
<section id="experience" className="experience-section">
  <h2>💼 Work Experience</h2>
  <div className="experience-card">
    <h3>Samsung Training Program</h3>
    <p><strong>Duration:</strong> 8 Months</p>
    <p>
      Participated in an intensive training program focused on <strong>coding, machine learning, and data science</strong>.
      Worked on real-world projects and developed both technical and analytical problem-solving skills.
    </p>
  </div>

  <div className="experience-card">
    <h3>Software Development Training At CAPACITI</h3>
    <p><strong>Duration:</strong> 1 Year (Ongoing)</p>
    <p>
      Currently undergoing professional software development training. Gaining hands-on experience in
      <strong> full-stack development</strong>, modern frameworks, and collaborative project environments.
    </p>
  </div>
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
            <span>FireBase</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
            <span>GitHub</span>
            <span>Java</span>
            <span>SQL</span>
            <span>Python</span>
          </div>
        </section>

       {/* Certificates Section */}
<section id="certificates" className="certificates-section">
  <h2>📜 Certificates</h2>
  <div className="certificates-grid">
    <div className="certificate-card">
      <embed src="/certificates/ubbt.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Emotional Intelligence Certificate</p>
      <a href="/certificates/ubbt.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/react-cert.pdf" type="application/pdf" width="100%" height="300px" />
      <p>React Certificate</p>
      <a href="/certificates/react-cert.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/ibm-skillsbuild.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Python For Data Science Certificate</p>
      <a href="/certificates/ibm-skillsbuild.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/gig-cert.pdf" type="application/pdf" width="100%" height="300px" />
      <p>HTML CSS & Java Certificate</p>
      <a href="/certificates/gig-cert.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/digital-cert.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Digital Skills Certificate</p>
      <a href="/certificates/digital-cert.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/coursera.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Developing Interpersonal Skills Certificate</p>
      <a href="/certificates/coursera.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/att.pdf" type="application/pdf" width="100%" height="300px" />
      <p>HTML CSS & JavaScript Certificate</p>
      <a href="/certificates/att.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/alttt.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Introduction to Python Certificate</p>
      <a href="/certificates/alttt.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/altt.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Writing Professional Emails</p>
      <a href="/certificates/altt.pdf" download>Download</a>
    </div>

    <div className="certificate-card">
      <embed src="/certificates/alt.pdf" type="application/pdf" width="100%" height="300px" />
      <p>Verbal Communication & Presentation Skills</p>
      <a href="/certificates/alt.pdf" download>Download</a>
    </div>

    
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
