import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// async thunk to fetch data from api


// omit imports and state

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  const data = await response.json()
  return data
})


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
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchTodos.pending, (state)=>{
        state.loading= true;
        state.error = null;

    })
    builder.addCase(fetchTodos.fulfilled, (state, action)=>{
        state.loading= false;
        state.items = action.payload;
    })
    builder.addCase(fetchTodos.rejected, (state, action)=>{
        state.loading= false;
        state.error= action.error.message;
    })
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer