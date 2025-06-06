import { refs } from "./refs";

export const openBurgerMenu = () => {
    const expanded =
        refs.openBurgerBtn.getAttribute('aria-expanded') === 'true' || false;
    
      refs.openBurgerBtn.classList.toggle('is-open');
      refs.openBurgerBtn.setAttribute('aria-expanded', !expanded);
    
      refs.body.classList.toggle('is-hidden');
      const width = window.innerWidth;
    
      if (width < 768) {
        refs.modal.classList.toggle('is-open');
      } else {
        refs.tabletModal.classList.toggle('is-open');
      }
}