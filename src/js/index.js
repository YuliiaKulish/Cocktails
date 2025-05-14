// (() => {
//       openModalBtn= document.querySelector("[data-modal-open]"),
//       closeModalBtn= document.querySelector("[data-modal-close]"),
//       modal= document.querySelector("[data-modal]"),

//    openModalBtn.addEventListener("click", toggleModal);
//     closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//       openModalBtn.classList.toggle("is-hidden");
//     }
//   })();

(() => {
  const openBurgerBtn = document.querySelector('[data-modal-open]');
  const modal = document.querySelector('[data-modal]');
  const tabletModal = document.querySelector('[data-tablet]');

  const checkbox = document.querySelector('.theme-toggle');
  const lightText = document.querySelector('.theme-text--light');
  const darkText = document.querySelector('.theme-text--dark');

  openBurgerBtn.addEventListener('click', () => {
    const expanded =
      openBurgerBtn.getAttribute('aria-expanded') === 'true' || false;

    openBurgerBtn.classList.toggle('is-open');
    openBurgerBtn.setAttribute('aria-expanded', !expanded);

    const width = window.innerWidth;

    if (width < 768) {
      modal.classList.toggle('is-open');
    } else {
      tabletModal.classList.toggle('is-open');
    }
  });

  window.addEventListener('resize', () => {
  modal.classList.remove('is-open');
  tabletModal.classList.remove('is-open');
  openBurgerBtn.classList.remove('is-open');
  openBurgerBtn.setAttribute('aria-expanded', 'false');
});

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      lightText.classList.remove('active');
      darkText.classList.add('active');
    } else {
      lightText.classList.add('active');
      darkText.classList.remove('active');
    }
  });
})();
