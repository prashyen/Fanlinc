/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Feed from './Feed'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Home(props) {
  const { loggedInUser, setCookie } = props;

  return (
    <div>
      <Header
        loggedInUser={loggedInUser}
        setCookie={setCookie}
      />
       <Feed filterParam="Naruto" postsType="feed" />
    </div>
  );
}

Home.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  setCookie: PropTypes.func.isRequired,
};
