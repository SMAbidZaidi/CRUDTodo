import { createSlice } from '@reduxjs/toolkit'
const initialState=[{
    id:"",
    name:"",
    isComplete:false
    
}]
const todoSlice=createSlice({
    name:"todos",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{

        },
        del:(state,action)=>{

        },
        update:(state,action)=>{

        },
    }
})
export const {add,del,update}=todoSlice.actions;
export default todoSlice.reducer