import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../reducers/playerNameReducer'
import axios from 'axios'
import { setMessage } from '../reducers/messageReducer'

function WelcomeComponent() {
    const dispatch = useDispatch()
    const [leaderBoard, setLeaderBoard] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/games`)
            .then(res => setLeaderBoard(res.data))
            .catch(err => console.error(err))
        return () => {
            setLeaderBoard([])
        }
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const playerName = e.target.playerName.value
        if (playerName === '') return alert("Username cannot be empty")
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/players?name=${playerName}`)
            .then(res => {
                if(res.data === "Not Found!"){
                    console.log("Not Found")
                    axios.post(`${process.env.REACT_APP_BACKEND_URL}/players`, {
                        name : playerName
                    }).then(res => dispatch(setMessage(`Welcome ${res.data['name']}, this is your first time here`)))
                }else{
                    // Get personal best using get
                    dispatch(setMessage(`Welcome back ${playerName}!`))
                }
            })
            .catch(err => console.error(err))
        dispatch(setName(playerName))
    }
    return (
        <div>
            <h1>Number Guessing Game</h1>
            <h1>Leaderboard</h1>
            <ol>
                {
                    leaderBoard.map((val, idx) =>
                        <li key={idx}>{`${val["player"]["name"]} - ${val["score"]}`}</li>)
                }
            </ol>
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