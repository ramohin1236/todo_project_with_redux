import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    items: [],
    loading: false,
    error: null
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // add todo
    addTodo: (state, action)=>{
        state.items.push({
            id: Date.now(),
            text: action.payload,
            complete: false
        });
    },
    removeTodo:(state,action)=>{
        state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleTodo:(state, action)=>{
        const todo = state.items.find(todo=> todo.id === action.payload);
        if(todo){
            todo.complete = !todo.complete;
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions

export default todoSlice.reducer