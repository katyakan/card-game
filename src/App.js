import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
