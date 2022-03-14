import React from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import {ITask} from "../interfaces"

interface Props {
    task:ITask,
    completeTask(taskNameToDelete:string):void
}

export default function ToDoList({task, completeTask}:Props) {
  return (
    <div className="task">
        <div className="content">
     <span>{task.taskName}</span>
     <span>{task.deadline}</span>
     </div>
     <button onClick={()=>{completeTask(task.taskName)}}>X</button>
    </div>
  );
}
