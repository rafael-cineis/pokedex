import { fetchPokemons } from '../actions'
import { FETCH_POKEMONS } from '../constants'

describe('PokedexListPage actions', () => {
  describe('Default Action', () => {
    it('has a type of FETCH_POKEMONS', () => {
      const expected = {
        type: FETCH_POKEMONS,
      }
      expect(fetchPokemons()).toEqual(expected)
    })
  })
})
