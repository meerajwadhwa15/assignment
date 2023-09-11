import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (task) => {
    if (task) {
      setTodos([
        {
          task,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleDelete = (task) => {
    // Please complete
  };

  const markAsComplete = (task) => {
    // Please complete
  };

  return (
    <div className="App">
      <header className="App-header">TODO App</header>

      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <div className="wrapper">
          <AddTask addToDo={addToDo} />
        </div>
        <div className="wrapper">
          <ListTask todos={todos} markAsComplete={markAsComplete} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
