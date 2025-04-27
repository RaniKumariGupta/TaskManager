const taskService = require("../services/task.service");

const addTask = async (req, res) => {
    try {
        const { title, description, date, time, priority, status } = req.body;
        const user = req.user;

        const task = await taskService.createTask(title, description, date, time, priority, status, user);
        return res.status(200).json({ success: "Task added", task });
    } catch (error) {
        console.error("Add Task Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const editTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, date, time, priority, status } = req.body;
  
      await taskService.updateTaskById(id, { title, description, date, time, priority, status });
  
      return res.status(200).json({ success: "Task updated" });
    } catch (error) {
      console.error("Edit Task Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  const getTask = async (req, res) => {
    try {
      const { id } = req.params;
      const taskDetails = await taskService.findTaskById(id);
  
      if (!taskDetails) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      return res.status(200).json({ taskDetails });
    } catch (error) {
      console.error("Get Task Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

const getAllTasks = async (req, res) => {
  try {
      const { status, priority } = req.query; 
      
      const filters = {};

      if (status) filters.status = status;
      if (priority) filters.priority = priority;

      const tasks = await taskService.getFilteredTasks(filters);
      return res.status(200).json({ tasks });
  } catch (error) {
      console.error("Get All Tasks Error:", error);
      return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { addTask, editTask, getTask, getAllTasks };