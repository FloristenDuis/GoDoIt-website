/* GoDoIt.community, interactions */
(function () {
  'use strict';

  /* ---- Scroll-reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Nav: scrolled state + mobile toggle ---- */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector('.nav-toggle');
  var mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      mobile.classList.toggle('open');
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobile.classList.remove('open'); });
    });
  }

  /* ---- Image fallback: if an Unsplash photo fails, keep the gradient ---- */
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () { img.style.display = 'none'; });
  });

  /* ---- Copy discount codes ---- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.getAttribute('data-copy');
      var done = function () {
        var t = btn.textContent; btn.textContent = 'Copied ✓';
        setTimeout(function () { btn.textContent = t; }, 1600);
      };
      if (navigator.clipboard) { navigator.clipboard.writeText(code).then(done, done); }
      else { done(); }
    });
  });

  /* ---- Fake-submit forms (front-end only demo) ---- */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = form.querySelector('.form-success');
      if (ok) ok.classList.add('show');
      var fields = form.querySelectorAll('.field, .nl-form');
      fields.forEach(function (f) { if (!f.contains(ok)) f.style.display = 'none'; });
      var btn = form.querySelector('button[type="submit"], .btn');
      if (btn && !ok) { btn.textContent = 'Thanks, we’ll be in touch'; btn.disabled = true; }
    });
  });
})();
