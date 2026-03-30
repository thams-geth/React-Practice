import React, { useReducer, useState } from "react";

// 🧠 Types
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
};

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };

// 🧠 Reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        todos: [...state.todos, newTodo],
      };

    case "DELETE_TODO":
      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload
            ? { ...t, completed: !t.completed }
            : t
        ),
      };

    default:
      return state;
  }
}

// 🚀 Component
const TodoApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "20px auto" }}>
      <h2>Todo App (useReducer)</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      {/* List */}
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} style={{ marginTop: "10px" }}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;