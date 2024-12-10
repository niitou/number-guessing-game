import { createSlice } from "@reduxjs/toolkit";


const playerNameSlice = createSlice({
    name : "player",
    initialState : {
        value : ""
    },
    reducers : {
        setName : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setName} = playerNameSlice.actions
export default playerNameSlice.reducer