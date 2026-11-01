/* ==========================================================================
   SCRIPT.JS
   Interactive behaviour for the portfolio. The content stays readable
   without it; this adds polish and better keyboard and screen-reader support.

     1. Page-ready fade-in (works with the Tailwind Play CDN)
     2. Light / dark theme toggle (remembers the choice)
     3. Smooth section navigation with focus management
     4. Current-section highlighting in the menus
     5. Fade-in on scroll
     6. Copy BibTeX button
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function all(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  /* 1. Reveal the page once Tailwind has generated its styles.
        A timer is the safety net in case the CDN is slow or blocked. */
  function markReady() { root.classList.add("ready"); }

  if (document.readyState === "complete") {
    window.requestAnimationFrame(function () { window.requestAnimationFrame(markReady); });
  } else {
    window.addEventListener("load", function () {
      window.requestAnimationFrame(function () { window.requestAnimationFrame(markReady); });
    });
  }
  window.setTimeout(markReady, 2500);

  /* 2. Light / dark theme. index.html already applied the saved choice before paint. */
  var themeButtons = all("[data-theme-toggle]");

  function isDark() { return root.classList.contains("dark"); }

  function paintThemeButtons() {
    themeButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", isDark() ? "true" : "false");
      button.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) { meta.setAttribute("content", isDark() ? "#0A1421" : "#EAF2F8"); }
  }

  themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      root.classList.toggle("dark");
      try { localStorage.setItem("theme", isDark() ? "dark" : "light"); } catch (e) { /* storage blocked */ }
      paintThemeButtons();
    });
  });

  paintThemeButtons();

  /* 3. Smooth navigation. Clicking a menu link scrolls to the section, updates the address bar,
        and moves keyboard focus to the section heading so screen-reader users land in the right place. */
  var links = all("[data-nav]");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) { return; }
      event.preventDefault();

      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", "#" + id);
      }

      var heading = target.querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    });
  });

  /* 4. Highlight the section you are reading */
  var sections = all("main > section");
  var mobileList = document.querySelector(".mobile-nav ul");

  function centerInMobileMenu(link) {
    if (!mobileList || mobileList.offsetParent === null || mobileList.scrollWidth <= mobileList.clientWidth) { return; }
    var left = link.offsetLeft - (mobileList.clientWidth - link.offsetWidth) / 2;
    mobileList.scrollTo({ left: left, behavior: reduceMotion ? "auto" : "smooth" });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          if (active) {
            link.setAttribute("aria-current", "true");
            centerInMobileMenu(link);
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    sections.forEach(function (section) { spy.observe(section); });
  }

  /* 5. Fade content in as it scrolls into view */
  var revealItems = all(".reveal");

  if ("IntersectionObserver" in window && !reduceMotion) {
    var reveal = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach(function (item) { reveal.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  /* 6. Copy BibTeX */
  var status = document.getElementById("copy-status");

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(area);
      if (ok) { resolve(); } else { reject(); }
    });
  }

  all("[data-copy]").forEach(function (button) {
    var label = button.querySelector("[data-copy-label]");
    var original = label ? label.textContent : "";

    button.addEventListener("click", function () {
      copyText(button.getAttribute("data-copy")).then(function () {
        if (label) { label.textContent = "Copied"; }
        if (status) { status.textContent = "BibTeX entry copied to the clipboard."; }
      }).catch(function () {
        if (label) { label.textContent = "Copy failed"; }
        if (status) { status.textContent = "Could not copy automatically. Please select the text and copy it."; }
      }).then(function () {
        window.setTimeout(function () {
          if (label) { label.textContent = original; }
          if (status) { status.textContent = ""; }
        }, 2200);
      });
    });
  });
})();
