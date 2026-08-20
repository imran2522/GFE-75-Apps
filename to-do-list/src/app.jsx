import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Walk the dog" },
  { id: 2, text: "Water the plants" },
  { id: 3, text: "Wash the dishes" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const text = taskText.trim();

    if (!text) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), text },
    ]);
    setTaskText("");
  }

  function handleDelete(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your task"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          aria-label="Task description"
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button type="button" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
