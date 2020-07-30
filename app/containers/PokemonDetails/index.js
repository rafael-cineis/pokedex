/**
 *
 * PokemonDetails
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import isEmpty from 'lodash/isEmpty'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Text from 'components/Text'

import { POKEMON_NAME_PARAM } from 'containers/App/urls'

import {
  selectPokemonDetails,
  selectPokemonDetailsIsLoading,
} from './selectors'
import { fetchPokemonDetails } from './actions'
import reducer from './reducer'
import saga from './saga'

export function PokemonDetails(props) {
  useInjectReducer({ key: 'pokemonDetails', reducer })
  useInjectSaga({ key: 'pokemonDetails', saga })

  const {
    match: {
      params,
    },
    isLoading,
    pokemon,
  } = props
  const pokemonName = params[POKEMON_NAME_PARAM]

  useEffect(() => {
    props.fetchPokemonDetails(pokemonName)
  }, [])

  const renderDetails = () => {
    if (isEmpty(pokemon)) {
      return null
    }

    return (
      <div>
        <Text
          big
          uppercase
          bold
        >
          {pokemon.name}
        </Text>
        <img src={pokemon.sprites.other.dream_world.front_default} alt="Imagem Pokemon" />
      </div>
    )
  }

  return isLoading ? null : renderDetails()
}

PokemonDetails.propTypes = {
  fetchPokemonDetails: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = createStructuredSelector({
  pokemon: selectPokemonDetails,
  isLoading: selectPokemonDetailsIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonDetails: (pokemonName) => {
      dispatch(fetchPokemonDetails(pokemonName))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(PokemonDetails)
