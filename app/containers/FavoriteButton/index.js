/**
 *
 * FavoriteButton
 *
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { toggleFavoritePokemon } from 'containers/App/actions'
import { selectFavoritePokemonsMap } from 'containers/App/selectors'

const FavoriteIconButton = styled.button`
  cursor: pointer;
  color: ${props => props.favorited ? 'red' : 'black'};
  outline: none;
  background: #ffde00;
  border: none;
  border-radius: 4px;
  transition: ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`

export function FavoriteButton(props) {
  const { pokemonId, favoritePokemonMap } = props
  const isFavorited = favoritePokemonMap[pokemonId]

  const handleOnClick = (event) => {
    event.stopPropagation()
    props.toggleFavoritePokemon(pokemonId)
  }

  return (
    <FavoriteIconButton
      type="button"
      id={pokemonId}
      onClick={handleOnClick}
      favorited={isFavorited}
    >
      <FontAwesomeIcon icon="heart" />
    </FavoriteIconButton>
  )
}

FavoriteButton.propTypes = {
  pokemonId: PropTypes.string.isRequired,
  toggleFavoritePokemon: PropTypes.func.isRequired,
  favoritePokemonMap: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  favoritePokemonMap: selectFavoritePokemonsMap,
})

function mapDispatchToProps(dispatch) {
  return {
    toggleFavoritePokemon: (pokemonId) => {
      dispatch(toggleFavoritePokemon(pokemonId))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(FavoriteButton)
