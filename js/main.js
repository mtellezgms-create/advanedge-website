/* =========================================
   Advanedge Consulting — Main JS
   ========================================= */

// --- Hero staggered load animation ---
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelector('.hero-rule')?.classList.add('loaded');
    }, 100);
    setTimeout(() => {
      document.querySelector('.hero-headline')?.classList.add('loaded');
    }, 400);
    setTimeout(() => {
      document.querySelector('.hero-sub')?.classList.add('loaded');
    }, 700);
    setTimeout(() => {
      document.querySelector('.hero-buttons')?.classList.add('loaded');
    }, 1000);
  });
});

// --- Intersection Observer: scroll fade-ups ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// --- Nav: scrolled shadow class ---
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- Smooth scroll for "See How We Work" ---
document.getElementById('scroll-services')?.addEventListener('click', () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
});
