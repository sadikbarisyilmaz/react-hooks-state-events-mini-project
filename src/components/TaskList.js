import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, category }) {
  return (
    <div className="tasks">
      {tasks
        .filter((task) => {
          if (category === "All") {
            return task;
          } else {
            return task.category === category;
          }
        })
        .map((task, i) => {
          return (
            <span key={i}>
              <Task id={i} task={task} setTasks={setTasks} tasks={tasks} />
            </span>
          );
        })}
    </div>
  );
}

export default TaskList;
