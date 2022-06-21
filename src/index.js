import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import Montres from './Montres';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Montres">Montres</Link></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/Montres"><Montres /></Route>
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
