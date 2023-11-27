import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoList } from "./reducers/todoList";

const reducer = combineReducers({
  todoList: todoList.reducer,
});

export const store = configureStore({ reducer });
