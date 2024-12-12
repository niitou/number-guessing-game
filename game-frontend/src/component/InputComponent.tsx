import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/userScoreReducer'
import { change } from '../reducers/userInputReducer'
import axios from 'axios'

function InputComponent() {
  const userInput = useSelector((state: any) => state.input.value)
  const dispatch = useDispatch()
    // const playerId = useSelector((state : any) => state.player.id)
  const handleSubmit = ( e : any ) =>{
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/game`, {
      data : userInput
    })
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="user-input" value={userInput} onChange={(e) => dispatch(change(e.target.value))} />
          <button onClick={() => dispatch(increment())}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default InputComponent