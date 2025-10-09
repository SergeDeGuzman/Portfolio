import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "./Header";
import { useState } from "react";
import Hero3D from "./Hero3D";
import Contact from "./Contact";

export default function App() {
  const projects = [
  {
    title: "Survey/Questionnaire Application",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "https://your-portfolio.com",
    tags: ["PHP", "Laravel","MySQL"],
    buttons: [
      { text: "View More", url: "https://github.com/SergeDeGuzman/Survey-App" }
    ],
    src: "/projects/Survey App.png"
  },
  {
    title: "Paper Recyclability Detection Using YOLOv8",
    description: "A full-stack shopping platform with cart and checkout features.",
    link: "https://github.com/yourname/ecommerce-app",
    tags: ["Python", "Pytorch","TensorFlow","OpenCV"],  
    buttons: [
      { text: "View More", url: "https://github.com/SergeDeGuzman/Paper-Recyclability-Detection" },
      { text: "Try Model", url: "https://universe.roboflow.com/serge-de-guzman-and-christian-gomez/paper-recyclability-detection/model/5" }
    ],
    src: "/projects/Paper Recyclability Detection.mp4"
  },
];

const tagColors = {
  React: "linear-gradient(135deg, #3b82f6, #2563eb)", // Blue
  Tailwind: "linear-gradient(135deg, #06b6d4, #0ea5e9)", // Cyan
  Nodejs: "linear-gradient(135deg, #22c55e, #16a34a)", // Green
  Express: "linear-gradient(135deg, #111827, #1f2937)", // Dark Gray
  MongoDB: "linear-gradient(135deg, #10b981, #059669)", // Emerald
  Stripe: "linear-gradient(135deg, #8b5cf6, #7c3aed)", // Purple
  PHP: "linear-gradient(135deg, #474A8A)", // purple / black
  Laravel: "linear-gradient(135deg, #F05340, #6C6C6C)", // Red / Pink
  MySQL: "linear-gradient(135deg, #00758F, #F29111)", // Blue / Orange
  Python: "linear-gradient(135deg, #306998, #FFD43B)", // Blue / Yellow
  Pytorch: "linear-gradient(135deg, #EE4C2C, #EE4C2C)", // Dark Orange
  TensorFlow: "linear-gradient(135deg, #FF6F00, #FF6F00)", // Lighter Orange
  OpenCV: "linear-gradient(135deg, #FF0000, #0000FF)", // RGB
  Default: "linear-gradient(135deg, #a855f7, #6366f1)", // Violet fallback
};

const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      src: "/certificates/Full-stack web development bootcamp certficate.jpg",
      alt: "Fullstack Bootcamp",
      desc: "The Complete Full-Stack Web Development Bootcamp – Udemy"
    },
    {
      src: "/certificates/Cum_laude.jpg",
      alt: "Cum Laude",
      desc: "Cum Laude - Bachelor Of Science in Computer Science"
    },
    {
      src: "/certificates/Most Responsible.JPG",
      alt: "Most Responsible Award",
      desc: "Most Responsible – Torres Technology Center Corporation"
    },
    {
      src: "/certificates/Most Cooperative.JPG",
      alt: "Most Cooperative Award",
      desc: "Most Cooperative – Torres Technology Center Corporation"
    }
  ];

  return (
    <div className="relative z-0 bg-primary portfolio">
      <Header />

      {/* Hero Section */}
     <Hero3D />

  
      {/* About Section */}
      <div className="section-container">
      <section className="section about">
        <div className="section-header">
          <h2>Introduction</h2>
          <h1>Overview</h1>
        </div>
        <p>
          I'm a Software Engineer with experience in designing and developing
          modern web applications. I love solving real-world problems with
          clean, efficient code and creating beautiful user experiences.
        </p>
      </section>
      
      {/* Tech Stack Section */}
      <section className="section tech-stack">
        <div className="section-header">
          <h2>Skills</h2>
          <h1>Tech Stacks</h1>
        </div>
        <div className="glass">
        <ul className="tech-list">
          <li>⚛ React.js / Next.js</li>
          <li> PHP / Laravel</li>
          <li>⚡ JavaScript (ES6+)</li>
          <li>🌐 Node.js / Express</li>
          <li>🗄  MySQL</li>
          <li>☁ Git / GitHub / Deployment</li>
        </ul>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section experience">
        <div className="section-header">
          <h2>Career</h2>
          <h1>Work Experience</h1>
        </div>
        <div className="glass">
        <div className="experience-list">
          <div className="experience-item">
            <h2>Information Technology Intern</h2>
            <h3>Nordic Heel Unlimited, Inc.</h3>
            <span className="period">January 2025 – February 2025</span>
            <ul>
              <li>Developed an IT asset and inventory management system, including database creation, UI setup, dashboard 
                  visualization, and backend functionality. Debugged, fixed errors, and added functions in HR systems, the 
                  application form, and the Manpower Requisition Form.</li>
              <li>I received a job offer upon completion of the internship, recognizing my strong understanding of software 
                  development, effective troubleshooting skills, adaptability, and collaborative work ethic.</li>
              <li>Used PHP programming language, HTML5, CSS3, and phpMyAdmin.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h2>Work Immersion Trainee, IT Department</h2>
            <h3>Torres Technology Center Corporation.</h3>
            <span className="period">November 2019 – December 2019</span>
            <ul>
              <li>Gained experience in C++ programming, focusing on best practices and proper naming conventions.</li>
              <li>Awarded as "Most Responsible" and "Most Cooperative" for outstanding performance.</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="section project">
  <div className="section-header">
    <h2>Showcase</h2>
    <h1>My Projects</h1>
  </div>
  <div className="glass">
  <div className="project-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        
        {/* ✅ Conditional render for image or video */}
        {project.src.endsWith(".mp4") ? (
          <video
            src={project.src}
            className="project-media"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={project.src}
            alt={project.title}
            className="project-media"
          />
        )}

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Tags Section */}
        <div className="tags">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="tag"
              style={{ background: tagColors[tag] || tagColors.Default }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="buttons">
          {project.buttons.map((btn, i) => (
            <a key={i} href={btn.url} className="btn">
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
  </div>
</section>
</div>

      {/* TEST */} 
   


      {/* Achievements Section */}
      <section className="section achievements">
        <div className="section-header">
          <h2>Milestones</h2>
          <h1>Achievements & Certifications</h1>
        </div>

        <div className="achievements-gallery">
          {certificates.map((cert, i) => (
            <div class="achievements-card" onClick={() => setSelectedImage(cert.src)}>
            <div class="achievements-content">
            <img
              src={cert.src}
              alt={cert.alt}
            />
            <p className="card-title flicker">{cert.desc}</p>
            </div>
            </div>
          ))}
        </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Certificate" className="modal-img" />
        </div>
      )}
    </section>


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}
