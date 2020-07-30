/*
 *
 * PokedexListPage actions
 *
 */

import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS } from './constants'

export function fetchPokemons() {
  return {
    type: FETCH_POKEMONS,
  }
}

export function fetchPokemonsSuccess(response) {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    response,
  }
}
