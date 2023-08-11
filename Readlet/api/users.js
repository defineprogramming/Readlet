const mongodb = require('mongodb');
const bcrypt = require('bcrypt');

const uri = process.env.MONGODB_URI;
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = {
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
};

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db('readlet');
  return { db, users: db.collection('users') };
}

async function getUser(email) {
  const { users } = await connect();
  return users.findOne({ email });
}

async function createUser({ name, email, password, isAdmin = false }) {
  const { users } = await connect();
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { name, email, password: hashedPassword, isAdmin };
  const result = await users.insertOne(user);
  return result.ops[0];
}

async function validatePassword(email, password) {
  const user = await getUser(email);
  if (!user) return false;
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : false;
}

module.exports = {
  UserSchema,
  getUser,
  createUser,
  validatePassword,
};