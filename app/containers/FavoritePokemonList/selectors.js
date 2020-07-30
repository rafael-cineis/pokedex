import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectFavoritePokemonListDomain = state => state.favoritePokemonList || initialState

const selectFavoritePokemonsListState = createSelector(
  selectFavoritePokemonListDomain,
  substate => substate.favoritePokemonsList,
)

export const selectFavoritePokemonList = createSelector(
  selectFavoritePokemonsListState,
  substate => substate.resource,
)

export const selectFavoritePokemonListIsLoading = createSelector(
  selectFavoritePokemonsListState,
  substate => substate.isLoading,
)
