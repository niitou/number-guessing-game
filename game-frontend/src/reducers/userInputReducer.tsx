import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name : "input",
    initialState : {
        value : ''
    },
    reducers : {
        change : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {change} = inputSlice.actions
export default inputSlice.reducer