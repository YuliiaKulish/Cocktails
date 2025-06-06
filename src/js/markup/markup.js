import iconHeart from '../../images/symbol-defs.svg';

export function renderCocktail({ strDrinkThumb, strDrink }) {
  return /* Html */ `
        <li class="cocktail-card">
          <img class='cocktail-card__img' src='${strDrinkThumb}' alt="${strDrink}"/>
          <div class='cocktail-card__box'><h3 class='cocktail-card__title'>${strDrink}</h3>
          <ul class="cocktail-card__list-btn">
            <li class='cocktail-card__item-btn'><button class='cocktail-card__btn'>Learn more</button></li>
            <li class='cocktail-card__item-btn'><button class='cocktail-card__btn cocktail-card__btn--white'>Add to <svg><use href='${iconHeart}#icon-heart'></use></svg></button></li>
          </ul></div>
        </li>`;
}