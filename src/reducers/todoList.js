import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, text: "Watch video on actions & reducers", complete: true },
    { id: 2, text: "Follow redux codealong", complete: true },
    { id: 3, text: "Fork weekly assignment", complete: true },
    { id: 4, text: "Create a todo app", complete: false },
  ],
};

export const todoList = createSlice({
  name: "todoList",
  initialState,

  reducers: {
    addTask: (state, { payload }) => {
      const setId = () => {
        if (state.tasks.length === 0) return 1;
        else {
          const lastKey = Object.keys(state.tasks).pop();
          return state.tasks[lastKey].id + 1;
        }
      };

      const newTask = {
        id: setId(),
        text: payload,
        complete: false,
      };

      const newTaskList = [...state.tasks, newTask];
      state.tasks = newTaskList;
    },
    toggleTask: (state, { payload }) => {
      const currentTask = state.tasks.find((task) => task.id === payload.id);
      currentTask.complete = !currentTask.complete;
    },
    removeTask: (state, { payload }) => {
      const filteredList = state.tasks.filter((task) => task.id !== payload.id);
      state.tasks = filteredList;
    },
    removeCompletedTasks: (state) => {
      const filteredList = state.tasks.filter(
        (task) => task.complete === false
      );
      console.log({ filteredList });
      state.tasks = filteredList;
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
  },
});
