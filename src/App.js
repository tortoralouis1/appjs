import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home';
import NotFound404 from './404';
import Montres from './Montres';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>

            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Montres">Montres</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/" Component={Home} />
              <Route path="/Montres" Component={Montres} />
              <Route path="*" Component={NotFound404} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;