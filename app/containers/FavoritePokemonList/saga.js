import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects'

import {
  POKEMON_NAME_PARAM,
  POKEAPI_POKEMON_NAME_DETAILS_URL,
} from 'containers/App/urls'
import { selectFavoritePokemonsMap } from 'containers/App/selectors'
import request from 'utils/request'

import * as actions from './actions'
import { FETCH_FAVORITE_POKEMON_LIST } from './constants'

export function* fetchFavoritesPokemonList() {
  const favoriteMap = yield select(selectFavoritePokemonsMap)
  const favoritePokemonsIds = Object.keys(favoriteMap).filter(pokemonKey => favoriteMap[pokemonKey])

  const pokemonsList = yield all(favoritePokemonsIds.map((pokemonId) => {
    const url = POKEAPI_POKEMON_NAME_DETAILS_URL.replace(`:${POKEMON_NAME_PARAM}`, pokemonId)
    return call(request, url, { method: 'GET' })
  }))

  yield put(actions.fetchFavoritesPokemonListSuccess(pokemonsList))
}

export default function* favoritePokemonListSaga() {
  yield all([
    takeLatest(FETCH_FAVORITE_POKEMON_LIST, fetchFavoritesPokemonList),
  ])
}
