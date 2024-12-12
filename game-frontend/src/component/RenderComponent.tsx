import React from 'react'
import { useSelector } from 'react-redux'

function RenderComponent() {
  const playerScore = useSelector((state : any) => state.score.value)
  const playerInput = useSelector((state: any) => state.input.value)
  const message = useSelector((state:any) => state.message.value)
  return (
    <div>
      <p>{message}</p>
      <p>Current score : <span>{playerScore}</span></p>
      <h1>Guess number : {playerInput}</h1>
    </div>
  )
}

export default RenderComponent