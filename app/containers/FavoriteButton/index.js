/**
 *
 * FavoriteButton
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { toggleFavoritePokemon } from 'containers/App/actions'
import { selectFavoritePokemonsMap } from 'containers/App/selectors'

import { FavoriteIconButton } from './styles'

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
