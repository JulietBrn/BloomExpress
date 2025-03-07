document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");

  if (burger) {
    const navLinks = document.querySelectorAll(
      ".header__nav-menu .nav-menu__link, .logo-img"
    );
    const nav = document.querySelector(".header__nav-menu");
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
      burger.classList.toggle("burger-rotate");
      nav.classList.toggle("nav-hidden");
      body.classList.toggle("hidden");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("burger-rotate");
        nav.classList.remove("nav-hidden");
        body.classList.remove("hidden");
      });
    });
  }
});
