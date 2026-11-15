/* ================================================================
   Blog de stage Pairi Daiza — Benjamin Krauss
   1. Langue EN / FR        4. Schéma du réseau animé au défilement
   2. Navigation            5. Articles (fenêtres)
   3. Apparitions, chiffres 6. Mode présentation (touche P)
   Le site reste lisible si GSAP ne se charge pas.
================================================================ */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SVG = 'http://www.w3.org/2000/svg';

  if (hasGsap) {
    gsap.registerPlugin(ScrollTrigger);
    if (window.ScrollToPlugin) { gsap.registerPlugin(ScrollToPlugin); root.classList.add('js-scroll'); }
  }

  /* ───────────────────────────── 1. LANGUE */
  function lang() { return root.lang === 'fr' ? 'fr' : 'en'; }
  function setLang(l) {
    root.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    $$('[data-count]').forEach(function (el) { if (el.dataset.done) el.textContent = fmt(parseFloat(el.dataset.count), el); });
    if (hasGsap) ScrollTrigger.refresh();
  }
  $$('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang()));
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  /* ───────────────────────────── 2. NAVIGATION */
  var nav = $('#nav'), progress = $('#progress'), burger = $('#burger'), navLinks = $('#navLinks');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var max = root.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
      if (presenting && !moving) updateHud(currentStop());
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeMenu() {
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', function () {
    var open = !navLinks.classList.contains('is-open');
    navLinks.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Défilement doux vers une position (GSAP si disponible, sinon natif) */
  var moving = false;
  function scrollToY(y, done) {
    y = Math.max(0, Math.min(y, root.scrollHeight - window.innerHeight));
    if (hasGsap && window.ScrollToPlugin && !reduced) {
      moving = true;
      gsap.to(window, {
        duration: 1.15, ease: 'power2.inOut', overwrite: true,
        scrollTo: { y: y, autoKill: false },
        onComplete: function () { moving = false; if (done) done(); }
      });
    } else {
      window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
      if (done) done();
    }
  }
  function topOf(el) { return el.getBoundingClientRect().top + window.scrollY; }

  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      closeMenu();
      scrollToY(topOf(target));
    });
  });

  /* ───────────────────────────── 3. APPARITIONS ET CHIFFRES */
  function fmt(v, el) {
    var dec = parseInt(el.dataset.dec || '0', 10);
    return v.toLocaleString(lang() === 'fr' ? 'fr-FR' : 'en-GB', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  function countUp(el) {
    var target = parseFloat(el.dataset.count);
    el.dataset.done = '1';
    if (reduced) { el.textContent = fmt(target, el); return; }
    var start = null, dur = 1400;
    function step(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased, el);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        $$('[data-count]', en.target).forEach(countUp);
        revealIO.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    $$('.reveal').forEach(function (el) { revealIO.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }
  $$('[data-count]').forEach(function (el) { el.textContent = fmt(parseFloat(el.dataset.count), el); });

  /* ───────────────────────────── 4. SCHÉMA DU RÉSEAU */
  var ICONS = {
    till: 'M4 5h16v10H4z M9 19h6 M12 15v4',
    card: 'M3 6h18v12H3z M3 10h18',
    ticket: 'M6 4h12v16H6z M9 9h6 M9 13h6',
    server: 'M4 4h16v6H4z M4 14h16v6H4z M8 7h.01 M8 17h.01',
    wifi: 'M5 12a10 10 0 0 1 14 0 M8.5 15.5a5 5 0 0 1 7 0 M12 19h.01',
    shield: 'M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z',
    sw: 'M3 9h18v6H3z M7 12h.01 M11 12h.01 M15 12h.01',
    speaker: 'M4 10v4h4l5 4V6L8 10z M17 9a4 4 0 0 1 0 6',
    phone: 'M8 3h8v18H8z M11 18h2'
  };
  var HUB = { x: 300, y: 300 };
  var NODES = [
    { c: 1, t: 'card',    x: 92,  y: 352, en: 'Card terminal',   fr: 'TPE' },
    { c: 1, t: 'till',    x: 138, y: 452, en: 'Shop till',       fr: 'Caisse boutique' },
    { c: 1, t: 'till',    x: 232, y: 520, en: 'Restaurant till', fr: 'Caisse restaurant' },
    { c: 1, t: 'ticket',  x: 318, y: 452, en: 'GLPI',            fr: 'GLPI' },
    { c: 2, t: 'server',  x: 352, y: 98,  en: 'Server',          fr: 'Serveur' },
    { c: 2, t: 'server',  x: 432, y: 142, en: 'Server',          fr: 'Serveur' },
    { c: 2, t: 'server',  x: 494, y: 208, en: 'Server',          fr: 'Serveur' },
    { c: 2, t: 'server',  x: 528, y: 292, en: 'Server',          fr: 'Serveur' },
    { c: 3, t: 'wifi',    x: 70,  y: 240, en: 'Wi-Fi',           fr: 'Wi-Fi' },
    { c: 3, t: 'wifi',    x: 122, y: 152, en: 'Wi-Fi',           fr: 'Wi-Fi' },
    { c: 3, t: 'wifi',    x: 206, y: 92,  en: 'Wi-Fi',           fr: 'Wi-Fi' },
    { c: 3, t: 'speaker', x: 196, y: 198, en: 'Sound',           fr: 'Son' },
    { c: 3, t: 'shield',  x: 402, y: 252, en: 'Firewall',        fr: 'Pare-feu' },
    { c: 3, t: 'sw',      x: 404, y: 352, en: 'Switch',          fr: 'Switch' },
    { c: 4, t: 'phone',   x: 524, y: 392, en: 'TEL-01',          fr: 'TEL-01' },
    { c: 4, t: 'phone',   x: 470, y: 462, en: 'TEL-02',          fr: 'TEL-02' },
    { c: 4, t: 'phone',   x: 396, y: 520, en: 'TEL-03',          fr: 'TEL-03' }
  ];
  var CAPS = [
    { c: 1, x: 150, y: 584, en: 'Shops · restaurants', fr: 'Boutiques · restaurants' },
    { c: 2, x: 468, y: 62,  en: 'Windows servers',     fr: 'Serveurs Windows' },
    { c: 3, x: 118, y: 52,  en: 'Out in the park',     fr: 'Dans le parc' },
    { c: 4, x: 486, y: 566, en: '3CX telephony',       fr: 'Téléphonie 3CX' }
  ];

  function el(name, attrs, parent) {
    var n = document.createElementNS(SVG, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function twoLang(parent, x, y, en, fr, cls) {
    [['en', en], ['fr', fr]].forEach(function (p) {
      var t = el('text', { x: x, y: y, 'class': p[0] + (cls ? ' ' + cls : '') }, parent);
      t.textContent = p[1];
    });
  }

  var scene = $('#scene'), stage = $('#stage');
  var built = { links: {}, nodes: {}, caps: {} };

  function buildScene() {
    [95, 180, 265].forEach(function (r) { el('circle', { cx: HUB.x, cy: HUB.y, r: r, 'class': 'ring' }, scene); });
    built.seal = el('circle', { cx: HUB.x, cy: HUB.y, r: 290, 'class': 'seal', transform: 'rotate(-90 300 300)' }, scene);
    var gLinks = el('g', {}, scene), gNodes = el('g', {}, scene);

    NODES.forEach(function (n) {
      var dx = n.x - HUB.x, dy = n.y - HUB.y;
      var mx = HUB.x + dx / 2 - dy * 0.14, my = HUB.y + dy / 2 + dx * 0.14;
      var link = el('path', { d: 'M' + HUB.x + ' ' + HUB.y + ' Q' + mx + ' ' + my + ' ' + n.x + ' ' + n.y, 'class': 'link c' + n.c }, gLinks);
      (built.links[n.c] = built.links[n.c] || []).push(link);

      var g = el('g', { 'class': 'node c' + n.c }, gNodes);
      var inner = el('g', {}, g);
      el('circle', { cx: n.x, cy: n.y, r: 19 }, inner);
      el('path', { d: ICONS[n.t], transform: 'translate(' + (n.x - 10.2) + ' ' + (n.y - 10.2) + ') scale(0.85)' }, inner);
      twoLang(inner, n.x, n.y + 36, n.en, n.fr);
      inner._o = n.x + ' ' + n.y;
      (built.nodes[n.c] = built.nodes[n.c] || []).push(inner);
    });

    CAPS.forEach(function (c) {
      var g = el('g', { 'class': 'cap c' + c.c }, scene);
      var inner = el('g', {}, g);
      twoLang(inner, c.x, c.y, c.en, c.fr);
      built.caps[c.c] = inner;
    });

    var hub = el('g', { 'class': 'hub' }, scene);
    el('circle', { cx: HUB.x, cy: HUB.y, r: 52, 'class': 'halo' }, hub);
    el('circle', { cx: HUB.x, cy: HUB.y, r: 40 }, hub);
    built.hubIT = el('g', {}, hub);
    twoLang(built.hubIT, HUB.x, HUB.y + 5, 'IT team', 'Équipe IT');
    built.hubZbx = el('g', {}, hub);
    var z = el('text', { x: HUB.x, y: HUB.y + 1 }, built.hubZbx); z.textContent = 'Zabbix';
    var s = el('text', { x: HUB.x, y: HUB.y + 17, 'class': 'hub-sub' }, built.hubZbx); s.textContent = '7.4';
    built.hubZbx.setAttribute('opacity', '0');
  }

  function animateScene() {
    var tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: { trigger: '#story', start: 'top bottom', end: 'bottom bottom', scrub: 0.6 }
    });
    /* Chaque chapitre occupe 1 unité de temps ; le chapitre i est complet quand son texte est centré. */
    [1, 2, 3, 4].forEach(function (c) {
      var t0 = c - 1;
      built.links[c].forEach(function (p, i) {
        var len = p.getTotalLength();
        tl.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 0.4 }, t0 + 0.18 + i * 0.05);
      });
      built.nodes[c].forEach(function (g, i) {
        tl.fromTo(g, { scale: 0, opacity: 0, svgOrigin: g._o }, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }, t0 + 0.45 + i * 0.05);
      });
      tl.fromTo(built.caps[c], { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 }, t0 + 0.68);
    });
    tl.to(built.hubIT, { opacity: 0, duration: 0.15 }, 1.2);
    tl.to(built.hubZbx, { opacity: 1, duration: 0.2 }, 1.35);
    var sealLen = built.seal.getTotalLength();
    tl.fromTo(built.seal, { strokeDasharray: sealLen, strokeDashoffset: sealLen }, { strokeDashoffset: 0, duration: 0.5, ease: 'none' }, 3.45);
  }

  if (scene) {
    buildScene();
    if (hasGsap && !reduced) animateScene();
    else { built.hubIT.setAttribute('opacity', '0'); built.hubZbx.setAttribute('opacity', '1'); }
  }

  /* Chapitre actif : celui qui traverse le milieu de l'écran */
  var chapters = $$('.chapter');
  function setChapter(ch) {
    chapters.forEach(function (c) { c.classList.toggle('is-active', c.dataset.ch === ch); });
    stage.dataset.ch = ch;
  }
  if ('IntersectionObserver' in window && chapters.length) {
    var chIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setChapter(en.target.dataset.ch); });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
    chapters.forEach(function (c) { chIO.observe(c); });
    setChapter('1');
  } else {
    chapters.forEach(function (c) { c.classList.add('is-active'); });
  }

  /* Effets liés au défilement, harmonisés : même règle pour la photo d'accueil et les bandes.
     Chaque calque dérive de DRIFT × la distance parcourue, sans courbe (ease 'none'),
     avec le même lissage (SCRUB) : un seul rythme, transform seul (GPU).
     Désactivé si « réduire les animations ». */
  var DRIFT = 0.18, SCRUB = 0.8;
  if (hasGsap && !reduced) {
    var hero = $('#hero');
    /* L'accueil commence déjà en haut de l'écran : il parcourt sa propre hauteur */
    gsap.to('#heroImg', {
      y: function () { return -DRIFT * hero.offsetHeight; }, ease: 'none', force3D: true,
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: SCRUB, invalidateOnRefresh: true }
    });
    var strips = $('.strips');
    $$('.strip').forEach(function (strip) {
      var dir = parseInt(strip.dataset.dir, 10);
      var room = function () { return Math.max(0, strip.scrollWidth - window.innerWidth); };
      /* Même amplitude que l'accueil : DRIFT × parcours (hauteur des bandes + écran), bornée par la place disponible */
      var amp = function () { return Math.min(DRIFT * (strips.offsetHeight + window.innerHeight), room()); };
      var mid = function () { return -room() / 2; };
      gsap.fromTo(strip,
        { x: function () { return mid() - dir * amp() / 2; } },
        { x: function () { return mid() + dir * amp() / 2; }, ease: 'none', force3D: true,
          scrollTrigger: { trigger: strips, start: 'top bottom', end: 'bottom top', scrub: SCRUB, invalidateOnRefresh: true } });
    });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }

  /* ───────────────────────────── 5. ARTICLES */
  function openDialog() { return $('dialog[open]'); }
  $$('[data-entry]').forEach(function (b) {
    b.addEventListener('click', function () {
      var d = document.getElementById(b.dataset.entry);
      if (d && d.showModal) { d.showModal(); d.scrollTop = 0; }
    });
  });
  $$('dialog.entry').forEach(function (d) {
    d.addEventListener('click', function (e) {
      if (e.target === d || e.target.closest('[data-close]')) d.close();
    });
  });

  /* ───────────────────────────── 6. MODE PRÉSENTATION
     P : entrer / sortir      → ↓ Espace PageSuiv : suivant     ← ↑ PagePréc : précédent
     Entrée : ouvrir l'article du chapitre      F : plein écran      T : remettre le chrono à zéro */
  var presenting = false, stops = $$('[data-stop]'), cur = 0, timerId = null, t0 = 0;
  var hud = $('#hud'), hudCount = $('#hudCount'), hudTime = $('#hudTime');

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function currentStop() {
    var mid = window.scrollY + window.innerHeight * 0.5, best = 0;
    stops.forEach(function (s, i) { if (topOf(s) <= mid) best = i; });
    return best;
  }
  function updateHud(i) { cur = i; hudCount.textContent = pad(i + 1) + ' / ' + pad(stops.length); }
  function tick() {
    var s = Math.floor((Date.now() - t0) / 1000);
    hudTime.textContent = pad(Math.floor(s / 60)) + ':' + pad(s % 60);
  }
  function go(i) {
    i = Math.max(0, Math.min(stops.length - 1, i));
    updateHud(i);
    scrollToY(topOf(stops[i]));
  }
  function toggleFullscreen(on) {
    try {
      if (on && !document.fullscreenElement && root.requestFullscreen) root.requestFullscreen().catch(function () {});
      else if (!on && document.fullscreenElement) document.exitFullscreen();
    } catch (e) {}
  }
  function startPresenting() {
    presenting = true;
    document.body.classList.add('is-presenting');
    hud.hidden = false;
    closeMenu();
    if (document.activeElement) document.activeElement.blur();
    t0 = Date.now(); tick(); timerId = setInterval(tick, 1000);
    toggleFullscreen(true);
    go(currentStop());
  }
  function stopPresenting() {
    presenting = false;
    document.body.classList.remove('is-presenting');
    hud.hidden = true;
    clearInterval(timerId);
    toggleFullscreen(false);
  }

  $('#presentBtn').addEventListener('click', function () { presenting ? stopPresenting() : startPresenting(); });
  $('#hudExit').addEventListener('click', stopPresenting);
  $('#hudPrev').addEventListener('click', function () { go(cur - 1); });
  $('#hudNext').addEventListener('click', function () { go(cur + 1); });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    var k = e.key;
    if (k === 'p' || k === 'P') { presenting ? stopPresenting() : startPresenting(); return; }
    if (!presenting) return;

    var dlg = openDialog();
    if (k === 'Enter') {
      e.preventDefault();
      if (dlg) dlg.close();
      else { var b = $('[data-entry]', stops[cur]); if (b) b.click(); }
      return;
    }
    if (dlg) return; /* article ouvert : les flèches font défiler l'article */

    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ') { e.preventDefault(); go(cur + 1); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); go(cur - 1); }
    else if (k === 'Home') { e.preventDefault(); go(0); }
    else if (k === 'End') { e.preventDefault(); go(stops.length - 1); }
    else if (k === 'f' || k === 'F') { toggleFullscreen(!document.fullscreenElement); }
    else if (k === 't' || k === 'T') { t0 = Date.now(); tick(); }
    else if (k === 'Escape' && !document.fullscreenElement) { stopPresenting(); }
  });

  onScroll();
})();
