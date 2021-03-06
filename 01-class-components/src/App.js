import React from 'react';
// import logo from './logo.svg';
import Home from './pages/Home'
import Details from './pages/Details'
import MyPlayers from './pages/MyPlayers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'




function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/player/:playerId"><Details /></Route>
          <Route path="/favourites"><MyPlayers /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
