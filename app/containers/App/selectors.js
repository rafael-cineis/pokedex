import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectRouter = state => state.router

const makeSelectLocation = () => createSelector(
  selectRouter,
  routerState => routerState.location,
)

const selectCommonDomain = state => state.common || initialState

export const selectFavoritePokemonsMap = createSelector(
  selectCommonDomain,
  substate => substate.favoritesMap
)

export { makeSelectLocation }
