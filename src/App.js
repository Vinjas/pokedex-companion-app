import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonList from "./Containers/PokemonList"
import TypesList from "./Containers/TypesList"
import Moves from "./Containers/Moves"
import PokemonTemplate from "./Components/Pokemon"

import NavBar from "./navBar"

class App extends Component {
  render() {
    return (
        <Router>
        <div>
            <h1 className="primary-heading">Pokedex App</h1>
            <Switch>
                <Route exact path='/' component={PokemonList} />
                <Route path='/types' component={TypesList} />
                <Route path='/moves' component={Moves} />
                <Route path='/pokemon' component={PokemonTemplate} />
            </Switch>

            <NavBar />   
        </div>
      </Router>
    );
  }
}

export default App;