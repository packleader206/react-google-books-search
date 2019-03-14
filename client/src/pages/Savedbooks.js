import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import BookCard from '../components/BookCard';

class Savedbooks extends Component {
  state = {books: []};

  // Method to Query the API/Database to GET all the books in the database.
  loadSavedbooks = () => {
    API.getSavedbooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadSavedbooks())
      .catch(err => console.log(err))
  };

  // Once the SavedBooks Component mounts it runs the 'loadSavedbooks' method.
  componentDidMount() {
    this.loadSavedbooks()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="Saved Books"
          instructions="Click 'View Book' for more detail or 'Delete Book' to remove from your saved list."
        />
        <BookCard
          books={this.state.books}
          buttonAction={this.deleteBook}
          buttonType="btn btn-danger mt-2"
          buttonText="Delete Book"
        />
      </div>
    )
  }
}

export default Savedbooks;