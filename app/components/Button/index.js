/**
 *
 * Button
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  outline: none;
  background: #fe0001;
  border: none;
  border-radius: 16px;
  width: 296px;
  height: 60px;
  text-transform: uppercase;
  color: #f4f4f4;
  font-size: 18px;
  font-weight: bold;
  transition: ease 0.2s;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`

function Button(props) {
  return (
    <StyledButton
      type="button"
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
