import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </switch>
    </BrowserRouter>
  );
}

export default Routes;
