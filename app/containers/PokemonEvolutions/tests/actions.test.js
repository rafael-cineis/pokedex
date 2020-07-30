import { fetchEvolutions } from '../actions'
import { FETCH_EVOLUTIONS } from '../constants'

describe('PokemonEvolutions actions', () => {
  describe('Default Action', () => {
    it('has a type of FETCH_EVOLUTIONS', () => {
      const expected = {
        type: FETCH_EVOLUTIONS,
      }
      expect(fetchEvolutions()).toEqual(expected)
    })
  })
})
