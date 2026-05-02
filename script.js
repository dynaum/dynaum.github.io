(function () {
  'use strict';

  // ── Year stamp ──────────────────────────────────────────────────────────
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // ── Sticky header gets a hairline once you scroll past the top ─────────
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ── Scroll-triggered reveals ───────────────────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // ── Cursor-aware accent on .glow-card ──────────────────────────────────
  // Skip on coarse pointers (touch) — there's no hover.
  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', function (e) {
      var card = e.target && e.target.closest && e.target.closest('.glow-card');
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }
})();
