import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Animation Observer
    const animatedEls = document.querySelectorAll('[data-animate]');
    const heroAnimated = document.querySelectorAll('.hero [data-animate]');
    const heroSet = new Set(heroAnimated);

    const animObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || 0, 10);

          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('in-view');

            el.addEventListener('transitionend', () => {
              el.style.transitionDelay = '';
            }, { once: true });
          } else {
            el.style.transitionDelay = '';
            el.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    animatedEls.forEach(el => {
      if (!heroSet.has(el)) {
        animObserver.observe(el);
      }
    });

    return () => {
      animObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
