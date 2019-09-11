import React, { Component } from "react";
import { SignIn } from "./signin";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    
  };

  handleLogin = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    
    return (
      <React.Fragment>
        <SignIn>  </SignIn>
       </React.Fragment>
    );
  }
}

export default Login;
