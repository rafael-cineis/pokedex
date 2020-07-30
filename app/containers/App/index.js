/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFoundPage from 'containers/NotFoundPage/Loadable'
import PokedexListPage from 'containers/PokedexListPage'
import PokemonDetails from 'containers/PokemonDetails'

import { POKEMON_DETAILS_PATH } from './urls'

import GlobalStyle from '../../global-styles'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={PokedexListPage} />
        <Route exact path={POKEMON_DETAILS_PATH} component={PokemonDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}
