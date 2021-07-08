import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todoList,
  handleToggle,
  handleFilter,
  showButton,
}) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          todo={todo}
        />
      ))}
      {showButton && <button onClick={handleFilter}>clear</button>}
    </div>
  );
}
