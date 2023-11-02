// controllers/taskController.js

// In-memory task data
let tasks = [{id: Date.now(), title: 'todo', description: 'new task'}];

// Create a new task with ID assigned by the current timestamp
const createTask = (req, res) => {
    const newTask = req.body;
    newTask.id = Date.now(); // Assign the ID using the current timestamp
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update a task by ID using the ID from the URL
const updateTaskById = (req, res) => {
    const id = req.params.id; // Get the task ID from the URL
    const updatedTask = req.body;
    const index = tasks.findIndex((t) => t.id == id);

    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        res.status(200).json(tasks[index]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Read all tasks
const getAllTasks = (req, res) => {
    res.status(200).json([...tasks]);
};

// Read a specific task by ID
const getTaskById = (req, res) => {
    const id = req.params.id;
    const task = tasks.find((t) => t.id == id);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Delete a task by ID
const deleteTaskById = (req, res) => {
    const id = req.params.id;
    const index = tasks.findIndex((t) => t.id == id);

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
