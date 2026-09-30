/*
  Progressive enhancement only. Every feature below is optional: the page is
  complete and navigable without this file.
    1. Mobile navigation sheet (focus handling, Escape, outside click)
    2. Scrollspy: marks the nav link for the section in view
    3. Header border once the page scrolls
    4. Reveal-on-scroll (skipped under prefers-reduced-motion)
    5. Copy-email button
*/
(() => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = window.matchMedia("(max-width: 859.98px)");

  /* 1. Mobile navigation ------------------------------------------------ */
  if (nav && toggle) {
    const focusables = () => [toggle, ...nav.querySelectorAll("a[href]")];

    const setOpen = (open, { restoreFocus = false } = {}) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".nav-toggle__label").textContent = open ? "Close" : "Menu";
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      if (open) nav.querySelector("a[href]")?.focus();
      else if (restoreFocus) toggle.focus();
    };
    const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

    toggle.addEventListener("click", () => setOpen(!isOpen()));
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a") && isOpen()) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (!isOpen()) return;
      if (e.key === "Escape") {
        setOpen(false, { restoreFocus: true });
        return;
      }
      if (e.key === "Tab") {
        // Keep focus inside the toggle + sheet while it is open.
        const items = focusables();
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
    document.addEventListener("click", (e) => {
      if (isOpen() && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
    // Leaving the mobile breakpoint closes the sheet so desktop never inherits it.
    mobileNav.addEventListener("change", (e) => {
      if (!e.matches && isOpen()) setOpen(false);
    });
  }

  /* 2. Scrollspy -------------------------------------------------------- */
  const spyLinks = [...document.querySelectorAll("[data-spy]")];
  const sections = spyLinks
    .map((link) => document.getElementById(link.dataset.spy))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const visible = new Map();
    const setCurrent = (id) => {
      spyLinks.forEach((link) => {
        if (link.dataset.spy === id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        // The first section (in document order) crossing the band wins.
        const current = sections.find((s) => visible.get(s.id));
        setCurrent(current ? current.id : null);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* 3. Header border on scroll ------------------------------------------ */
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* 4. Reveal on scroll ------------------------------------------------- */
  const reveals = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      reveals.forEach((el) => io.observe(el));
      // Jumping to a hash (or printing) must never leave content hidden.
      const revealAll = () => reveals.forEach((el) => el.classList.add("is-visible"));
      window.addEventListener("beforeprint", revealAll);
      window.addEventListener("hashchange", () => {
        const target = document.getElementById(location.hash.slice(1));
        if (!target) return;
        if (target.matches(".reveal")) target.classList.add("is-visible");
        target.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      });
    }
  }

  /* 5. Copy email ------------------------------------------------------- */
  const copyBtn = document.querySelector("[data-copy]");
  const status = document.querySelector("[data-copy-status]");
  if (copyBtn && navigator.clipboard && window.isSecureContext) {
    copyBtn.hidden = false;
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.copy);
        copyBtn.classList.add("is-copied");
        if (status) status.textContent = "Email address copied to clipboard";
        setTimeout(() => {
          copyBtn.classList.remove("is-copied");
          if (status) status.textContent = "";
        }, 2200);
      } catch {
        if (status) status.textContent = "Couldn't copy. Please select the address instead.";
      }
    });
  }
})();
