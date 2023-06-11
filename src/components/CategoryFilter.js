import React, { useState } from "react";

function CategoryFilter({
  categories,
  category,
  setCategory,
  tasks,
  setTasks,
  setCategories,
}) {
  const handleClick = (e) => {
    console.log(e.target);
    setClickedCat({ category: e.target.id });
    setCategory(e.target.value);
    // e.target.className = "selected";
  };
  const [clickedCat, setClickedCat] = useState({
    category: "",
  });
  console.log(clickedCat);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, i) => {
        return (
          <button
            className={
              Number.parseInt(clickedCat.category) === i ? "selected" : ""
            }
            onClick={handleClick}
            key={i}
            id={i}
            value={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
