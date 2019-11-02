import React, {useState} from 'react';
import useForm from './useForm';
import {Copyright, theme, useStyles} from './loginStyle';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from '@material-ui/core/styles';
import Fanlinclogo from './img/fanlinc_logo.png';
import 'date-fns';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import Link from "@material-ui/core/Link";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  password_confirmation: "",
  bio: "",
  location: "",
  profilePhotoUrl: ""
};

const addUserURL = "http://localhost:8080/account/addUser";

export default function Register(props) {

  // use hook to store the states
  const {values, handleChange, handleSubmit} = useForm(submit, initialState);
  const [dateOfBirth, setSelectedDate] = useState(new Date('2019-09-31'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

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
        "dateOfBirth": moment(dateOfBirth).format("YYYY-MM-DD"),
        "bio": bio,
        "location": location,
        "profilePhotoUrl": profilePhotoUrl
      })
    }).then(response => {
      console.log("Registration response: ", response);
      switch (response.status) {
        case 200:
          console.log("Profile created");
          props.setCookie('loggedInUser', username);
          return Promise.resolve();
        case 409:
          return Promise.reject("User with that username already exists");
        default:
          return Promise.reject("Something went wrong creating the user");
      }
    }).catch(err => {
      alert(err);
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
          <CssBaseline/>
          <Grid
              item
              xs={4}
              style={{textAlign: "center"}}
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                      disableToolbar
                      variant="outlined"
                      fullWidth
                      format="MM/dd/yyyy"
                      margin="normal"
                      name="dateOfBirth"
                      label="Date of Birth"
                      value={dateOfBirth}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      required
                  />
                </MuiPickersUtilsProvider>
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
                    label="Username"
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    label="Location / City"
                    name="location"
                    placeholder="Location / City"
                    multiline
                    value={values.location}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Bio (Optional)"
                    name="bio"
                    placeholder="Bio"
                    multiline
                    value={values.bio}
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
                    <Link href="/login" variant="body2">
                      {"Have an account? Login"}
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
