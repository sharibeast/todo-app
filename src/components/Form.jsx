import React, { useState } from "react";

export default function Form({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
  };

  return (
    <form>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add task"
      />
      <button
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(value);
        }}
      >
        add
      </button>
    </form>
  );
}
