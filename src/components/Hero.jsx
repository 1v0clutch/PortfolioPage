export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero relative flex flex-col justify-center items-center text-center overflow-hidden min-h-screen px-[8%] pt-[calc(72px+60px)] pb-20">
      <div className="hero-content relative z-10 max-w-[680px]">
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
        <div 
          className="hero-cta flex gap-4 justify-center mt-8 flex-wrap"
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
      
      <div 
        className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none rounded-full"
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.1) 0%, transparent 70%)',
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
