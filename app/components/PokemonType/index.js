/**
 *
 * PokemonType
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'

import { POKEMON_TYPES_COLOR_MAP } from './constants'
import messages from './messages'

const TypeCard = styled.div`
  display: inline-block;
  padding: 4px 8px;
  background: ${props => props.color || '#ccc'};
  border-radius: 8px;
  min-width: 120px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 8px;
  }
`

function PokemonType(props) {
  const { type } = props
  const typeMessage = messages[type]
  const color = POKEMON_TYPES_COLOR_MAP[type]

  return (
    <TypeCard color={color}>
      <Text uppercase medium small light>
        {typeMessage ? (
          <FormattedMessage {...typeMessage} />
        ) : type}
      </Text>
    </TypeCard>
  )
}

PokemonType.propTypes = {
  type: PropTypes.string.isRequired,
}

export default PokemonType
