/*
 *
 * PokemonEvolutions actions
 *
 */

import {
  FETCH_EVOLUTIONS,
  FETCH_EVOLUTIONS_SUCCESS,
} from './constants'

export function fetchEvolutions(url) {
  return {
    type: FETCH_EVOLUTIONS,
    url,
  }
}

export function fetchEvolutionsSuccess(response) {
  return {
    type: FETCH_EVOLUTIONS_SUCCESS,
    response,
  }
}
