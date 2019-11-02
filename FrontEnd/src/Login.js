import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Copyright, theme, useStyles} from './loginStyle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fanlinclogo from './img/fanlinc_logo.png';
import {ThemeProvider} from '@material-ui/core/styles';
import useForm from "./useForm";
import Link from "@material-ui/core/Link";

const initialState = {
  username: "",
  password: ""
};

const validateUserURL = "http://localhost:8080/account/validateUser";

export default function Login(props) {

  const {values, handleChange, handleSubmit} = useForm(submit, initialState);

  /**
   * Handles the clicking of the submit button and sends a post request to the url:
   * http://localhost:8080/account/validateUser
   */
  function submit() {
    const {
      username,
      password
    } = values;

    fetch(validateUserURL, {
      method: "post",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    }).then(response => {
      console.log("Login response: ", response);
      switch (response.status) {
        case 200:
          return response.json();
        case 404:
          return Promise.reject("User does not exist");
        default:
          return Promise.reject("Error occurred during login")
      }
    }).then(data => {
      console.log("Response body: ", data);
      if (data.accepted) {
        console.log("User authenticated");
        props.setCookie("loggedInUser", data.username, {path: "/"});
        return Promise.resolve();
      }
      return Promise.reject("Incorrect password");
    })
    .catch(err => {
      alert(err);
    });
  }

  const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline/>
          <Grid item/>
          <Grid item md={4} style={{textAlign: "center"}} component={Paper}
                elevation={0} square>

            <div className={classes.paper}>
              <img src={Fanlinclogo} height="70" width="70" alt="Fanlinc Logo"/>
              <Typography component="h1" variant="h5">
                Fanlinc Login
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    name="username"
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    color="primary"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright/>
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}
