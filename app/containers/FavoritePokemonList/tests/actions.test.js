import { fetchFavoritesPokemonList } from "../actions";
import { FETCH_FAVORITE_POKEMON_LIST } from "../constants";

describe("FavoritePokemonList actions", () => {
  describe("Default Action", () => {
    it("has a type of FETCH_FAVORITE_POKEMON_LIST", () => {
      const expected = {
        type: FETCH_FAVORITE_POKEMON_LIST
      };
      expect(fetchFavoritesPokemonList()).toEqual(expected);
    });
  });
});
