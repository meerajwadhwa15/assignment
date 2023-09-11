import "./style.css";

function ListTask({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "space-between", marginBottom: '15px' }}
          >
            <input type="checkbox" checked={todo.isCompleted} />
            {todo.task}
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ListTask;
