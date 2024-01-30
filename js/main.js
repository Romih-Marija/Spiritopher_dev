//Mobile menu

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
document.addEventListener("DOMContentLoaded", function () {
  var navbarHeight = document.getElementById("navbar").offsetHeight;
  var kontaktSporocilo = document.querySelector(".kontakt-sporocilo");

  // Nastavite višino .kontakt-sporocilo
  kontaktSporocilo.style.height = `calc(100vh - ${navbarHeight}px)`;

  // Posodobite višino .kontakt-sporocilo, če se velikost okna spreminja
  window.addEventListener("resize", function () {
    navbarHeight = document.getElementById("navbar").offsetHeight;
    kontaktSporocilo.style.height = `calc(100vh - ${navbarHeight}px)`;
  });
});
