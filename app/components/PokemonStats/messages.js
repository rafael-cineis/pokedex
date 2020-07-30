/*
 * PokemonStats Messages
 *
 * This contains all the text for the PokemonStats component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.PokemonStats'

export default defineMessages({
  stats: {
    id: `${scope}.stats`,
    defaultMessage: 'Estatísticas',
  },
  hp: {
    id: `${scope}.hp`,
    defaultMessage: 'Vida',
  },
  attack: {
    id: `${scope}.attack`,
    defaultMessage: 'Ataque',
  },
  defense: {
    id: `${scope}.defense`,
    defaultMessage: 'Defesa',
  },
  speed: {
    id: `${scope}.speed`,
    defaultMessage: 'Velocidade',
  },
})
