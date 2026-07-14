(() => {
  'use strict';

  // ===== TOUCH DETECTION =====
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    document.body.classList.add('is-touch');
  }

  // ===== DEBOUNCE UTILITY =====
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // ===== CUSTOM CURSOR (desktop only) =====
  if (!isTouchDevice) {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Cursor hover effects on interactive elements
    document.querySelectorAll('a, button, .skill-card, .project-card, .hamburger').forEach(el => {
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
  }

  // ===== PARTICLE SYSTEM (spatial partitioning) =====
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  const CELL_SIZE = 120;
  let grid = {};

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', debounce(resizeCanvas, 200));

  const particles = [];
  const count = window.innerWidth < 768 ? 40 : 80;

  for (let i = 0; i < count; i++) {
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

  function drawParticles() {
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

    // Build spatial grid
    buildGrid();

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + p.color + ',' + p.opacity + ')';
      ctx.fill();
    }

    // Draw connections (spatial partitioning - only check neighbors)
    const drawn = new Set();
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
        const maxDist = 120;
        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(147,51,234,' + ((1 - dist / maxDist) * 0.15) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }
  drawParticles();

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
})();
