import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { POKEMON_FAVORITE_LIST_PATH } from 'containers/App/urls'
import history from 'utils/history'
import Button from 'components/Button'
import SearchInputButton from 'components/SearchInputButton'

import messages from './messages'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;

  .actionContainer {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .actionContainer {
      flex-direction: column;
    }
  }
`

export const Header = props => (
  <Wrapper>
    <h1>
      <FormattedMessage {...messages.pokedex} />
    </h1>
    <div className="actionContainer">
      <Button id="loadFavoritePokemons" onClick={() => { history.push(POKEMON_FAVORITE_LIST_PATH) }}>
        <FormattedMessage {...messages.showFavoritePokemonsOnly} />
      </Button>
      <SearchInputButton
        label={messages.searchByNameOrNumber}
        onClick={props.handleSearch}
      />
    </div>
  </Wrapper>
)

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Header
