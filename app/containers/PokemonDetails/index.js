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
import { FormattedMessage } from 'react-intl'
import isEmpty from 'lodash/isEmpty'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Loader from 'components/Loader'
import Field from 'components/Field'
import PokemonTypeField from 'components/PokemonTypeField'
import PokemonStats from 'components/PokemonStats'
import PokemonEvolutions from 'containers/PokemonEvolutions'
import FavoriteButton from 'containers/FavoriteButton'

import { POKEMON_NAME_PARAM } from 'containers/App/urls'

import {
  selectPokemonDetails,
  selectPokemonDetailsIsLoading,
  selectPokemonDetailsError,
} from './selectors'
import { fetchPokemonDetails } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { ContentWrapper } from './styles'

export function PokemonDetails(props) {
  useInjectReducer({ key: 'pokemonDetails', reducer })
  useInjectSaga({ key: 'pokemonDetails', saga })

  const {
    match: {
      params,
    },
    isLoading,
    pokemon,
    error,
  } = props
  const pokemonName = params[POKEMON_NAME_PARAM]

  useEffect(() => {
    props.fetchPokemonDetails(pokemonName)
  }, [])

  const renderDetails = () => {
    if (isEmpty(pokemon)) {
      return null
    }

    const {
      height,
      name,
      sprites,
      types,
      stats,
    } = pokemon

    return (
      <ContentWrapper>
        <div className="infoContainer">
          <img src={sprites.other.dream_world.front_default} alt="Imagem Pokemon" />
          <div>
            <div className="nameContainer">
              <h2 big uppercase bold>
                {name}
              </h2>
              <FavoriteButton pokemonId={pokemonName} />
            </div>
            <Field
              label={messages.height}
              value={`${(height * 0.1).toFixed(2)}m`}
            />
            <PokemonTypeField
              types={types}
            />
          </div>
        </div>
        <div>
          <PokemonStats stats={stats} />
        </div>
        <div>
          <PokemonEvolutions pokemon={pokemon} />
        </div>
      </ContentWrapper>
    )
  }

  if (!isLoading && error) {
    return (
      <FormattedMessage
        {...messages.thereIsNoPokemonWithThisName}
        values={{ pokemonName }}
      />
    )
  }

  return isLoading ? <Loader /> : renderDetails()
}

PokemonDetails.propTypes = {
  fetchPokemonDetails: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  pokemon: selectPokemonDetails,
  isLoading: selectPokemonDetailsIsLoading,
  error: selectPokemonDetailsError,
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
