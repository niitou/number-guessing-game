import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name : "input",
    initialState : {
        value : ''
    },
    reducers : {
        setPlayerInput : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setPlayerInput} = inputSlice.actions
export default inputSlice.reducer