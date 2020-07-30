/**
 *
 * Label
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'

const StyledLabel = styled(Text)`
  margin-bottom: 4px;
`

function Label({ label }) {
  return (
    <StyledLabel medium semiBold>
      <FormattedMessage {...label} />
    </StyledLabel>
  )
}

Label.propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
}

export default Label
