import React, { Component } from "react";
import { SignUp } from "./signup";

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
    
    return (
      <React.Fragment>
        <SignUp></SignUp>
      </React.Fragment>
    );
  }
}

export default Register;
