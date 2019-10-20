import React, { Component } from 'react';
import './App.css';

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
    // const {
    //   email,
    //   password,
    //   password_confirmation,
    //   name
    // } = this.state;

    // send a post request to the api and handle the logic
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input 
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <input 
            type="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button> 
        </form>
      </div>
    )
  }
}

export default Register;