import React, { Component } from "react";
import SingUp from "./signup";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    
  };

  handleRegister = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    const { username } = this.state;
    return (
      <React.Fragment>
        <SingUp onChangeName={e =>{this.setState({ [e.target.name]: e.target.value })}} name={username}></SingUp>
        {JSON.stringify(username)}
      </React.Fragment>
    );
  }
}

export default Register;
