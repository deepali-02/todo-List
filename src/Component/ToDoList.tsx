import React from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import {ITask} from "../interfaces"

interface Props {
    task:ITask
}

export default function ToDoList({task}:Props) {
  return (
    <div>
     {task.taskName} {task.deadline}
    </div>
  );
}
