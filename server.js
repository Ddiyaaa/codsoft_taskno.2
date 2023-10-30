const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:index', (req, res) => {
  const index = req.params.index;
  tasks[index] = req.body.task;
  res.status(200).json(tasks[index]);
});

app.delete('/tasks/:index', (req, res) => {
  const index = req.params.index;
  const deletedTask = tasks.splice(index, 1);
  res.status(200).json(deletedTask[0]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
