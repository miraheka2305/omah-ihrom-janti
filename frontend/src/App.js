import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import UserMain from "./scenes/UserMain/UserMain";
import Login from "./admin/Login/Login";
import AdminMain from "./admin/AdminMain/AdminMain";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={UserMain} />
        <Route exact path="/about" component={UserMain} />
        <Route exact path="/products" component={UserMain} />
        <Route exact path="/contact" component={UserMain} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/admin-home" component={AdminMain} />
        <ProtectedRoute path="/profile" component={AdminMain} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    );
  }
}

export default withRouter(App);
