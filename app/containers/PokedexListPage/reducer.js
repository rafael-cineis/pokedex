/*
 *
 * PokedexListPage reducer
 *
 */
import produce from 'immer'
import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS } from './constants'

export const initialState = {
  pokemonList: {
    result: [],
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const pokedexListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_POKEMONS: {
        draft.pokemonList.isLoading = true
        break
      }
      case FETCH_POKEMONS_SUCCESS: {
        draft.pokemonList.isLoading = false
        draft.pokemonList.result = action.response.results
        break
      }
    }
  })

export default pokedexListPageReducer
