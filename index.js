const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3000;

const taskController = require('./controllers/task.controller'); // Import the controller

app.use(bodyParser.json());
app.use(cors())

// Define your routes for CRUD operations using the controller functions

app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getAllTasks);
app.get('/tasks/:taskId', taskController.getTaskById);
app.put('/tasks/:taskId', taskController.updateTaskById);
app.delete('/tasks/:taskId', taskController.deleteTaskById);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app