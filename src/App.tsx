import React from "react";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>ToDo List </h1>
      <div className="header">
        <div className="inputContainer">
          <input type= "text" placeholder="add a task" />
          <input type= "date" placeholder="set deadline" />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
