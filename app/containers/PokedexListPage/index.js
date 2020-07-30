/**
 *
 * PokedexListPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { makeSelectPokemonListResult } from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { fetchPokemons } from './actions'

export function PokedexListPage(props) {
  useInjectReducer({ key: 'pokedexListPage', reducer })
  useInjectSaga({ key: 'pokedexListPage', saga })

  useEffect(() => {
    props.fetchPokemons()
  }, [])

  return (
    <div>
      <FormattedMessage {...messages.pokedex} />
    </div>
  )
}

PokedexListPage.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  pokemonList: makeSelectPokemonListResult,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemons: () => {
      dispatch(fetchPokemons())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(PokedexListPage)
