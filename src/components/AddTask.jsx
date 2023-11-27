import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoList } from "../reducers/todoList";
import add from "../assets/add.png";
import "./AddTask.css";

export const AddTask = () => {
  const [newTask, setNewtask] = useState("");
  const dispatch = useDispatch();

  const addTaskOnClick = () => {
    if (newTask !== "") {
      dispatch(todoList.actions.addTask(newTask));
      setNewtask("");
    }
  };

  return (
    <div className="add-task-container">
      <input
        className="text-input"
        type="text"
        value={newTask}
        onChange={(event) => setNewtask(event.target.value)}
        placeholder="What needs to be done?"
      />
      <img
        className="add-task"
        onClick={addTaskOnClick}
        src={add}
        alt="Add task"
      />
    </div>
  );
};
