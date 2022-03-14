import React, { ChangeEvent, FC, useState } from "react";
import moment from "moment";
import { ITask } from "./interfaces";

import "./App.css";
import ToDoList from "./Component/ToDoList";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline("");
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
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task:ITask, key:number)=>{
          return <ToDoList key={key} task={task}/>
        })}
      </div>
    </div>
  );
};

export default App;
