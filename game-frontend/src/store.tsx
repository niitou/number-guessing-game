import {configureStore} from '@reduxjs/toolkit'
import inputReducer from './reducers/userInputReducer'
import scoreReducer from './reducers/userScoreReducer'
import playerNameReducer from './reducers/playerNameReducer'
import messageReducer from './reducers/messageReducer'

export const store = configureStore({
    reducer : {
        input : inputReducer,
        score : scoreReducer,
        player : playerNameReducer,
        message : messageReducer,
    }
})