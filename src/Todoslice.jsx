import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello"}]
}

const Todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const objTodo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(objTodo);
        },
        removeTodo:(state,action)=>{
           state.todos= state.todos.filter((item)=>item.id !== action.payload)
        }
    }
})


export const {addTodo,removeTodo } = Todoslice.actions;

export default Todoslice.reducer
