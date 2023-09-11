import { useState } from "react";
import "./style.css";

function AddTask({ addToDo }) {
  const [task, setTask] = useState("");
  return (
    <div>
      <div>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          onClick={() => {
            addToDo(task);
            setTask('');
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
