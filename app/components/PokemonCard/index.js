/**
 *
 * PokemonCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import startCase from 'lodash/startCase'

import Pokeball from 'images/pokeball.png'

import history from 'utils/history'
import {
  POKEMON_DETAILS_PATH,
  POKEMON_NAME_PARAM,
} from 'containers/App/urls'

const PokemonButton = styled.button`
  padding: 8px;
  margin: 8px 16px;
  background: #fff;
  cursor: pointer;
  transition: ease 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 20px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.01);
  }

  img {
    width: 320px;
  }
`
const PokemonName = styled.h4`
  font-weight: bold;
`

function PokemonCard(props) {
  const { name, number } = props
  const pokemonNumberZeroFilled = number.toString().padStart(3, '0')

  const handleClick = () => {
    const path = POKEMON_DETAILS_PATH.replace(`:${POKEMON_NAME_PARAM}`, name)
    history.push(path)
  }

  return (
    <PokemonButton
      type="button"
      onClick={handleClick}
    >
      {/*
        Placeholder image as PokeAPI doesn't return the Pokemon image in the list
        and we don't want to do a lot of uncessary requests here, leave to fetch
        the image inside the pokemon details page.
      */}
      <img src={Pokeball} alt="Pokeball" />
      <p>
        {`Nº ${pokemonNumberZeroFilled}`}
      </p>
      <PokemonName>
        {startCase(name)}
      </PokemonName>
    </PokemonButton>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default PokemonCard
