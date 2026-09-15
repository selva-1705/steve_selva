(() => {
  "use strict";

  /* ============================================================
     CONFIG — Instagram is the only real link. Every other entry
     is a placeholder: swap `url: "#"` for the real address and
     flip `placeholder` to false to activate it.
     ============================================================ */

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
    { key: "instagram", name: "Instagram", handle: "@steve___selva", url: "https://www.instagram.com/steve___selva/", featured: true, placeholder: false },
    { key: "youtube", name: "YouTube", handle: null, url: "#", placeholder: true },
    { key: "facebook", name: "Facebook", handle: null, url: "#", placeholder: true },
    { key: "tiktok", name: "TikTok", handle: null, url: "#", placeholder: true },
    { key: "linkedin", name: "LinkedIn", handle: null, url: "#", placeholder: true },
    { key: "x", name: "X", handle: null, url: "#", placeholder: true },
    { key: "github", name: "GitHub", handle: null, url: "#", placeholder: true },
    { key: "website", name: "Website", handle: null, url: "#", placeholder: true }
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
     Hero reveal + interactions (Home page only)
     ============================================================ */
  const heroSection = document.querySelector(".hero");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  if (heroSection) {
    window.requestAnimationFrame(() => heroSection.classList.add("loaded"));

    if (hasFinePointer && !prefersReducedMotion) {
      let ticking = false;
      let lastEvent = null;
      heroSection.addEventListener("mousemove", (e) => {
        lastEvent = e;
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const rect = heroSection.getBoundingClientRect();
          const x = ((lastEvent.clientX - rect.left) / rect.width) * 100;
          const y = ((lastEvent.clientY - rect.top) / rect.height) * 100;
          heroSection.style.setProperty("--mx", `${x}%`);
          heroSection.style.setProperty("--my", `${y}%`);
          ticking = false;
        });
      });
    }
  }

  /* ============================================================
     Magnetic hover — nudges buttons/nav links toward the cursor
     ============================================================ */
  if (hasFinePointer && !prefersReducedMotion) {
    document.querySelectorAll(".btn, .main-nav a").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${relX * 0.25}px, ${relY * 0.25}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ============================================================
     Render Socials grid (Socials page only)
     ============================================================ */
  const socialsGrid = document.getElementById("socials-grid");

  if (socialsGrid) {
    SOCIAL_LINKS.forEach((social) => {
      const el = document.createElement("a");
      el.className = "social-card" + (social.featured ? " featured" : "") + (social.placeholder ? " is-placeholder" : "");
      el.href = social.url;

      if (social.placeholder) {
        el.setAttribute("aria-label", `${social.name} — link not added yet`);
      } else {
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
        <p class="social-status">${social.placeholder ? "Placeholder" : "Follow →"}</p>
      `;

      socialsGrid.appendChild(el);
    });
  }

  /* ============================================================
     Footer year
     ============================================================ */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
