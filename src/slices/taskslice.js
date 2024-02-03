import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasklist:[],              //add update delete
    selectedtask:{}          // if we update we addd that is selectd task
}

const taskslice = createSlice({
    name:"taskslice",
    initialState,
    reducers:{
        addtasktolist:(state,action) => {
            const id = Math.random()*100
            const task = {...action.payload,id}      //... 3 dot is spread opertor to copy the arry or object
            state.tasklist.push(task)
        },
        removetaskfromlist:(state,action) => {
            state.tasklist = state.tasklist.filter((task) => task.id !== action.payload.id)
        },
        updatetaskfromlist:(state,action) => {
            state.tasklist = state.tasklist.map((task) => task.id === action.payload.id ? action.payload : task)
        },
        setselectedtask : (state,action) => {
            state.selectedtask = action.payload
        }
    }
})

export const {addtasktolist,removetaskfromlist,updatetaskfromlist,setselectedtask} = taskslice.actions

export default taskslice.reducer