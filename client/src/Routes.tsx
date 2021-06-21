import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
