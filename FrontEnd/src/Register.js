import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Register extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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
    console.log("handle submit", event)
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-wrapper col-sm-6 text-center shadow p-3 mb-5 bg-white rounded">
        <h3>Create Account</h3>
        <Form onSubmit={this.handleSubmit} className="form-horizontal">
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
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
          <Form.Group>
            <Form.Control 
              type="name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button type="submit">Register</Button> 
        </Form>
      </div>
    )
  }
}

export default Register;