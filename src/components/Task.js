import React from "react";

function Task({ task, setTasks, id, tasks }) {
  const handleDelete = (e) => {
    console.log(e.target.id);
    setTasks(
      tasks.filter((task, index) => {
        console.log(task, index, e.target.id);
        return parseInt(e.target.id) !== index;
      })
    );
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button id={id} onClick={handleDelete} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
