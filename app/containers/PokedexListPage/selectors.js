import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectPokedexListPageDomain = state => state.pokedexListPage || initialState

export const makeSelectPokemonListResult = createSelector(
  selectPokedexListPageDomain,
  substate => substate.pokemonList.result,
)
