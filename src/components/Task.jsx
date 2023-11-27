import { useDispatch } from "react-redux";
import { todoList } from "../reducers/todoList";
import bin from "../assets/bin.png";
import "./Task.css";
import moment from "moment";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm");

  return (
    <div className="task-card">
      <div className="content">
        <label className="checkbox" for={task.id}>
          <input
            className="checkbox_input"
            id={task.id}
            type="checkbox"
            checked={task.complete}
            onChange={() => dispatch(todoList.actions.toggleTask(task))}
          />
          <div className="checkbox_box"></div>

          <div className="text-date-container">
            <p className="text">{task.text}</p>
            <div className="date">
              {date} {time}
            </div>
          </div>
        </label>
      </div>

      <img
        className="bin-icon"
        src={bin}
        onClick={() => dispatch(todoList.actions.removeTask(task))}
        alt="delete"
      />
    </div>
  );
};
