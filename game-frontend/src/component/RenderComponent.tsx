import React from 'react'
import { useSelector } from 'react-redux'

function RenderComponent() {
  const userScore = useSelector((state : any) => state.score.value)
  const userInput = useSelector((state: any) => state.input.value)
  const message = useSelector((state:any) => state.message.value)
  return (
    <div>
      <p>{message}</p>
      <p>Current score : <span>{userScore}</span></p>
      <h1>Guess number : {userInput}</h1>
    </div>
  )
}

export default RenderComponent