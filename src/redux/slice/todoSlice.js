import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    todo: null,
    todos: [],
    error: null
}

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.todos = [...state.todos, { ...action.payload, id: state.todos.length + 1 }]
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
});

export const {
    createTodo,
    updateTodo,
    deleteTodo,
} = TodoSlice.actions;
export default TodoSlice.reducer;