import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from './img/loginBackground.jpg';
import Fanlinclogo from'./img/fanlinc_logo.png';
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
var request =require('request');


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Fanlinc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: orange[900],
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    background: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'

  },
  image: {
    background: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  palette: {
      primary: 'orange',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

  },
}));


export default function LoginPage() {
  const classes = useStyles();
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
      }).then( (response) => {
         console.log(response)
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
