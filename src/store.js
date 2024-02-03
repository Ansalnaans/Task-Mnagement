import { configureStore } from "@reduxjs/toolkit";
import tasksreducer from './slices/taskslice'

export const store = configureStore({
    reducer:{
        tasks:tasksreducer
    }
})