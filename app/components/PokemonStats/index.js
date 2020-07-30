/**
 *
 * PokemonStats
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Label from 'components/Label'

import { Wrapper, StatsField } from './styles'
import messages from './messages'

function PokemonStats({ stats }) {
  const hp = stats.find(statInfo => statInfo.stat.name === 'hp')
  const attack = stats.find(statInfo => statInfo.stat.name === 'attack')
  const defense = stats.find(statInfo => statInfo.stat.name === 'defense')
  const speed = stats.find(statInfo => statInfo.stat.name === 'speed')

  return (
    <Wrapper>
      <Label label={messages.stats} />
      <div className="statsContainer">
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
