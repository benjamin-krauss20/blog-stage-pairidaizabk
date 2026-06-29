/* ================================================================
   main.js — Blog de Stage Benjamin Krauss @ Pairi Daiza
   AOS · Nav active · Curseur patte d'ours · Drawer mobile · i18n FR/EN
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── ANNÉE FOOTER ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── NAV : scroll → scrolled class + active link ── */
  const navbar   = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

  const onScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 110) current = sec.id;
    });
    navLinks.forEach(lk => {
      lk.classList.toggle('active', lk.getAttribute('href') === `#${current}`);
    });
    document.querySelectorAll('.drawer-link').forEach(lk => {
      lk.classList.toggle('active', lk.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── HAMBURGER + DRAWER MOBILE ── */
  const navToggle    = document.getElementById('navToggle');
  const drawer       = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle?.addEventListener('click', () => {
    drawer?.classList.contains('is-open') ? closeDrawer() : openDrawer();
  });

  drawerOverlay?.addEventListener('click', closeDrawer);

  drawer?.querySelectorAll('.drawer-link').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ── CURSEUR PATTE D'OURS (desktop / pointer:fine uniquement) ── */
  const paw = document.getElementById('cursorPaw');

  if (paw && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let pawX   = 0, pawY   = 0;
    let started = false;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function animatePaw() {
      pawX = lerp(pawX, mouseX, 0.14);
      pawY = lerp(pawY, mouseY, 0.14);
      /* translate(-50%,-50%) centre la patte sur le pointeur */
      paw.style.transform = `translate(calc(${pawX}px - 50%), calc(${pawY}px - 50%))`;
      requestAnimationFrame(animatePaw);
    }
    animatePaw();

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        /* Téléporter la patte au bon endroit dès le premier mouvement */
        pawX = mouseX;
        pawY = mouseY;
        paw.classList.add('is-visible');
        started = true;
      }
    }, { passive: true });

    /* Hover sur éléments interactifs */
    const hoverTargets = 'a, button, [role="button"], .card, .mission-item, .timeline-card, .blog-card, .swiper-button-prev, .swiper-button-next, .nav-link, .drawer-link, .lang-btn, .chip';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverTargets)) paw.classList.add('is-hovering');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverTargets)) paw.classList.remove('is-hovering');
    });

    /* Clic */
    document.addEventListener('mousedown', () => paw.classList.add('is-clicking'));
    document.addEventListener('mouseup',   () => paw.classList.remove('is-clicking'));

    /* Masquer quand la souris sort du viewport */
    document.documentElement.addEventListener('mouseleave', () => paw.classList.remove('is-visible'));
    document.documentElement.addEventListener('mouseenter', () => { if (started) paw.classList.add('is-visible'); });

  } else if (paw) {
    /* Tactile / stylet — cacher la patte et restaurer le curseur */
    paw.style.display = 'none';
    document.body.style.cursor = 'auto';
  }

  /* ── SWIPER — carousel animaux ── */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.animal-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      speed: 700,
      grabCursor: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 2.2 },
        900: { slidesPerView: 3,   spaceBetween: 16 },
      }
    });
  }

  /* ── i18n FR / EN ── */
  const translations = {
    en: {
      'preloader.label': 'Loading internship blog',
      'nav.about': 'About', 'nav.missions': 'Missions',
      'nav.journal': 'Journal', 'nav.blog': 'Blog',
      'nav.life': 'Life', 'nav.contact': 'Contact',
      'hero.badge': 'ESAIP Engineering Student · Work-Study',
      'hero.tag1': 'Best Zoo in Europe', 'hero.tag3': 'IT Department',
      'hero.line1': 'Live from',
      'hero.sub': 'Systems & Network Administrator — three months at the heart of Europe\'s best zoo. I monitor infrastructure with <strong>Zabbix</strong>, manage IT assets via <strong>GLPI</strong>, and harden network security.',
      'hero.btn.journal': 'Read the journal', 'hero.btn.missions': 'View missions',
      'stat.area': 'Park area', 'stat.visitors': 'Visitors / year',
      'stat.machines': 'Machines deployed', 'stat.internship': 'Internship',
      'about.eyebrow': 'Who I am',
      'about.lbl.school': 'School', 'about.lbl.role': 'Role',
      'about.lbl.location': 'Location', 'about.lbl.duration': 'Duration',
      'about.val.role': 'Systems & Network Admin',
      'about.val.location': 'Brugelette, Belgium',
      'about.val.duration': '3 months · 2026',
      'about.desc': 'Passionate about network infrastructure and cybersecurity, I joined Pairi Daiza\'s IT department for my final-year internship. Running a professional information system just steps from giant pandas and Siberian tigers — an experience unlike any other.',
      'chip.cyber': 'Cybersecurity', 'chip.monitoring': 'Network monitoring',
      'chip.sysadmin': 'System administration', 'chip.docs': 'Documentation',
      'dest.eyebrow': 'The destination',
      'dest.lbl.company': 'Company', 'dest.lbl.sector': 'Sector',
      'dest.lbl.location': 'Location', 'dest.lbl.dept': 'Department',
      'dest.val.sector': 'Zoological & botanical park',
      'dest.val.location': 'Brugelette, Wallonia',
      'dest.val.dept': 'IT · Systems & Network',
      'dest.desc': 'One of the largest zoological parks in Europe — voted best zoo in Europe several times, three Michelin Green Guide stars. Its IT department runs a critical infrastructure across 80 hectares: ticketing, video surveillance, internal networks. An exceptional technical playground.',
      'animal.panda': 'Giant panda', 'animal.flamingo': 'Flamingos',
      'animal.penguin': 'Penguins', 'animal.bear': 'Bear',
      'animal.peacock': 'Peacock', 'animal.kangaroo': 'Kangaroo',
      'animal.monkey': 'Monkey', 'animal.panda2': 'Panda',
      'missions.eyebrow': 'What I did', 'missions.title': 'Technical missions',
      'm1.title': 'Asset management — GLPI',
      'm1.desc': 'Inventory, ticketing and IT asset tracking. Agent deployment, automated imports, SLA configuration and the internal helpdesk.',
      'm2.title': 'Network monitoring — Zabbix',
      'm2.desc': 'Building monitoring dashboards, configuring custom triggers and alerts to watch the park\'s infrastructure in real time.',
      'm3.title': 'Cybersecurity & hardening',
      'm3.desc': 'Auditing network configurations, strengthening security policies and applying best practices across the IS active equipment.',
      'm3.tag': 'Security · Audit',
      'm4.title': 'Documentation & procedures',
      'm4.desc': 'Writing technical procedures, documenting critical configurations and passing best practices on to the IT team.',
      'm4.tag': 'Docs · Knowledge base',
      'journal.eyebrow': 'Week by week', 'journal.title': 'Technical journal',
      'art1.date': 'April 8, 2025',
      'art1.title': 'Rolling out a GLPI agent to 200 machines without getting lost',
      'art1.desc': 'First major project: mass deployment across the zoo\'s machine estate. Lessons on automation, silent failures, and unexpected inventory discoveries.',
      'art1.link': 'Read the article →',
      'art2.date': 'April 22, 2025',
      'art2.title': 'My first Zabbix dashboards in production',
      'art2.desc': 'How I designed the network monitoring dashboards and tuned alert thresholds to be actually actionable day to day.',
      'art3.date': 'May 6, 2025',
      'art3.title': 'Security audit: what I found (and fixed)',
      'art3.desc': 'A walkthrough of a network configuration audit in a critical production environment — and how to prioritize fixes without cutting the service.',
      'art4.date': 'May 20, 2025',
      'art4.title': 'Ath to Brugelette: the other rhythm of the internship',
      'art4.desc': 'The shared flat, the morning commute, animals glimpsed from the car park. What life around the internship adds to the way you work.',
      'art.read': 'Read →',
      'tag.cyber': 'Cybersecurity', 'tag.life': 'Internship life', 'tag.docs': 'Documentation',
      'blog.eyebrow': 'Deep dives', 'blog.title': 'Blog articles',
      'blog.desc': 'Longer, more detailed writeups on the technical challenges I faced during the internship — the kind of stuff that doesn\'t fit in a weekly journal entry.',
      'blog.soon': 'Coming soon', 'blog.read': 'Read article',
      'blog.art1.date': 'April 2026',
      'blog.art1.title': 'Mass deploying GLPI agents across 200 machines: lessons learned',
      'blog.art1.desc': 'Scripting, silent failures, agent conflicts — a full walkthrough of the rollout, what broke, and how I fixed it.',
      'blog.art2.title': 'Building Zabbix dashboards for a zoo: custom triggers and alert fatigue',
      'blog.art2.desc': 'How I tuned 80+ monitoring rules to be actionable without waking the on-call team for every blip.',
      'blog.art3.title': 'Security audit on a live production network: what I found',
      'blog.art3.desc': 'Findings, priorities, and the diplomatic art of telling a team their network config needs work.',
      'blog.art4.title': 'Writing IT documentation people actually read',
      'blog.art4.desc': 'The process behind building a knowledge base from scratch — structure, tone, and getting colleagues to contribute.',
      'blog.footer': 'Articles published as the internship progresses —',
      'blog.footer.strong': '3 more coming',
      'life.eyebrow': 'Beyond the helpdesk', 'life.title': 'Internship life',
      'life.lbl.housing': 'Housing', 'life.lbl.flatmates': 'Flatmates',
      'life.lbl.commute': 'Commute', 'life.lbl.travel': 'Travel time',
      'life.val.housing': 'Shared flat in Ath',
      'life.val.flatmates': '3 other people',
      'life.val.commute': 'Personal car',
      'life.desc1': 'Based in Ath with three flatmates, I drive to the park every morning. Twenty-five minutes of Walloon countryside between fields and horses — a decompression bubble before diving into the helpdesk tickets.',
      'life.desc2': 'These photos, taken right from the flat, capture the atmosphere well: calm, green, far from open-plan offices. A striking contrast with the technical days.',
      'tips.eyebrow': 'Takeaways', 'tips.title': 'Lessons from the internship',
      'tip1': '<strong>Handle the paperwork early:</strong> student health cover, car insurance abroad, the internship agreement — sort it all out before day one.',
      'tip2': '<strong>Truly immerse yourself:</strong> make the most of being in a wildlife park. A lunch break among the pandas recharges you as much as a coffee.',
      'tip3': '<strong>Network internally:</strong> breaks with the IT team are often where you learn the most — the undocumented fixes, the in-house practices.',
      'tip4': '<strong>Document as you go:</strong> never put off the docs. A ticket closed without a resolution note is technical debt for the whole team.',
      'contact.eyebrow': 'Get in touch',
      'contact.title': 'A question about my internship?',
      'contact.desc': 'Recruiter, curious student, or simply passionate about systems and networks — I\'m always up for a conversation.',
      'form.name': 'Name', 'form.email': 'Email', 'form.message': 'Message',
      'ph.name': 'Your name', 'ph.message': 'Your message...',
      'form.submit': 'Send message', 'form.sent': 'Message sent! ✓',
      'footer.text': 'Designed by',
    },
    fr: {
      'preloader.label': 'Chargement du blog de stage',
      'nav.about': 'À propos', 'nav.missions': 'Missions',
      'nav.journal': 'Journal', 'nav.blog': 'Blog',
      'nav.life': 'Vie de stage', 'nav.contact': 'Contact',
      'hero.badge': 'Étudiant Ingénieur ESAIP · Alternance',
      'hero.tag1': 'Meilleur Zoo d\'Europe', 'hero.tag3': 'Département IT',
      'hero.line1': 'En direct de',
      'hero.sub': 'Administrateur Systèmes & Réseaux — trois mois au cœur du meilleur zoo d\'Europe. Je supervise l\'infrastructure avec <strong>Zabbix</strong>, gère le parc informatique via <strong>GLPI</strong> et renforce la sécurité réseau.',
      'hero.btn.journal': 'Lire le journal', 'hero.btn.missions': 'Voir les missions',
      'stat.area': 'Surface du parc', 'stat.visitors': 'Visiteurs / an',
      'stat.machines': 'Machines déployées', 'stat.internship': 'Stage',
      'about.eyebrow': 'Qui suis-je',
      'about.lbl.school': 'École', 'about.lbl.role': 'Poste',
      'about.lbl.location': 'Lieu', 'about.lbl.duration': 'Durée',
      'about.val.role': 'Admin Systèmes & Réseaux',
      'about.val.location': 'Brugelette, Belgique',
      'about.val.duration': '3 mois · 2026',
      'about.desc': 'Passionné par l\'infrastructure réseau et la cybersécurité, j\'ai rejoint le service IT de Pairi Daiza pour mon stage de fin d\'études. Administrer un système d\'information professionnel à quelques pas des pandas géants et des tigres de Sibérie — une expérience unique.',
      'chip.cyber': 'Cybersécurité', 'chip.monitoring': 'Supervision réseau',
      'chip.sysadmin': 'Administration système', 'chip.docs': 'Documentation',
      'dest.eyebrow': 'La destination',
      'dest.lbl.company': 'Entreprise', 'dest.lbl.sector': 'Secteur',
      'dest.lbl.location': 'Lieu', 'dest.lbl.dept': 'Département',
      'dest.val.sector': 'Parc zoologique et botanique',
      'dest.val.location': 'Brugelette, Wallonie',
      'dest.val.dept': 'IT · Systèmes & Réseaux',
      'dest.desc': 'L\'un des plus grands parcs zoologiques d\'Europe — plusieurs fois élu meilleur zoo d\'Europe, trois étoiles au Guide Vert Michelin. Son service IT gère une infrastructure critique sur 80 hectares : billetterie, vidéosurveillance, réseaux internes. Un terrain de jeu technique exceptionnel.',
      'animal.panda': 'Panda géant', 'animal.flamingo': 'Flamants roses',
      'animal.penguin': 'Manchots', 'animal.bear': 'Ours',
      'animal.peacock': 'Paon', 'animal.kangaroo': 'Kangourou',
      'animal.monkey': 'Singe', 'animal.panda2': 'Panda',
      'missions.eyebrow': 'Ce que j\'ai fait', 'missions.title': 'Missions techniques',
      'm1.title': 'Gestion des actifs — GLPI',
      'm1.desc': 'Inventaire, ticketing et suivi du parc informatique. Déploiement d\'agents, imports automatisés, configuration des SLA et helpdesk interne.',
      'm2.title': 'Supervision réseau — Zabbix',
      'm2.desc': 'Construction des tableaux de bord de supervision, configuration des déclencheurs et alertes pour surveiller l\'infrastructure du parc en temps réel.',
      'm3.title': 'Cybersécurité & durcissement',
      'm3.desc': 'Audit des configurations réseau, renforcement des politiques de sécurité et application des bonnes pratiques sur les équipements actifs du SI.',
      'm3.tag': 'Sécurité · Audit',
      'm4.title': 'Documentation & procédures',
      'm4.desc': 'Rédaction de procédures techniques, documentation des configurations critiques et transmission des bonnes pratiques à l\'équipe IT.',
      'm4.tag': 'Docs · Base de connaissances',
      'journal.eyebrow': 'Semaine par semaine', 'journal.title': 'Journal technique',
      'art1.date': '8 avril 2025',
      'art1.title': 'Déployer un agent GLPI sur 200 machines sans se perdre',
      'art1.desc': 'Premier grand projet : déploiement massif de l\'agent GLPI sur le parc machine du zoo. Leçons sur l\'automatisation, les échecs silencieux et ce que l\'inventaire révèle d\'inattendu.',
      'art1.link': 'Lire l\'article →',
      'art2.date': '22 avril 2025',
      'art2.title': 'Mes premiers dashboards Zabbix en production',
      'art2.desc': 'Comment j\'ai conçu les tableaux de bord de supervision réseau et calibré les seuils d\'alerte pour qu\'ils soient réellement exploitables au quotidien.',
      'art3.date': '6 mai 2025',
      'art3.title': 'Audit de sécurité : ce que j\'ai trouvé (et corrigé)',
      'art3.desc': 'Retour sur un audit de configuration réseau en environnement de production critique — et comment prioriser les correctifs sans couper le service.',
      'art4.date': '20 mai 2025',
      'art4.title': 'D\'Ath à Brugelette : l\'autre rythme du stage',
      'art4.desc': 'La colocation, le trajet du matin, les animaux aperçus depuis le parking. Ce que la vie autour du stage apporte à la façon de travailler.',
      'art.read': 'Lire →',
      'tag.cyber': 'Cybersécurité', 'tag.life': 'Vie de stage', 'tag.docs': 'Documentation',
      'blog.eyebrow': 'En détail', 'blog.title': 'Articles de blog',
      'blog.desc': 'Des articles plus longs et détaillés sur les défis techniques rencontrés pendant le stage — ce qui ne rentre pas dans une entrée de journal hebdomadaire.',
      'blog.soon': 'Bientôt disponible', 'blog.read': 'Lire l\'article',
      'blog.art1.date': 'Avril 2026',
      'blog.art1.title': 'Déployer des agents GLPI sur 200 machines : retour d\'expérience',
      'blog.art1.desc': 'Scripts, échecs silencieux, conflits d\'agents — un walkthrough complet du déploiement, ce qui a cassé, et comment j\'ai résolu.',
      'blog.art2.title': 'Construire des dashboards Zabbix pour un zoo : déclencheurs custom et alert fatigue',
      'blog.art2.desc': 'Comment j\'ai calibré 80+ règles de supervision pour qu\'elles soient exploitables sans réveiller l\'astreinte à chaque anomalie.',
      'blog.art3.title': 'Audit de sécurité sur un réseau de production : ce que j\'ai trouvé',
      'blog.art3.desc': 'Constats, priorités, et l\'art diplomatique d\'expliquer à une équipe que sa config réseau mérite du travail.',
      'blog.art4.title': 'Écrire une documentation IT que les gens lisent vraiment',
      'blog.art4.desc': 'La démarche derrière la construction d\'une base de connaissances from scratch — structure, ton, et comment impliquer les collègues.',
      'blog.footer': 'Articles publiés au fil du stage —',
      'blog.footer.strong': '3 autres à venir',
      'life.eyebrow': 'Au-delà du helpdesk', 'life.title': 'Vie de stage',
      'life.lbl.housing': 'Logement', 'life.lbl.flatmates': 'Colocataires',
      'life.lbl.commute': 'Transport', 'life.lbl.travel': 'Temps de trajet',
      'life.val.housing': 'Colocation à Ath',
      'life.val.flatmates': '3 autres personnes',
      'life.val.commute': 'Voiture personnelle',
      'life.desc1': 'Basé à Ath avec trois colocataires, je fais la route jusqu\'au parc chaque matin. Vingt-cinq minutes de campagne wallonne entre champs et chevaux — une bulle de décompression avant de plonger dans les tickets du helpdesk.',
      'life.desc2': 'Ces photos, prises depuis la coloc, capturent bien l\'atmosphère : calme, vert, loin des open spaces. Un contraste saisissant avec les journées techniques.',
      'tips.eyebrow': 'À retenir', 'tips.title': 'Leçons du stage',
      'tip1': '<strong>Régler les démarches administratives tôt :</strong> couverture santé étudiante, assurance voiture à l\'étranger, convention de stage — tout régler avant le premier jour.',
      'tip2': '<strong>S\'immerger vraiment :</strong> profiter d\'être dans un parc animalier. Une pause déjeuner parmi les pandas recharge autant qu\'un café.',
      'tip3': '<strong>Réseauter en interne :</strong> les pauses avec l\'équipe IT sont souvent là où on apprend le plus — les fixes non documentés, les pratiques maison.',
      'tip4': '<strong>Documenter au fur et à mesure :</strong> ne jamais remettre la doc à plus tard. Un ticket fermé sans note de résolution, c\'est de la dette technique pour toute l\'équipe.',
      'contact.eyebrow': 'Me contacter',
      'contact.title': 'Une question sur mon stage ?',
      'contact.desc': 'Recruteur, étudiant curieux ou simplement passionné par les systèmes et réseaux — je suis toujours partant pour discuter.',
      'form.name': 'Nom', 'form.email': 'Email', 'form.message': 'Message',
      'ph.name': 'Votre nom', 'ph.message': 'Votre message...',
      'form.submit': 'Envoyer le message', 'form.sent': 'Message envoyé ! ✓',
      'footer.text': 'Conçu par',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active);
    });
    currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  applyLang(currentLang);

  /* ── CONTACT FORM (EmailJS) ── */
  // Les clés EmailJS sont dans l'index.html

  /* ── PRELOADER ── */
  const preloader = document.getElementById('preloader');
  const bar       = document.getElementById('preloaderBar');
  if (preloader && bar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 18 + 8;
      bar.style.width = Math.min(progress, 95) + '%';
      if (progress >= 95) clearInterval(interval);
    }, 120);

    window.addEventListener('load', () => {
      clearInterval(interval);
      bar.style.width = '100%';
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => preloader.remove(), 400);
      }, 300);
    });
  }

  /* ── SCROLL PROGRESS BAR ── */
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      scrollProgress.style.width = pct + '%';
    }, { passive: true });
  }

  /* ── BACK TO TOP ── */
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── STATS COUNTER ── */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const dur    = 1200;
        const step   = dur / 60;
        let current  = 0;
        const inc    = target / (dur / step);
        const timer  = setInterval(() => {
          current += inc;
          el.textContent = Math.min(Math.round(current), target);
          if (current >= target) clearInterval(timer);
        }, step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => observer.observe(el));
  }

  /* ── GSAP ANIMATIONS (si disponible) ── */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#heroContent', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.3 });
    gsap.utils.toArray('.card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        opacity: 0, y: 30, duration: 0.7, delay: i * 0.05, ease: 'power2.out'
      });
    });
  }

});
