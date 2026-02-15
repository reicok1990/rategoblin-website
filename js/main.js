/* ══════════════════════════════════════════════════════
   Rate Goblin AI — Website Interactivity
   ══════════════════════════════════════════════════════ */

// ── Mobile Navigation ──
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      navCta?.classList.toggle('open');
      const icon = menuToggle.querySelector('span');
      if (icon) icon.textContent = navLinks?.classList.contains('open') ? '\u2715' : '\u2630';
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
        navCta?.classList.remove('open');
        const icon = menuToggle.querySelector('span');
        if (icon) icon.textContent = '\u2630';
      });
    });
  }

  // ── FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle clicked one
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ── Cookie Consent Banner ──
  const cookieBanner = document.querySelector('.cookie-banner');
  if (cookieBanner && !localStorage.getItem('rg_cookie_consent')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 1000);
  }

  document.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('rg_cookie_consent', 'accepted');
    cookieBanner?.classList.remove('visible');
  });

  document.querySelector('.cookie-reject')?.addEventListener('click', () => {
    localStorage.setItem('rg_cookie_consent', 'rejected');
    cookieBanner?.classList.remove('visible');
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Active nav highlighting ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
