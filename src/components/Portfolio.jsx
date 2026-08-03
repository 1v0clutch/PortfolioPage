import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState('web-dev');
  const [currentProject, setCurrentProject] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = {
    'web-dev': { icon: '💻', title: 'Web Development' },
    'digital-art': { icon: '🎨', title: 'Digital Art' },
    'game-dev': { icon: '🎮', title: 'Game Development' }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    if (category === currentCategory) return;
    setCurrentCategory(category);
    setCurrentProject(0);
    setIsDropdownOpen(false);
  };

  const handleProjectClick = (index) => {
    setCurrentProject(index);
  };

  const project = portfolioData[currentCategory].projects[currentProject];

  return (
    <section id="portfolio" className="bg-[rgba(30,41,59,0.3)] min-h-screen h-screen flex items-center pt-[72px] pb-0 px-[8%] overflow-hidden max-md:h-auto max-md:min-h-screen max-md:overflow-visible max-md:pt-[calc(72px+40px)] max-md:pb-[60px]">
      <div className="section-inner w-full max-w-[1100px] mx-auto h-[calc(100vh-72px)] flex flex-col py-6 max-md:h-auto max-md:py-6">
        <span 
          className="section-tag inline-block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent mb-1"
          data-animate="fade-up"
        >
          What I do & build
        </span>
        <h2 
          className="section-title text-[1.8rem] font-extrabold mb-4"
          data-animate="fade-up" 
          data-delay="80"
        >
          Portfolio
        </h2>

        {/* Custom Dropdown */}
        <div 
          className="title-card bg-transparent py-3 px-0 mb-4 flex-shrink-0 relative z-[60]" 
          data-animate="fade-up" 
          data-delay="150"
        >
          <div className="relative inline-block" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-[1.15rem] font-bold text-text hover:text-accent transition-colors duration-200 cursor-pointer group"
            >
              <span className="text-2xl">{categories[currentCategory].icon}</span>
              <span>{categories[currentCategory].title}</span>
              <svg 
                width="16" 
                height="10" 
                viewBox="0 0 16 10" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`text-accent transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M2 2L8 8L14 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 backdrop-blur-sm z-[55]" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                {/* Dropdown Container */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-bg-card border border-border rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden z-[60]">
                  {Object.entries(categories).map(([key, { icon, title }]) => (
                    <button
                      key={key}
                      onClick={() => handleCategoryClick(key)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                        currentCategory === key
                          ? 'text-accent border-l-4 border-accent'
                          : 'text-text hover:bg-bg-hover hover:text-accent border-l-4 border-transparent'
                      }`}
                    >
                      <span className="text-xl">{icon}</span>
                      <span className="font-medium">{title}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Portfolio Content */}
        <div className="portfolio-content grid grid-cols-[1fr_2fr] gap-5 flex-1 min-h-0 overflow-hidden max-md:grid-cols-1 max-md:grid-rows-[auto_1fr]" data-animate="fade-up" data-delay="200">
          {/* Project List */}
          <div className="project-list bg-transparent border-none rounded-[10px] p-0 pl-6 overflow-y-auto h-full list-none relative scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent max-md:max-h-[250px]">
            {portfolioData[currentCategory].projects.map((proj, index) => (
              <div
                key={index}
                className={`project-item py-3 px-0 pl-4 rounded-lg mb-2 cursor-pointer transition-all duration-250 border-none border-l-2 border-border bg-transparent relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-accent before:text-2xl before:leading-none before:top-3 last:mb-0 hover:bg-[rgba(56,189,248,0.05)] hover:border-l-accent hover:pl-5 ${currentProject === index ? 'bg-[rgba(56,189,248,0.1)] border-l-accent border-l-[3px] pl-5 before:font-bold before:text-[1.8rem]' : ''}`}
                onClick={() => handleProjectClick(index)}
              >
                <h4 className="text-[0.9rem] font-semibold mb-1 text-text leading-tight">
                  {proj.name}
                </h4>
                <p className="project-preview text-[0.75rem] text-muted m-0 leading-tight">
                  {proj.preview}
                </p>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="project-details bg-bg-card border border-border rounded-[10px] p-5 flex flex-col gap-4 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-accent scrollbar-track-bg-hover max-md:min-h-[400px]">
            {project.image && (
              <div className="project-image w-full h-[180px] rounded-lg overflow-hidden bg-bg-hover flex items-center justify-center flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className="text-[1.2rem] font-bold m-0 leading-tight">
              {project.name}
            </h3>
            <p className="text-muted text-[0.9rem] leading-relaxed m-0">
              {project.description}
            </p>
            <div className="tech-stack flex-shrink-0">
              <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider text-accent mb-2">
                Tech Stack
              </h4>
              <div className="tech-tags flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-[0.75rem] font-medium text-accent bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.2)] rounded-md py-1 px-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a 
              href={project.link} 
              target={project.link === '#' ? '_self' : '_blank'}
              rel={project.link === '#' ? '' : 'noopener noreferrer'}
              className={`btn btn-primary inline-block py-3 px-6 rounded-[10px] text-[0.85rem] font-semibold cursor-pointer border-2 border-transparent transition-all duration-200 bg-accent text-bg text-center mt-auto flex-shrink-0 ${project.link === '#' ? 'opacity-60 pointer-events-none' : 'hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(56,189,248,0.2)] hover:bg-[#7dd3fc]'}`}
            >
              {project.link === '#' ? 'Private Project' : 'View Project'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
