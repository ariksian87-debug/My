
const przyciskMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");

// Menu mobilne
if (przyciskMenu && menu) {
  przyciskMenu.addEventListener("click", () => {
    const otwarte = menu.classList.toggle("is-open");

    przyciskMenu.setAttribute("aria-expanded", String(otwarte));
    przyciskMenu.setAttribute(
      "aria-label",
      otwarte ? "Zamknij menu" : "Otwórz menu"
    );
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      przyciskMenu.setAttribute("aria-expanded", "false");
      przyciskMenu.setAttribute("aria-label", "Otwórz menu");
    });
  });
}

// Aktualny rok w stopce
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
