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

export default function Register() {
  const { values, handleChange, handleSubmit } = useForm(submit, initialState);

  function submit() {
    console.log("sumitted form");
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item />
        <Grid
          item
          md={3}
          style={{ textAlign: "center" }}
          component={Paper}
          elevation={0}
          square
        />
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
    </ThemeProvider>
  );
}
