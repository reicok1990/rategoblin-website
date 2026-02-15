/* ══════════════════════════════════════════════════════
   Rates Goblin AI — Website Interactivity
   ══════════════════════════════════════════════════════ */

// ── Mobile Navigation ──
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      const icon = menuToggle.querySelector('span');
      if (icon) icon.textContent = navLinks?.classList.contains('open') ? '\u2715' : '\u2630';
      menuToggle.setAttribute('aria-expanded', navLinks?.classList.contains('open') ? 'true' : 'false');
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
        const icon = menuToggle.querySelector('span');
        if (icon) icon.textContent = '\u2630';
        menuToggle.setAttribute('aria-expanded', 'false');
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
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('rg_cookie_consent')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 1000);
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('rg_cookie_consent', 'accepted');
    cookieBanner?.classList.remove('visible');
  });

  document.getElementById('cookie-reject')?.addEventListener('click', () => {
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
