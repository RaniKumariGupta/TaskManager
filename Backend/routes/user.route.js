const router = require("express").Router();

const { register, login } = require("../controllers/user.controller");
const { validate } = require("../middleware/form.validate");
const { registerValidation, loginValidation } = require("../utils/validations/user.validation");

router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);

module.exports = router;