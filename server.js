const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('public', 'ejs');

// Set the directory for EJS templates
app.set('public', path.join(__dirname, 'Eventlist'));

// Define a route
app.get('/', (req, res) => {
  res.render('Eventlist', { title: 'Home' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
