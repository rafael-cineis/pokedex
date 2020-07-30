/*
 *
 * PokemonDetails actions
 *
 */

import {
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_SUCCESS,
} from './constants'

export function fetchPokemonDetails(pokemonName) {
  return {
    type: FETCH_POKEMON_DETAILS,
    pokemonName,
  }
}

export function fetchPokemonDetailsSuccess(response) {
  return {
    type: FETCH_POKEMON_DETAILS_SUCCESS,
    response,
  }
}
