import { createSlice } from "@reduxjs/toolkit";


const playerNameSlice = createSlice({
    name : "player",
    initialState : {
        id : 0,
        value : ""
    },
    reducers : {
        setPlayer : (state, action) => {
            state.value = action.payload.name;
            state.id = action.payload.id
        }
    }
})

export const {setPlayer} = playerNameSlice.actions
export default playerNameSlice.reducer