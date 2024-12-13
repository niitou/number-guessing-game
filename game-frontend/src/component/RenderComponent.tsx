import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetScore } from '../reducers/userScoreReducer'
import { setStatus } from '../reducers/gameReducer'
import { setPlayerInput } from '../reducers/userInputReducer'
// import { setPlayer } from '../reducers/playerNameReducer'
import axios from 'axios'

function RenderComponent() {
  const playerScore = useSelector((state: any) => state.score.value)
  const message = useSelector((state: any) => state.message.value)
  const gameStatus = useSelector((state: any) => state.game.status)
  const gameMessage = useSelector((state: any) => state.game.message)
  const dispatch = useDispatch()

  const newGame = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/new`) // get request to generate new secret number
    dispatch(resetScore()) // Set score to 0
    dispatch(setStatus({ // Set game status back to initial value
      message: '',
      status: 'ONGOING'
    }))
    dispatch(setPlayerInput('')) // Set user input to initial value
  }

  const gameOver = () => {
    // newGame()
    // dispatch(setPlayer({
    //   id: 0,
    //   value: ""
    // }))
    window.location.reload()
  }
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
              <button onClick={newGame}>Yes</button>
              <button onClick={gameOver}>No</button>
            </div>
          </div>
      }
    </div>
  )
}

export default RenderComponent