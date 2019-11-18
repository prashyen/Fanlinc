/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Feed from './Feed';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
}));

export default function ProfileSideBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [fandoms, setFandoms] = useState([]);
  const [picture, setPicture] = useState('');
  const [location, setlocation] = useState("");
  const [bio, setbio] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const { loggedInUser } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Need to get pic, location, and bio. Preferably first and last name too
  const getUserDetailsAPI = `http://localhost:8080/account/userDetails?username=${loggedInUser}`;

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
        <Grid item sm={2} container direction="column" style={{ backgroundColor: '#213972', color: 'white', height: '80vw'}}>
          <Typography variant="body" component="h2" align="center" gutterBottom>
               <img src={""+ picture +""} border="0" width="150px" height="150px" style={{borderRadius: '50%'}}/>
               {/*<img src="https://i.ibb.co/5MT1vZg/OnePiece.png" alt="OnePiece" border="0" width="150px" height="150px" style={{borderRadius: '50%'}}/>*/}
          </Typography>
          <Typography variant="body" component="h2" align="center" gutterBottom>
              {loggedInUser}
          </Typography>
          <Typography variant="body" component="h2" align="center" gutterBottom>
              {fName} {lName}
          </Typography>
          <Typography variant="body" component="h3" align="center" style={{display: "inline-block"}} gutterButtom>
              {location}
          </Typography>
          <Typography variant="body" component="h2" align="center" fontStyle="italic" gutterButtom>
              Bio: {bio}
          </Typography>
        </Grid>
        {/* Sidebar End */}

        {/* Main Feed Start*/}
        <Grid item sm={9} container direction="column" alignItems="center" alignContent="space-around" style={{ backgroundColor: 'white', minheight: '80vw' }}>
            <Feed filterParam={loggedInUser} loggedInUser={loggedInUser} postsType="user"/>
        </Grid>
        {/* Feed End*/}
      </Grid>
    </>
  );
}

ProfileSideBar.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
};
