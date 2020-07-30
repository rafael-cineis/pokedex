/*
 *
 * PokemonDetails reducer
 *
 */
import produce from 'immer'
import {
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_SUCCESS,
} from './constants'

export const initialState = {
  pokemon: {
    resource: {},
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const pokemonDetailsReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_POKEMON_DETAILS: {
      draft.pokemon.isLoading = true
      break
    }
    case FETCH_POKEMON_DETAILS_SUCCESS: {
      draft.pokemon.isLoading = false
      draft.pokemon.resource = action.response
      break
    }
  }
})

export default pokemonDetailsReducer
