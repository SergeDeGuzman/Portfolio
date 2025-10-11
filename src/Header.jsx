import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // transparent at top, solid when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// After initializing AOS
useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

// Refresh AOS when navigating
const handleNavClick = (e, targetId) => {
  e.preventDefault();

  const section = document.querySelector(targetId);
  if (section) {
    const headerOffset = 80; // adjust this based on your navbar height
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Refresh AOS after smooth scroll
    setTimeout(() => AOS.refresh(), 600);
  }
};

    return(
      <header className="sm:px-16 w-full flex justify-center fixed navbar">
      <div className={`z-50 transition-colors duration-500 ${
        scrolled ?   "bg-transparent nav-container" : "80 backdrop-blur-md shadow-md nav-container"
      }`}>
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>Serge De Guzman</a>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </nav>
        {/* <a href="#contact" className="cta-btn">
          Let’s Talk
        </a> */}
      </div>
    </header>
    );
}