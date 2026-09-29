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
    'journal.eyebrow': 'Month by month', 'journal.title': 'Technical journal',
    'art1.date': 'April 1, 2026',
    'art1.title': 'Week 1: discovering the IT infrastructure of an 80-hectare zoo',
    'art1.desc': 'First badge, first tickets, first walk through the network. Meeting the IT team and mapping a critical infrastructure: ticketing, CCTV, internal networks.',
    'art2.date': 'April 15, 2026',
    'art2.title': 'Rolling out a GLPI agent to 200 machines without getting lost',
    'art2.desc': 'First major project: mass deployment across the zoo\'s machine estate. Lessons on automation, silent failures, and unexpected inventory discoveries.',
    'art3.date': 'April 29, 2026',
    'art3.title': 'Cash registers &amp; card terminals: helpdesk in the park\'s restaurants',
    'art3.desc': 'Stepping out of the server room to fix payment terminals and cash registers in the park\'s restaurants and shops. A different pace, different users, unexpected breakdowns.',
    'art4.date': 'May 6, 2026',
    'art4.title': 'My first Zabbix dashboards in production',
    'art4.desc': 'How I built the network monitoring dashboards and tuned 80+ alert thresholds so they are actually actionable — without waking the team for every minor blip.',
    'art5.date': 'May 13, 2026',
    'art5.title': 'Overhauling the public Wi-Fi hotspots across the park',
    'art5.desc': 'Auditing, reconfiguring and replacing public Wi-Fi access points spread over 80 hectares. Challenge: maintaining visitor coverage in a wide, humid outdoor environment.',
    'art6.date': 'May 27, 2026',
    'art6.title': 'Security audit: what I found (and fixed)',
    'art6.desc': 'A walkthrough of a network configuration audit in a critical production environment — and how to prioritize fixes without cutting service.',
    'art7.date': 'June 3, 2026',
    'art7.title': 'Writing IT documentation people actually read',
    'art7.desc': 'Building a knowledge base from scratch for the IT team: structure, templates, tone. And above all, convincing colleagues to contribute to it day to day.',
    'art8.date': 'June 17, 2026',
    'art8.title': 'Intense week: back-to-back failures and emergency IT',
    'art8.desc': 'A week where everything breaks at once: crashed terminals, ticketing printer down, card reader faulty on a Sunday. Real-world incident management with a full house in the park.',
    'art9.date': 'June 30, 2026',
    'art9.title': 'Three months inside Pairi Daiza\'s information system',
    'art9.desc': 'Looking back on three months of systems and network administration at one of Europe\'s largest zoos. What I learned, what I take away, and why this internship stays unique.',
    'art.read': 'Read →',
    'tag.cyber': 'Cybersecurity', 'tag.life': 'Internship life',
    'tag.field': 'Field work', 'tag.onboarding': 'Onboarding', 'tag.recap': 'Recap',
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
    'blog.art1.desc': "Scripting, silent failures, agent conflicts — a full walkthrough of the rollout, what broke, and how I fixed it.",
    'blog.art2.date': 'May 2026',
    'blog.art2.title': 'Zabbix dashboards for a zoo: custom triggers and alert fatigue',
    'blog.art2.desc': 'How I tuned 80+ monitoring rules to be actionable day to day without waking the team for every minor anomaly.',
    'blog.art3.date': 'May 2026',
    'blog.art3.title': '80 hectares of Wi-Fi: overhauling the park\'s public hotspots',
    'blog.art3.desc': 'Audit, reconfiguration and hardware replacement of public access points across the whole park — outdoor coverage in a humid environment is its own challenge.',
    'blog.art4.date': 'April 2026',
    'blog.art4.title': 'Cash registers &amp; card terminals: IT support in the park\'s restaurants',
    'blog.art4.desc': 'Payment terminals, receipt printers, cash drawers — troubleshooting in the field with a queue of customers waiting. The human side of IT support.',
    'blog.footer': 'All articles from the 3-month internship —',
    'blog.footer.strong': 'more coming',
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
    'journal.eyebrow': 'Mois par mois', 'journal.title': 'Journal de bord technique',
    'art1.date': '1er avril 2026',
    'art1.title': 'Semaine 1 : découvrir l\'infrastructure IT d\'un zoo de 80 hectares',
    'art1.desc': 'Premier badge, premiers tickets, premier tour du réseau. Rencontre avec l\'équipe IT et cartographie d\'une infrastructure critique : billetterie, vidéosurveillance, réseaux internes.',
    'art2.date': '15 avril 2026',
    'art2.title': 'Déployer un agent GLPI sur 200 postes sans se perdre',
    'art2.desc': 'Premier grand projet : déploiement massif de l\'agent GLPI sur le parc machine du zoo. Leçons sur l\'automatisation, les échecs silencieux et ce que l\'inventaire révèle d\'inattendu.',
    'art3.date': '29 avril 2026',
    'art3.title': 'Caisses et TPE : le helpdesk terrain dans les restaurants du parc',
    'art3.desc': 'Sortir de la salle serveurs pour dépanner les terminaux de paiement et caisses enregistreuses dans les restaurants et boutiques. Rythme différent, utilisateurs différents, pannes inattendues.',
    'art4.date': '6 mai 2026',
    'art4.title': 'Mes premiers dashboards Zabbix en production',
    'art4.desc': 'Comment j\'ai construit les tableaux de bord de supervision réseau et calibré 80+ seuils d\'alerte pour qu\'ils soient exploitables — sans réveiller l\'équipe pour chaque anomalie mineure.',
    'art5.date': '13 mai 2026',
    'art5.title': 'Remise en forme des bornes Wi-Fi publiques sur l\'ensemble du parc',
    'art5.desc': 'Audit, reconfiguration et remplacement de bornes Wi-Fi publiques sur 80 hectares. Défi : maintenir la couverture visiteurs dans un environnement extérieur humide et vaste.',
    'art6.date': '27 mai 2026',
    'art6.title': 'Audit de sécurité : ce que j\'ai trouvé (et corrigé)',
    'art6.desc': 'Retour sur un audit de configuration réseau en environnement de production critique — et comment prioriser les correctifs sans couper le service.',
    'art7.date': '3 juin 2026',
    'art7.title': 'Rédiger une doc technique que les gens lisent vraiment',
    'art7.desc': 'Construire une base de connaissances from scratch pour l\'équipe IT : structure, gabarits, ton. Et surtout, convaincre les collègues d\'y contribuer au quotidien.',
    'art8.date': '17 juin 2026',
    'art8.title': 'Semaine intense : pannes en série et gestion d\'urgences IT',
    'art8.desc': 'Une semaine où tout tombe en même temps : bornes plantées, imprimante billetterie hors service, TPE défaillant un dimanche. La gestion d\'incidents en conditions réelles, avec le parc plein de monde.',
    'art9.date': '30 juin 2026',
    'art9.title': 'Bilan : trois mois au cœur du SI de Pairi Daiza',
    'art9.desc': 'Retour sur trois mois d\'administration systèmes et réseaux dans l\'un des plus grands zoos d\'Europe. Ce que j\'ai appris, ce que j\'emporte, et pourquoi ce stage reste unique.',
    'art.read': 'Lire →',
    'tag.cyber': 'Cybersécurité', 'tag.life': 'Vie de stage',
    'tag.field': 'Terrain', 'tag.onboarding': 'Intégration', 'tag.recap': 'Bilan',
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
    'blog.art1.desc': "Scripts, échecs silencieux, conflits d'agents — un walkthrough complet du déploiement, ce qui a cassé, et comment j'ai résolu.",
    'blog.art2.date': 'Mai 2026',
    'blog.art2.title': "Dashboards Zabbix pour un zoo : déclencheurs custom et alert fatigue",
    'blog.art2.desc': "Comment j'ai calibré 80+ règles de supervision pour qu'elles soient exploitables au quotidien sans réveiller l'équipe pour chaque anomalie mineure.",
    'blog.art3.date': 'Mai 2026',
    'blog.art3.title': "80 hectares de Wi-Fi : remise en forme des bornes publiques du parc",
    'blog.art3.desc': "Audit, reconfiguration et remplacement de bornes d'accès public sur tout le parc — la couverture extérieure en environnement humide, c'est un défi à part entière.",
    'blog.art4.date': 'Avril 2026',
    'blog.art4.title': "Caisses et TPE : le support IT terrain dans les restaurants du parc",
    'blog.art4.desc': "Terminaux de paiement, imprimantes tickets, tiroirs-caisse — dépanner en terrain avec une file d'attente derrière. La face humaine du support informatique.",
    'blog.footer': 'Tous les articles du stage de 3 mois —',
    'blog.footer.strong': 'à suivre',
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

  /* ── PRELOADER — désactivé temporairement ── */

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
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
      onUpdate() { el.textContent = Math.round(obj.val); }
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
