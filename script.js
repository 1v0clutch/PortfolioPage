/* =============================================
   Animation System
   ============================================= */

/**
 * Apply data-delay as a CSS transition-delay when the element
 * enters the viewport, then remove the delay after the animation
 * so hover transitions aren't sluggish.
 */
const animatedEls = document.querySelectorAll('[data-animate]');

// Hero elements use CSS keyframe animations — skip them in the observer
const heroAnimated = document.querySelectorAll('.hero [data-animate]');
const heroSet = new Set(heroAnimated);

// Apply hero delays immediately (CSS animations)
heroAnimated.forEach(el => {
  const delay = el.dataset.delay || 0;
  el.style.animationDelay = `${delay}ms`;
});

const animObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const el    = entry.target;
      const delay = parseInt(el.dataset.delay || 0, 10);

      if (entry.isIntersecting) {
        // Entering viewport — play the animation
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('in-view');

        el.addEventListener('transitionend', () => {
          el.style.transitionDelay = '';
        }, { once: true });
      } else {
        // Leaving viewport — reset so it animates again next time
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

/* Section title underline — needs in-view on the title itself */
document.querySelectorAll('.section-title[data-animate]').forEach(el => {
  // already handled by animObserver above; CSS does the rest
});

/* =============================================
   Navbar — scroll shadow & active link
   ============================================= */
const navbar   = document.querySelector('.navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 110) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* =============================================
   Mobile hamburger
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* =============================================
   Projects Carousel
   ============================================= */
const track   = document.getElementById('carouselTrack');
const dotsEl  = document.getElementById('carouselDots');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

if (track) {
  const cards    = Array.from(track.querySelectorAll('.card'));
  const total    = cards.length;
  const VISIBLE  = 3;                    // cards shown at once
  let offset     = 0;                    // how many cards the track has shifted
  let selected   = 1;                    // index of the highlighted card (start at center)

  // Build dots — one per card
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Project ${i + 1}`);
    dot.addEventListener('click', () => selectCard(i));
    dotsEl.appendChild(dot);
  });

  // Clicking a card directly selects it
  cards.forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => selectCard(i));
  });

  function shiftTo(newOffset) {
    offset = Math.max(0, Math.min(newOffset, total - VISIBLE));
    const cardW    = cards[0].offsetWidth;
    const gap      = 24; // 1.5rem
    track.style.transform = `translateX(-${offset * (cardW + gap)}px)`;
  }

  function selectCard(i) {
    selected = Math.max(0, Math.min(i, total - 1));

    // If selected card is outside the visible window, shift the track
    if (selected < offset) {
      shiftTo(selected);
    } else if (selected >= offset + VISIBLE) {
      shiftTo(selected - VISIBLE + 1);
    }

    // Highlight selected, clear others
    cards.forEach((c, j) => c.classList.toggle('selected', j === selected));

    // Sync dots
    dotsEl.querySelectorAll('.carousel-dot').forEach((d, j) =>
      d.classList.toggle('active', j === selected)
    );

    prevBtn.disabled = selected === 0;
    nextBtn.disabled = selected === total - 1;
  }

  prevBtn.addEventListener('click', () => selectCard(selected - 1));
  nextBtn.addEventListener('click', () => selectCard(selected + 1));

  // Re-shift on resize since card widths change
  window.addEventListener('resize', () => shiftTo(offset), { passive: true });

  selectCard(1); // start with center card of first 3 selected
}


const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
