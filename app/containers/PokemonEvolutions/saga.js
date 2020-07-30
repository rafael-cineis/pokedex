import {
  all, takeLatest, call, put,
} from 'redux-saga/effects'

import request from 'utils/request'
import { fetchPokemon } from 'containers/PokemonDetails/saga'

import * as actions from './actions'
import { FETCH_EVOLUTIONS } from './constants'

function getEvolutionsNames(evolvesTo) {
  const { species: { name } } = evolvesTo

  let evolutionName = []
  if (evolvesTo.evolves_to.length) {
    evolutionName = getEvolutionsNames(evolvesTo.evolves_to[0])
  }

  return [name, ...evolutionName]
}

export function* fetchPokemonEvolutions(action) {
  const { url } = action

  // Get pokemon species to know it's evolution chain id
  const species = yield call(request, url, { method: 'GET' })

  // Get evolution chain
  const evolutionChain = yield call(request, species.evolution_chain.url, { method: 'GET' })

  const evolutionNames = getEvolutionsNames(evolutionChain.chain.evolves_to[0])
  // Get each evolution details so we can use their image and name
  const evolutionDetails = yield all(evolutionNames.map(pokemonName => call(fetchPokemon, pokemonName)))

  yield put(actions.fetchEvolutionsSuccess(evolutionDetails))
}

export default function* pokemonEvolutionsSaga() {
  yield all([
    takeLatest(FETCH_EVOLUTIONS, fetchPokemonEvolutions),
  ])
}
