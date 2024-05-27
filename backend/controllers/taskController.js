const Task = require('../models/Task');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description, user: req.user._id });
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    next(error);
  }
};

// Other CRUD operations can be implemented similarly

module.exports = {
  getAllTasks,
  createTask,
};
