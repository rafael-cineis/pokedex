/**
 *
 * Field
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Label from 'components/Label'

function Field(props) {
  const {
    label,
    value,
  } = props

  return (
    <div className={props.className}>
      <Label label={label} />
      <div>
        {value}
      </div>
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default Field
