import React from "react";

export default function Todo({ todo, handleToggle, handleFilter }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.target.id);
  };
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "strike" : ""}
    >
      <input
        type="checkbox"
        id={todo.id}
        key={todo.id + todo.task}
        value={todo.id}
      />
      {todo.task}
    </div>
  );
}
