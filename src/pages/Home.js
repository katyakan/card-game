import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Card Game</h1>
      <Link to="/game">Play</Link>
    </div>
  )
}

export default Home
