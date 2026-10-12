import "./scss/main.scss";

const headerBurger = document.getElementById("burger");
const headerMenu = document.getElementById("menu");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("is-open");
  headerMenu.classList.toggle("is-open");
});
