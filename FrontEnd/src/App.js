import React from 'react';
import './App.css';
import LoginPage from './Login';
import LogoutPage from './Logout';
import Register from './Register';
import ResponseForm from './LoginResponse';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/responseForm">
          <ResponseForm />
        </Route>
        <Route path="/logout">
          <LogoutPage />
        </Route>
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
