import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonList from "./Components/PokemonList"
import TypesList from "./Components/TypesList"

class App extends Component {
  render() {
    return (
        <Router>
        <div>

          <h2>Pokedex</h2>

          <Switch>
              <Route exact path='/' component={PokemonList} />
              <Route path='/types' component={TypesList} />
          </Switch>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Pokemon List </Link></li>
            <li><Link to={'/types'} className="nav-link"> Types List </Link></li>
          </ul>
          </nav>
          <hr />

          
        </div>
      </Router>
    );
  }
}

export default App;