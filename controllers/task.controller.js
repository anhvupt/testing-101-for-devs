// controllers/taskController.js

// In-memory task data
let tasks = [{title: 'todo', description: 'new task'}];

// Create a new task
const createTask = (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Read all tasks
const getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

// Read a specific task by ID
const getTaskById = (req, res) => {
    const taskId = req.params.taskId;
    const task = tasks.find((t) => t.id === taskId);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Update a task by ID
const updateTaskById = (req, res) => {
    const taskId = req.params.taskId;
    const updatedTask = req.body;
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index !== -1) {
        tasks[index] = updatedTask;
        res.status(200).json(updatedTask);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Delete a task by ID
const deleteTaskById = (req, res) => {
    const taskId = req.params.taskId;
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
};
