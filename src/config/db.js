// app.js
const { connectDB, closeConnection } = require('./db.js');

const runApp = async () => {
  try {
    // Connect to the MongoDB database
    const db = await connectDB();

    // Access a collection
    const usersCollection = db.collection('users'); // Replace 'users' with your collection name

    // Example query: Find all users
    const users = await usersCollection.find().toArray();
    console.log('Users:', users);

    // Close the connection
    await closeConnection();
  } catch (err) {
    console.error('Error:', err);
  }
};

runApp();
