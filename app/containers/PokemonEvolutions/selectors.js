import { createSelector } from 'reselect'
import get from 'lodash/get'
import { initialState } from './reducer'

const selectPokemonEvolutionsDomain = state => state.pokemonEvolutions || initialState

export const selectPokemonEvolutions = createSelector(
  selectPokemonEvolutionsDomain,
  substate => substate.evolutions
)

export const selectPokemonEvolutionsNameAndImage = createSelector(
  selectPokemonEvolutions,
  evolutions => evolutions.resource.map(pokemon => ({
    name: pokemon.name,
    image: get(pokemon, 'sprites.other.dream_world.front_default', ''),
  }))
)

export const selectPokemonEvolutionsIsLoading = createSelector(
  selectPokemonEvolutions,
  evolutions => evolutions.isLoading,
)
