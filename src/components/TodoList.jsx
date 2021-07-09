import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todoList,
  handleToggle,
  handleFilter,
  showButton,
  deleteHandler,
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
      {showButton && <button onClick={deleteHandler}>clear</button>}
    </div>
  );
}
