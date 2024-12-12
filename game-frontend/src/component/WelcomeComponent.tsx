import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPlayer } from '../reducers/playerNameReducer'
import axios from 'axios'
import { addMessage, setMessage } from '../reducers/messageReducer'

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
        let player_id
        const playerName = e.target.playerName.value
        if (playerName === '') return alert("Username cannot be empty")
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/players?name=${playerName}`)
            .then(res => {
                if (res.data === "Not Found!") {
                    axios.post(`${process.env.REACT_APP_BACKEND_URL}/players`, {
                        name: playerName
                    }).then(res => {
                        dispatch(setMessage(`Welcome ${res.data['name']}, this is your first time here`))
                        return res
                    }).then(res => {
                        player_id = res.data['player_id']
                        dispatch(setPlayer({ name: playerName, id: player_id }))
                    })
                } else {
                    dispatch(setMessage(`Welcome back ${playerName}!`))
                    if (res.data["score"]) dispatch(addMessage(`, your personal best was ${res.data["score"]}`))
                    player_id = res.data['player_id']
                    dispatch(setPlayer({ name: playerName, id: player_id }))
                }
            }).catch(err => console.error(err))
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