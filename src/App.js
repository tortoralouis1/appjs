import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
            <section>
              <h1> react-starter </h1>
              <h2> (React version 16.13.1) </h2>
            </section>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Montres">About</Link></li>
                <li><Link to="*">NotFound</Link></li>
              </ul>
            </nav>
          </header>
          <main>
              <Route exact path="/" component={Home} />
              <Route path="/Montres" component={Montres} />
              <Route exact path="*" component={NotFound404} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;