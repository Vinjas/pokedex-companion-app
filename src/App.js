//REACT-ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//CONTAINERS
import PokemonList from "./Containers/PokemonList"
import Home from "./Containers/Home"
//COMPONENTS
import Pokemon from "./Components/Pokemon"

import TypesList from "./Containers/TypesList"
import Moves from "./Containers/Moves"

import NavBar from "./navBar"

const App = () => {
    return (
      <div className="App">
        <Router>
          <div>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/pokemon' component={PokemonList} />
                  <Route path='/pokemon/:id' component={Pokemon} />

                  <Route path='/types' component={TypesList} />
                  <Route path='/moves' component={Moves} />
              </Switch>

              <NavBar />   
          </div>
        </Router>
      </div>
    );
  }

export default App;