/**
 *
 * PokedexListPage
 *
 */

import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import PokemonCard from 'components/PokemonCard'

import { makeSelectPokemonListResult } from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { fetchPokemons } from './actions'

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export function PokedexListPage(props) {
  useInjectReducer({ key: 'pokedexListPage', reducer })
  useInjectSaga({ key: 'pokedexListPage', saga })

  useEffect(() => {
    props.fetchPokemons()
  }, [])

  const renderPokemonCards = () => props.pokemonList.map((pokemon, index) => (
    <PokemonCard
      key={pokemon.url}
      number={index}
      {...pokemon}
    />
  ))

  return (
    <div>
      <FormattedMessage {...messages.pokedex} />
      <PokemonList>
        {renderPokemonCards()}
      </PokemonList>
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
