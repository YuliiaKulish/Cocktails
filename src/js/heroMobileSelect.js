async function cocktailByLetter(event) {
   if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const letter = event.target.textContent.trim().toLowerCase();
  try {
    const { drinks } = await cocktailAPI.getCocktailByfirstLetter(letter);
    const markup = drinks.map(elem => renderCocktail(elem)).join('');
    refs.gallery.innerHTML = markup;
  } catch (error) {
    error;
  }
}