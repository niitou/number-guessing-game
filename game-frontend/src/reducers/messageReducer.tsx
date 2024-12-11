import { createSlice } from "@reduxjs/toolkit";


const messageSlicer = createSlice({
    name : "message",
    initialState : {
        value : ""
    },
    reducers : {
        setMessage : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setMessage} = messageSlicer.actions
export default messageSlicer.reducer 