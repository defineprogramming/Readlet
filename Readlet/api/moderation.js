import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const ModerationSchema = {
  _id: String,
  bookId: String,
  reportId: String,
  status: String,
  actionTaken: String,
  actionTakenBy: String,
  date: Date
};

async function getModerationItems() {
  try {
    await client.connect();
    const collection = client.db("Readlet").collection("Moderation");
    const moderationItems = await collection.find({}).toArray();
    return moderationItems;
  } finally {
    await client.close();
  }
}

async function addModerationItem(item) {
  try {
    await client.connect();
    const collection = client.db("Readlet").collection("Moderation");
    const result = await collection.insertOne(item);
    return result;
  } finally {
    await client.close();
  }
}

async function updateModerationItem(id, update) {
  try {
    await client.connect();
    const collection = client.db("Readlet").collection("Moderation");
    const result = await collection.updateOne({ _id: id }, { $set: update });
    return result;
  } finally {
    await client.close();
  }
}

export { getModerationItems, addModerationItem, updateModerationItem, ModerationSchema };
