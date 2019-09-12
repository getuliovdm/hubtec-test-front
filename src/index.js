import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { StoreProvider } from "easy-peasy";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <StoreProvider store={store}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
