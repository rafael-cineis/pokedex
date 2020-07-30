import { fetchEvolutions } from '../actions'
import { FETCH_POKEMON_DETAILS } from '../constants'

describe('PokemonDetails actions', () => {
  describe('Default Action', () => {
    it('has a type of FETCH_POKEMON_DETAILS', () => {
      const expected = {
        type: FETCH_POKEMON_DETAILS,
      }
      expect(fetchEvolutions()).toEqual(expected)
    })
  })
})
