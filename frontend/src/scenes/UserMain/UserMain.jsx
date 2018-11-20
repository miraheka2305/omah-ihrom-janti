import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import ContactMe from "../ContactMe/ContactMe";

export default class UserMain extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    );
  }
}
