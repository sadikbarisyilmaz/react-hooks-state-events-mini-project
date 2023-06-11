import React, { useState } from "react";

function NewTaskForm({
  categories,
  onTaskFormSubmit,
  formInput,
  setFormInput,
}) {
  const handleChangeText = (e) => {
    setFormInput({ ...formInput, text: e.target.value });
  };
  console.log(formInput);
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input
          onChange={handleChangeText}
          type="text"
          name="text"
          value={formInput.text}
        />
      </label>
      <label>
        Category
        <select
          onChange={(e) =>
            setFormInput({ ...formInput, category: e.target.value })
          }
          name="category"
          value={formInput.category}
        >
          {/* render <option> elements for each category here */}
          {categories
            .filter((category) => category !== "All")
            .map((category, i) => {
              return (
                <option key={i} value={category}>
                  {category}
                </option>
              );
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
