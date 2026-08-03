import { useState, useEffect } from 'react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images to rotate through
  const images = [
    '/assets/images/capstone.jpg',
    '/assets/images/OJT.jpg',
    '/assets/images/narrative.jfif', 
    '/assets/images/ceit-colloquium.jpg'
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="flex items-center min-h-screen px-[8%] pt-[calc(72px+40px)] pb-20">
      <div className="section-inner w-full max-w-[1100px] mx-auto">
        <span 
          className="section-tag inline-block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-accent mb-2"
          data-animate="fade-right"
        >
          Get to know me
        </span>
        <h2 
          className="section-title text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-10 leading-tight"
          data-animate="fade-right" 
          data-delay="80"
        >
          About Me
        </h2>
        <div className="about-grid grid grid-cols-1 md:grid-cols-[1fr_450px] gap-8 md:gap-12 items-center">
          {/* Text on Left */}
          <div 
            className="about-text order-2 md:order-1"
            data-animate="fade-right" 
            data-delay="100"
          >
            <p className="text-muted mb-4 text-[1.02rem]">
              Hi! I'm a passionate IT graduate who loves building clean, user-friendly digital experiences. I enjoy
              working across the full stack — from designing intuitive interfaces to writing efficient back-end logic.
            </p>
            <p className="text-muted mb-4 text-[1.02rem]">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              levelling up my design skills.
            </p>
          </div>
          
          {/* Rotating Rectangular Images on Right */}
          <div 
            className="about-image-container relative order-1 md:order-2 w-full max-w-[400px] md:max-w-none mx-auto"
            data-animate="fade-left" 
            data-delay="200"
          >
            <div className="about-image-wrapper relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.3)]">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Profile photo ${index + 1}`} 
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Decorative border overlay */}
              <div className="absolute inset-0 border-4 border-accent/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
