/* ================================================================
   BLOG DE STAGE v2 — Benjamin Krauss @ Pairi Daiza
   GSAP · Swiper · Custom Cursor · Preloader · i18n FR/EN
================================================================ */

/* ── TRANSLATIONS ── */
const T = {
  en: {
    'preloader.label': 'Loading internship blog',
    'nav.about': 'About', 'nav.missions': 'Missions', 'nav.journal': 'Journal',
    'nav.life': 'Life', 'nav.contact': 'Contact',
    'hero.badge': 'ESAIP Engineering Student · Work-Study',
    'hero.line1': 'Live from',
    'hero.sub': 'Systems &amp; Network Administrator — three months at the heart of Europe\'s best zoo. I monitor infrastructure with <strong>Zabbix</strong>, manage IT assets via <strong>GLPI</strong>, and harden network security.',
    'hero.btn.journal': 'Read the journal', 'hero.btn.missions': 'View missions',
    'hero.tag1': 'Best Zoo in Europe', 'hero.tag3': 'IT Department',
    'stat.area': 'Park area', 'stat.visitors': 'Visitors / year',
    'stat.machines': 'Machines deployed', 'stat.internship': 'Internship',
    'about.eyebrow': 'Who I am',
    'about.lbl.school': 'School', 'about.lbl.role': 'Role',
    'about.lbl.location': 'Location', 'about.lbl.duration': 'Duration',
    'about.val.role': 'Systems &amp; Network Admin',
    'about.val.location': 'Brugelette, Belgium', 'about.val.duration': '3 months · 2026',
    'about.desc': 'Passionate about network infrastructure and cybersecurity, I joined Pairi Daiza\'s IT department for my final-year internship. Running a professional information system just steps from giant pandas and Siberian tigers — an experience unlike any other.',
    'chip.cyber': 'Cybersecurity', 'chip.monitoring': 'Network monitoring',
    'chip.sysadmin': 'System administration', 'chip.docs': 'Documentation',
    'dest.eyebrow': 'The destination',
    'dest.lbl.company': 'Company', 'dest.lbl.sector': 'Sector',
    'dest.lbl.location': 'Location', 'dest.lbl.dept': 'Department',
    'dest.val.sector': 'Zoological &amp; botanical park',
    'dest.val.location': 'Brugelette, Wallonia',
    'dest.val.dept': 'IT · Systems &amp; Network',
    'dest.desc': 'One of the largest zoological parks in Europe — voted best zoo in Europe several times, three Michelin Green Guide stars. Its IT department runs a critical infrastructure across 80 hectares: ticketing, video surveillance, internal networks. An exceptional technical playground.',
    'animal.panda': 'Giant panda', 'animal.flamingo': 'Flamingos', 'animal.penguin': 'Penguins',
    'animal.bear': 'Bear', 'animal.peacock': 'Peacock', 'animal.kangaroo': 'Kangaroo',
    'animal.monkey': 'Monkey', 'animal.panda2': 'Panda',
    'missions.eyebrow': 'What I did', 'missions.title': 'Technical missions',
    'm1.title': 'Asset management — GLPI',
    'm1.desc': 'Inventory, ticketing and IT asset tracking. Agent deployment, automated imports, SLA configuration and the internal helpdesk.',
    'm2.title': 'Network monitoring — Zabbix',
    'm2.desc': 'Building monitoring dashboards, configuring custom triggers and alerts to watch the park\'s infrastructure in real time.',
    'm3.title': 'Cybersecurity &amp; hardening',
    'm3.desc': 'Auditing network configurations, strengthening security policies and applying best practices across the IS active equipment.',
    'm3.tag': 'Security · Audit',
    'm4.title': 'Documentation &amp; procedures',
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
    'tag.cyber': 'Cybersecurity', 'tag.life': 'Internship life',
    'life.eyebrow': 'Beyond the helpdesk', 'life.title': 'Internship life',
    'life.lbl.housing': 'Housing', 'life.val.housing': 'Shared flat in Ath',
    'life.lbl.flatmates': 'Flatmates', 'life.val.flatmates': '3 other people',
    'life.lbl.commute': 'Commute', 'life.val.commute': 'Personal car',
    'life.lbl.travel': 'Travel time',
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
    'form.submit': 'Send message',
    'footer.text': 'Designed by',
    'form.sent': 'Message sent! ✓',
    'nav.blog': 'Blog',
    'tag.docs': 'Documentation',
    'blog.eyebrow': 'Deep dives',
    'blog.title': 'Blog articles',
    'blog.desc': "Longer, more detailed writeups on the technical challenges I faced during the internship — the kind of stuff that doesn't fit in a weekly journal entry.",
    'blog.soon': 'Coming soon',
    'blog.read': 'Read article',
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
  },
  fr: {
    'preloader.label': 'Chargement du blog de stage',
    'nav.about': 'À propos', 'nav.missions': 'Missions', 'nav.journal': 'Journal',
    'nav.life': 'Vie de stage', 'nav.contact': 'Contact',
    'hero.badge': 'Étudiant ingénieur ESAIP · Alternance',
    'hero.line1': 'En direct de',
    'hero.sub': 'Administrateur Systèmes &amp; Réseaux — trois mois au cœur du meilleur zoo d\'Europe. Je supervise l\'infrastructure avec <strong>Zabbix</strong>, gère le parc informatique via <strong>GLPI</strong> et renforce la sécurité réseau.',
    'hero.btn.journal': 'Lire le journal', 'hero.btn.missions': 'Voir les missions',
    'hero.tag1': 'Meilleur Zoo d\'Europe', 'hero.tag3': 'Département IT',
    'stat.area': 'Surface du parc', 'stat.visitors': 'Visiteurs / an',
    'stat.machines': 'Machines déployées', 'stat.internship': 'Stage',
    'about.eyebrow': 'Qui suis-je',
    'about.lbl.school': 'École', 'about.lbl.role': 'Poste',
    'about.lbl.location': 'Lieu', 'about.lbl.duration': 'Durée',
    'about.val.role': 'Admin Systèmes &amp; Réseaux',
    'about.val.location': 'Brugelette, Belgique', 'about.val.duration': '3 mois · 2026',
    'about.desc': 'Passionné par l\'infrastructure réseau et la cybersécurité, j\'ai rejoint le département IT de Pairi Daiza pour mon stage de fin d\'études. Gérer un système d\'information professionnel à quelques pas des pandas géants et des tigres de Sibérie — une expérience unique.',
    'chip.cyber': 'Cybersécurité', 'chip.monitoring': 'Supervision réseau',
    'chip.sysadmin': 'Administration système', 'chip.docs': 'Documentation',
    'dest.eyebrow': 'La destination',
    'dest.lbl.company': 'Entreprise', 'dest.lbl.sector': 'Secteur',
    'dest.lbl.location': 'Lieu', 'dest.lbl.dept': 'Département',
    'dest.val.sector': 'Parc zoologique &amp; botanique',
    'dest.val.location': 'Brugelette, Wallonie',
    'dest.val.dept': 'IT · Systèmes &amp; Réseaux',
    'dest.desc': 'L\'un des plus grands parcs zoologiques d\'Europe — plusieurs fois élu meilleur zoo d\'Europe, trois étoiles au Guide Vert Michelin. Son département IT gère une infrastructure critique sur 80 hectares : billetterie, vidéosurveillance, réseaux internes. Un terrain technique exceptionnel.',
    'animal.panda': 'Panda géant', 'animal.flamingo': 'Flamants roses', 'animal.penguin': 'Manchots',
    'animal.bear': 'Ours', 'animal.peacock': 'Paon', 'animal.kangaroo': 'Kangourou',
    'animal.monkey': 'Singe', 'animal.panda2': 'Panda',
    'missions.eyebrow': 'Ce que j\'ai fait', 'missions.title': 'Missions techniques',
    'm1.title': 'Gestion des actifs — GLPI',
    'm1.desc': 'Inventaire, ticketing et suivi du parc informatique. Déploiement des agents, imports automatisés, configuration des SLA et helpdesk interne.',
    'm2.title': 'Supervision réseau — Zabbix',
    'm2.desc': 'Construction de tableaux de bord de supervision, configuration de déclencheurs et alertes personnalisés pour surveiller l\'infrastructure du parc en temps réel.',
    'm3.title': 'Cybersécurité &amp; durcissement',
    'm3.desc': 'Audit des configurations réseau, renforcement des politiques de sécurité et application des bonnes pratiques sur les équipements actifs du système d\'information.',
    'm3.tag': 'Sécurité · Audit',
    'm4.title': 'Documentation &amp; procédures',
    'm4.desc': 'Rédaction de procédures techniques, documentation des configurations critiques et transmission des bonnes pratiques à l\'équipe IT.',
    'm4.tag': 'Docs · Base de connaissances',
    'journal.eyebrow': 'Semaine par semaine', 'journal.title': 'Journal de bord technique',
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
    'art4.desc': 'La colocation, le trajet matinal en voiture, les animaux aperçus depuis le parking. Ce que la vie autour du stage apporte à la façon de travailler.',
    'art.read': 'Lire →',
    'tag.cyber': 'Cybersécurité', 'tag.life': 'Vie de stage',
    'life.eyebrow': 'Au-delà du helpdesk', 'life.title': 'Vie de stage',
    'life.lbl.housing': 'Logement', 'life.val.housing': 'Colocation à Ath',
    'life.lbl.flatmates': 'Colocataires', 'life.val.flatmates': '3 autres personnes',
    'life.lbl.commute': 'Trajet', 'life.val.commute': 'Voiture personnelle',
    'life.lbl.travel': 'Durée du trajet',
    'life.desc1': 'Basé à Ath avec trois colocataires, je rejoins le parc chaque matin en voiture. Vingt-cinq minutes de campagne wallonne entre champs et chevaux — une bulle de décompression avant de plonger dans les tickets helpdesk.',
    'life.desc2': 'Ces photos, prises depuis la colocation, restituent bien l\'atmosphère : calme, verte, loin des open spaces. Un contraste saisissant avec les journées techniques.',
    'tips.eyebrow': 'À retenir', 'tips.title': 'Leçons du stage',
    'tip1': '<strong>Gérer les démarches tôt :</strong> couverture santé étudiant, assurance auto à l\'étranger, convention de stage — tout régler avant le premier jour.',
    'tip2': '<strong>S\'immerger vraiment :</strong> profiter d\'être dans un parc animalier. Une pause déjeuner parmi les pandas recharge autant qu\'un café.',
    'tip3': '<strong>Tisser des liens en interne :</strong> les pauses avec l\'équipe IT sont souvent là où l\'on apprend le plus — les fixes non documentés, les pratiques maison.',
    'tip4': '<strong>Documenter au fil de l\'eau :</strong> ne jamais repousser la rédaction. Un ticket fermé sans note de résolution est une dette technique pour toute l\'équipe.',
    'contact.eyebrow': 'Prendre contact',
    'contact.title': 'Une question sur mon stage ?',
    'contact.desc': 'Recruteur, étudiant curieux ou passionné de systèmes et réseaux — je suis toujours partant pour une conversation.',
    'form.name': 'Nom', 'form.email': 'Email', 'form.message': 'Message',
    'ph.name': 'Votre nom', 'ph.message': 'Votre message...',
    'form.submit': 'Envoyer le message',
    'footer.text': 'Conçu par',
    'form.sent': 'Message envoyé ! ✓',
    'nav.blog': 'Blog',
    'tag.docs': 'Documentation',
    'blog.eyebrow': 'En détail',
    'blog.title': 'Articles de blog',
    'blog.desc': "Des articles plus longs et détaillés sur les défis techniques rencontrés pendant le stage — ce qui ne rentre pas dans une entrée de journal hebdomadaire.",
    'blog.soon': 'Bientôt disponible',
    'blog.read': "Lire l'article",
    'blog.art1.date': 'Avril 2026',
    'blog.art1.title': "Déployer des agents GLPI sur 200 machines : retour d'expérience",
    'blog.art1.desc': 'Scripts, échecs silencieux, conflits d'agents — un walkthrough complet du déploiement, ce qui a cassé, et comment j'ai résolu.',
    'blog.art2.title': 'Construire des dashboards Zabbix pour un zoo : déclencheurs custom et alert fatigue',
    'blog.art2.desc': "Comment j'ai calibré 80+ règles de supervision pour qu'elles soient exploitables sans réveiller l'astreinte à chaque anomalie.",
    'blog.art3.title': 'Audit de sécurité sur un réseau de production : ce que j'ai trouvé',
    'blog.art3.desc': 'Constats, priorités, et l'art diplomatique d'expliquer à une équipe que sa config réseau mérite du travail.',
    'blog.art4.title': 'Écrire une documentation IT que les gens lisent vraiment',
    'blog.art4.desc': "La démarche derrière la construction d'une base de connaissances from scratch — structure, ton, et comment impliquer les collègues.",
    'blog.footer': 'Articles publiés au fil du stage —',
    'blog.footer.strong': '3 autres à venir',
  }
};

/* ── i18n ENGINE ── */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang, animate = false) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const dict = T[lang];

  const apply = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
  };

  if (animate) {
    document.body.classList.add('lang-switching');
    setTimeout(() => {
      apply();
      document.body.classList.remove('lang-switching');
    }, 200);
  } else {
    apply();
  }

  /* update buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {

  /* year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* apply saved/default lang */
  applyLang(currentLang, false);

  /* lang switcher */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang, true);
    });
  });

  /* ── PRELOADER ── */
  const preloaderEl = document.getElementById('preloader');
  const barEl       = document.getElementById('preloaderBar');
  let prog = 0;
  const ticker = setInterval(() => {
    prog = Math.min(prog + Math.random() * 18, 92);
    if (barEl) barEl.style.width = prog + '%';
  }, 90);

  function hidePreloader() {
    clearInterval(ticker);
    if (!preloaderEl) return;
    if (barEl) barEl.style.width = '100%';
    setTimeout(() => {
      preloaderEl.style.transition = 'opacity 0.6s ease';
      preloaderEl.style.opacity = '0';
      preloaderEl.style.pointerEvents = 'none';
      setTimeout(() => {
        preloaderEl.style.display = 'none';
      }, 650);
    }, 350);
  }

  window.addEventListener('load', hidePreloader);
  /* Fallback — si window.load ne se déclenche pas après 4s */
  setTimeout(hidePreloader, 4000);

  /* ── GSAP ── */
  gsap.registerPlugin(ScrollTrigger);

  /* hero entrance */
  gsap.set(['#heroContent .badge','#heroContent h1','#heroContent .hero-sub',
            '#heroContent .hero-actions .btn','.hero-tag'], { opacity: 0 });

  const heroTL = gsap.timeline({ delay: 0.5 });
  heroTL
    .to('#heroContent .badge',              { opacity:1, y:0, from:{y:20}, duration:0.7, ease:'power3.out' })
    .to('#heroContent h1',                  { opacity:1, y:0, from:{y:40}, duration:1,   ease:'power3.out' }, '-=0.4')
    .to('#heroContent .hero-sub',           { opacity:1, y:0, from:{y:28}, duration:0.8, ease:'power3.out' }, '-=0.55')
    .to('#heroContent .hero-actions .btn',  { opacity:1, y:0, from:{y:20}, duration:0.65, stagger:0.12, ease:'power3.out' }, '-=0.5')
    .to('.hero-tag',                        { opacity:1, x:0, from:{x:20}, duration:0.6, stagger:0.1, ease:'power3.out' }, '-=0.5');

  /* scroll-triggered sections */
  gsap.utils.toArray('.card, .stats-section, .marquee-wrap').forEach(el => {
    gsap.fromTo(el,
      { opacity:0, y:44 },
      { opacity:1, y:0, duration:0.85, ease:'power3.out',
        scrollTrigger: { trigger:el, start:'top 88%', toggleActions:'play none none none' }
      }
    );
  });

  gsap.from('.mission-item', {
    opacity:0, y:32, duration:0.7, stagger:0.1, ease:'power3.out',
    scrollTrigger: { trigger:'.missions-grid', start:'top 84%' }
  });
  gsap.from('.timeline-item', {
    opacity:0, x:-28, duration:0.65, stagger:0.13, ease:'power3.out',
    scrollTrigger: { trigger:'.timeline', start:'top 84%' }
  });
  gsap.from('.life-photo', {
    opacity:0, scale:0.95, duration:0.8, stagger:0.15, ease:'power3.out',
    scrollTrigger: { trigger:'.life-photos', start:'top 86%' }
  });

  /* ── STATS COUNTER ── */
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = +el.dataset.target;
    ScrollTrigger.create({
      trigger: el, start:'top 92%', once:true,
      onEnter() {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration:1.8, ease:'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.val); }
        });
      }
    });
  });

  /* ── SCROLL PROGRESS ── */
  const progressBar = document.getElementById('scrollProgress');
  const navBar      = document.getElementById('navbar');
  const sections    = document.querySelectorAll('section[id]');
  const navLinks    = document.querySelectorAll('.nav-link:not(.nav-link--cta)');
  const backBtn     = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    progressBar.style.width = pct + '%';
    navBar.classList.toggle('scrolled', window.scrollY > 40);
    backBtn.classList.toggle('visible', window.scrollY > 500);
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(lk => lk.classList.toggle('active', lk.getAttribute('href') === `#${current}`));
    document.querySelectorAll('.drawer-link').forEach(lk => lk.classList.toggle('active', lk.getAttribute('href') === `#${current}`));
  }, { passive: true });

  backBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  /* ── HAMBURGER + DRAWER MOBILE ── */
  const navToggle     = document.getElementById('navToggle');
  const drawer        = document.getElementById('mobileDrawer');
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

  /* ── SWIPER ── */
  new Swiper('.animal-swiper', {
    slidesPerView:3, spaceBetween:16, loop:true, speed:700, grabCursor:true,
    pagination:  { el:'.swiper-pagination', clickable:true, dynamicBullets:true },
    navigation:  { nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' },
    autoplay:    { delay:3800, disableOnInteraction:false, pauseOnMouseEnter:true },
    breakpoints: { 0:{slidesPerView:1.2,spaceBetween:12}, 480:{slidesPerView:2,spaceBetween:14}, 700:{slidesPerView:3,spaceBetween:16} }
  });

  /* ── CURSEUR PATTE D'OURS (desktop uniquement) ── */
  const paw = document.getElementById('cursorPaw');

  if (paw && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let pawX   = 0, pawY   = 0;
    let started = false;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function animatePaw() {
      pawX = lerp(pawX, mouseX, 0.14);
      pawY = lerp(pawY, mouseY, 0.14);
      paw.style.transform = `translate(calc(${pawX}px - 50%), calc(${pawY}px - 50%))`;
      requestAnimationFrame(animatePaw);
    }
    animatePaw();

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        pawX = mouseX; pawY = mouseY;
        paw.classList.add('is-visible');
        started = true;
      }
    }, { passive: true });

    const hoverTargets = 'a, button, [role="button"], .card, .mission-item, .timeline-card, .blog-card, .nav-link, .drawer-link, .lang-btn, .chip';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverTargets)) {
        paw.classList.add('is-hovering');
        paw.classList.remove('is-clicking');
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverTargets)) paw.classList.remove('is-hovering');
    });
    document.addEventListener('mousedown', () => {
      paw.classList.add('is-clicking');
      paw.classList.remove('is-hovering');
    });
    document.addEventListener('mouseup', () => paw.classList.remove('is-clicking'));
    document.documentElement.addEventListener('mouseleave', () => paw.classList.remove('is-visible'));
    document.documentElement.addEventListener('mouseenter', () => { if (started) paw.classList.add('is-visible'); });

  } else if (paw) {
    paw.style.display = 'none';
    document.body.style.cursor = 'auto';
  }

  /* ── CONTACT ── */
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = e.target.querySelector('button[type="submit"] span[data-i18n]');
    const orig = btn.innerHTML;
    btn.innerHTML = T[currentLang]['form.sent'] || 'Sent ✓';
    e.target.querySelector('button').disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      e.target.querySelector('button').disabled = false;
      e.target.reset();
    }, 3500);
  });

});
