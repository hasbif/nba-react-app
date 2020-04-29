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
        {/* <nav >
        <ul style={{
          listStyle: "none",
        }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/player/:id"><Details /></Route>
          <Route path="/favourites"><MyPlayers /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
