import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      password_confirmation: "",
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Handles the clicking of the submit button and sends a post request to the url:
   * http://localhost:8080/account/addUser
   */
  handleSubmit(event) {
    event.preventDefault();

    const {
      firstName,
      lastName,
      password,
      password_confirmation,
      username
    } = this.state;

    if (password !== password_confirmation) {
      alert("Passwords don't match");
      return;
    }

    fetch('http://localhost:8080/account/addUser', {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "password": password,
        "password_confirmation": password_confirmation,
        "username": username,
        "dateOfBirth": "",
        "bio": "",
        "location": "",
        "profilePhotoUrl": ""
      })
    }).then(response => {
      console.log("registration response:", response);
      if (response.status === 200) {
        // go to login view
      } else {
        alert("Invalid Information");
      }
    }).catch(err => {
      alert("Error sending the request. ", err);
    });
  }

  render() {
    return (
      <div className={
        "form-wrapper " +
        "col-sm-6 " +
        "text-center " +
        "shadow " +
        "p-3 " +
        "mb-5 " +
        "bg-white " +
        "rounded"}>
        <h3>Sign Up</h3>
        <Form onSubmit={this.handleSubmit} className="form-horizontal">
          <Row>
            <Col>
              <Form.Group>
                <TextField
                  id="standard-name"
                  label="First Name"
                  name="firstName"
                  margin="normal"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <TextField
                  id="standard-name"
                  label="Last Name"
                  name="lastName"
                  margin="normal"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <TextField
                  id="standard-name"
                  label="User Name"
                  name="username"
                  margin="normal"
                  value={this.state.username}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  name="password"
                  margin="normal"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <TextField
                  id="standard-password-input"
                  label="Password Confirmation"
                  name="password_confirmation"
                  margin="normal"
                  type="password"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Col>
          </Row>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
    )
  }
}

export default Register;