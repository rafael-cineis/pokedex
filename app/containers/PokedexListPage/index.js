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
import Text from 'components/Text'
import Button from 'components/Button'
import Loader from 'components/Loader'

import {
  selectPokemonListResult,
  selectPokemonListIsLoading,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { fetchPokemons } from './actions'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export function PokedexListPage(props) {
  useInjectReducer({ key: 'pokedexListPage', reducer })
  useInjectSaga({ key: 'pokedexListPage', saga })

  useEffect(() => {
    if (!props.pokemonList.length) {
      props.fetchPokemons()
    }
  }, [])

  const renderPokemonCards = () => props.pokemonList.map((pokemon, index) => (
    <PokemonCard
      key={pokemon.url}
      number={index + 1}
      {...pokemon}
    />
  ))

  return (
    <Wrapper>
      <Text bold big>
        <FormattedMessage {...messages.pokedex} />
      </Text>
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
