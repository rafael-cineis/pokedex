/**
 *
 * FavoritePokemonList
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
import PokemonCard from 'components/PokemonCard'
import { PokemonList } from 'containers/PokedexListPage/styles'
import { selectFavoritePokemonsMap } from 'containers/App/selectors'

import {
  selectFavoritePokemonList,
  selectFavoritePokemonListIsLoading,
} from './selectors'
import { fetchFavoritesPokemonList } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function FavoritePokemonList(props) {
  useInjectReducer({ key: 'favoritePokemonList', reducer })
  useInjectSaga({ key: 'favoritePokemonList', saga })

  useEffect(() => {
    props.fetchFavoritesPokemonList()
  }, [])

  useEffect(() => {
    props.fetchFavoritesPokemonList()
  }, [props.favoritePokemonsMap])

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.favoritePokemons} />
      </h1>
      <PokemonList>
        {props.favoritePokemonList.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            number={pokemon.id}
            {...pokemon}
          />
        ))}
      </PokemonList>
    </div>
  )
}

FavoritePokemonList.propTypes = {
  fetchFavoritesPokemonList: PropTypes.func.isRequired,
  favoritePokemonList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  favoritePokemonsMap: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  favoritePokemonList: selectFavoritePokemonList,
  isLoading: selectFavoritePokemonListIsLoading,
  favoritePokemonsMap: selectFavoritePokemonsMap,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchFavoritesPokemonList: () => {
      dispatch(fetchFavoritesPokemonList())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(FavoritePokemonList)
