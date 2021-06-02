import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonList from "./Containers/PokemonList"
import TypesList from "./Containers/TypesList"
import Moves from "./Containers/Moves"
import NavBar from "./navBar"
import PokemonTemplate from "./Components/Pokemon"

import "./CSS/App.css"

class App extends Component {
  render() {
    return (
        <Router>
        <div>
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