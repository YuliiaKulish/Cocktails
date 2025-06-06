import { CocktailAPI } from './cocktailAPI';
import { renderCocktail } from './markup/markup';
import { refs } from './refs';
import { markup } from './markup/markupABC';
import { openBurgerMenu } from './burgerMenu';
import {cocktailByLetter} from './heroMobileSelect';

refs.heroNav.insertAdjacentHTML('afterbegin', markup);

const cocktailAPI = new CocktailAPI();

async function randomCocktail() {
  try {
    const promises = Array.from({ length: 9 }, () =>
      cocktailAPI.getRandomCocktail()
    );
    const results = await Promise.all(promises);
    const markup = results
      .map(({ drinks }) => renderCocktail(drinks[0]))
      .join('');
    refs.gallery.innerHTML = markup;
  } catch (error) {
    console.error('Error fetching random cocktails:', error);
  }
}

randomCocktail();

async function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.value.trim().toLowerCase();
  try {
    const { drinks } = await cocktailAPI.getCocktailByName(query);
    const markup = drinks.map(elem => renderCocktail(elem)).join('');
    refs.gallery.innerHTML = markup;
  } catch (error) {
    error;
  }
}

refs.heroNav.addEventListener('click', cocktailByLetter);

refs.inputCocktail.addEventListener('input', handleSubmit);

refs.heroSelect.addEventListener('click', () => {
  refs.heroNav.classList.toggle('is-hidden');
});

refs.openBurgerBtn.addEventListener('click', openBurgerMenu);

window.addEventListener('resize', () => {
  refs.modal.classList.remove('is-open');
  refs.tabletModal.classList.remove('is-open');
  refs.openBurgerBtn.classList.remove('is-open');
  refs.openBurgerBtn.setAttribute('aria-expanded', 'false');
  refs.body.classList.remove('is-hidden');
});

refs.checkbox.addEventListener('change', () => {
  if (refs.checkbox.checked) {
    refs.lightText.classList.remove('active');
    refs.darkText.classList.add('active');
  } else {
    refs.lightText.classList.add('active');
    refs.darkText.classList.remove('active');
  }
});
