const { body } = require("express-validator");

const taskValidation = [
    body("title")
        .notEmpty().withMessage("Title is required")
        .isLength({ min: 8 }).withMessage("Title must have at least 8 characters"),
    body("description")
        .notEmpty().withMessage("Description is required")
        .isLength({ min: 10 }).withMessage("Description must have at least 10 characters"),
        body("date").notEmpty().withMessage("Date is required"),
        body("time").notEmpty().withMessage("Time is required"),
    body("priority").optional().isIn(["low", "medium", "high"]).withMessage("Invalid priority value"),
    body("status").optional().isIn(["Todo", "InProgress", "Completed"]).withMessage("Invalid status value"),

];

const taskUpdateValidation = [
    body("title")
      .notEmpty().withMessage("Title is required")
      .isLength({ min: 8 }).withMessage("Title must have at least 8 characters"),
    body("description")
      .notEmpty().withMessage("Description is required")
      .isLength({ min: 10 }).withMessage("Description must have at least 10 characters"),
      body("date").notEmpty().withMessage("Date is required"),
      body("time").notEmpty().withMessage("Time is required"),
    body("priority").optional().isIn(["low", "medium", "high"]).withMessage("Invalid priority value"),
    body("status").optional().isIn(["Todo", "InProgress", "Completed"]).withMessage("Invalid status value"),
  ];

module.exports = { taskValidation, taskUpdateValidation };