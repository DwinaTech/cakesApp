import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components /Home';
import './App.css';
import AddCake from './Components /Cakes/AddCake';
import DeleteCake from './Components /Cakes/DeleteCake';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route  exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
