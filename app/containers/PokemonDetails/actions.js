/*
 *
 * PokemonDetails actions
 *
 */

import {
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
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

export function fetchPokemonDetailsFailure(error) {
  return {
    type: FETCH_POKEMON_DETAILS_FAILURE,
    error,
  }
}
