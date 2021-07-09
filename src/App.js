import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
// import "react-tabs/style/react-tabs.css";
import data from "./data.json";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(data);

  const activeTask = todos.filter((todo) => !todo.complete);
  const completedTask = todos.filter((todo) => todo.complete);

  const handleToggle = (id) => {
    let mapped = todos.map((todo) =>
      todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo }
    );
    setTodos(mapped);
  };
  const handleFilter = (id) => {
    let filtered = todos.filter((todo) => !todo.complete);
    setTodos(filtered);
  };

  const addTask = (value) => {
    let copy = [...todos];
    copy = [...copy, { id: todos.length + 1, task: value, complete: false }];
    setTodos(copy);
  };

  return (
    <div className="">
      <Header />
      <Tabs className="width div-center ">
        <TabList className="flex">
          <Tab className="pointer blue">All</Tab>
          <Tab className="pointer">Active</Tab>
          <Tab className="pointer">Completed</Tab>
        </TabList>
        <TabPanel className="">
          <Form addTask={addTask} />
          <TodoList
            handleFilter={handleFilter}
            handleToggle={handleToggle}
            todoList={todos}
          />
        </TabPanel>
        <TabPanel>
          <Form addTask={addTask} />
          <TodoList handleToggle={handleToggle} todoList={activeTask} />
        </TabPanel>

        <TabPanel>
          <TodoList
            showButton={true}
            handleToggle={handleToggle}
            todoList={completedTask}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
