/**
 *
 * PokemonEvolutionCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import startCase from 'lodash/startCase'

import Text from 'components/Text'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  margin: 0 8px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 20px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
`

const PokemonImageWrapper = styled.div`
  img {
    max-width: 200px;
  }
`

function PokemonEvolutionCard({ image, name }) {
  return (
    <Wrapper key={name}>
      <PokemonImageWrapper>
        <img src={image} alt={name} />
      </PokemonImageWrapper>
      <Text semiBold small>
        {startCase(name)}
      </Text>
    </Wrapper>
  )
}

PokemonEvolutionCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default PokemonEvolutionCard
