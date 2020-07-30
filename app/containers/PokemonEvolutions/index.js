/**
 *
 * PokemonEvolutions
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Loader from 'components/Loader'
import Label from 'components/Label'
import PokemonEvolutionCard from 'components/PokemonEvolutionCard'

import {
  selectPokemonEvolutionsNameAndImage,
  selectPokemonEvolutionsIsLoading,
} from './selectors'
import { fetchEvolutions } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

import { EvolutionsWrapper } from './styles'

export function PokemonEvolutions(props) {
  useInjectReducer({ key: 'pokemonEvolutions', reducer })
  useInjectSaga({ key: 'pokemonEvolutions', saga })

  const { pokemon, pokemonEvolutions, isLoading } = props
  const { species } = pokemon

  useEffect(() => {
    props.fetchEvolutions(species.url)
  }, [])

  return isLoading ? <Loader /> : (
    <div>
      <Label label={messages.evolutions} />
      <EvolutionsWrapper>
        {pokemonEvolutions.map(PokemonEvolutionCard)}
      </EvolutionsWrapper>
    </div>
  )
}

PokemonEvolutions.propTypes = {
  pokemon: PropTypes.object.isRequired,
  fetchEvolutions: PropTypes.func.isRequired,
  pokemonEvolutions: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = createStructuredSelector({
  pokemonEvolutions: selectPokemonEvolutionsNameAndImage,
  isLoading: selectPokemonEvolutionsIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchEvolutions: (url) => {
      dispatch(fetchEvolutions(url))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(PokemonEvolutions)
