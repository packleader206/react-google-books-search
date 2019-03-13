import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Search from './pages/Search';
import Savedbooks from './pages/Savedbooks';
import NoMatch from './pages/NoMatch'


const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/savedbooks" component={Savedbooks}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);

export default App;
