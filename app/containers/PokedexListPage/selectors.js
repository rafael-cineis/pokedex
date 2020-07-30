import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the pokedexListPage state domain
 */

export const selectPokedexListPageDomain = state => state.pokedexListPage || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokedexListPage
 */

export const makeSelectPokedexListPage = () =>
  createSelector(
    selectPokedexListPageDomain,
    substate => substate,
  )

export const makeSelectPokemonListResult = createSelector(
  selectPokedexListPageDomain,
  substate => substate.pokemonList.result,
)
