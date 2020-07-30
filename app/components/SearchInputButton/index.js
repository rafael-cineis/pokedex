/**
 *
 * SearchInputButton
 *
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Text from 'components/Text'

const StyledButton = styled.button`
  outline: none;
  background: #3b4cca;
  border: none;
  border-radius: 4px;
  height: 32px;
  text-transform: uppercase;
  color: #f4f4f4;
  transition: ease 0.2s;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 4px solid;
  border-radius: 4px;
  height: 32px;

  &:focus {
    border-bottom: 4px solid #3b4cca;
  }
`

function SearchInputButton(props) {
  const [searchValue, setSearchValue] = useState('')

  const handleOnChange = ({ target: { value } }) => {
    setSearchValue(value)
  }

  const handleClick = () => {
    props.onClick(searchValue)
  }

  return (
    <div>
      <Text small semiBold>
        <FormattedMessage {...props.label} />
      </Text>
      <StyledInput
        type="text"
        value={searchValue}
        onChange={handleOnChange}
      />
      <StyledButton
        type="button"
        onClick={handleClick}
        disabled={!searchValue}
      >
        <FontAwesomeIcon icon="search" />
      </StyledButton>
    </div>
  )
}

SearchInputButton.propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SearchInputButton
