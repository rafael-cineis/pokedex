import {
  all, call, put, takeLatest, select,
} from 'redux-saga/effects'

import request from 'utils/request'
import { POKEAPI_POKEMON_LIST_URL } from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_POKEMONS } from './constants'
import { selectNextUrl } from './selectors'

export function* fetchPokemons() {
  const url = yield select(selectNextUrl)

  let response
  if (url) {
    response = yield call(request, url, { method: 'GET' })
  } else {
    response = yield call(request, POKEAPI_POKEMON_LIST_URL, {
      method: 'GET',
      params: {
        limit: 10,
        offset: 0,
      },
    })
  }

  yield put(actions.fetchPokemonsSuccess(response))
}

export default function* pokedexListPageSaga() {
  yield all([takeLatest(FETCH_POKEMONS, fetchPokemons)])
}
