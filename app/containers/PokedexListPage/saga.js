import { all, call, put, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { POKEAPI_POKEMON_LIST_URL } from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_POKEMONS } from './constants'

export function* fetchPokemons() {
  const response = yield call(request, POKEAPI_POKEMON_LIST_URL, {
    method: 'GET',
    params: {
      limit: 10,
    },
  })

  yield put(actions.fetchPokemonsSuccess(response))
}

export default function* pokedexListPageSaga() {
  yield all([takeLatest(FETCH_POKEMONS, fetchPokemons)])
}
