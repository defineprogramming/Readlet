import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../api/users';

const SECRET_KEY = process.env.SECRET_KEY;

export const loginUser = async (username, password) => {
  const user = await UserSchema.findOne({ username });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user._id }, SECRET_KEY);

  return { user, token };
};

export const registerUser = async (username, password) => {
  const existingUser = await UserSchema.findOne({ username });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new UserSchema({ username, password: hashedPassword });

  await user.save();

  const token = jwt.sign({ id: user._id }, SECRET_KEY);

  return { user, token };
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};