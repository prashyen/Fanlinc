import React, {useState} from 'react';
import './App.css';
import LoginPage from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from './Home';

export default function App() {
  // declare logged in and logged in user states
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            {
              loggedIn ? <Home loggedInUser={loggedInUser}
                               setLoggedIn={setLoggedIn}
                               setLoggedInUser={setLoggedInUser}/> :
                  <Redirect to="/login"/>
            }
          </Route>
          <Route exact path="/login">
            {
              loggedIn ? <Redirect to="/"/> :
                  <LoginPage setLoggedIn={setLoggedIn}
                             setLoggedInUser={setLoggedInUser}/>
            }
          </Route>
          <Route exact path="/register">
            {
              loggedIn ? <Redirect to="/"/> :
                  <Register setLoggedIn={setLoggedIn}
                            setLoggedInUser={setLoggedInUser}/>
            }
          </Route>
        </Switch>
      </Router>
  );
}
