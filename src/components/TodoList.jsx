import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "./AddTask";
import { Task } from "./Task";
import { todoList } from "../reducers/todoList";
import moment from "moment";
import "./TodoList.css";

export const TodoList = () => {
  const allTasks = useSelector((store) => store.todoList.tasks);
  const dispatch = useDispatch();

  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm");

  return (
    <>
      <div className="todo-list">
        <AddTask />
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
