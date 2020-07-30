import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import SearchInputButton from 'components/SearchInputButton'

import messages from './messages'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Component = props => (
  <Wrapper>
    <h1>
      <FormattedMessage {...messages.pokedex} />
    </h1>
    <SearchInputButton
      label={messages.searchByNameOrNumber}
      onClick={props.handleSearch}
    />
  </Wrapper>
)

Component.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Component
