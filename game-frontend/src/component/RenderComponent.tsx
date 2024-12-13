import React from 'react'
import { useSelector } from 'react-redux'

function RenderComponent() {
  const playerScore = useSelector((state: any) => state.score.value)
  const message = useSelector((state: any) => state.message.value)
  const gameStatus = useSelector((state: any) => state.game.status)
  const gameMessage = useSelector((state: any) => state.game.message)
  return (
    <div>
      <p>{message}</p>
      {gameMessage === "" ? <></> : <h2>{gameMessage}</h2>}
      {
        gameStatus === "ONGOING" ?
          <div>
            <p>Current score : <span>{playerScore}</span></p>
          </div> :
          <div>
            <p>Play Again ?</p>
            <div>
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
      }
    </div>
  )
}

export default RenderComponent