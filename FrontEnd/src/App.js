import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from './Home';
import {useCookies} from "react-cookie";

export default function App() {
  // declare loggedInUser cookie
  const [cookies, setCookie] = useCookies(["loggedInUser"]);

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            {
              cookies.loggedInUser !== "null" ?
                  // if loggedInUser is not null, render homepage and pass
                  // loggedInUser as well as method to update cookies
                  <Home
                      loggedInUser={cookies.loggedInUser}
                      setCookie={setCookie}
                  /> :
                  // otherwise, redirect to login page
                  <Redirect to="/login"/>
            }
          </Route>
          <Route exact path="/login">
            {
              // if loggedInUser is not null, redirect to homepage
              cookies.loggedInUser !== "null" ? <Redirect to="/"/> :
                  // otherwise, route user to login page
                  <Login setCookie={setCookie}/>
            }
          </Route>
          <Route exact path="/register">
            {
              // if loggedInUser is not null, redirect to homepage
              cookies.loggedInUser !== "null" ? <Redirect to="/"/> :
                  // otherwise, route user to registration page
                  <Register setCookie={setCookie}/>
            }
          </Route>
        </Switch>
      </Router>
  );
}
