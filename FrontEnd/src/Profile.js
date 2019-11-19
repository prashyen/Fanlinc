/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ProfileSideBar from './ProfileSideBar';

export default function Profile(props) {
  const { loggedInUser, removeCookie } = props;

  return (
    <div>
      <Header
        loggedInUser={loggedInUser}
        removeCookie={removeCookie}
      />

      <ProfileSideBar
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

Profile.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  removeCookie: PropTypes.func.isRequired,
};
