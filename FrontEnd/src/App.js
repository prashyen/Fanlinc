import React from 'react';
import './App.css';
import Login from './Login.js';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
