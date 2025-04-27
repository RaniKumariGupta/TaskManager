const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const checkUserExists = async (email, fullName) => {
  return await User.findOne({ $or: [{ email }, { fullName }] });
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const createUser = async ({ fullName, email, password }) => {
  const newUser = new User({ fullName, email, password });
  return await newUser.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const comparePassword = async (inputPassword, storedHashedPassword) => {
  return await bcrypt.compare(inputPassword, storedHashedPassword);
};

module.exports = {
  checkUserExists,
  hashPassword,
  createUser,
  findUserByEmail,
  comparePassword,
};

