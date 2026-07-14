(() => {
  'use strict';

  // ===== I18N SYSTEM =====
  const translations = {
    en: {
      page: {
        title: 'fojizen | Frontend Developer & UI/UX Designer',
        description: 'fojizen — frontend developer, UI/UX designer and digital creator. Building minimal, powerful digital experiences with code and design.',
        ogTitle: 'fojizen — portfolio',
        ogDescription: 'Frontend developer & digital creator. Building minimal, powerful digital experiences.',
        twitterTitle: 'fojizen — portfolio',
        twitterDescription: 'Frontend developer & digital creator. Building minimal, powerful digital experiences.'
      },
      nav: {
        about: 'about',
        skills: 'skills',
        projects: 'projects',
        contact: 'contact'
      },
      hero: {
        tag: '// digital creator & developer',
        subtitle: 'Coding in the dark,<br>building digital worlds in <span data-i18n="hero.purpleLight">purple light</span>.',
        purpleLight: 'purple light',
        viewProjects: 'view projects',
        getInTouch: 'get in touch',
        scroll: 'scroll'
      },
      about: {
        title: 'about me',
        available: 'available — open for projects',
        p1: 'Hey, I\'m <span>fojizen</span>. I write code in the dark corners of the digital world, designing minimal yet powerful experiences.',
        p2: 'I approach every project with an <span data-i18n="about.artistsEye">artist\'s eye</span>, blending technique with aesthetics. Glowing like purple light on a black canvas is my style.',
        artistsEye: 'artist\'s eye',
        p3: 'I\'m actively working in frontend development, UI/UX design, and digital content creation.'
      },
      skills: {
        title: 'skills',
        frontend: {
          name: 'frontend dev',
          desc: 'Building modern and responsive interfaces with HTML, CSS, JavaScript, and React.'
        },
        uiux: {
          name: 'UI / UX design',
          desc: 'Wireframes, prototypes, and visual design with Figma. User-centered experiences.'
        },
        motion: {
          name: 'motion & animation',
          desc: 'Interactive experiences brought to life with CSS animations, GSAP and Canvas.'
        },
        backend: {
          name: 'backend & api',
          desc: 'Server-side development with Node.js and Python. REST API design and integration.'
        },
        content: {
          name: 'digital content',
          desc: 'Visual design, social media content, and brand identity creation.'
        },
        problem: {
          name: 'problem solving',
          desc: 'The capacity to produce creative and efficient solutions to complex problems.'
        }
      },
      projects: {
        title: 'projects',
        tags: {
          beta: 'beta'
        },
        todo: {
          title: 'To Do List',
          desc: 'A clean and minimal task management app. Add, complete, and delete tasks — your progress is saved automatically.',
          note: '⚠ This project is currently in development and being tested. Some features may be incomplete or subject to change.'
        },
        autoclicker: {
          title: 'AutoClickerPro',
          desc: 'Advanced auto-clicker with customizable intervals, hotkeys, click patterns, and macro recording. Built with vanilla JS for Windows automation.',
          note: '⚠ Windows only — requires admin for global hotkeys'
        },
        link: 'explore'
      },
      contact: {
        title: 'contact',
        text: 'Got a project idea? Let\'s build something together.<br>Every great thing starts with a conversation — let\'s start that conversation.',
        email: 'email',
        github: 'github',
        linkedin: 'linkedin',
        instagram: 'instagram',
        reddit: 'reddit'
      },
      footer: {
        text: '© 2026 <span>fojizen</span> — all rights reserved. code is written in the dark.'
      }
    },
    tr: {
      page: {
        title: 'fojizen | Frontend Geliştirici & UI/UX Tasarımcı',
        description: 'fojizen — frontend geliştirici, UI/UX tasarımcı ve dijital yaratıcı. Kod ve tasarımla minimal, güçlü dijital deneyimler yaratıyorum.',
        ogTitle: 'fojizen — portfolyo',
        ogDescription: 'Frontend geliştirici & dijital yaratıcı. Minimal, güçlü dijital deneyimler inşa ediyorum.',
        twitterTitle: 'fojizen — portfolyo',
        twitterDescription: 'Frontend geliştirici & dijital yaratıcı. Minimal, güçlü dijital deneyimler inşa ediyorum.'
      },
      nav: {
        about: 'hakkımda',
        skills: 'yetenekler',
        projects: 'projeler',
        contact: 'iletişim'
      },
      hero: {
        tag: '// dijital yaratıcı & geliştirici',
        subtitle: 'Karanlıkta kod yazıyorum,<br><span data-i18n="hero.purpleLight">mor ışıkta</span> dijital dünyalar yaratıyorum.',
        purpleLight: 'mor ışıkta',
        viewProjects: 'projeleri gör',
        getInTouch: 'iletişime geç',
        scroll: 'aşağı kaydır'
      },
      about: {
        title: 'hakkımda',
        available: 'müsait — projelere açık',
        p1: 'Merhaba, ben <span>fojizen</span>. Dijital dünyanın karanlık köşelerinde kod yazıyorum, minimal ama güçlü deneyimler tasarlıyorum.',
        p2: 'Her projeye <span data-i18n="about.artistsEye">sanatçı gözüyle</span> yaklaşırım, tekniği estetikle harmanlarım. Siyah tuvaldeki mor ışık gibi parlamak benim tarzım.',
        artistsEye: 'sanatçı gözüyle',
        p3: 'Frontend geliştirme, UI/UX tasarımı ve dijital içerik üretiminde aktif çalışıyorum.'
      },
      skills: {
        title: 'yetenekler',
        frontend: {
          name: 'frontend geliştirme',
          desc: 'HTML, CSS, JavaScript ve React ile modern ve duyarlı arayüzler geliştiriyorum.'
        },
        uiux: {
          name: 'UI / UX tasarım',
          desc: 'Figma ile wireframe, prototip ve görsel tasarım. Kullanıcı odaklı deneyimler.'
        },
        motion: {
          name: 'hareket & animasyon',
          desc: 'CSS animasyonları, GSAP ve Canvas ile canlı interaktif deneyimler.'
        },
        backend: {
          name: 'backend & api',
          desc: 'Node.js ve Python ile sunucu taraflı geliştirme. REST API tasarımı ve entegrasyon.'
        },
        content: {
          name: 'dijital içerik',
          desc: 'Görsel tasarım, sosyal medya içeriği ve marka kimliği oluşturma.'
        },
        problem: {
          name: 'problem çözme',
          desc: 'Karmaşık problemler için yaratıcı ve verimli çözümler üretme yeteneği.'
        }
      },
      projects: {
        title: 'projeler',
        tags: {
          beta: 'beta'
        },
        todo: {
          title: 'To Do List',
          desc: 'Temiz ve minimal bir görev yönetim uygulaması. Görev ekleyin, tamamlayın ve silin — ilerlemeniz otomatik kaydedilir.',
          note: '⚠ Bu proje şu anda geliştirme ve test aşamasında. Bazı özellikler eksik olabilir veya değişebilir.'
        },
        autoclicker: {
          title: 'AutoClickerPro',
          desc: 'Özelleştirilebilir aralıklar, kısayol tuşları, tıklama kalıpları ve makro kaydı ile gelişmiş otomatik tıklayıcı. Windows otomasyonu için vanilla JS ile geliştirildi.',
          note: '⚠ Sadece Windows — genel kısayollar için yönetici gerekli'
        },
        link: 'keşfet'
      },
      contact: {
        title: 'iletişim',
        text: 'Bir proje fikriniz var? Birlikte bir şeyler yapalım.<br>Her harika şey bir sohbetle başlar — o sohbeti başlatalım.',
        email: 'e-posta',
        github: 'github',
        linkedin: 'linkedin',
        instagram: 'instagram',
        reddit: 'reddit'
      },
      footer: {
        text: '© 2026 <span>fojizen</span> — tüm hakları saklıdır. kod karanlıkta yazılır.'
      }
    }
  };

  // Language detection and persistence
  function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('tr')) return 'tr';
    return 'en';
  }

  let currentLang = detectLanguage();

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    applyTranslations();
    updateLangButtons();
  }

  function applyTranslations() {
    const t = translations[currentLang];

    // Update meta tags
    document.title = t.page.title;
    document.querySelector('meta[name="description"]').setAttribute('content', t.page.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', t.page.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', t.page.ogDescription);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', t.page.twitterTitle);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', t.page.twitterDescription);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const keys = key.split('.');
      let value = t;
      for (const k of keys) {
        value = value[k];
        if (!value) break;
      }
      if (value) {
        // Check if element has nested elements that need to preserve HTML structure
        if (el.tagName === 'SPAN' && el.innerHTML.includes('<span')) {
          // Complex nested content - use innerHTML
          el.innerHTML = value;
        } else {
          el.innerHTML = value;
        }
      }
    });
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  // Initialize language switcher
  function initLangSwitcher() {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
    updateLangButtons();
  }

  // ===== TOUCH DETECTION =====
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    document.body.classList.add('is-touch');
  }

  // ===== REDUCED MOTION =====
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

  // ===== DEBOUNCE/THROTTLE UTILITIES =====
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  function throttle(fn, limit) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ===== VISIBILITY HANDLING =====
  let isPageVisible = true;
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });

  // ===== CUSTOM CURSOR (desktop only, respects reduced motion) =====
  if (!isTouchDevice && !prefersReducedMotion) {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let cursorRAF = null;
    let lastMouseMove = 0;
    const IDLE_TIMEOUT = 3000; // Stop ring after 3s of no mouse movement

    const updateCursor = throttle(e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseMove = performance.now();
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, 16);

    document.addEventListener('mousemove', updateCursor);

    function animateRing(timestamp) {
      if (!isPageVisible || timestamp - lastMouseMove > IDLE_TIMEOUT) {
        cursorRAF = requestAnimationFrame(animateRing);
        return;
      }
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
      cursorRAF = requestAnimationFrame(animateRing);
    }
    animateRing(0);

    // Cursor hover effects on interactive elements
    document.querySelectorAll('a, button, .skill-card, .project-card, .hamburger, .lang-btn').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorRing.style.width = '60px';
        cursorRing.style.height = '60px';
        cursorRing.style.borderColor = 'rgba(232,121,249,0.8)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'rgba(147,51,234,0.6)';
      });
    });

    // Pause ring animation when tab hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && cursorRAF) {
        cancelAnimationFrame(cursorRAF);
        cursorRAF = null;
      } else if (!document.hidden && !cursorRAF) {
        animateRing(0);
      }
    });
  }

  // ===== PARTICLE SYSTEM (30fps, pauses when hidden, optimized connections) =====
  if (!prefersReducedMotion) {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    const CELL_SIZE = 120;
    let grid = {};
    let frameCount = 0;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', debounce(resizeCanvas, 200));

    // Reduce particle count for low-end devices
    const baseCount = window.innerWidth < 768 ? 25 : (isLowEndDevice ? 40 : 55);
    const particles = [];

    for (let i = 0; i < baseCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '147,51,234' : '192,38,211'
      });
    }

    function buildGrid() {
      grid = {};
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cellX = Math.floor(p.x / CELL_SIZE);
        const cellY = Math.floor(p.y / CELL_SIZE);
        const key = cellX + ',' + cellY;
        if (!grid[key]) grid[key] = [];
        grid[key].push(i);
      }
    }

    function getNeighborIndices(cellX, cellY) {
      const indices = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = (cellX + dx) + ',' + (cellY + dy);
          if (grid[key]) {
            for (let k = 0; k < grid[key].length; k++) {
              indices.push(grid[key][k]);
            }
          }
        }
      }
      return indices;
    }

    let particleRAF = null;
    const TARGET_FPS = 30;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let lastFrameTime = 0;

    function drawParticles(timestamp) {
      if (!isPageVisible) {
        particleRAF = requestAnimationFrame(drawParticles);
        return;
      }

      // Throttle to 30fps
      if (timestamp - lastFrameTime < FRAME_INTERVAL) {
        particleRAF = requestAnimationFrame(drawParticles);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      // Rebuild grid every 2 frames (reduces overhead)
      frameCount++;
      if (frameCount % 2 === 0) {
        buildGrid();
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',' + p.opacity + ')';
        ctx.fill();
      }

      // Draw connections only on even frames (15fps for lines)
      if (frameCount % 2 === 0) {
        const drawn = new Set();
        const maxDist = 100; // Reduced from 120
        const maxDistSq = maxDist * maxDist;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const cellX = Math.floor(p.x / CELL_SIZE);
          const cellY = Math.floor(p.y / CELL_SIZE);
          const neighbors = getNeighborIndices(cellX, cellY);

          for (let n = 0; n < neighbors.length; n++) {
            const j = neighbors[n];
            if (j <= i) continue;
            const pairKey = i + ':' + j;
            if (drawn.has(pairKey)) continue;
            drawn.add(pairKey);

            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = 'rgba(147,51,234,' + ((1 - dist / maxDist) * 0.12) + ')';
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      particleRAF = requestAnimationFrame(drawParticles);
    }
    drawParticles();

    // Pause when tab hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && particleRAF) {
        cancelAnimationFrame(particleRAF);
        particleRAF = null;
      } else if (!document.hidden && !particleRAF) {
        lastFrameTime = 0;
        drawParticles();
      }
    });
  }

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu when clicking links (event delegation)
  mobileMenu.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ===== SCROLL REVEAL (single observer, no double-trigger) =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate skill bars only when the skill-card itself is revealed
        if (entry.target.classList.contains('skill-card')) {
          const fill = entry.target.querySelector('.skill-fill');
          if (fill) fill.classList.add('animated');
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== INIT I18N =====
  applyTranslations();
  initLangSwitcher();
})();