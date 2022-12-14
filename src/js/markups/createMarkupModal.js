export function createMarkupModalCocktail({
  strDrinkThumb,
  strDrink,
  idDrink,
  strInstructions,
}) {
  let markup = '';
  if (window.screen.width < 768) {
    markup = `
    <button class="modal__btn--close" type="button" >
      <svg width="32" height="32" data-modal-close>
      <path d="m17.254 16 7.369-7.369a.889.889 0 0 0-1.255-1.252l.001-.001L16 14.747 8.632 7.369A.893.893 0 1 0 7.369 8.63l.001.001 7.378 7.37-7.377 7.369a.89.89 0 1 0 1.253 1.254l.001-.001 7.376-7.369 7.37 7.37a.889.889 0 0 0 1.252-1.255l.001.001-7.37-7.37z"/>
      </svg>
    </button>
    <h2 class="modal__title">${strDrink}</h2>
          <h3 class="modal__title--secondary">Instractions:</h3>
          <p class="modal__text">
            ${strInstructions}
          </p>
        <img class="modal__img" src="${strDrinkThumb}" alt="${strDrink}" />
   
          <h3 class="about__title">Ingredients</h3>
          <p class="modal__description">Per cocktail</p>
          <ul class="list modal__list">
          </ul>
      <button class="modal__btn btn--orange cocktails__btn" type="button" data-cock-local name="${idDrink}">
        Add to favorite
      </button>`;
  } else {
    markup = ` <button class="modal__btn--close" type="button">
    <svg width="32" height="32" data-modal-close>
      <path
        d="m17.254 16 7.369-7.369a.889.889 0 0 0-1.255-1.252l.001-.001L16 14.747 8.632 7.369A.893.893 0 1 0 7.369 8.63l.001.001 7.378 7.37-7.377 7.369a.89.89 0 1 0 1.253 1.254l.001-.001 7.376-7.369 7.37 7.37a.889.889 0 0 0 1.252-1.255l.001.001-7.37-7.37z"
      />
    </svg>
  </button>
  
  <div class="modal__box">
    <img class="modal__img" src="${strDrinkThumb}" alt="${strDrink}" />
    <div class="modal__data">
      <h2 class="modal__title">${strDrink}</h2>
      <h3 class="about__title">Ingredients</h3>
      <p class="modal__description">Per cocktail</p>
      <ul class="list modal__list"></ul>
    </div>
  </div>
  <div class="modal__container">
    <h3 class="modal__title--secondary">Instractions:</h3>
    <p class="modal__text">
    ${strInstructions}
    </p>
  </div>
  <button
    class="modal__btn btn--orange cocktails__btn"
    type="button"
    data-cock-local
    name="${idDrink}"
  >
    Add to favorite
  </button>`;
  }
  return markup;
}
