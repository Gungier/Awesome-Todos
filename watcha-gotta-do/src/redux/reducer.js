import { createSlice } from "@reduxjs/toolkit";

//initial state is an empty array for the todo list
const initialState = [];

//createSlice fxn with 1 object and 3 params(name of slice fxn, initial state, all the reducer logic inside the {} object)
const addTodoReducer = createSlice({
    name: "todos",

    initialState,

    reducers: {
        //code to add items to the todo list
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
});

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.actions;

//next create store and pass this reducer...