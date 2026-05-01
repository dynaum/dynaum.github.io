(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var header = document.querySelector('.site-header');
  var year = document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      var nextLabel = theme === 'dark'
        ? 'Switch to light theme'
        : 'Switch to dark theme';
      toggle.setAttribute('aria-label', nextLabel);
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#fdfcf9');
  }

  if (toggle) {
    applyTheme(root.dataset.theme || 'light');
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  var media = window.matchMedia('(prefers-color-scheme: dark)');
  if (media.addEventListener) {
    media.addEventListener('change', function (e) {
      var saved = null;
      try { saved = localStorage.getItem('theme'); } catch (err) {}
      if (!saved) applyTheme(e.matches ? 'dark' : 'light');
    });
  }

  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
