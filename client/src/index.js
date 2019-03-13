import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import './index.css';

// import * as serviceWorker from './serviceWorker';

// Alert default 
const options = {
  position: 'top center',
  timeout: 3000,
  offset: '30px',
  transition: 'scale'
};

// Wrap app in AlertProvider
class Root extends Component {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App/>
      </AlertProvider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
