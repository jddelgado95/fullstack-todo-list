import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    axios.post("http://localhost:3001/todos", { text }).then((res) => {
      setTodos([...todos, res.data]);
      setText("");
    });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.filter((t) => t.id !== id)));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => deleteTodo(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
