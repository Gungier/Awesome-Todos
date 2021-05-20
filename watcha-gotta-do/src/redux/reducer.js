import { createSlice } from "@reduxjs/toolkit";

//initial state is an empty array for the todo list
const initialState = [];

//createSlice fxn with 1 object and 3 params(name of slice fxn, initial state, all the reducer logic inside the {} object)
const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //reducers code to add items to the todo list
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove from todo list
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed todos
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

//next create store and pass this reducer...
