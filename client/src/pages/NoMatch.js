import React from 'react'
import Jumbotron from '../components/Jumbotron';

function NoMatch() {
  return (
    <div className="container">
      <Jumbotron
        image="https://upload.wikimedia.org/wikipedia/commons/a/ae/No-books.jpg"
        title="404"
        lead="Page Not Found"
        instructions="Sorry, no match. Please try again."
      />
    </div>
  )
}

export default NoMatch;