/*
 *
 * App constants
 *
 */

import {
  TOGGLE_FAVORITE_POKEMON,
} from './constants'

export function toggleFavoritePokemon(pokemon) {
  return {
    type: TOGGLE_FAVORITE_POKEMON,
    pokemon,
  }
}
