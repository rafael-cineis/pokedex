import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectPokemonDetailsDomain = state => state.pokemonDetails || initialState

const selectPokemon = createSelector(
  selectPokemonDetailsDomain,
  substate => substate.pokemon,
)

export const selectPokemonDetails = createSelector(
  selectPokemon,
  substate => substate.resource,
)

export const selectPokemonDetailsIsLoading = createSelector(
  selectPokemon,
  substate => substate.isLoading,
)
