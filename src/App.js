//REACT-ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//CONTAINERS
import PokemonList from "./Containers/PokemonList"
import Home from "./Containers/Home"
import SearchPage from "./Containers/SearchResult"
//COMPONENTS
import Pokemon from "./Containers/Pokemon"

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
                  <Route path='/pokedex/:id' component={Pokemon} />
                  <Route exact path='/search' component={SearchPage} />



                  <Route exact path='/types' component={TypesList} />
                  <Route exact path='/moves' component={Moves} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }

export default App;