export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/steven-clyde-maranan',
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
      url: 'https://github.com/1v0clutch',
      color: 'hover:text-[#333]'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
        </svg>
      ),
      url: 'https://www.facebook.com/s1ev0',
      color: 'hover:text-[#1877F2]'
    }
  ];

  return (
    <section id="home" className="hero relative flex items-center justify-center overflow-hidden min-h-screen px-[8%] pt-[calc(72px+40px)] pb-20">
      <div className="hero-container relative z-10 w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
        
        {/* Left Side - Profile Image */}
        <div className="hero-image-wrapper flex justify-center md:justify-end mb-8 md:mb-0 data-animate=fade-left">
          <div className="relative w-full max-w-[350px] md:max-w-[450px] p-6">
            {/* Animated glow effect - extended beyond image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-[#818cf8] opacity-20 blur-3xl animate-pulse rounded-2xl"></div>
            
            {/* Main image container - Rectangular */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-accent/30 shadow-[0_0_60px_rgba(56,189,248,0.4)] hover:shadow-[0_0_80px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-[1.02]">
              <img 
                src="/assets/images/HomeProfile.PNG" 
                alt="Steven Clyde Maranan"
                className="w-full h-full object-contain bg-gradient-to-br from-bg to-[rgba(30,41,59,0.5)]"
              />
            </div>

            {/* Decorative elements - positioned to stay within bounds */}
            <div className="absolute top-2 right-2 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-2 left-2 w-24 h-24 bg-[#818cf8]/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hero-content text-center md:text-left">
          <p className="hero-greeting text-muted text-base font-medium mb-2" data-animate="fade-down">
            Hello, I'm
          </p>
          <h1 
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.15] mb-0"
            data-animate="fade-up" 
            data-delay="100"
          >
            Steven<span className="text-accent"> Clyde</span>
          </h1>
          <p 
            className="hero-sub text-muted text-[clamp(0.9rem,1.8vw,1.05rem)] mt-4 tracking-wide"
            data-animate="fade-up" 
            data-delay="200"
          >
            IT Graduate &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Designer
          </p>
          
          {/* Introduction Paragraph */}
          <p 
            className="hero-intro text-text/80 text-[0.95rem] leading-relaxed mt-6 max-w-[520px] mx-auto md:mx-0"
            data-animate="fade-up" 
            data-delay="220"
          >
            Passionate about crafting elegant solutions through code and design. 
            I transform ideas into functional, user-friendly applications with a focus 
            on clean architecture and exceptional user experiences.
          </p>

          {/* Social Links */}
          <div 
            className="social-links flex gap-4 justify-center md:justify-start mt-6"
            data-animate="fade-up" 
            data-delay="250"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(30,41,59,0.5)] border border-border text-muted transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(56,189,248,0.3)] ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="hero-cta flex gap-4 justify-center md:justify-start mt-8 flex-wrap"
            data-animate="fade-up" 
            data-delay="350"
          >
            <a 
              href="#portfolio" 
              onClick={(e) => handleScroll(e, '#portfolio')}
              className="btn btn-primary inline-block py-3 px-7 rounded-[10px] text-[0.9rem] font-semibold cursor-pointer border-2 border-transparent transition-all duration-200 bg-accent text-bg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(56,189,248,0.2)] hover:bg-[#7dd3fc]"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="btn btn-outline inline-block py-3 px-7 rounded-[10px] text-[0.9rem] font-semibold cursor-pointer border-2 border-accent text-accent bg-transparent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(56,189,248,0.2)] hover:bg-[rgba(56,189,248,0.1)]"
            >
              Contact Me
            </a>
            </div>
        </div>
      </div>
      
      <div 
        className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.08) 0%, transparent 70%)',
          animation: 'pulse-blob 6s ease-in-out infinite'
        }}
        aria-hidden="true"
      />
      
      <div className="particles" aria-hidden="true">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>
    </section>
  );
}
