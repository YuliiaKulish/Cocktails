import axios from 'axios';

axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export class CocktailAPI {
  #page = 1;
  #totalPages = 0;

  async getRandomCocktail() {
    const {data} = await axios.get(`random.php`);
    return data;
  }

  async getCocktailByName(query) {
    const { data } = await axios.get(`search.php?s=${query}`);
    return data;
  }

  async getCocktailByfirstLetter(letter) {
    const { data } = await axios.get(`search.php?f=${letter}`);
    return data;
  }

  async getDetailsById(id) {
    const {data} = await axios.get(`lookup.php?i=${id}`);
    return data;
  }

  async getIngredientByName(query) {
    const { data } = await axios.get(`search.php?i=${query}`);
    return data;
  }
}

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// Lookup ingredient by ID
// www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka