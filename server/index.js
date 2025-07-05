const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let todos = []; // In-memory list

app.get("/todos", (req, res) => res.json(todos));
app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.json(todo);
});
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3001, () => console.log("Server running on port 3001"));
