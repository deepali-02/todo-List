import React, { ChangeEvent, FC, useState } from "react";
import moment from "moment";

import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>(Date());
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(event.target.value);
    }
  };
  return (
    <div className="App">
      <h1>ToDo List </h1>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="add a task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="set deadline"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
