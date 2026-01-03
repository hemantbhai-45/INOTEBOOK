const express = require('express');
const connectToMongo = require('./db'); // Make sure this returns a Promise and connects to MongoDB
var cors = require('cors')
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json()); // Middleware to parse JSON

// Start the server only after connecting to MongoDB
const startServer = async () => {
  try {
    await connectToMongo(); // Wait for MongoDB connection

    // Mount routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));

    // Start listening on port
    app.listen(port, () => {
      console.log(`Inotebook backend listening  at http://localhost:${port}`);
    });
    app.use(express.json());


  } catch (error) {
    console.error('❌ Failed to connect to MongoDB. Server not started.');
    console.error(error); // Print the actual error for debugging
  }
};

startServer();
