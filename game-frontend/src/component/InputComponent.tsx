import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseScore } from '../reducers/userScoreReducer'
import { setPlayerInput } from '../reducers/userInputReducer'
import axios from 'axios'
import { setStatus } from '../reducers/gameReducer'

function InputComponent() {
  const userInput = useSelector((state: any) => state.input.value)
  const dispatch = useDispatch()
  const playerId = useSelector((state: any) => state.player.id)
  const playerScore = useSelector((state: any) => state.score.value)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/game`, {
      data: userInput
    })
      .then(res => {
        dispatch(setStatus({
          status: res.data['status'], message: `${res.data['message']}`
        }))
        return res.data
      })
      .then(res => {
        if (res.status === "FINISHED") {
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/games`, {
            "player_id": playerId,
            "score": playerScore
          })
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
        }
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="user-input" value={userInput} onChange={(e) => dispatch(setPlayerInput(e.target.value))} />
          <button onClick={() => dispatch(increaseScore())}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default InputComponent