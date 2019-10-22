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

export default class LoginResponse extends React.Component {
       submitForm = () => {
        console.log(this.props);
//       fetch("/account/validateUser?username="+this.props.name + "&password="+this.props.password)
//            .then(res=>res.text())
//            .then(res=> this.setState({apiResponse :res}))
//            .catch(err=> err);
       }
       componentDidMount() {
          this.submitForm();
       }
  render(){
    return (
        <div/>
    );
  }
}