const router = require("express").Router();
const { addTask, editTask, getTask, getAllTasks } = require("../controllers/task.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { taskValidation, taskUpdateValidation } = require("../utils/validations/task.validation");
const { validate } = require("../middleware/form.validate");

router.post("/add", authMiddleware, taskValidation, validate, addTask);
router.put("/edit/:id", authMiddleware, taskUpdateValidation, validate, editTask);
router.get("/list/:id", authMiddleware, getTask);
router.get("/all", authMiddleware, getAllTasks);

module.exports = router;