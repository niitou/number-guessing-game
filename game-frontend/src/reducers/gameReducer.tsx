import { createSlice } from "@reduxjs/toolkit";


const gameSlicer = createSlice({
    name : "game",
    initialState : {
        message : '',
        status : 'ONGOING'
    },
    reducers : {
        setStatus : (state, action) => {
            state.message = action.payload.message
            state.status = action.payload.status
        }
    }
})

export const {setStatus} = gameSlicer.actions
export default gameSlicer.reducer