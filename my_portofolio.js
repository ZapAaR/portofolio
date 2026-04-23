// Mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

// Form handler
function handleForm(e) {
  e.preventDefault();
  document.getElementById("form-success").classList.remove("hidden");
  e.target.reset();
  setTimeout(
    () => document.getElementById("form-success").classList.add("hidden"),
    5000,
  );
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Active nav
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === "#" + current ? "#fff" : "";
  });
});
