// server.js

const express = require('express');
const { connectDB } = require('./db.js');  // Assuming the db.js file is in the same directory
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example route for fetching users
app.get('/users', async (req, res) => {
  try {
    // Access the users collection (replace 'User' with your actual model)
    const User = mongoose.model('User', new mongoose.Schema({ name: String }));
    const users = await User.find(); // Find all users
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Error fetching users');
  }
});

// Example route for adding a user
app.post('/users', async (req, res) => {
  try {
    const { name } = req.body;  // Assume the request body contains a 'name' field
    const User = mongoose.model('User', new mongoose.Schema({ name: String }));
    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Error creating user');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
