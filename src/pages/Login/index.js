import React, { Component } from "react";
import SingIn from "./signin";

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
        <SingIn>  </SingIn>
       </React.Fragment>
    );
  }
}

export default Login;
