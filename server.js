const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve static assets (for Heroku Deployment)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define api routes
app.use(routes);

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`API Server now on port: ${PORT}`)
});