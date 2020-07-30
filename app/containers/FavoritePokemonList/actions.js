/*
 *
 * FavoritePokemonList actions
 *
 */

import {
  FETCH_FAVORITE_POKEMON_LIST,
  FETCH_FAVORITE_POKEMON_LIST_SUCCESS,
} from './constants'

export function fetchFavoritesPokemonList() {
  return {
    type: FETCH_FAVORITE_POKEMON_LIST,
  }
}

export function fetchFavoritesPokemonListSuccess(pokemonList) {
  return {
    type: FETCH_FAVORITE_POKEMON_LIST_SUCCESS,
    pokemonList,
  }
}
