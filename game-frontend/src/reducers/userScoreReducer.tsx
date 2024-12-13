import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
    name : "score",
    initialState : {
        value : 0
    },
    reducers : {
        increaseScore : (state) => {
            state.value += 1
        },
        decreaseScore : (state) => {
            state.value -= 1
        },
        resetScore : (state) => {
            state.value = 0
        }
    }
})

export const {increaseScore, decreaseScore, resetScore} = scoreSlice.actions
export default scoreSlice.reducer