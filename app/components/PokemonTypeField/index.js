/**
 *
 * PokemonTypeField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Label from 'components/Label'
import PokemonType from 'components/PokemonType'

import message from './messages'

function PokemonTypeField(props) {
  const {
    types,
  } = props

  return (
    <div>
      <Label label={message.type} />
      <div>
        {types.map(({ type }) => (
          <PokemonType
            type={type.name}
          />
        ))}
      </div>
    </div>
  )
}

PokemonTypeField.propTypes = {
  types: PropTypes.array.isRequired,
}

export default PokemonTypeField
