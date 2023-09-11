import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

jest.mock("./components/AddTask", () => ({ addToDo }) => {
  return (
    <div data-testid="addTask" onClick={() => addToDo("shopping")}>
      Add Task
    </div>
  );
});

jest.mock("./components/ListTask", () => ({ todos }) => {
  return (
    <div data-testid="listTask">
      {todos.map((todo, index) => {
        return (
          <div>
            <div data-testid={`mark-as-complete-${index}`}></div>
            {todo.task}
            <div data-testid={`delete-${index}`}>Delete</div>
          </div>
        );
      })}
    </div>
  );
});

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Render App", () => {
    const linkElement = screen.getByText(/TODO App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Should Add task", () => {
    expect(true).toBe(false);
  });

  test("Should Delete Task", () => {
    fireEvent.click(screen.getByTestId("addTask"));
    waitFor(() => expect(screen.getByText(/shopping/i)).toBeInTheDocument());
    fireEvent.click(screen.getByTestId("delete-0"));
    waitFor(() =>
      expect(screen.queryByText(/shopping/i)).not.toBeInTheDocument()
    );
  });

  test("Should mark task as Complete", () => {
    expect(true).toBe(false);
  });
});
