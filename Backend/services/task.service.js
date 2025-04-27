const Task = require("../models/task.model");

const createTask = async (title, description, date, time, priority, status, user) => {
    const newTask = new Task({ title, description, date, time, priority, status });
    await newTask.save();

    user.tasks.push(newTask._id);
    await user.save();

    return newTask;
};

const updateTaskById = async (id, updateData) => {
    return await Task.findByIdAndUpdate(id, updateData, { new: true });
  };

  const findTaskById = async (id) => {
    return await Task.findById(id);
  };
  
  const getAllTasks = async () => {
    return await Task.find({});
};

const getFilteredTasks = async (filters) => {
  return await Task.find(filters); 
};

module.exports = { createTask, updateTaskById, findTaskById, getAllTasks, getFilteredTasks };
