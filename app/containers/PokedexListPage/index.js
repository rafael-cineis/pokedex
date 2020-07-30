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

import {
  POKEMON_DETAILS_PATH,
  POKEMON_NAME_PARAM,
} from 'containers/App/urls'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import PokemonCard from 'components/PokemonCard'
import Button from 'components/Button'
import Loader from 'components/Loader'

import {
  selectPokemonListResult,
  selectPokemonListIsLoading,
} from './selectors'
import { fetchPokemons } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import Header from './Header'

import { Wrapper, PokemonList } from './styles'

export function PokedexListPage(props) {
  useInjectReducer({ key: 'pokedexListPage', reducer })
  useInjectSaga({ key: 'pokedexListPage', saga })

  useEffect(() => {
    if (!props.pokemonList.length) {
      props.fetchPokemons()
    }
  }, [])

  const handleSearch = (value) => {
    const path = POKEMON_DETAILS_PATH.replace(`:${POKEMON_NAME_PARAM}`, value.toLowerCase())
    props.history.push(path)
  }

  const renderPokemonCards = () => props.pokemonList.map((pokemon, index) => (
    <PokemonCard
      key={pokemon.url}
      number={index + 1}
      {...pokemon}
    />
  ))

  return (
    <Wrapper>
      <Header handleSearch={handleSearch} />
      <PokemonList>
        {renderPokemonCards()}
      </PokemonList>
      {props.isLoading ? <Loader /> : (
        <Button
          id="loadMorePokemons"
          onClick={props.fetchPokemons}
        >
          <FormattedMessage {...messages.loadMorePokemons} />
        </Button>
      )}
    </Wrapper>
  )
}

PokedexListPage.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  pokemonList: selectPokemonListResult,
  isLoading: selectPokemonListIsLoading,
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
