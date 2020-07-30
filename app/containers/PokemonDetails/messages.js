/*
 * PokemonDetails Messages
 *
 * This contains all the text for the PokemonDetails container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.PokemonDetails'

export default defineMessages({
  height: {
    id: `${scope}.height`,
    defaultMessage: 'Altura',
  },
  thereIsNoPokemonWithThisName: {
    id: `${scope}.thereIsNoPokemonWithThisName`,
    defaultMessage: 'Nenhum Pokémon com o nome/número "{pokemonName}" foi encontrado!',
  },
})
