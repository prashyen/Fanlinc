import React, {useState} from 'react';
import './App.css';
import LoginPage from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ExampleLoggedIn from "./ExampleLoggedIn";

export default function App() {
  // declare logged in and logged in user states
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            {
              loggedIn ? <ExampleLoggedIn loggedInUser={loggedInUser}
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
