import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo", // this name will be visible in redux extension in chrome
  initialState,
  reducers: {
    // it contains the methods
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // action.payload contains what value we are setting in the store which is coming from another file
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export all the methods which you have created in reducers
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
