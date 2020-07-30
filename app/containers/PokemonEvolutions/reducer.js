/*
 *
 * PokemonEvolutions reducer
 *
 */
import produce from 'immer'
import {
  FETCH_EVOLUTIONS,
  FETCH_EVOLUTIONS_SUCCESS,
} from './constants'

export const initialState = {
  evolutions: {
    resource: [],
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const pokemonEvolutionsReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_EVOLUTIONS: {
      draft.evolutions.isLoading = true
      break
    }
    case FETCH_EVOLUTIONS_SUCCESS: {
      draft.evolutions.isLoading = false
      draft.evolutions.resource = action.response
      break
    }
  }
})

export default pokemonEvolutionsReducer
