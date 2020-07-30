import {
  all, takeLatest, call, put,
} from 'redux-saga/effects'

import request from 'utils/request'
import {
  POKEMON_NAME_PARAM,
  POKEAPI_POKEMON_NAME_DETAILS_URL,
} from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_POKEMON_DETAILS } from './constants'

export function* fetchPokemon(pokemonName) {
  const url = POKEAPI_POKEMON_NAME_DETAILS_URL.replace(`:${POKEMON_NAME_PARAM}`, pokemonName)

  return yield call(request, url, { method: 'GET' })
}

export function* fetchPokemonDetails(action) {
  const { pokemonName } = action

  const response = yield call(fetchPokemon, pokemonName)
  yield put(actions.fetchPokemonDetailsSuccess(response))
}

export default function* pokemonDetailsSaga() {
  yield all([
    takeLatest(FETCH_POKEMON_DETAILS, fetchPokemonDetails),
  ])
}
