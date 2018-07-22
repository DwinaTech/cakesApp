import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FavoriteCakes from './Components /Cakes/FavoriteCakes';
import Home from './Components /Home';
import './App.css';
import EditCake from './Components /Cakes/EditCake';
import AddCake from './Components /Cakes/AddCake';
import DeleteCake from './Components /Cakes/DeleteCake';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route  exact path="/" component={Home} />
          <Route  exact path="/cakes/edit/:data" component={EditCake} />
          <Route  exact path="/cakes/add" component={AddCake} />
          <Route exact path="/cakes/delete/:cakeId" component={DeleteCake} />
          <Route exact path="/favoritecakes/delete/:favoriteCakeId" component={DeleteCake} />
          <Route  exact path="/favoritecakes" component={FavoriteCakes} />
        </div>
      </Router>
    );
  }
}

export default App;
