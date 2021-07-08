import React, { useState } from "react";

export default function Form({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <form>
      <input value={value} onChange={handleChange} placeholder="add todos.." />
      <button onClick={handleSubmit}>add</button>
    </form>
  );
}
