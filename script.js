(() => {
  "use strict";

  /* ============================================================
     CONFIG — flip `status` to "live" and add real values to
     activate a category or social platform later.
     ============================================================ */

  const LIFESTYLE_ITEMS = [
    {
      id: "adventure",
      category: "Adventure",
      title: "Above the Clouds",
      status: "live",
      img: "assets/images/gallery-mountain.jpg",
      imgSm: "assets/images/sm/gallery-mountain-sm.jpg",
      alt: "Steve Selva standing on a mountain ridge above the clouds at sunrise"
    },
    {
      id: "nature",
      category: "Nature",
      title: "Golden Hour Tide",
      status: "live",
      img: "assets/images/gallery-sunset-sitting.jpg",
      imgSm: "assets/images/sm/gallery-sunset-sitting-sm.jpg",
      alt: "Steve Selva sitting by the ocean watching the sunset"
    },
    {
      id: "travel",
      category: "Travel",
      title: "Ancient Roads",
      status: "live",
      img: "assets/images/lifestyle-travel-temple.jpg",
      imgSm: "assets/images/sm/lifestyle-travel-temple-sm.jpg",
      alt: "Steve Selva at a historic temple during golden hour"
    },
    {
      id: "roadtrip",
      category: "Road Trip",
      title: "Coastal Streets",
      status: "live",
      img: "assets/images/feature-latest.jpg",
      imgSm: "assets/images/sm/feature-latest-sm.jpg",
      alt: "Steve Selva walking a European cobblestone street at dusk"
    },
    {
      id: "luxury",
      category: "Luxury",
      title: "After Dark",
      status: "live",
      img: "assets/images/lifestyle-luxury-dinner.jpg",
      imgSm: "assets/images/sm/lifestyle-luxury-dinner-sm.jpg",
      alt: "Steve Selva in a suit at a candlelit dinner table"
    },
    {
      id: "car",
      category: "Car",
      title: "BMW",
      status: "soon",
      img: "assets/images/gallery-profile-side.jpg",
      imgSm: "assets/images/sm/gallery-profile-side-sm.jpg",
      alt: "Steve Selva portrait, city background"
    },
    {
      id: "bike",
      category: "Bike",
      title: "Superbike",
      status: "soon",
      img: "assets/images/gallery-trackjacket.jpg",
      imgSm: "assets/images/sm/gallery-trackjacket-sm.jpg",
      alt: "Steve Selva in a track jacket"
    },
    {
      id: "aviation",
      category: "Aviation",
      title: "Private Helicopter",
      status: "soon",
      img: "assets/images/lifestyle-aviation-office.jpg",
      imgSm: "assets/images/sm/lifestyle-aviation-office-sm.jpg",
      alt: "Steve Selva portrait in a modern glass building"
    }
  ];

  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.3l5 2.7-5 2.7z" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 4h-2.2A3.8 3.8 0 0 0 9 7.8V10H7v3h2v7h3v-7h2.4l.6-3H12V8.2c0-.7.4-1.2 1.2-1.2H15z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3.5c.5 2 2 3.4 4 3.7v3a7 7 0 0 1-4-1.3v6.3a5.2 5.2 0 1 1-4.6-5.2v3.1a2.1 2.1 0 1 0 1.6 2V3.5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5v6M7.5 7.7v.02M11.5 16.5v-3.4c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2.9 2.2 2.4v3.3" stroke-linecap="round"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4.5 4.5l15 15M19.5 4.5l-15 15"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.7c-2.5.55-3-1.06-3-1.06-.42-1.05-1.02-1.33-1.02-1.33-.83-.57.06-.56.06-.56.92.06 1.4.95 1.4.95.82 1.4 2.16 1 2.68.76.08-.6.32-1 .58-1.23-2-.23-4.1-1-4.1-4.42 0-.98.35-1.77.92-2.4-.1-.23-.4-1.16.09-2.42 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.52 0c1.72-1.16 2.48-.92 2.48-.92.49 1.26.19 2.19.1 2.42.57.63.92 1.42.92 2.4 0 3.43-2.1 4.19-4.1 4.41.33.29.62.85.62 1.72v2.55c0 .24.15.52.61.43A9 9 0 0 0 12 3z"/></svg>',
    website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5z"/></svg>'
  };

  const SOCIAL_LINKS = [
    { key: "instagram", name: "Instagram", handle: "@steve___selva", url: "https://www.instagram.com/steve___selva/", featured: true },
    { key: "youtube", name: "YouTube", handle: null, url: null },
    { key: "facebook", name: "Facebook", handle: null, url: null },
    { key: "tiktok", name: "TikTok", handle: null, url: null },
    { key: "linkedin", name: "LinkedIn", handle: null, url: null },
    { key: "x", name: "X", handle: null, url: null },
    { key: "github", name: "GitHub", handle: null, url: null },
    { key: "website", name: "Website", handle: null, url: null }
  ];

  /* ============================================================
     Header scroll state + mobile menu
     ============================================================ */
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });

  /* ============================================================
     Hero reveal + subtle parallax
     ============================================================ */
  const heroSection = document.querySelector(".hero");
  const heroImg = document.querySelector(".hero-img");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.requestAnimationFrame(() => heroSection.classList.add("loaded"));

  if (!prefersReducedMotion && heroImg) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.08, 40);
        heroImg.style.transform = `translateY(${offset}px) scale(1.0)`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ============================================================
     Render Lifestyle grid
     ============================================================ */
  const grid = document.getElementById("lifestyle-grid");

  LIFESTYLE_ITEMS.forEach((item, index) => {
    const card = document.createElement(item.status === "live" ? "button" : "div");
    card.className = "life-card" + (item.status === "soon" ? " is-soon" : "");
    card.setAttribute("role", "listitem");

    if (item.status === "live") {
      card.type = "button";
      card.setAttribute("aria-label", `View ${item.title} — ${item.category}`);
      card.addEventListener("click", () => openLightbox(index));
    }

    card.innerHTML = `
      <picture>
        <source media="(max-width: 640px)" srcset="${item.imgSm}">
        <img src="${item.img}" alt="${item.alt}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async">
      </picture>
      <div class="life-card-overlay">
        <p class="life-card-cat">${item.category}</p>
        <p class="life-card-title">${item.title}</p>
      </div>
      ${item.status === "soon" ? '<span class="soon-badge">Coming Soon</span>' : ""}
    `;

    grid.appendChild(card);
  });

  /* ============================================================
     Render Socials grid
     ============================================================ */
  const socialsGrid = document.getElementById("socials-grid");

  SOCIAL_LINKS.forEach((social) => {
    const hasUrl = Boolean(social.url);
    const el = document.createElement(hasUrl ? "a" : "div");
    el.className = "social-card" + (social.featured ? " featured" : "") + (!hasUrl ? " is-soon" : "");

    if (hasUrl) {
      el.href = social.url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.setAttribute("aria-label", `${social.name} — ${social.handle || "visit"}`);
    }

    el.innerHTML = `
      <span class="social-icon" aria-hidden="true">${ICONS[social.key] || ""}</span>
      <div>
        <p class="social-name">${social.name}</p>
        ${social.handle ? `<p class="social-handle">${social.handle}</p>` : ""}
      </div>
      <p class="social-status">${hasUrl ? "Follow →" : "Coming Soon"}</p>
    `;

    socialsGrid.appendChild(el);
  });

  /* ============================================================
     Lightbox
     ============================================================ */
  const liveItems = LIFESTYLE_ITEMS.filter((i) => i.status === "live");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCategory = document.getElementById("lightbox-category");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  let currentIndex = 0;
  let lastFocusedEl = null;

  function itemIndexToLiveIndex(gridIndex) {
    const item = LIFESTYLE_ITEMS[gridIndex];
    return liveItems.findIndex((i) => i.id === item.id);
  }

  function renderLightbox() {
    const item = liveItems[currentIndex];
    lightboxImg.src = item.img;
    lightboxImg.alt = item.alt;
    lightboxCategory.textContent = item.category;
    lightboxTitle.textContent = item.title;
  }

  function openLightbox(gridIndex) {
    const liveIndex = itemIndexToLiveIndex(gridIndex);
    if (liveIndex === -1) return;
    currentIndex = liveIndex;
    lastFocusedEl = document.activeElement;
    renderLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % liveItems.length;
    renderLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + liveItems.length) % liveItems.length;
    renderLightbox();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", showNext);
  lightboxPrev.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Tab") {
      const focusables = [lightboxClose, lightboxPrev, lightboxNext];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ============================================================
     Footer year
     ============================================================ */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
