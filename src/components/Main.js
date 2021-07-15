import React from 'react'

import './Main.css'

import Welcome from './Welcome.js'
import NotFound from './NotFound.js'

import { Switch, Route } from 'react-router-dom'

export default function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}
