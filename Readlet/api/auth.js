const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./users');

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('LOGIN_FAILURE');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('LOGIN_FAILURE');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return { user, token };
};

const registerUser = async (username, password) => {
  const userExists = await User.findOne({ username });
  if (userExists) {
    throw new Error('REGISTER_FAILURE');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return { user, token };
};

module.exports = {
  loginUser,
  registerUser,
};