import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ManageProfile from "../ManageProfile/ManageProfile";
import ManageProduct from "../ManageProduct/ManageProduct";
export default class AdminMain extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ManageProduct} />
        <Route path="/profile" component={ManageProfile} />
      </Switch>
    );
  }
}
