import { refs } from '../refs/selectorRefs';
import { createMarkupModalCocktail } from '../markups/createMarkupModal';


export function ingredientModal(cocktail) {
 const markup = cocktail.drinks.map(createMarkupModalCocktail);
 refs.modal.innerHTML= markup

}
