import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FavoriteCakes from './Components /Cakes/FavoriteCakes';
import Home from './Components /Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route  exact path="/" component={Home} />
          <Route  exact path="/favoritecakes" component={FavoriteCakes} />
        </div>
      </Router>
    );
  }
}

export default App;
