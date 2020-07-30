/**
 *
 * PokemonStats
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from 'components/Label'
import Field from 'components/Field'

import messages from './messages'

const Wrapper = styled.div`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  background-color: #a4a4a4;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
`

const StatsField = styled(Field)`
  display: inline-block;
  margin: 4px;
  padding: 4px 8px;
  background-color: ${props => props.color};
  border-radius: 8px;
  min-width: 80px;
  text-align: center;
`

function PokemonStats({ stats }) {
  const hp = stats.find(statInfo => statInfo.stat.name === 'hp')
  const attack = stats.find(statInfo => statInfo.stat.name === 'attack')
  const defense = stats.find(statInfo => statInfo.stat.name === 'defense')
  const speed = stats.find(statInfo => statInfo.stat.name === 'speed')

  return (
    <Wrapper>
      <Label label={messages.stats} />
      <div>
        <StatsField color="#c11d1d" label={messages.hp} value={hp.base_stat} />
        <StatsField color="#06f" label={messages.attack} value={attack.base_stat} />
        <StatsField color="#777" label={messages.defense} value={defense.base_stat} />
        <StatsField color="#39a900" label={messages.speed} value={speed.base_stat} />
      </div>
    </Wrapper>
  )
}

PokemonStats.propTypes = {
  stats: PropTypes.array.isRequired,
}

export default PokemonStats
