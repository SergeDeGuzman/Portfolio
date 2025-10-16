import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Smooth scroll with AOS refresh
    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        const section = document.querySelector(targetId);
        if (section) {
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            setIsOpen(false);
            
            // Refresh AOS after smooth scroll
            setTimeout(() => AOS.refresh(), 600);
        }
    };

    return (
        <header className="sm:px-16 w-full flex justify-center fixed navbar">
            <div
                className={`transition-colors duration-500 ${
                    scrolled
                        ? "80 backdrop-blur-md shadow-md nav-container"
                        : "bg-transparent nav-container"
                }`}
            >
                <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    SERGE DE GUZMAN
                </a>

                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    &#9776;
                </div>

                <nav className={`nav-links ${isOpen ? "active" : ""}`}>
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                        About
                    </a>
                    <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>
                        Work
                    </a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
