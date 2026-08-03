import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 110) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar fixed top-0 w-full h-[72px] flex items-center justify-between px-[8%] z-[1000] ${isScrolled ? 'scrolled' : ''}`}>
      <a className="logo" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
        <img src="/assets/images/me.jpg" alt="Logo" className="w-10 h-10 rounded-lg block object-cover" />
      </a>
      
      <ul className={`nav-links ${isOpen ? 'open' : ''} list-none flex gap-8 max-md:fixed max-md:top-[72px] max-md:left-0 max-md:right-0 max-md:bg-[rgba(15,23,42,0.98)] max-md:backdrop-blur-xl max-md:flex-col max-md:items-center max-md:gap-0 max-md:py-4 max-md:pb-8 max-md:transition-transform max-md:duration-300 ${isOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-[120%]'}`}>
        <li className="max-md:w-full max-md:text-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className={`text-[0.9rem] font-medium transition-colors duration-200 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-sm after:transition-all after:duration-250 hover:text-text hover:after:w-full max-md:block max-md:py-3 max-md:px-4 max-md:text-base ${activeSection === 'home' ? 'text-text after:w-full' : 'text-muted'}`}
          >
            Home
          </a>
        </li>
        <li className="max-md:w-full max-md:text-center">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className={`text-[0.9rem] font-medium transition-colors duration-200 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-sm after:transition-all after:duration-250 hover:text-text hover:after:w-full max-md:block max-md:py-3 max-md:px-4 max-md:text-base ${activeSection === 'about' ? 'text-text after:w-full' : 'text-muted'}`}
          >
            About
          </a>
        </li>
        <li className="max-md:w-full max-md:text-center">
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, '#portfolio')}
            className={`text-[0.9rem] font-medium transition-colors duration-200 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-sm after:transition-all after:duration-250 hover:text-text hover:after:w-full max-md:block max-md:py-3 max-md:px-4 max-md:text-base ${activeSection === 'portfolio' ? 'text-text after:w-full' : 'text-muted'}`}
          >
            Portfolio
          </a>
        </li>
        <li className="max-md:w-full max-md:text-center">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`text-[0.9rem] font-medium transition-colors duration-200 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-sm after:transition-all after:duration-250 hover:text-text hover:after:w-full max-md:block max-md:py-3 max-md:px-4 max-md:text-base ${activeSection === 'contact' ? 'text-text after:w-full' : 'text-muted'}`}
          >
            Contact
          </a>
        </li>
      </ul>

      <button 
        className={`hamburger hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu" 
        aria-expanded={isOpen}
      >
        <span className={`block w-6 h-0.5 bg-text rounded-sm transition-all duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-text rounded-sm transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-text rounded-sm transition-all duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
      </button>
    </nav>
  );
}
