import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Copyright, theme, useStylesLogin } from './materialUIStyle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fanlinclogo from'./img/fanlinc_logo.png';
import { ThemeProvider } from '@material-ui/core/styles';

export default function LoginPage() {
  const classes = useStylesLogin();
  var username;
  var password;

  function submitForm() {
      fetch("http://localhost:8080/account/validateUser", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
            "username" : username,
            "password": password
        })
      }).then(response => {
              console.log("Login response:", response);
              switch (response.status) {
                case 200:
                  alert("Login Successful");
                  break;
                case 404:
                  alert("User does not exists");
                  break;
                default:
                  alert("Error occurred during login");
              }
            }).catch(err => {
              alert("Error sending the request. ", err);
            });
          }
  function handleEmailChange(e){
    username = (e.target.value)
  }
  function handlePasswordChange(e){
     password = (e.target.value)
   }
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item />
      <Grid item md={4} style={{textAlign: "center"}}component={Paper} elevation={0} square>

        <div className={classes.paper}>
          <img src={Fanlinclogo} height="70" width="70"/>
          <Typography component="h1" variant="h5">
            Fanlinc Login
          </Typography>
          <form className={classes.form} id= "myform" >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleEmailChange}
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
              id="password"
              autoComplete="current-password"
              onChange = {handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
              onClick={() => {submitForm()}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
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
