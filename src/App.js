import React from "react";
import TaskApp from "./components/TaskApp";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <Switch>
        
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />        
        <PrivateRoute path="/tasks" component={TaskApp} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
