import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import BookCard from '../components/BookCard';


const formatBookResults = googleApiResults => {
  const bookArray = [];

  googleApiResults.map(book => {

    const formattedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors
        ? book.volumeInfo.authors
        : ['No Author Listed.'],
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : 'No Description Listed.',
      googleBookId: book.id,
      thumbnail: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png',
      link: book.volumeInfo.canonicalVolumeLink,
      pageCount: book.volumeInfo.pageCount,
      subtitle: book.volumeInfo.subtitle,
      publishedDate: book.volumeInfo.publishedDate
    };

    bookArray.push(formattedBook);
    return bookArray
  });
  return bookArray;
};

class Search extends Component {
  state = {
    search: '',
    results: [],
    error: ''
  };

  // Method for saving a particular book to the database.
  saveBook = event => {

    const chosenBook = this.state.results.find(book => book.googleBookId === event.target.id);

    const newSave = {
      title: chosenBook.title,
      authors: chosenBook.authors,
      description: chosenBook.description,
      googleBookId: chosenBook.googleBookId,
      thumbnail: chosenBook.thumbnail,
      link: chosenBook.link,
      pageCount: chosenBook.pageCount,
      subtitle: chosenBook.subtitle,
      publishedDate: chosenBook.publishedDate
    };

    API.saveBook(newSave)
      .then(res => {
        console.log(res.status, res.statusText);
        this.props.alert.show('Book Saved!', {type: 'success'})
      })
      .catch(err => {
        console.log(err);
        this.props.alert.show('Error, please try again', {
          type: 'error',
          timeout: 5000
        })
      })
  };

  // Method handling the change of the input field.
  handleInputChange = event => {
    this.setState({search: event.target.value})
  };

  // Method handling the submission of the Search form, makes a call to retrieve the results of the search
  // from Google Books API.
  handleFormSubmit = event => {
    event.preventDefault();

    API.getGoogleBooks(this.state.search)
      .then(res => {
        const formattedArray = formatBookResults(res.data.items);
        this.setState({results: formattedArray});
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">

        <Jumbotron
          title="Search Google Books"
          instructions="Search the Google Books API. Save the books you're interested in!"
        />
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <BookCard
          books={this.state.results}
          buttonAction={this.saveBook}
          buttonType="btn btn-success mt-2"
          buttonText="Save Book"
        />
      </div>
    );
  }
}


export default withAlert(Search);