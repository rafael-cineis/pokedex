/*
 *
 * FavoritePokemonList reducer
 *
 */
import produce from 'immer'
import {
  FETCH_FAVORITE_POKEMON_LIST,
  FETCH_FAVORITE_POKEMON_LIST_SUCCESS,
} from './constants'

export const initialState = {
  favoritePokemonsList: {
    resource: [],
    isLoading: false,
  },
}

/* eslint-disable default-case, no-param-reassign */
const favoritePokemonListReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_FAVORITE_POKEMON_LIST: {
      draft.favoritePokemonsList.isLoading = true
      break
    }
    case FETCH_FAVORITE_POKEMON_LIST_SUCCESS: {
      draft.favoritePokemonsList.isLoading = false
      draft.favoritePokemonsList.resource = action.pokemonList
      break
    }
  }
})

export default favoritePokemonListReducer
