import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Game() {
  const dispatch = useDispatch()
  const selectedCard = useSelector((state) => state.selectedCard)

  const handleCardSelect = (card) => {
    // Here you can implement your card selection logic
    // For now, let's just store the selected card in the Redux store
    dispatch({ type: 'SELECT_CARD', payload: card })
  }

  return (
    <div>
      <h1>Game</h1>
    </div>
  )
}

export default Game
