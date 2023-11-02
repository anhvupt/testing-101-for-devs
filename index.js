const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3000;

const taskController = require('./controllers/task.controller'); // Import the controller

app.use(bodyParser.json());
app.use(cors())

// Define your routes for CRUD operations using the controller functions

app.post('/api/tasks', taskController.createTask);
app.get('/api/tasks', taskController.getAllTasks);
app.get('/api/tasks/:id', taskController.getTaskById);
app.put('/api/tasks/:id', taskController.updateTaskById);
app.delete('/api/tasks/:id', taskController.deleteTaskById);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app