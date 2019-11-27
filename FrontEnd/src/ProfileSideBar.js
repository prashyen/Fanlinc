/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Feed from './Feed';

export default function ProfileSideBar(props) {
  const [picture, setPicture] = useState('');
  const [location, setlocation] = useState('');
  const [bio, setbio] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const { loggedInUser } = props;
  const { username } = useParams();

  // Need to get pic, location, and bio. Preferably first and last name too
  const getUserDetailsAPI = `http://localhost:8080/account/userDetails?username=${username}`;

  useEffect(() => {
    fetch(getUserDetailsAPI, {
      method: 'get',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 404:
          throw new Error('Username not found');
        default:
          throw new Error('Something went wrong when retrieving user details');
      }
    })
      .then((data) => {
        setPicture(data.profilePhotoUrl);
        setlocation(data.location);
        setbio(data.bio);
        setfName(data.firstName);
        setlName(data.lastName);
      }).catch((err) => {
        alert(err);
      });
  }, [getUserDetailsAPI]);

  return (
    <>
      <CssBaseline />

      {/* Feed Body */}
      <Grid container>

        {/* Sidebar Start */}
        {/* Grid has 12 columns width - sidebar:feed = 3:9 */}
        <Grid item sm={2} container direction="column" style={{ backgroundColor: '#213972', color: 'white', height: 'auto' }}>
          <div align="center">
            <img
              src={picture}
              border="0"
              width="150px"
              height="150px"
              style={{ borderRadius: '50%', paddingTop: '10px' }}
              alt="User profile"
            />
          </div>
          <Typography variant="overline" component="h2" align="center">
            {username}
          </Typography>
          <Typography variant="h6" component="h3" align="center">
            {fName}
            {' '}
            {lName}
          </Typography>
          <Typography variant="caption" component="span" align="center" style={{ display: 'inline-block' }}>
            {location}
          </Typography>
          <Typography variant="body1" component="p" align="center" fontStyle="italic">
              Bio:
            {' '}
            {bio}
          </Typography>
        </Grid>
        {/* Sidebar End */}

        {/* Main Feed Start */}
        <Grid item sm={10} container direction="column" alignItems="center" alignContent="space-around" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          <Feed filterParam={username} loggedInUser={loggedInUser} postsType="user" />
        </Grid>
        {/* Feed End */}
      </Grid>
    </>
  );
}

ProfileSideBar.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
};
