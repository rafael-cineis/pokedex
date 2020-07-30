/**
 *
 * Loader
 *
 */

import React from 'react'
import styled from 'styled-components'

import LoaderGif from 'images/loader.gif'

const LoaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

function Loader() {
  return (
    <LoaderIcon>
      <img src={LoaderGif} alt="Loader" />
    </LoaderIcon>
  )
}

export default Loader
