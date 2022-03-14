import React from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import {ITask} from "../interfaces"

interface Props {
    task:ITask
}

export default function ToDoList({task}:Props) {
  return (
    <div className="task">
        <div className="content">
     <span>{task.taskName}</span>
     <span>{task.deadline}</span>
     </div>
     <button>X</button>
    </div>
  );
}
