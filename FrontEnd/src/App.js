import React from 'react';
import './App.css';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
