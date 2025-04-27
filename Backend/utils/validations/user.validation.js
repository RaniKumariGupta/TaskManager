const { body } = require("express-validator");

const registerValidation = [
  body("fullName")
    .notEmpty().withMessage("Full name is required")
    .isLength({ min: 8 }).withMessage("Full name must have at least 8 characters"),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must have at least 6 characters"),
];

const loginValidation = [
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must have at least 6 characters"),
];

module.exports = {
  registerValidation,
  loginValidation,
};
