import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/userScoreReducer'
import { change } from '../reducers/userInputReducer'

function InputComponent() {
  const userInput = useSelector((state:any) => state.input.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <input type="text" name="user-input" value={userInput} onChange={(e) => dispatch(change(e.target.value))}/>
        <button onClick={() => dispatch(increment())}>Submit</button>
      </div>
    </div>
  )
}

export default InputComponent