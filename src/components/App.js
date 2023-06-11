import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const [categories, setCategories] = useState(CATEGORIES);
  const [formInput, setFormInput] = useState({
    text: "",
    category: "Code",
  });
  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, formInput]);
    setFormInput({
      text: "",
      category: "Code",
    });
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        category={category}
        setCategory={setCategory}
        setCategories={setCategories}
        categories={CATEGORIES}
        tasks={tasks}
        setTasks={setTasks}
      />
      <NewTaskForm
        formInput={formInput}
        setFormInput={setFormInput}
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList category={category} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
