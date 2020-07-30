import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectPokedexListPageDomain = state => state.pokedexListPage || initialState

export const selectPokemonList = createSelector(
  selectPokedexListPageDomain,
  substate => substate.pokemonList,
)

export const selectPokemonListResult = createSelector(
  selectPokemonList,
  pokemonList => pokemonList.result,
)

export const selectPokemonListIsLoading = createSelector(
  selectPokemonList,
  pokemonList => pokemonList.isLoading,
)

export const selectNextUrl = createSelector(
  selectPokedexListPageDomain,
  substate => substate.nextUrl
)
