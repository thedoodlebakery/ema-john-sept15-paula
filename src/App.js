import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Shop from './Shop/Shop';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Review from './Review/Review';


class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Header></Header>
        <Router>
          <div>
            
            <Route exact path="/" component={Shop} />
            <Route path="/shop" component={Shop} />
            <Route path="/review" component={Review} />

          </div>
        </Router>
        <p><small>copyright 2018</small></p>
        
      </div>
    );
  }
}

export default App;
