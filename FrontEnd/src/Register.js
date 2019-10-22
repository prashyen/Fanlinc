import React from 'react';
import useForm from './useForm';
import { Copyright, theme, useStyles } from './registerStyle';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Fanlinclogo from './img/fanlinc_logo.png';

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  password_confirmation: "",
  dateOfBirth: "",
  bio: "",
  location: "",
  profilePhotoUrl: ""
};

const addUserURL = "http://localhost:8080/account/addUser";

export default function Register() {
  const { values, handleChange, handleSubmit } = useForm(submit, initialState);

  /**
   * Handles the clicking of the submit button and sends a post request to the url:
   * http://localhost:8080/account/addUser
   */
  function submit() {
    const {
      firstName,
      lastName,
      password,
      password_confirmation,
      username,
      //dateOfBirth, will have to deal with this in future
      bio,
      location,
      profilePhotoUrl
    } = values;

    if (password !== password_confirmation) {
      alert("Passwords don't match");
      return;
    }

    fetch(addUserURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "password": password,
        "username": username,
        "dateOfBirth": "1234", // default value for now
        "bio": bio,
        "location": location,
        "profilePhotoUrl": profilePhotoUrl
      })
    }).then(response => {
      console.log("registration response:", response);
      switch(response.status) {
        case 200:
            alert("Profile Created!");
            break;
        case 409:
          alert("User with that username already exists.");
          break;
        default:
          alert("Something went wrong creating the user.");
      }
    }).catch(err => {
      alert("Error sending the request. ", err);
    });
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid 
        container 
        component="main" 
        className={classes.root} 
        direction="column"
        alignItems="center"
        justify="center"
      >
        <CssBaseline />
        <Grid
          item
          xs={4}
          style={{ textAlign: "center" }}
          component={Paper}
          elevation={0}
          square>
          <div className={classes.paper}>
            <img
              src={Fanlinclogo}
              height="70"
              width="70"
              alt="Fanlinc logo"
            />
            <Typography component="h1" variant="h5">
              Sign Up!
          </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                name="password_confirmation"
                type="password"
                value={values.password_confirmation}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                color="primary"
              >
                Sign Up
            </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
