/*
 *
 * Common app reducer
 *
 */
import produce from 'immer'
import {
  TOGGLE_FAVORITE_POKEMON,
} from './constants'

export const initialState = {
  favoritesMap: {},
}

/* eslint-disable default-case, no-param-reassign */
const commonAppReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_POKEMON: {
      const { pokemon } = action
      draft.favoritesMap[pokemon] = !state.favoritesMap[pokemon]
      break
    }
  }
})

export default commonAppReducer
