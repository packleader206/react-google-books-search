
// Require mongoose
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

// Book Schema
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  googleBookId: {
    type: String,
    required: true
  },
  thumbnail: String,
  link: {
    type: String,
    required: true
  },
  pageCount: String,
  subtitle: String,
  publishedDate: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// Define for export
const Book = mongoose.model('Book', BookSchema);

// Export
module.exports = Book;