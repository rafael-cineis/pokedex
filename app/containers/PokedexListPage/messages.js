/*
 * PokedexListPage Messages
 *
 * This contains all the text for the PokedexListPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.PokedexListPage'

export default defineMessages({
  pokedex: {
    id: `${scope}.pokedex`,
    defaultMessage: 'Pokédex',
  },
  loadMorePokemons: {
    id: `${scope}.loadMorePokemons`,
    defaultMessage: 'Carregar mais Pokémon',
  },
  searchByNameOrNumber: {
    id: `${scope}.searchByNameOrNumber`,
    defaultMessage: 'Procurar por Nome ou Número',
  },
  showFavoritePokemonsOnly: {
    id: `${scope}.showFavoritePokemonsOnly`,
    defaultMessage: 'Mostrar Pokémons Favoritos',
  },
})
