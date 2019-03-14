# REACT Google Books Search

## Overview:

Google Books Search is a full stack application that allows users to search and save books using the Google Books API.  This app demonstrates the MERN stack utilizing <a href="https://docs.mongodb.com/manual/installation/">MongoDB</a>, <a href="https://expressjs.com/">Express</a>, <a href="https://reactjs.org/">React</a> & <a href="https://nodejs.org/en/download/">Node JS</a>.  

## Technologies Used:

- MongoDB
- Express
- React
- Node
- Axios
- Mongoose
- HTML
- CSS
- Javascript
- if-env
- prop-types
- react-alert
- react-alert-template-basic
- react-dom
- react-router-dom
- react-scripts
- react-transition-group
- reactjs-popup

## Author:
<strong>Al Young</strong>

<hr>

## [Click for a Live Demo]()

## Local Setup:

To run this application locally, you will need <a href="https://nodejs.org/en/download/">Node JS</a> and <a href="https://docs.mongodb.com/manual/installation/">MongoDB</a> installed on your computer.

<strong>MongoDB Setup:</strong>

Once you have MongoDB installed, you will need to create a database called "googlebooks". To do this, go to your command prompt and start the server by entering the command "mongod".  Then, open up another cmd prompt window and enter the following:

          1. mongo ENTER
          2. use googlebooks ENTER

<strong>Once you have the 'googlebooks' database created, run the following commands at your command prompt:</strong>

           1. git clone https://github.com/packleader206/react-google-books-search.git ENTER
           
           2. cd react-google-books-search ENTER
           
           3. npm install ENTER           
                      
           
## Running the App:

           1.  Using your cmd prompt, navigate to the 'react-google-books-search' directory that you cloned in the previous step.
           
           2.  Run the command 'npm start' to start the app.



## Using the App:

Users can access Google Book's API and search books by title. Each returned result will display a brief summary of the book, an image if available, and a link to view the entire Google Books entry.  Users can save books of their choosing which can be accessed later on the 'Saved Books' page, and can manage this list by deleting titles as desired.

## Screenshots:

<img src="https://packleader206.github.io/react-google-books-search/client/public/img/search.png" alt="Home Page Screenshot">
 
 <br>
 
<img src="https://packleader206.github.io/react-google-books-search/client/public/img/results.png" alt="Seach Results Page Screenshot">
 
 <br>
 
<img src="https://packleader206.github.io/react-google-books-search/client/public/img/savedbooks.png" alt="Saved Books Page Screenshot">
