import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Register extends Component{
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

  handleSubmit(event) {
    event.preventDefault();
    const {firstName, lastName, password, password_confirmation, username} = this.state;
    fetch('http://localhost:7474/addUser', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
        "firstName": firstName,
        "lastName": lastName,
        "password": password,
        "password_confirmation": password_confirmation,
        "username": username,
        "dateOfBirth": "",
        "bio": "",
        "location": "",
        "profilePhotoUrl": ""
      }
    }).then(response => {
      console.log("registration response:", response);
      if(response.status === 200) {
        // go to login view
      }
    }).catch(err => {
      console.log("error: ", err);
    });
  }

  render() {
    return (
      <div className="form-wrapper col-sm-6 text-center shadow p-3 mb-5 bg-white rounded">
        <h3>Register</h3>
        <Form onSubmit={this.handleSubmit} className="form-horizontal"> 
          <Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  type="name"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control 
                  type="name"
                  name="Lastname"
                  placeholder="Last Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  type="name"
                  name="username"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit">Register</Button> 
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default Register;