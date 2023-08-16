import { createSlice } from "@reduxjs/toolkit";

export const themesSlice = createSlice({
    name:'theme',
    initialState:{value:{color:'black'}},
    reducers:{
           colorChange:(state,action) =>{
            state.value = action.payload
            }
    }
})

export const {colorChange} = themesSlice.actions
export default themesSlice.reducer