<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Canvas_API-Canvas" alt="Canvas API">
  <img src="https://img.shields.io/badge/PWA-Supported-brightgreen" alt="PWA">
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status">
</p>

<h1 align="center">Fojizen Portfolio</h1>

<p align="center">
  Modern, minimal and interactive personal portfolio website.<br>
  Vanilla HTML5, CSS3, JavaScript — no frameworks, no dependencies.
</p>

<p align="center">
  <a href="https://fojizen.vercel.app" target="_blank">Live Demo</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#performance">Performance</a> &bull;
  <a href="#projects">Projects</a> &bull;
  <a href="#seo">SEO</a>
</p>

---

## Preview

![Portfolio Preview](./fojizenportfolio.png)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 (Variables, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Animations | Canvas API (particles), CSS keyframes |
| Deployment | Vercel |
| PWA | Service Worker, Web App Manifest |

---

## Features

### Internationalization (i18n)
- Auto-detection from browser language (Turkish / English)
- Manual toggle via EN/TR buttons in navigation
- Persisted preference in localStorage
- Full translation of all UI text, meta tags, and project descriptions

### Visual Effects
- Custom cursor with smooth follower ring (GPU-accelerated)
- Particle system with spatial partitioning
- Glitch text effect on hero name
- Floating gradient orbs with CSS animations
- Smooth scroll reveal animations

### Responsive Design
- Mobile-first breakpoints (768px, 480px)
- Hamburger menu with smooth slide-in
- 4:3 aspect-ratio project cards
- Touch-friendly (auto-disables custom cursor)

### PWA (Progressive Web App)
- Installable on mobile and desktop
- Service worker for offline support
- App-like experience when installed

---

## Performance

- **30fps particle throttle** — ~50% CPU reduction
- **Idle cursor pause** — ring stops after 3s of no mouse movement
- **Visibility API** — animations pause when tab is hidden
- **prefers-reduced-motion** — full disable for accessibility
- **Low-end detection** (<=4 cores) — auto-reduces particles to 40
- **Async font loading** with preconnect + print media hack
- **GPU-composited transforms** for cursor/particles

---

## SEO

- **Meta tags:** title, description, keywords, canonical, robots
- **Open Graph:** og:title, og:description, og:image (1200x630), og:url, og:locale
- **Twitter Card:** summary_large_image with image
- **JSON-LD:** Person schema (fojizen) + WebSite structured data
- **Favicon:** SVG, ICO, Apple Touch Icon, PNG
- **Sitemap:** `/sitemap.xml`
- **Google Site Verification:** verified

---

## Projects Featured

| Project | Description | Link |
|---------|-------------|------|
| **Todo App** | Full-stack task management app with PostgreSQL, email verification, and PWA | [Live](https://fojizen-todo-app.onrender.com) / [GitHub](https://github.com/fojizen/todo-app) |
| **AutoClickerPro** | Advanced auto-clicker with hotkeys, macros and click patterns | [GitHub](https://github.com/fojizen/AutoClickerPro) |

---

## Contact

- **GitHub:** [github.com/fojizen](https://github.com/fojizen)
- **LinkedIn:** [linkedin.com/in/fojizen](https://www.linkedin.com/in/fojizen/)
- **Instagram:** [instagram.com/fojizen](https://www.instagram.com/fojizen/)
- **Portfolio:** [fojizen.vercel.app](https://fojizen.vercel.app)

---

## License

MIT License. See [LICENSE](LICENSE) for details.

<p align="center">
  <sub>&copy; 2026 fojizen. All rights reserved.</sub>
</p>
