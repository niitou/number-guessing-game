import { createSlice } from "@reduxjs/toolkit";

const messageSlicer = createSlice({
    name : "message",
    initialState : {
        value : ""
    },
    reducers : {
        setMessage : (state, action) => {
            state.value = action.payload
        },
        addMessage : (state, action) => {
            state.value = state.value + action.payload
        }
    }
})

export const {setMessage, addMessage} = messageSlicer.actions
export default messageSlicer.reducer 