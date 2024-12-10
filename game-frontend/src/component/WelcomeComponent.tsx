import React from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../reducers/playerNameReducer'

function WelcomeComponent() {
    const dispatch = useDispatch()


    const handleSubmit = (e: any) => {
        e.preventDefault()
        const playerName = e.target.playerName.value
        if(playerName === '') return alert("Username cannot be empty")
        dispatch(setName(playerName))
    }
    return (
        <div>
            <h1>Number Guessing Game</h1>
            <p>Input your username</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="playerName" />
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>

    )
}

export default WelcomeComponent