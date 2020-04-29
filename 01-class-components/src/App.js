import React from 'react';
// import logo from './logo.svg';
import Home from './pages/Home'
import Details from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
