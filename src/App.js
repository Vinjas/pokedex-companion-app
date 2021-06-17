//REACT-ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//CONTAINERS
import PokemonList from "./Containers/PokemonList"
import Home from "./Containers/Home"
import SearchPage from "./Containers/SearchResult"
import SearchPage2 from "./Containers/SearchResult2"
import ItemList from "./Containers/ItemList";
import ItemsResult from "./Containers/ItemResult";
import ItemsResult2 from "./Containers/ItemResult2";

//COMPONENTS
import Pokemon from "./Containers/Pokemon"

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
                  <Route exact path='/search2' component={SearchPage2} />

                  <Route exact path='/searchitem' component={ItemsResult} />       
                  <Route exact path='/searchitem2' component={ItemsResult2} />       
                  <Route exact path='/itemlist' component={ItemList} />

                  <Route exact path='/types' component={"TypesList"} />
                  <Route exact path='/moves' component={"TypesList"} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }

export default App;