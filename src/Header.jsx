import { useState, useEffect } from "react";
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
    return(
      <header className="sm:px-16 w-full flex justify-center fixed navbar">
      <div className={`z-50 transition-colors duration-500 ${
        scrolled ?   "bg-transparent nav-container" : "80 backdrop-blur-md shadow-md nav-container"
      }`}>
        <a href="#hero" className="logo">Serge De Guzman</a>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* <a href="#contact" className="cta-btn">
          Let’s Talk
        </a> */}
      </div>
    </header>
    );
}