/* ================================================================
   main.js — Blog de Stage Benjamin Krauss @ Pairi Daiza
   AOS init · Nav active · Curseur custom · Année footer
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- AOS (Animate On Scroll) --- */
  AOS.init({
    once: true,
    offset: 80,
    duration: 900,
    easing: 'ease-out-cubic'
  });

  /* --- Année footer --- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Nav : scroll → scrolled class + active link --- */
  const navbar   = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 110) current = sec.id;
    });
    navLinks.forEach(lk => {
      lk.classList.toggle('active', lk.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile hamburger --- */
  const toggle  = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  toggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  navMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* --- Curseur personnalisé (desktop uniquement) --- */
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let fx = 0, fy = 0;

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      fx += (e.clientX - fx) * 0.14;
      fy += (e.clientY - fy) * 0.14;
      follower.style.left = fx + 'px';
      follower.style.top  = fy + 'px';
    });

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform    = 'translate(-50%,-50%) scale(2.5)';
        follower.style.transform  = 'translate(-50%,-50%) scale(0.4)';
        follower.style.borderColor = 'rgba(99,102,241,0.6)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform    = 'translate(-50%,-50%) scale(1)';
        follower.style.transform  = 'translate(-50%,-50%) scale(1)';
        follower.style.borderColor = 'rgba(99,102,241,0.35)';
      });
    });
  }

  /* --- Contact form feedback --- */
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Message envoyé ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.disabled = false;
      e.target.reset();
    }, 3500);
  });

});
