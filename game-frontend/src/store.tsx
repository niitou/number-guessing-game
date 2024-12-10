import {configureStore} from '@reduxjs/toolkit'
import inputReducer from './reducers/userInputReducer'
import scoreReducer from './reducers/userScoreReducer'
import playerNameReducer from './reducers/playerNameReducer'

export const store = configureStore({
    reducer : {
        input : inputReducer,
        score : scoreReducer,
        player : playerNameReducer,
    }
})