/* Fills the figures in the case study from the same synthetic dataset the demo uses.
   If the fetch fails (e.g. opened via file://), the placeholders stay as "–". */
(function () {
  'use strict';

  var fmt = function (n) { return String(n); };

  function setAll(key, value) {
    document.querySelectorAll('[data-stat="' + key + '"]').forEach(function (el) { el.textContent = value; });
  }

  function summarise(d) {
    var themes = d.themes || [];
    var epics = 0, features = 0, done = 0, needs = 0, notStarted = 0, emptyEpics = 0;
    themes.forEach(function (t) {
      (t.epics || []).forEach(function (e) {
        epics++;
        var f = e.features || [];
        if (!f.length) emptyEpics++;
        f.forEach(function (x) {
          features++;
          if (x.status === 'Done') done++;
          else if (x.status === 'Need Changes') needs++;
          else notStarted++;
        });
      });
    });
    var rel = d.releases || [];
    var items = 0, subs = 0;
    rel.forEach(function (r) {
      (r.items || []).forEach(function (i) { items++; subs += (i.subitems || 0); });
    });
    var names = {};
    rel.forEach(function (r) {
      (r.items || []).forEach(function (i) {
        (i.designer || '').split('/').forEach(function (n) { n = n.trim(); if (n) names[n] = 1; });
      });
    });
    return {
      themes: themes.length, epics: epics, features: features, done: done, needs: needs,
      notStarted: notStarted, emptyEpics: emptyEpics,
      pctDone: features ? Math.round((done / features) * 100) : 0,
      releases: rel.length, items: items, subs: subs, designers: Object.keys(names).length
    };
  }

  fetch('demo/data/data.json', { credentials: 'omit' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (d) {
      var s = summarise(d);
      Object.keys(s).forEach(function (k) { setAll(k, fmt(s[k])); });
      if (d.meta && d.meta.lastUpdated) setAll('asOf', d.meta.lastUpdated);
    })
    .catch(function () {
      document.querySelectorAll('[data-stat-note]').forEach(function (el) {
        el.hidden = false;
      });
    });

  /* Highlight the nav link for the section in view: the last section whose top
     has passed 35% of the viewport height (the first section when at the top). */
  var links = document.querySelectorAll('.site-nav a[href^="#"]');
  var sections = [];
  links.forEach(function (a) {
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) sections.push({ el: el, link: a });
  });
  function updateNav() {
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s;
    });
    links.forEach(function (a) { a.removeAttribute('aria-current'); });
    if (current) current.link.setAttribute('aria-current', 'true');
  }
  if (sections.length) {
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    updateNav();
  }
})();
