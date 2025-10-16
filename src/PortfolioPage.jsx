import { 
    SiReact, 
    SiJavascript, 
    SiCss3, 
    SiHtml5, 
    SiPhp, 
    SiPostgresql, 
    SiNodedotjs, 
    SiExpress, 
    SiGit,  
    SiPostman 
} from "react-icons/si";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from './Backgrounds/Particles';
import GlassIcons from "./Components/GlassIcons";
import ProfileCard from './Components/ProfileCard';

export default function App() {
    const projects = [
        {
            title: "Survey/Questionnaire Application",
            description: "A Laravel-based web application designed to create, manage, and view surveys or questionnaires.",
            link: "https://your-portfolio.com",
            tags: ["Html","Css","PHP", "Laravel","PhpMyAdmin"],
            buttons: [
                { text: "View More", url: "https://github.com/SergeDeGuzman/Survey-App" }
            ],
            src: "/projects/Survey App.png"
        },
        {
            title: "Paper Recyclability Detection Using YOLOv8",
            description: "A real-time object detection and classification model using YOLOv8 for identifying recyclable paper based on predefined criteria and limitations.",
            link: "https://github.com/yourname/ecommerce-app",
            tags: ["Python", "Pytorch","Roboflow"],  
            buttons: [
                { text: "View More", url: "https://github.com/SergeDeGuzman/Paper-Recyclability-Detection" },
                { text: "Try Model", url: "https://universe.roboflow.com/serge-de-guzman-and-christian-gomez/paper-recyclability-detection/model/5" }
            ],
            src: "/projects/Paper Recyclability Detection.mp4"
        },
    ];

    const tagColors = {
        Html:" #E34F26",
        Css:"#1572B6",
        React: "linear-gradient(135deg, #3b82f6, #2563eb)",
        Tailwind: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
        Nodejs: "linear-gradient(135deg, #22c55e, #16a34a)",
        Express: "linear-gradient(135deg, #111827, #1f2937)",
        MongoDB: "linear-gradient(135deg, #10b981, #059669)",
        Stripe: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        PHP: " #474A8A",
        PhpMyAdmin:"linear-gradient(135deg, #6C78AF, #F89C0E)",
        Laravel: "linear-gradient(135deg, #F05340, #6C6C6C)",
        MySQL: "linear-gradient(135deg, #00758F, #F29111)",
        Python: "linear-gradient(135deg, #306998, #FFD43B)",
        Pytorch: "linear-gradient(135deg, #EE4C2C, #EE4C2C)",
        TensorFlow: "linear-gradient(135deg, #FF6F00, #FF6F00)",
        OpenCV: "linear-gradient(135deg, #FF0000, #0000FF)",
        Roboflow: "#6706CE",
        Default: "linear-gradient(135deg, #a855f7, #6366f1)",
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

    const items = [
        { icon: <SiHtml5 color="#E34F26" />, color: '#ffffffe5', label: 'HTML5' },
        { icon: <SiCss3 color="#1572B6" />, color: '#ffffffe5', label: 'CSS3' },
        { icon: <SiJavascript color="#F7DF1E" />, color: '#242424ff', label: 'JavaScript' },
        { icon: <SiReact color="#5bd9fcff" />, color: '#ffffffe5', label: 'React' },
        { icon: <SiNodedotjs color="#339933" />, color: '#ffffffe5', label: 'Node.js' },    
        { icon: <SiExpress color="#ffffffe5" />, color: '#242424ff', label: 'Express.js' },
        { icon: <SiPhp color="#777BB4" />, color: '#ffffffe5', label: 'PHP' },
        { icon: <SiPostgresql color="#000000ff" />, color: '#4169E1', label: 'PostgreSQL' },
        { icon: <SiGit color="#F05032" />, color: '#ffffffe5', label: 'Git' },
        { icon: <SiPostman color="#EF5B25" />, color: '#ffffffe5', label: 'Postman' },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true, anchorPlacement: "top-left" });
    }, []);

    return (
        <div className="relative z-0 bg-primary portfolio">
            <NavBar />
            <Hero />
            <div>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={1000}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={300}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />

                {/* About Section */}
                <div className="section-container">
                    <section className="section about">
                        <div className="section-header" id="about" data-aos="fade-right">
                            <h2>Introduction</h2>
                            <h1>About Me</h1>
                        </div>
                        <div className="about-content">
                            <div data-aos="fade-up">
                                <ProfileCard
                                    name=""
                                    title="Serge De Guzman"
                                    avatarUrl="/avatar.JPG"
                                    enableTilt={true}
                                    enableMobileTilt={true}
                                    onContactClick={() => console.log('Contact clicked')}
                                />
                            </div>
                            <div className="about-container">
                            <div className="about-text" data-aos="fade-left" data-aos-delay="200">
                                <p>
                                    I graduated Cum Laude with a degree in Computer Science from National University Laguna.
                                    I’m passionate about continuous learning and adapting to new challenges. My journey began 
                                    with HTML, CSS, and PHP, and has since expanded to include JavaScript, React, and other modern 
                                    web technologies.
                                </p>
                                <br></br>
                                <p>
                                    In the course of working in different companies, I've gained the value of teamwork, flexibility, 
                                    and persistent improvement. All these experiences pushed me to develop further and even resulted 
                                    in recognitions that I'm really proud of. I keep on practicing, discovering, and striving to be better day by day.
                                </p>
                            </div>
                            <a href="/Serge-De-Guzman_CV.pdf" download className="download-btn" data-aos="fade-up">
                                    DOWNLOAD CV
                                </a>
                        </div>
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="section tech-stack">
                        <div className="section-header" data-aos="fade-left">
                            <h2>Skills</h2>
                            <h1>Tech Stacks</h1>
                        </div>
                        <GlassIcons items={items} /> 
                    </section>

                    {/* Work Experience Section */}
                    <section className="section experience" data-aos="fade-right">
                        <div className="section-header" id="work">
                            <h2>Career</h2>
                            <h1>Work Experience</h1>
                        </div>
                        <div className="experience-list">
                            <div className="experience-item" data-aos="fade-up" data-aos-delay="100">
                                <h2>Information Technology Intern</h2>
                                <h3>Nordic Heel Unlimited, Inc.</h3>
                                <span className="period">January 2025 – February 2025</span>
                                <ul>
                                    <li>
                                        Developed an IT asset and inventory management system with database, UI, dashboard visualization, and backend functionality.
                                    </li>
                                    <li>
                                        Debugged, and enhanced the company’s HR system, application, and manpower requisition form.
                                    </li>
                                    <li>
                                        Received a job offer upon internship completion in recognition of strong software development skills, demonstrated adaptability, and a collaborative work ethic.
                                    </li>
                                    <li>
                                        Programming and Tools: PHP, HTML5, CSS3, PhpMyAdmin, XAMPP, Visual Studio Code.
                                    </li>
                                </ul>
                            </div>

                            <div className="experience-item" data-aos="fade-up" data-aos-delay="200">
                                <h2>Work Immersion Trainee, IT Department</h2>
                                <h3>Torres Technology Center Corporation</h3>
                                <span className="period">November 2019 – December 2019</span>
                                <ul>
                                    <li>
                                        Practiced basic command lines and C++ with a focus on best practices, work ethics, and proper naming conventions.
                                    </li>
                                    <li>
                                        Commended for exceptional performance, receiving "Most Responsible" and "Most Cooperative" for outstanding awards.
                                    </li>
                                </ul>
                            </div>
                        </div>   
                    </section>

                    {/* Project Section */}
                    <section className="section project">
                        <div className="section-header" data-aos="zoom-in" >
                            <h2>Showcase</h2>
                            <h1>My Projects</h1>
                        </div>
                        <div className="project-grid">
                            {projects.map((project, index) => {
                                const isVideo = project.src.endsWith(".mp4");
                                return (
                                    <div
                                        key={index}
                                        className="project-card"
                                        data-aos="zoom-in"
                                        data-aos-delay="400">
                                        {isVideo
                                            ? <video src={project.src} className="project-media" autoPlay loop muted playsInline />
                                            : <img src={project.src} alt={project.title} className="project-media" />
                                        }
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
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
                                                <a key={i} href={btn.url} className="btn">{btn.text}</a>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Achievements Section */}
                    <section className="section achievements">
                        <div className="section-header" data-aos="fade-up">
                            <h2>Milestones</h2>
                            <h1>Achievements & Certifications</h1>
                        </div>
                        <div className="achievements-gallery">
                            {certificates.map((cert, i) => (
                                <div
                                    key={i}
                                    className="achievements-card"
                                    onClick={() => setSelectedImage(cert.src)}
                                >
                                    <div className="achievements-content">
                                        <img src={cert.src} alt={cert.alt} />
                                        <p className="card-title flicker">{cert.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

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
                        <p>© {new Date().getFullYear()} Serge De Guzman. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
