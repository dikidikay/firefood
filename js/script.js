const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// ///////////////////////////////////////
// Make mobile nav work
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
const htmlEL = document.querySelector(":root");
const navEL = document.querySelector(".main-nav");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
  htmlEL.classList.toggle("sticky-mobile");
});

// close mobile nav clicking the main-nav
navEL.addEventListener("click", function () {
  if (headerEL.classList.contains("nav-open")) {
    headerEL.classList.remove("nav-open");
    htmlEL.classList.remove("sticky-mobile");
  }
});

// ////////////////
// Close mobile navigation and smooth scrolling animation alter
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEL.classList.remove("nav-open");
      htmlEL.classList.remove("sticky-mobile");
    }

    // Smooth scrolling animation with js, alternative for css scroll-behavior: smooth property
    /* scroll-behavior: smooth; */
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//////////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEL);

// THIS IS JS LIBRARY FOR IMPLEMENTING SMOOTH SCROLL FOR SAFARI BROWSER
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
