require('dotenv').config();
const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
  const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(process.env.DB_NAME);
    const collection = database.collection('nome-da-colecao');

    // Resto do código...
  } finally {
    await client.close();
  }
}

connectToMongoDB().catch(console.error);