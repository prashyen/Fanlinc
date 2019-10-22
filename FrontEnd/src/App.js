import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Login';
import LogoutPage from './Logout';
import ResponseForm from './LoginResponse';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/responseForm">
                <ResponseForm />
            </Route>
            <Route path="/logout">
                <LogoutPage/>
            </Route>

          </Switch>
      </Router>
  );
}

export default App;
