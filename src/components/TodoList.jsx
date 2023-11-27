import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "./AddTask";
import { Task } from "./Task";
import { todoList } from "../reducers/todoList";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1701085060253.json";
import "./TodoList.css";

export const TodoList = () => {
  const allTasks = useSelector((store) => store.todoList.tasks);
  const dispatch = useDispatch();

  return (
    <>
      <div className="todo-list">
        <AddTask />
        {allTasks.length === 0 && <Lottie animationData={animationData} />}
        {allTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <div className="button-container">
          <button
            className="delete-button"
            onClick={() => dispatch(todoList.actions.removeCompletedTasks())}
          >
            Remove completed
          </button>
          <button
            className="delete-button"
            onClick={() => dispatch(todoList.actions.removeAllTasks())}
          >
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};
