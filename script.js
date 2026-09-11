(() => {
  "use strict";

  /* ============================================================
     CONFIG — flip `status` to "live" and add real values to
     activate a category or social platform later.
     ============================================================ */

  const LIFESTYLE_ITEMS = [
    {
      id: "midnight-miles",
      title: "Midnight Miles",
      line: "Some roads are better after dark.",
      img: "assets/images/gallery-trackjacket.jpg",
      imgSm: "assets/images/sm/gallery-trackjacket-sm.jpg",
      alt: "Steve Selva against an urban wall at night"
    },
    {
      id: "two-wheels",
      title: "Two Wheels",
      line: "Another escape is waiting.",
      img: "assets/images/gallery-profile-side.jpg",
      imgSm: "assets/images/sm/gallery-profile-side-sm.jpg",
      alt: "Steve Selva in profile, city light behind him"
    },
    {
      id: "somewhere-new",
      title: "Somewhere New",
      line: "Not every destination needs a name.",
      img: "assets/images/lifestyle-travel-temple.jpg",
      imgSm: "assets/images/sm/lifestyle-travel-temple-sm.jpg",
      alt: "Steve Selva at a historic stone monument during golden hour"
    },
    {
      id: "no-fixed-destination",
      title: "No Fixed Destination",
      line: "The road decides, not the map.",
      img: "assets/images/feature-latest.jpg",
      imgSm: "assets/images/sm/feature-latest-sm.jpg",
      alt: "Steve Selva walking a quiet street at dusk"
    },
    {
      id: "off-the-grid",
      title: "Off the Grid",
      line: "Less noise. More life.",
      img: "assets/images/gallery-mountain.jpg",
      imgSm: "assets/images/sm/gallery-mountain-sm.jpg",
      alt: "Steve Selva standing on a ridge above the clouds"
    },
    {
      id: "after-hours",
      title: "After Hours",
      line: "Different mood. Same journey.",
      img: "assets/images/lifestyle-luxury-dinner.jpg",
      imgSm: "assets/images/sm/lifestyle-luxury-dinner-sm.jpg",
      alt: "Steve Selva at a candlelit table at night"
    },
    {
      id: "above-the-city",
      title: "Above the City",
      line: "Maybe the next view is different.",
      img: "assets/images/lifestyle-aviation-office.jpg",
      imgSm: "assets/images/sm/lifestyle-aviation-office-sm.jpg",
      alt: "Steve Selva in a glass-walled high-rise"
    },
    {
      id: "whats-next",
      title: "What's Next?",
      line: "That's the part I'm not telling yet.",
      img: "assets/images/gallery-sunset-sitting.jpg",
      imgSm: "assets/images/sm/gallery-sunset-sitting-sm.jpg",
      alt: "Steve Selva watching the horizon at sunset"
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
    const card = document.createElement("button");
    card.className = "life-card";
    card.type = "button";
    card.setAttribute("role", "listitem");
    card.setAttribute("aria-label", `Open ${item.title}`);
    card.addEventListener("click", () => openLightbox(index));

    card.innerHTML = `
      <picture>
        <source media="(max-width: 640px)" srcset="${item.imgSm}">
        <img src="${item.img}" alt="${item.alt}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async">
      </picture>
      <div class="life-card-overlay">
        <p class="life-card-title">${item.title}</p>
        <p class="life-card-line">${item.line}</p>
      </div>
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
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxLine = document.getElementById("lightbox-line");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  let currentIndex = 0;
  let lastFocusedEl = null;

  function renderLightbox() {
    const item = LIFESTYLE_ITEMS[currentIndex];
    lightboxImg.src = item.img;
    lightboxImg.alt = item.alt;
    lightboxTitle.textContent = item.title;
    lightboxLine.textContent = item.line;
  }

  function openLightbox(gridIndex) {
    currentIndex = gridIndex;
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
    currentIndex = (currentIndex + 1) % LIFESTYLE_ITEMS.length;
    renderLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + LIFESTYLE_ITEMS.length) % LIFESTYLE_ITEMS.length;
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
