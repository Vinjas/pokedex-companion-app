//REACT-ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//CONTAINERS
import PokemonList from "./Containers/PokemonList"
import Home from "./Containers/Home"
import FilterPokemon from "./Containers/FilterPokemon"
//COMPONENTS
import Pokemon from "./Components/Pokemon"

import TypesList from "./Containers/TypesList"
import Moves from "./Containers/Moves"

const App = () => {
    return (
      <div className="App">
        <Router>
          <div>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/pokedex' component={PokemonList} />
                  <Route path='/filter' component={FilterPokemon} />
                  <Route path='/pokedex/:id' component={Pokemon} />

                  <Route path='/types' component={TypesList} />
                  <Route path='/moves' component={Moves} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }

export default App;