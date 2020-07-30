/**
 *
 * PokemonCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'
import get from 'lodash/get'

import {
  POKEMON_DETAILS_PATH,
  POKEMON_NAME_PARAM,
} from 'containers/App/urls'
import Pokeball from 'images/pokeball.png'
import history from 'utils/history'
import FavoriteButton from 'containers/FavoriteButton'

import {
  StyledPokemonCard,
  PokemonName,
  NumberWrapper,
  ImageWrapper,
} from './styles'

function PokemonCard(props) {
  const { name, number } = props
  const pokemonNumberZeroFilled = number.toString().padStart(3, '0')

  const handleClick = () => {
    const path = POKEMON_DETAILS_PATH.replace(`:${POKEMON_NAME_PARAM}`, name)
    history.push(path)
  }

  return (
    <StyledPokemonCard onClick={handleClick}>
      {/*
        Placeholder image as PokeAPI doesn't return the Pokemon image in the list
        and we don't want to do a lot of uncessary requests here, leave to fetch
        the image inside the pokemon details page.
      */}
      <ImageWrapper>
        <img src={get(props, 'sprites.other.dream_world.front_default', Pokeball)} alt="Pokeball" />
      </ImageWrapper>
      <NumberWrapper>
        {`Nº ${pokemonNumberZeroFilled}`}
        <FavoriteButton pokemonId={name} />
      </NumberWrapper>
      <PokemonName>
        {startCase(name)}
      </PokemonName>
    </StyledPokemonCard>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default PokemonCard
