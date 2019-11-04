/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Post from './Post';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Home(props) {
  const { loggedInUser, setCookie } = props;

  return (
    <div>
      <Header
        loggedInUser={loggedInUser}
        setCookie={setCookie}
      />
      <Post 
        loggedInUser={loggedInUser}
      />
      {/*
      Add future routes to feed and profile here like this:
      <Router>
        <Switch>
          <Route exact path={`${props.match.path}/feed`} component={} />
        </Switch>
      </Router>
      */}
    </div>
  );
}

Home.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  setCookie: PropTypes.func.isRequired,
};
