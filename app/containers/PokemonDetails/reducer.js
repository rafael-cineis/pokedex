/*
 *
 * PokemonDetails reducer
 *
 */
import produce from 'immer'
import { LOCATION_CHANGE } from 'connected-react-router'
import {
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
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
      draft.pokemon.error = null
      break
    }
    case FETCH_POKEMON_DETAILS_FAILURE: {
      draft.pokemon.isLoading = false
      draft.pokemon.error = action.error
      break
    }
    case LOCATION_CHANGE: {
      draft.pokemon = initialState.pokemon
      break
    }
  }
})

export default pokemonDetailsReducer
