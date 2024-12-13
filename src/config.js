// Import the required modules
const mongoose = require('mongoose');

// Your MongoDB Atlas connection string
const uri = 'mongodb+srv://erharsh237:Harsh123@cluster0.py8rq.mongodb.net/sample_mflix?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the schema for your collection
const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Test = mongoose.model('Test', LoginSchema);

// Export the model so you can use it in other files
module.exports = Test;
