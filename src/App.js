import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>All</Tab>
        </TabList>
        <TabPanel>
          <Form
            onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
          />
          {todos.map((todo) => {
            return <div>{todo.text}</div>;
          })}
        </TabPanel>
        <TabPanel>tab 2</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
