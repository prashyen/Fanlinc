/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Feed from './Feed';


export default function Home(props) {
  const { loggedInUser, removeCookie } = props;

  return (
    <div>
      <Header
        loggedInUser={loggedInUser}
        removeCookie={removeCookie}
      />
      <Feed filterParam="Naruto" postsType="feed" />
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
  removeCookie: PropTypes.func.isRequired,
};
