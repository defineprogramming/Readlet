```javascript
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req, res) => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(process.env.DB_NAME);
  const books = await db.collection('books').find().toArray();
  client.close();
  res.json(books);
});

handler.post(async (req, res) => {
  const { title, author, file } = req.body;
  const client = await MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(process.env.DB_NAME);
  const result = await db.collection('books').insertOne({ title, author, file });
  client.close();
  res.json(result.ops[0]);
});

export default handler;
```