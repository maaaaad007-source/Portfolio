document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("themeToggle");
const root = document.documentElement;
const stored = localStorage.getItem("theme");

if (stored) {
  root.setAttribute("data-theme", stored);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
